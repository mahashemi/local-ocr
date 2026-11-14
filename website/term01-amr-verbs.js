/* FA Term 01 — everyday imperative reference, expanding the امر lesson in F1-07.
   The lesson's OCR explicitly includes requests such as «مدادت را به من بدهید» and «کتاب را به مدرسه ببر».
   These 18 common commands are a clearly labelled supplementary practice set. */
(()=> {
 const data = [
 ["بلند شدن","boland shodan","to get up; stand up","بلند شو","بلند شدن از خواب در آغاز روز مفید است.","Boland shodan az khāb dar āghāz-e ruz mofid ast.","Getting up at the start of the day is beneficial.","از جا بلند شو.","Az jā boland sho.","Get up."],
 ["نشستن","neshastan","to sit down","بنشین","نشستن در جای مناسب به نظم کلاس کمک می‌کند.","Neshastan dar jā-ye monāseb be nazm-e kelās komak mikonad.","Sitting in the proper place helps maintain classroom order.","اینجا بنشین.","Injā be-neshin.","Sit here."],
 ["آوردن","āvardan","to bring","بیاور","آوردن کتاب به کلاس ضروری است.","Āvardan-e ketāb be kelās zaruri ast.","Bringing the book to class is necessary.","کتابت را بیاور.","Ketābat rā biyāvar.","Bring your book."],
 ["بردن","bordan","to take; carry","ببر","بردن کتاب به کتابخانه کار ساده‌ای است.","Bordan-e ketāb be ketābkhāne kār-e sāde-i ast.","Taking the book to the library is simple.","این کتاب را به کلاس ببر.","In ketāb rā be kelās bebar.","Take this book to class."],
 ["برگشتن","bargashtan","to return; come back","برگرد","برگشتن به خانه پس از کلاس معمول است.","Bargashtan be khāne pas az kelās ma'mul ast.","Returning home after class is usual.","زود برگرد.","Zud bargard.","Come back soon."],
 ["گذاشتن","gozāshtan","to put; place","بگذار","گذاشتن کتاب روی میز کار ساده‌ای است.","Gozāshtan-e ketāb ru-ye miz kār-e sāde-i ast.","Putting the book on the table is simple.","کتاب را روی میز بگذار.","Ketāb rā ru-ye miz bogzār.","Put the book on the table."],
 ["نگه داشتن","negah dāshtan","to keep; hold","نگه دار","نگه داشتن رسید برای پیگیری لازم است.","Negah dāshtan-e resid barāye peygiri lāzem ast.","Keeping the receipt is necessary for follow-up.","این کاغذ را نگه دار.","In kāghaz rā negah dār.","Keep this paper."],
 ["گرفتن","gereftan","to take; get; receive","بگیر","گرفتن نوبت پیش از مراجعه مفید است.","Gereftan-e nobat pish az morāje'e mofid ast.","Getting an appointment before visiting is useful.","این را از من بگیر.","In rā az man begir.","Take this from me."],
 ["دادن","dādan","to give; hand over","بده","دادن کتاب به دوست کار خوبی است.","Dādan-e ketāb be dust kār-e khubi ast.","Giving a book to a friend is a good thing.","لطفاً کتاب را به من بده.","Lotfan ketāb rā be man bedeh.","Please give me the book."],
 ["برداشتن","bardāshtan","to pick up; lift","بردار","برداشتن کیف از روی زمین آسان است.","Bardāshtan-e kif az ru-ye zamin āsān ast.","Picking up the bag from the floor is easy.","کیفت را بردار.","Kif-at rā bardār.","Pick up your bag."],
 ["باز کردن","bāz kardan","to open","باز کن","باز کردن پنجره هوا را تازه می‌کند.","Bāz kardan-e panjare havā rā tāze mikonad.","Opening the window refreshes the air.","در را باز کن.","Dar rā bāz kon.","Open the door."],
 ["بستن","bastan","to close; shut","ببند","بستن در پس از خروج ضروری است.","Bastan-e dar pas az khoruj zaruri ast.","Closing the door after leaving is necessary.","در را ببند.","Dar rā beband.","Close the door."],
 ["روشن کردن","rowshan kardan","to turn on; switch on","روشن کن","روشن کردن چراغ در تاریکی لازم است.","Rowshan kardan-e cherāgh dar tariki lāzem ast.","Turning on the light is necessary in the dark.","چراغ را روشن کن.","Cherāgh rā rowshan kon.","Turn on the light."],
 ["خاموش کردن","khāmush kardan","to turn off; switch off","خاموش کن","خاموش کردن چراغ هنگام خروج در مصرف برق صرفه‌جویی می‌کند.","Khāmush kardan-e cherāgh hengām-e khoruj dar masraf-e barq sarfejuyi mikonad.","Turning off the light when leaving saves electricity.","تلویزیون را خاموش کن.","Televizion rā khāmush kon.","Turn off the television."],
 ["آمدن","āmadan","to come","بیا","آمدن به‌موقع احترام به دیگران است.","Āmadan be-moqe' ehterām be digarān ast.","Arriving on time shows respect for others.","اینجا بیا.","Injā biyā.","Come here."],
 ["رفتن","raftan","to go; leave","برو","رفتن به کلاس بخشی از برنامهٔ روزانه است.","Raftan be kelās bakhshi az barnāme-ye ruzāne ast.","Going to class is part of the daily routine.","به کلاس برو.","Be kelās boro.","Go to class."],
 ["ایستادن","istādan","to stand; stop","بایست","ایستادن در صف نشانهٔ رعایت نوبت است.","Istādan dar saf neshāne-ye re'āyat-e nobat ast.","Standing in line shows respect for the queue.","اینجا بایست.","Injā bāyest.","Stand here."],
 ["صبر کردن","sabr kardan","to wait; be patient","صبر کن","صبر کردن هنگام انتظار لازم است.","Sabr kardan hengām-e entezār lāzem ast.","Being patient while waiting is necessary.","کمی صبر کن.","Kami sabr kon.","Wait a little."]
 ];
 const norm=s=>String(s||"").replace(/[\\u200c\\sـ]/g,"");
 const existingRows=window.TERM1_DATA||[];
 const seen=new Set(existingRows.filter(x=>x.unit===7).map(x=>"7|"+norm(x.fa)));
 let added=0, alreadyPresent=0;
 const existingForms=[];
 for(const [fa,tr,en,amr,mf,mt,me,af,at,ae] of data){
  const key="7|"+norm(fa);
  if(seen.has(key)){
   const prior=existingRows.find(x=>x.unit===7 && norm(x.fa)===norm(fa));
   if(!prior) throw new Error("Could not locate existing Term 01 entry: "+fa);
   prior.ms=prior.ms||fa;
   prior.amr=prior.amr||amr;
   prior.m=prior.m||[mf,mt,me];
   prior.a=prior.a||[af,at,ae];
   existingForms.push(fa);
   alreadyPresent++;
   continue;
  }
  window.TERM1_DATA.push({unit:7,source:"F1-07",fa,tr,en,pos:"فعل — verb",ms:fa,amr,ex:[mf,mt,me],m:[mf,mt,me],a:[af,at,ae],note:"فعل امر پرکاربرد؛ مجموعهٔ تکمیلی برای تمرین ساخت امر در درس FA1-07."});
  seen.add(key);
  added++;
 }
 window.TERM1_AMR_COUNT=data.length;
 window.TERM1_AMR_ADDED_COUNT=added;
 window.TERM1_AMR_EXISTING_COUNT=alreadyPresent;
 window.TERM1_AMR_EXISTING_FORMS=existingForms;
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