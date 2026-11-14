/* Term 02 additional vocabulary — semantic batch 7. */
(()=> {
 const S=window.PERSIAN_SEMANTICS||(window.PERSIAN_SEMANTICS={});
 const rows={
 "کم کردن":["مقدار، اندازه یا شدت چیزی را کمتر کردن.","To reduce or decrease an amount, size, or intensity.","قلّلَ كمية شيء أو حجمه أو شدّته."],
 "عطر زدن":["مقداری عطر یا ادکلن روی بدن یا لباس استفاده کردن.","To apply perfume or cologne to the body or clothing.","وضعَ العطر أو ماء الكولونيا على الجسم أو الملابس."],
 "ترک کردن":["از مکانی رفتن یا کاری، عادت یا رابطه‌ای را ادامه ندادن.","To leave a place, or to stop doing a task, habit, or relationship.","تركَ مكاناً أو توقّفَ عن ممارسة عمل أو عادة أو الاستمرار في علاقة."],
 "ارتباط برقرار کردن":["با فرد یا گروهی تماس و پیوند ایجاد کردن و با آن‌ها ارتباط داشتن.","To establish contact or communication with a person or group.","أقامَ اتصالاً أو تواصلاً مع شخص أو جماعة."],
 "هدیه دادن":["چیزی را بدون دریافت پول، به نشانهٔ محبت یا احترام به دیگری بخشیدن.","To give something to another person as a present, without payment.","قدّمَ شيئاً إلى شخص آخر هديةً من دون مقابل."],
 "اختراع کردن":["وسیله، روش یا ایده‌ای تازه را برای نخستین بار طراحی و ایجاد کردن.","To invent or create a new device, method, or idea for the first time.","اخترعَ أو ابتكرَ جهازاً أو طريقةً أو فكرةً جديدة."],
 "صدمه زدن":["به جسم، سلامت یا احساس کسی آسیب وارد کردن.","To cause physical, health-related, or emotional harm to someone or something.","ألحقَ ضرراً بجسم شخص أو صحته أو مشاعره."],
 "پنهان شدن":["خود را از دید دیگران دور کردن تا دیده یا پیدا نشدن.","To hide oneself so that other people cannot see or find you.","اختبأَ وجعلَ نفسه بعيداً عن أنظار الآخرين كي لا يروه أو يعثروا عليه."],
 "فرار کردن":["برای دور شدن از خطر، گرفتاری یا تعقیب، با سرعت از جایی گریختن.","To escape or run away from danger, trouble, or pursuit.","هربَ مسرعاً للابتعاد عن خطر أو مأزق أو ملاحقة."],
 "ارسال کردن":["چیزی مانند نامه، پیام یا کالا را به سوی گیرنده یا مقصد فرستادن.","To send something, such as a letter, message, or item, to a recipient or destination.","أرسلَ شيئاً كرسالة أو طرد أو بضاعة إلى المستلِم أو الوجهة."],
 "خم شدن":["بدن یا بخشی از آن را از حالت راست به سمت پایین یا جلو متمایل کردن.","To bend one's body or a body part downward or forward.","انحنى بجسمه أو بجزء منه إلى الأسفل أو الأمام."],
 "جارو کردن":["با جارو گردوخاک و زباله‌های روی زمین را جمع و پاک کردن.","To sweep dust and rubbish from a floor using a broom.","كنسَ الغبار والنفايات عن الأرض باستعمال المكنسة."],
 "خوشامد گفتن":["با گفتار یا رفتار دوستانه ورود یا حضور کسی را گرامی داشتن.","To welcome someone through friendly words or actions.","رحّبَ بشخص وأظهرَ سروره بقدومه أو حضوره بالكلام أو الفعل."],
 "سقوط کردن":["از جای بلند به سمت پایین افتادن یا ناگهان از موقعیت خود پایین آمدن.","To fall from a higher place, or to drop suddenly from one's position.","سقطَ من مكان مرتفع إلى الأسفل أو هبطَ فجأةً من موضعه."],
 "غرق شدن":["زیر آب رفتن و نتوانستنِ بیرون ماندن از آب؛ همچنین فرو رفتن کامل در مایع.","To go under water and be unable to remain above it; to become submerged.","غَرِقَ وغاصَ تحت الماء ولم يستطع البقاء على سطحه."],
 "نشان دادن":["چیزی را به دیگری ارائه کردن تا آن را ببیند، بشناسد یا متوجه شود.","To show or point something out so another person can see or understand it.","أرى شيئاً لشخص آخر أو دلّه عليه لكي يراه أو يعرفه أو يفهمه."],
 "خشک کردن":["رطوبت یا آب چیزی را با گرما، هوا یا دستمال از بین بردن.","To remove moisture or water from something using heat, air, or a cloth.","جفّفَ شيئاً وأزالَ رطوبته أو ماءه باستعمال الحرارة أو الهواء أو قطعة قماش."],
 "سریع خواندن":["متنی را با سرعت بیشتر از معمول خواندن، بدون آنکه لزوماً همهٔ جزئیات بررسی شود.","To read a text faster than usual, without necessarily examining every detail.","قرأَ نصاً بسرعة أكبر من المعتاد من دون التوقّف بالضرورة عند كل التفاصيل."],
 "نگاه کردن":["چشم‌ها را به سوی شخص یا چیزی گرداندن و آن را مشاهده کردن.","To direct one's eyes toward someone or something and look at it.","نظرَ بعينيه إلى شخص أو شيء وتأمّله."],
 "خلاصه کردن":["مطلبی طولانی را با حفظ نکته‌های اصلی کوتاه‌تر بیان کردن.","To shorten a longer text or account while preserving its main points.","لخّصَ نصاً أو حديثاً مطوّلاً مع الحفاظ على أفكاره الأساسية."],
 "درست کردن":["چیزی را ساختن، آماده کردن یا تعمیر کردن تا شکل یا وضعیت مناسبی پیدا کند.","To make, prepare, or repair something so that it is ready or in good condition.","صنعَ شيئاً أو أعدّه أو أصلحه ليصبح في هيئة مناسبة."],
 "سکونت کردن":["در مکانی زندگی کردن و آنجا را محل اقامت خود قرار دادن.","To live or reside in a particular place.","سكنَ في مكان واتّخذه محلّاً لإقامته."],
 "یادداشت کردن":["اطلاعات یا نکته‌ای را برای به خاطر سپردن یا مراجعهٔ بعدی نوشتن.","To write down information or a point for remembering or referring to later.","دوّنَ معلومةً أو ملاحظةً لتذكّرها أو الرجوع إليها لاحقاً."],
 "تکرار کردن":["یک واژه، عمل یا رویداد را دوباره یا چند بار انجام دادن یا گفتن.","To do or say a word, action, or event again or several times.","كرّرَ كلمةً أو فعلاً أو حدثاً مرةً أخرى أو مراتٍ عديدة."],
 "مقاومت کردن":["در برابر فشار، خطر، خواسته یا نیرویی ایستادگی کردن و تسلیم نشدن.","To withstand pressure, danger, a demand, or a force without giving in.","قاومَ ضغطاً أو خطراً أو طلباً أو قوةً ولم يستسلم."],
 "اشتباه کردن":["کاری را نادرست انجام دادن یا در فهم و قضاوت به نتیجهٔ نادرست رسیدن.","To make an error or reach an incorrect understanding or judgement.","أخطأَ في أداء عمل أو توصّلَ إلى فهم أو حكم غير صحيح."],
 "مجبور شدن":["به دلیل شرایط یا فشار، ناچار به انجام کاری شدن.","To be compelled or forced by circumstances or pressure to do something.","اضطرَّ إلى فعل شيء بسبب الظروف أو الضغط."],
 "لبخند زدن":["با حرکت دادن ماهیچه‌های صورت، حالت خوشایند و دوستانه‌ای در چهره ایجاد کردن.","To smile by forming a pleasant or friendly expression with the face.","ابتسمَ وأظهرَ على وجهه تعبيراً لطيفاً أو ودوداً."],
 "خبر دادن":["اطلاعات یا رویدادی را به آگاهی شخص دیگری رساندن.","To inform someone or let them know about information or an event.","أخبرَ شخصاً بمعلومة أو حدث وأعلمه به."],
 "پیامک زدن":["از طریق تلفن همراه یک پیام نوشتاری کوتاه فرستادن.","To send a short written text message by mobile phone.","أرسلَ رسالة نصية قصيرة عبر الهاتف المحمول."]
 };
 for(const [fa,v] of Object.entries(rows)) S[fa]={...(S[fa]||{}),faMeaning:v[0],enMeaning:v[1],arMeaning:v[2],faSynonyms:(S[fa]||{}).faSynonyms||[],enSynonyms:(S[fa]||{}).enSynonyms||[],arSynonyms:(S[fa]||{}).arSynonyms||[]};
 window.TERM2_ADDITIONAL_SEMANTICS_BATCH7=Object.keys(rows);
})();