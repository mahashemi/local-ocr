/* FA Term 01 — everyday imperative reference, expanding the امر lesson in F1-07.
   The lesson's OCR explicitly includes requests such as «مدادت را به من بدهید» and «کتاب را به مدرسه ببر».
   These 18 common commands are a clearly labelled supplementary practice set. */
(()=> {
 const data = [
 ["بلند شدن","boland shodan","to get up; stand up","بلند شو","از جا بلند شو.","Az jā boland sho.","Get up."],
 ["نشستن","neshastan","to sit down","بنشین","اینجا بنشین.","Injā be-neshin.","Sit here."],
 ["آوردن","āvardan","to bring","بیاور","کتابت را بیاور.","Ketābat rā biyāvar.","Bring your book."],
 ["بردن","bordan","to take; carry","ببر","این کتاب را به کلاس ببر.","In ketāb rā be kelās bebar.","Take this book to class."],
 ["برگشتن","bargashtan","to return; come back","برگرد","زود برگرد.","Zud bargard.","Come back soon."],
 ["گذاشتن","gozāshtan","to put; place","بگذار","کتاب را روی میز بگذار.","Ketāb rā ru-ye miz bogzār.","Put the book on the table."],
 ["نگه داشتن","negah dāshtan","to keep; hold","نگه دار","این کاغذ را نگه دار.","In kāghaz rā negah dār.","Keep this paper."],
 ["گرفتن","gereftan","to take; get; receive","بگیر","این را از من بگیر.","In rā az man begir.","Take this from me."],
 ["دادن","dādan","to give; hand over","بده","لطفاً کتاب را به من بده.","Lotfan ketāb rā be man bedeh.","Please give me the book."],
 ["برداشتن","bardāshtan","to pick up; lift","بردار","کیفت را بردار.","Kif-at rā bardār.","Pick up your bag."],
 ["باز کردن","bāz kardan","to open","باز کن","در را باز کن.","Dar rā bāz kon.","Open the door."],
 ["بستن","bastan","to close; shut","ببند","در را ببند.","Dar rā beband.","Close the door."],
 ["روشن کردن","rowshan kardan","to turn on; switch on","روشن کن","چراغ را روشن کن.","Cherāgh rā rowshan kon.","Turn on the light."],
 ["خاموش کردن","khāmush kardan","to turn off; switch off","خاموش کن","تلویزیون را خاموش کن.","Televizion rā khāmush kon.","Turn off the television."],
 ["آمدن","āmadan","to come","بیا","اینجا بیا.","Injā biyā.","Come here."],
 ["رفتن","raftan","to go; leave","برو","به کلاس برو.","Be kelās برو.","Go to class."],
 ["ایستادن","istādan","to stand; stop","بایست","اینجا بایست.","Injā bāyest.","Stand here."],
 ["صبر کردن","sabr kardan","to wait; be patient","صبر کن","کمی صبر کن.","Kami sabr kon.","Wait a little."]
 ];
 const norm=s=>String(s||"").replace(/[\u200c\sـ]/g,"");
 const seen=new Set((window.TERM1_DATA||[]).map(x=>"7|"+norm(x.fa)));
 for(const [fa,tr,en,amr,exFa,exTr,exEn] of data){
  if(seen.has("7|"+norm(fa))) continue;
  window.TERM1_DATA.push({unit:7,source:"F1-07",fa,tr,en,pos:"فعل — verb",ms:fa,amr,ex:[exFa,exTr,exEn],m:[exFa,exTr,exEn],a:[exFa,exTr,exEn],note:"فعل امر پرکاربرد؛ مجموعهٔ تکمیلی برای تمرین ساخت امر در درس FA1-07."});
 }
 const S=window.PERSIAN_SEMANTICS||(window.PERSIAN_SEMANTICS={});
 const meanings={
 "بلند شدن":["از حالت نشسته یا خوابیده برخاستن و روی پا ایستادن.","To rise from a sitting or lying position; to get up or stand.","نهضَ من جلوسه أو نومه ووقف على قدميه.","بلند شو","boland sho","Get up."],
 "نشستن":["قرار گرفتن روی صندلی، زمین یا جای دیگر در حالت نشسته.","To move into or remain in a seated position.","جلسَ واتخذَ وضعَ الجلوس على كرسيّ أو أرض أو غيرهما.","بنشین","be-neshin","Sit down."],
 "آوردن":["چیزی یا کسی را به سوی گوینده یا مکان موردنظر منتقل کردن.","To bring something or someone towards the speaker or a specified place.","جاءَ بشيءٍ أو شخصٍ إلى المتكلّم أو إلى المكان المقصود.","بیاور","biyāvar","Bring it."],
 "بردن":["چیزی یا کسی را از اینجا به مکان دیگری منتقل کردن.","To take or carry something or someone to another place.","نقلَ شيئاً أو شخصاً من هنا إلى مكانٍ آخر.","ببر","bebar","Take it."],
 "برگشتن":["پس از دور شدن، دوباره به مکان یا وضعیت پیشین آمدن.","To return to a place or state after having left it.","عادَ إلى مكانٍ أو حالةٍ سابقة بعد الابتعاد عنها.","برگرد","bargard","Come back."],
 "گذاشتن":["چیزی را در مکان یا موقعیتی قرار دادن.","To put or place something somewhere.","وضعَ شيئاً في مكانٍ أو موضعٍ معيّن.","بگذار","bogzār","Put it down."],
 "نگه داشتن":["چیزی را حفظ کردن یا در دست و اختیار خود باقی گذاشتن.","To keep, retain, or hold something rather than letting it go.","احتفظَ بشيءٍ أو أمسكه ولم يتركه.","نگه دار","negah dār","Keep it."],
 "گرفتن":["چیزی را دریافت کردن، به دست آوردن یا با دست مهار کردن.","To receive, obtain, catch, or take hold of something.","أخذَ شيئاً أو تسلّمه أو أمسكه بيده.","بگیر","begir","Take it."],
 "دادن":["چیزی را به شخص دیگری سپردن یا در اختیار او قرار دادن.","To give or hand something to another person.","أعطى شيئاً لشخصٍ آخر أو ناوله إيّاه.","بده","bedeh","Give it."],
 "برداشتن":["چیزی را از سطحی بلند کردن یا با خود بردن.","To pick something up from a surface or take it away.","رفعَ شيئاً عن سطحٍ أو أخذه معه.","بردار","bardār","Pick it up."],
 "باز کردن":["بسته یا پوشیده‌ای را گشودن؛ مانند در، پنجره یا بسته.","To open something that is closed or covered, such as a door, window, or package.","فتحَ شيئاً مغلقاً أو مغطّى، كالباب أو النافذة أو الطرد.","باز کن","bāz kon","Open it."],
 "بستن":["چیزی را از حالت باز به حالت بسته درآوردن.","To close or shut something that is open.","أغلقَ شيئاً مفتوحاً.","ببند","beband","Close it."],
 "روشن کردن":["وسیله یا چراغی را فعال کردن تا کار کند یا نور بدهد.","To switch on a device or light so that it operates or produces light.","شغّلَ جهازاً أو مصباحاً ليعمل أو يضيء.","روشن کن","rowshan kon","Turn it on."],
 "خاموش کردن":["وسیله یا چراغی را از کار انداختن یا نور آن را قطع کردن.","To switch off a device or light; to extinguish it.","أطفأَ جهازاً أو مصباحاً وأوقف عمله أو ضوءه.","خاموش کن","khāmush kon","Turn it off."],
 "آمدن":["از جای دیگر به سوی گوینده یا مکان موردنظر حرکت کردن.","To come towards the speaker or a specified place.","جاءَ متّجهاً نحو المتكلّم أو المكان المقصود.","بیا","biyā","Come."],
 "رفتن":["از مکان کنونی به سوی مکان دیگری حرکت کردن.","To go or move from the current place to another.","ذهبَ أو انتقلَ من المكان الحالي إلى مكانٍ آخر.","برو","boro","Go."],
 "ایستادن":["روی پا قرار گرفتن یا حرکت را متوقف کردن.","To stand on one's feet or stop moving.","وقفَ على قدميه أو توقّف عن الحركة.","بایست","bāyest","Stand still."],
 "صبر کردن":["با آرامش منتظر ماندن یا در برابر دشواری شکیبایی نشان دادن.","To wait patiently or show patience in a difficult situation.","صبرَ وانتظر بهدوء أو تحمّل المشقّة.","صبر کن","sabr kon","Wait." ]
 };
 for(const [fa,v] of Object.entries(meanings)) S[fa]={faMeaning:v[0],enMeaning:v[1],arMeaning:v[2],faSynonyms:[],enSynonyms:[],arSynonyms:[],contextNote:"صورت امر در فهرست فعل‌های پرکاربرد درس ۱، واحد ۷ آمده است."};
})();