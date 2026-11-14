/* Read-only audit of trilingual semantic coverage across the three terms.
   Run with: node tools/audit-trilingual-meanings.cjs */
global.window = {};
const load = (p) => require(require('path').resolve(__dirname, '..', p));
[
  'website/term01-data.js',
  'website/term01-chapters-11-15.js',
  'website/term01-chapters-16-20.js',
  'website/term01-supplementary.js',
  'website/term02-data.js',
  'website/term02-lexicon-additions.js',
  'website/term03-data.js',
  'website/term03-lexicon-additions.js',
  'website/term03-matn-verbs.js',
  'website/semantic-meanings.js',
  'website/term01-semantic-additions.js',
  'website/term01-amr-verbs.js',
  'website/term02-proverbs.js',
  'website/term01-core-semantics.js',
  'website/term02-core-semantics.js',
  'website/term02-additional-semantics-01.js',
  'website/term02-additional-semantics-02.js',
  'website/term03-core-semantics.js'
].forEach(load);

const requiredCounts = [
  ['Term 01 imperatives', window.TERM1_AMR_COUNT, 18],
  ['Term 01 core meanings', window.TERM1_CORE_SEMANTICS_COUNT, 33],
  ['Term 02 proverbs', window.TERM2_PROVERBS_COUNT, 13],
  ['Term 02 core meanings', window.TERM2_CORE_SEMANTICS_COUNT, 68],
  ['Term 02 additional meanings batch 1', (window.TERM2_ADDITIONAL_SEMANTICS_BATCH1 || []).length, 29],
  ['Term 02 additional meanings batch 2', (window.TERM2_ADDITIONAL_SEMANTICS_BATCH2 || []).length, 30],
  ['Term 03 core meanings', window.TERM3_CORE_SEMANTICS_COUNT, 98]
];
for (const [label, actual, expected] of requiredCounts) {
  if (actual !== expected) throw new Error(label + ': expected ' + expected + ', got ' + actual);
}

const norm = (s) => String(s || '').normalize('NFC').replace(/[\u200c\sـ]/g, '').trim();
const books = {
  'Term 01': window.TERM1_DATA || [],
  'Term 02': window.TERM2_DATA || [],
  'Term 03': window.TERM3_DATA || []
};
const semantics = window.PERSIAN_SEMANTICS || {};
let total = 0, complete = 0;
for (const [term, rows] of Object.entries(books)) {
  const byWord = new Map();
  for (const row of rows) if (row.fa) byWord.set(norm(row.fa), row.fa);
  const missing = [];
  for (const [key, fa] of byWord) {
    const sem = rowSemantic(fa);
    if (sem) complete++;
    else missing.push(fa);
  }
  total += byWord.size;
  console.log(term + ': ' + (byWord.size - missing.length) + '/' + byWord.size + ' complete; ' + missing.length + ' missing');
  if (missing.length) console.log('  Missing examples: ' + missing.slice(0, 30).join('، ') + (missing.length > 30 ? ' …' : ''));
}
console.log('Total unique term/headword pairs: ' + total);
console.log('Complete trilingual semantic records: ' + complete);
function rowSemantic(fa) {
  const sem = semantics[fa];
  return !!(sem && sem.faMeaning && sem.enMeaning && sem.arMeaning);
}
