/* Cross-term verb reference: only explicitly curated forms are shown as verified. */
(()=> {
 let mode="table",index=0,flipped=false,term="all",query="";
 const $=s=>v.querySelector(s);
 const norm=s=>String(s||"").toLowerCase();
 const sameForm=(x)=>!!(x.ms&&x.amr&&String(x.ms).trim()===String(x.amr).trim());
 const curated=()=>all().filter(x=>x.ms||x.amr).map(x=>sameForm(x)?({...x,needsReview:true,formProblem:"Masdar and imperative are identical; verify the imperative."}):x);
 const candidates=()=>all().filter(x=>x.bk<3&&!x.ms&&!x.amr&&/(کردن|شدن|دادن|گرفتن|رفتن|آمدن|آوردن|زدن|گذاشتن|بردن|خوردن|کشیدن|ماندن|ساختن|نوشتن|خواندن)$/.test(x.fa||""));
 const rows=()=>{const known=curated(),ids=new Set(known.map(x=>x.id));return known.concat(candidates().filter(x=>!ids.has(x.id)).map(x=>({...x,needsReview:true})))};
 const semantics=(x)=>{const z=x.sem||((window.PERSIAN_SEMANTICS||{})[x.fa]);if(!z)return "";const chips=a=>Array.isArray(a)&&a.length?a.map(v=>"<span>"+esc(v)+"</span>").join(""):"";return '<details class="verb-detail"><summary>Trilingual meaning</summary><div class="verb-example"><b>فارسی</b><div class="fa">'+esc(z.faMeaning||"")+'</div>'+chips(z.faSynonyms)+'</div><div class="verb-example"><b>English</b><div>'+esc(z.enMeaning||x.en||"")+'</div>'+chips(z.enSynonyms)+'</div><div class="verb-example"><b>العربية</b><div class="fa">'+esc(z.arMeaning||"")+'</div>'+chips(z.arSynonyms)+'</div>'+(z.contextNote?'<small>'+esc(z.contextNote)+'</small>':"")+'</details>'};
 const esc=s=>{const d=document.createElement("div");d.textContent=s??"";return d.innerHTML};
 const example=(label,x)=>x&&x[0]?'<div class="verb-example"><b>'+label+'</b><div class="fa">'+esc(x[0])+'</div><div class="tr">'+esc(x[1]||"")+'</div><small>'+esc(x[2]||"")+'</small></div>':"";
 function list(){return rows().filter(x=>(term==="all"||String(x.bk)===term)&&(!query||[x.fa,x.tr,x.en,x.source].some(z=>norm(z).includes(norm(query))))).sort((a,b)=>a.bk-b.bk||a.ch-b.ch||a.fa.localeCompare(b.fa,"fa"))}
 function renderTable(){
  const data=list();
  v.innerHTML='<section class="verb-space"><div class="verb-hero"><div class="eyebrow">CROSS-TERM GRAMMAR COLLECTION</div><h2>گنجینهٔ فعل‌ها</h2><p>One growing reference for every verb you learn. Compare the infinitive, masdar and imperative, then study how each form is used in a real sentence.</p><div class="verb-stats"><span><b>'+curated().filter(x=>!x.needsReview).length+'</b> verified-form entries</span><span><b>'+curated().filter(x=>x.needsReview).length+candidates().length+'</b> entries needing review</span></div></div><div class="verb-toolbar"><input id="verbSearch" type="search" placeholder="Search Persian, transliteration or meaning…" value="'+esc(query)+'"><select id="verbTerm"><option value="all">All terms</option><option value="1">Term 01</option><option value="2">Term 02</option><option value="3">Term 03</option></select><button class="pri" id="verbCards">Study flashcards</button></div><div class="mut">'+data.length+' results · curated entries are shown separately from candidates that still need grammar review.</div><div class="verb-table-wrap"><table class="verb-table"><thead><tr><th>Term / source</th><th>Verb</th><th>Masdar</th><th>Amr</th><th>Meaning</th></tr></thead><tbody>'+data.map(x=>'<tr class="'+(x.needsReview?'needs-review':'')+'"><td><small>T'+x.bk+' · '+esc(x.source||"")+'</small></td><td><span class="fa">'+esc(x.fa)+'</span><small class="tr">'+esc(x.tr||"")+'</small></td><td><span class="fa">'+esc(x.ms||"—")+'</span></td><td><span class="fa">'+esc(x.amr||"—")+'</span>'+(x.formProblem?'<small class="review-tag">Same as masdar · check</small>':"")+'</td><td>'+esc(x.en||"")+(x.needsReview?'<small class="review-tag">Needs grammar review</small>':'<details class="verb-detail"><summary>Examples and notes</summary>'+example("Masdar example",x.m)+example("Imperative example",x.a)+(x.note?'<p class="mut">'+esc(x.note)+'</p>':"")+'</details>')+semantics(x)+'</td></tr>').join("")+'</tbody></table></div><div class="verb-foot"><button id="verbBack">← Back to terms</button><span class="mut">The master collection grows as each term is curated.</span></div></section>';
  $("#verbTerm").value=term;
  $("#verbSearch").oninput=e=>{query=e.target.value;renderTable();const el=$("#verbSearch");el.focus();el.setSelectionRange(query.length,query.length)};
  $("#verbTerm").onchange=e=>{term=e.target.value;renderTable()};
  $("#verbCards").onclick=()=>{mode="cards";index=0;flipped=false;renderCards()};
  $("#verbBack").onclick=()=>{term="all";query="";document.getElementById("termNav").hidden=true;window.gotoTab("portal")};
 }
 function renderCards(){
  let deck=curated().filter(x=>(term==="all"||String(x.bk)===term)&&(!query||[x.fa,x.tr,x.en].some(z=>norm(z).includes(norm(query)))));
  if(!deck.length){v.innerHTML='<section class="verb-space"><p>No curated verbs match this selection yet.</p><button id="verbTable">Back to table</button></section>';$("#verbTable").onclick=()=>{mode="table";renderTable()};return}
  if(index>=deck.length)index=0;
  const x=deck[index];
  v.innerHTML='<section class="verb-space"><div class="verb-hero"><div class="eyebrow">VERB FLASHCARDS · T'+x.bk+'</div><h2>فعل‌ها را به خاطر بسپار</h2><p>'+ (index+1)+' / '+deck.length+' · Select the card to reveal the forms and examples.</p></div><div class="verb-flashcard"><div class="fa">'+esc(x.fa)+'</div><div class="tr">'+esc(x.tr||"")+'</div>'+(flipped?'<div class="verb-answer"><p>'+esc(x.en||"")+'</p>'+semantics(x)+'<div class="verb-form"><b>مصدر · Masdar</b><span class="fa">'+esc(x.ms||"—")+'</span></div><div class="verb-form"><b>امر · Amr</b><span class="fa">'+esc(x.amr||"—")+'</span></div>'+example("Masdar example",x.m)+example("Imperative example",x.a)+(x.note?'<p class="mut">'+esc(x.note)+'</p>':"")+'</div>':'<small>Tap to reveal</small>')+'</div><div class="row"><button id="verbFlip" class="pri">'+(flipped?'↩ Flip back':'Flip · Reveal forms')+'</button><button id="verbPrev">← Previous</button><button id="verbNext" class="pri">Next →</button><button id="verbShuffle">Shuffle</button></div><div class="row"><button id="verbKnown" class="'+(done.has(x.id)?"on":"")+'">'+(done.has(x.id)?"✓ Memorised":"Mark memorised")+'</button><button id="verbToTable">Master table</button></div><p class="mut">Progress: '+deck.filter(z=>done.has(z.id)).length+' / '+deck.length+' memorised</p></section>';
  $("#verbFlip").onclick=()=>{flipped=!flipped;renderCards()};
  $("#verbPrev").onclick=()=>{index=(index-1+deck.length)%deck.length;flipped=false;renderCards()};
  $("#verbNext").onclick=()=>{index=(index+1)%deck.length;flipped=false;renderCards()};
  $("#verbShuffle").onclick=()=>{const old=deck[index];deck=deck.slice().sort(()=>Math.random()-.5);index=Math.max(0,deck.findIndex(z=>z.id===old.id));flipped=false;renderCards()};
  $("#verbKnown").onclick=()=>{done.has(x.id)?done.delete(x.id):done.add(x.id);saveDone();renderCards()};
  $("#verbToTable").onclick=()=>{mode="table";renderTable()};
 }
 window.verbTreasury=()=>{mode="table";renderTable()};
})();