const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
global.window = global;
require(path.join(root, 'website/term02-data.js'));
require(path.join(root, 'website/term02-lexicon-additions.js'));
require(path.join(root, 'website/term02-khulasa.js'));
require(path.join(root, 'website/term02-writing.js'));
const fail = [];
const assert = (ok, message) => { if (!ok) fail.push(message); };
const expected = [];
for (const p of ['FA2','KH2']) for (let i=1;i<=20;i++) expected.push(p+'-'+String(i).padStart(2,'0'));
for (const p of ['N2','SH2']) for (let i=1;i<=10;i++) expected.push(p+'-'+String(i).padStart(2,'0'));
const sourceDir = path.join(root,'study-materials/dars/term-02');
const files = fs.readdirSync(sourceDir).filter(n => /^(T2_(FA2|KH2)_\d{2}|T2_(N2|SH2)_\d{2})-.*\.txt$/.test(n));
assert(files.length===60, 'Expected 60 Term 02 source files; found '+files.length);
const rows = global.TERM2_DATA || [];
assert(rows.length>=380, 'Expected at least 380 source-linked vocabulary rows; found '+rows.length);
const seen = new Set(rows.map(x=>x.source));
for (const id of expected) assert(seen.has(id), 'Missing vocabulary coverage for '+id);
const persian = /[\u0600-\u06ff]/;
let verbs=0, nonverbs=0;
for (const x of rows) {
  assert(Number.isInteger(x.unit) && x.unit>=1 && x.unit<=20, 'Invalid unit for '+x.fa);
  assert(Array.isArray(x.units) && x.units.includes(x.unit), 'Missing primary unit mapping for '+x.fa);
  assert(x.fa && x.tr && x.en && x.pos, 'Missing core field for '+x.fa);
  assert(!persian.test(x.tr||''), 'Persian-script transliteration for '+x.fa);
  if (/فعل|اصطلاح فعلی/.test(x.pos||'')) {
    verbs++;
    assert(x.ms && x.amr && Array.isArray(x.m) && x.m.length===3, 'Missing masdar data for '+x.fa);
    assert(x.amr==='—' || (Array.isArray(x.a) && x.a.length===3), 'Missing imperative example for '+x.fa);
    if (x.amr==='—') assert(!!x.note, 'No-amr verb needs an explanatory note for '+x.fa);
    if (x.amr!=='—') {
      assert(x.m[0].includes(x.ms), 'Masdar example mismatch for '+x.fa);
      assert(x.a[0].includes(x.amr), 'Imperative example mismatch for '+x.fa);
      assert(x.ms!==x.amr, 'Masdar and imperative collide for '+x.fa);
      assert(!persian.test(x.m[1]||'')&&!persian.test(x.a[1]||''), 'Persian-script verb transliteration for '+x.fa);
    }
  } else {
    nonverbs++;
    assert(Array.isArray(x.ex)&&x.ex.length===3&&x.ex.every(Boolean), 'Incomplete trilingual example for '+x.fa);
    assert(!persian.test(x.ex[1]||''), 'Persian-script example transliteration for '+x.fa);
  }
}
assert(verbs>=180, 'Expected at least 180 grammar-checked Term 02 verbs; found '+verbs);
assert((global.TERM2_KHULASA||[]).length===20, 'Expected 20 Term 02 Khulasa summaries');
for (const x of global.TERM2_KHULASA||[]) assert(x.lines.length>=5&&x.lines.length<=6, 'Khulasa must have 5–6 lines: '+x.ch);
const khFold = t => String(t).normalize('NFD').replace(/[\u0300-\u036f\u064b-\u065f\u0670\u200c]/g,'').replace(/\u06c0/g,'\u0647').replace(/\u064a/g,'\u06cc').replace(/\u0643/g,'\u06a9').toLowerCase().replace(/[^a-z0-9\u0600-\u06ff]/g,'').replace(/ee/g,'i').replace(/oo/g,'u').replace(/u/g,'o').replace(/w/g,'v').replace(/gh/g,'q');
const cleanKh = t => khFold(String(t).replace(/[،؛؟۔,.;:!?«»()[\]{}…]/g,''));
const vocabKeys = new Set(rows.map(x=>cleanKh(x.fa)));
const maxWords = Math.max(1,...rows.map(x=>String(x.fa).trim().split(/\s+/).length));
function hasLinkedWord(line) {
  const parts=String(line).split(/(\s+)/);
  for(let p=0;p<parts.length;) {
    if(/^\s+$/.test(parts[p])) { p++; continue; }
    let found=false;
    for(let n=Math.min(maxWords,Math.floor((parts.length-p+1)/2));n>=1;n--) {
      const end=p+n*2-1;
      if(end>parts.length) continue;
      if(vocabKeys.has(cleanKh(parts.slice(p,end).join('')))) { found=true; break; }
    }
    if(found) return true;
    p++;
  }
  return false;
}
for (const x of global.TERM2_KHULASA||[]) for(let i=0;i<x.lines.length;i++) assert(hasLinkedWord(x.lines[i]), 'Khulasa line lacks linked vocabulary: chapter '+x.ch+', line '+(i+1));
assert((global.TERM2_WRITING?.chapters||[]).length===20, 'Expected 20 writing prompts');
assert((global.TERM2_SPEECHES||[]).length===20, 'Expected 20 speech prompts');
for (const x of global.TERM2_SPEECHES||[]) assert(/[0-9۰-۹٠-٩]{1,3}[:：][0-9۰-۹٠-٩]{1,3}/.test(x.verse||''), 'Missing explicit Quran reference in speech '+x.ch);
const kh = fs.readFileSync(path.join(root,'website/term02-khulasa.js'),'utf8');
assert(kh.includes('[[QURAN:5:32|'), 'Missing explicit source Quran reference marker (5:32)');
const index = fs.readFileSync(path.join(root,'website/index.html'),'utf8');
for (const x of ['term02-data.js','term02-lexicon-additions.js','term02-khulasa.js','term02-writing.js','data-word-id','khWordModal','Escape','target="_blank"','rel="noopener noreferrer"','QuranMemorizer/#/surah/','cleanKh','term2=new Map()']) assert(index.includes(x), 'Missing UI integration: '+x);
const portal = fs.readFileSync(path.join(root,'website/term-portal.js'),'utf8');
assert(portal.includes('TERM2_WRITING'), 'Term 02 writing page is not connected to term navigation');
assert(rows.some(x=>x.source==='N2-03'&&x.units.includes(6)), 'Expected N2-03 hospital vocabulary cross-linked to FA2-06');
assert(rows.some(x=>x.source==='N2-04'&&x.units.includes(12)), 'Expected N2-04 historical-site vocabulary cross-linked to FA2-12');
assert(rows.some(x=>x.source==='KH2-03'&&x.units.includes(11)), 'Expected KH2-03 traditional-game vocabulary cross-linked to FA2-11');
assert(rows.some(x=>x.source==='KH2-12'&&x.units.includes(14)), 'Expected KH2-12 flight-delay vocabulary cross-linked to FA2-14');
assert(rows.some(x=>x.source==='N2-06'&&x.units.includes(14)), 'Expected N2-06 Newestan travel vocabulary cross-linked to FA2-14');
if (fail.length) { console.error('Term 02 audit failed:'); for (const x of fail) console.error(' - '+x); process.exit(1); }
console.log('Term 02 audit passed: '+files.length+' source files; '+rows.length+' vocabulary rows; '+seen.size+'/60 source IDs; '+verbs+' verbs; '+nonverbs+' non-verbs; 20 Khulasa; 20 writing prompts; 20 speeches.');
