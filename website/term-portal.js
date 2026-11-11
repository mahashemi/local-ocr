/* Three-term portal and shared progress dashboard. */
(function(){
 const $id=id=>document.getElementById(id);
 function updateStats(){
  const a=all(),d=a.filter(x=>done.has(x.id)).length,p=a.length?Math.round(d*100/a.length):0;
  $id("overallDone").textContent=d.toLocaleString();
  $id("overallWords").textContent=a.length.toLocaleString();
  $id("overallBar").style.width=p+"%";
  $id("overallPercent").textContent=p+"% memorised";
  $id("termProgressMini").textContent=[1,2,3].map(b=>"T"+b+" "+a.filter(x=>x.bk===b).length.toLocaleString()).join(" · ")+" words";
 }
 function portal(){
  const a=all(),d=a.filter(x=>done.has(x.id)).length;
  const data=[
   {b:1,no:"TERM 01",name:"Term One",sub:"Build the foundations of Persian",desc:"Foundational vocabulary and essential structures",theme:"t1"},
   {b:2,no:"TERM 02",name:"Term Two",sub:"Strengthen grammar and expression",desc:"Your established vocabulary and grammar collection",theme:"t2"},
   {b:3,no:"TERM 03",name:"Term Three",sub:"Read, write, speak and think in Persian",desc:"Farsi Umumi · Khwandan · Newestan · Shunidan",theme:"t3"}
  ];
  v.innerHTML='<section class="portal-intro"><div class="eyebrow">YOUR PERSIAN LEARNING LIBRARY</div><h2>Choose your term. Continue your journey.</h2><p>Every term has its own vocabulary, practice tools and learning activities. Your memorisation progress is tracked across the whole collection.</p></section><div class="term-grid">'+data.map(t=>{
   const list=a.filter(x=>x.bk===t.b),mem=list.filter(x=>done.has(x.id)).length,p=list.length?Math.round(mem*100/list.length):0;
   return '<button class="term-entry '+t.theme+'" data-enter="'+t.b+'"><span class="term-no">'+t.no+'</span><span class="term-name">'+t.name+'</span><span class="term-sub">'+t.sub+'</span><div class="term-stats"><span>'+list.length.toLocaleString()+' words</span><span>'+mem.toLocaleString()+' memorised</span></div><div class="bar"><i style="width:'+p+'%"></i></div><span class="term-cta">'+(t.b===1&&!list.length?"Explore term →":"Enter term →")+'</span></button>';
  }).join('')+'</div><div class="portal-summary"><span><b>'+a.length.toLocaleString()+'</b> total vocabulary entries</span><span><b>'+d.toLocaleString()+'</b> memorised</span><span><b>'+(a.length?Math.round(d*100/a.length):0)+'%</b> overall progress</span></div>';
  v.querySelectorAll("[data-enter]").forEach(btn=>btn.onclick=()=>enterTerm(Number(btn.dataset.enter)));
 }
 window.updateGlobalStats=updateStats;
 function enterTerm(b){
  activeTerm=b;bkSel.value=String(b);fillCh();chSel.value="all";
  $id("termNav").hidden=false;$id("activeTermTitle").textContent="TERM 0"+b+(b===3?" · PERSIAN":"");
  document.querySelectorAll('#termTabs [data-t="essays"],#termTabs [data-t="speeches"],#termTabs [data-t="khulasa"]').forEach(x=>x.hidden=b!==3);
  gotoTab("home");
 }
 function back(){
  activeTerm=null;tab="portal";bkSel.value="all";fillCh();$id("termNav").hidden=true;render();
 }
 const originalHome=home;
 window.home=function(){
  originalHome();
  const title=activeTerm===1?"Term One":activeTerm===2?"Term Two":"Term Three · Persian";
  const description=activeTerm===3?"Farsi Umumi, Khwandan, Newestan and Shunidan are brought together here. Each Farsi Umumi chapter includes a learning summary, linked lesson vocabulary, and dedicated writing and speaking practice.":activeTerm===2?"Continue your established Term 02 vocabulary, grammar and memorisation work. Your existing learning progress is preserved.":"The Term 01 learning collection is ready to be populated as its source materials are added.";
  const sourceCounts=activeTerm===3?["FA3","KH3","N3","SH3"].map(code=>({code,count:all().filter(x=>x.bk===3&&(x.sources||[x.source]).some(src=>String(src||"").startsWith(code+"-"))).length})): [];
  const sourceLine=sourceCounts.length?'<div class="source-coverage">'+sourceCounts.map(x=>'<span><b>'+x.code+'</b><small>'+x.count+' words</small></span>').join("")+'</div>':"";
  v.insertAdjacentHTML("afterbegin",'<section class="term-welcome"><h2>'+title+'</h2><p>'+description+'</p>'+sourceLine+'</section>');
 };
 window.render=function(){
  if(tab==="portal")portal();
  else if(tab==="home")home();
  else if(tab==="cards")cards();
  else if(tab==="quiz")startQuiz();
  else if(tab==="khulasa")khulasa();
  else if(tab==="essays")essays();
  else if(tab==="speeches")speeches();
  updateStats();
 };
 window.gotoTab=function(t){
  tab=t;document.querySelectorAll("[data-t]").forEach(x=>x.classList.toggle("on",x.dataset.t===t));
  bkSel.hidden=true;chSel.hidden=!["cards","quiz","khulasa"].includes(t);
  deck=[];idx=0;flip=false;render();
 };
 document.querySelectorAll("[data-t]").forEach(b=>b.onclick=()=>gotoTab(b.dataset.t));
 $id("backTerms").onclick=back;
 chSel.onchange=()=>{deck=[];idx=0;flip=false;render()};
 bkSel.hidden=true;chSel.hidden=true;$id("termNav").hidden=true;
 render();updateStats();
})();