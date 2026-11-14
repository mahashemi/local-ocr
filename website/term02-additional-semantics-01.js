/* Term 02 additional vocabulary — semantic batch 1 (high-frequency verbs and expressions). */
(()=> {
 const S=window.PERSIAN_SEMANTICS||(window.PERSIAN_SEMANTICS={});
 const rows={
 "روبوسی":["سلام و احوال‌پرسی با بوسیدن گونهٔ یکدیگر، معمولاً میان خویشاوندان و آشنایان.","A greeting in which people kiss each other's cheeks, often among relatives or acquaintances.","تحيةٌ يتبادل فيها الأشخاص تقبيل الخدود، وغالباً بين الأقارب والمعارف."],
 "اعتیاد اینترنتی":["استفادهٔ افراطی و کنترل‌نشده از اینترنت که به زندگی روزمره، کار یا روابط آسیب می‌زند.","Excessive, poorly controlled internet use that harms daily life, work, or relationships.","استخدام مفرط وغير مضبوط للإنترنت يضرّ بالحياة اليومية أو العمل أو العلاقات."],
 "شنا کردن":["در آب حرکت کردن و با دست و پا بدن را روی آب یا درون آن پیش بردن.","To move through water by using the arms and legs.","تحرّك في الماء باستعمال الذراعين والساقين."],
 "تیتر خبری":["عنوان کوتاه و برجسته‌ای که موضوع اصلی یک خبر را بیان می‌کند.","A short, prominent headline that states the main subject of a news story.","عنوان موجز وبارز يبيّن الموضوع الأساسي للخبر."],
 "تعقیب کردن":["کسی یا چیزی را دنبال کردن؛ گاهی برای دستگیری یا رسیدن به آن.","To follow or pursue someone or something, sometimes to catch up with or arrest them.","تبعَ شخصاً أو شيئاً، أحياناً لإدراكه أو القبض عليه."],
 "بخیه":["دوخت پزشکی با نخ مخصوص برای بستن زخم یا نزدیک نگه داشتن لبه‌های آن.","A medical stitch made with special thread to close a wound or hold its edges together.","غرزة طبية بخيط خاص لإغلاق الجرح أو تقريب حافتيه."],
 "بخیه زدن":["لبه‌های زخم را با نخ و سوزن پزشکی به هم دوختن.","To close a wound by stitching its edges with medical thread and a needle.","خاطَ حافتي الجرح بإبرة وخيط طبي."],
 "فیزیوتراپی":["درمان و توان‌بخشی با تمرین‌های حرکتی و روش‌های فیزیکی برای بهبود حرکت و کاهش درد.","Treatment and rehabilitation using movement exercises and physical methods to improve mobility and reduce pain.","علاج وتأهيل باستعمال التمارين الحركية والوسائل الفيزيائية لتحسين الحركة وتخفيف الألم."],
 "اهدا کردن":["چیزی مانند خون، عضو یا مال را داوطلبانه برای کمک به دیگری بخشیدن.","To give something such as blood, an organ, or property voluntarily to help another person.","وهبَ شيئاً كالدم أو العضو أو المال طوعاً لمساعدة شخص آخر."],
 "خشکسالی":["دوره‌ای طولانی با بارندگی بسیار کم که باعث کمبود آب و آسیب به کشاورزی و طبیعت می‌شود.","A prolonged period of very low rainfall that causes water shortages and harms agriculture and nature.","فترة طويلة يقلّ فيها هطول المطر كثيراً، فتسبّب نقص المياه والضرر للزراعة والطبيعة."],
 "احتیاط کردن":["برای جلوگیری از خطر یا اشتباه، با دقت و توجه رفتار کردن.","To act carefully in order to avoid danger or mistakes.","تصرّف بحذر وانتباه لتجنّب الخطر أو الخطأ."],
 "فراموش کردن":["چیزی را از یاد بردن و نتوانستن آن را به خاطر آوردن.","To fail to remember something or be unable to recall it.","نسيَ شيئاً ولم يستطع تذكّره."],
 "فیلم تخیلی":["فیلمی که داستان آن بر پایهٔ خیال، رویدادهای غیرواقعی یا جهان‌های فرضی ساخته شده است.","A film whose story is based on imagination, unreal events, or invented worlds.","فيلم تقوم قصته على الخيال أو أحداث غير واقعية أو عوالم متخيّلة."],
 "فیلم دیدن":["برای سرگرمی یا آگاهی، یک فیلم را از ابتدا تا پایان تماشا کردن.","To watch a film, usually for entertainment or information.","شاهدَ فيلماً من بدايته إلى نهايته للتسلية أو المعرفة."],
 "خطاطی":["هنر نوشتن زیبا و سنجیدهٔ حروف و واژه‌ها با رعایت شکل و تناسب آن‌ها.","The art of writing letters and words beautifully with attention to form and proportion.","فنّ كتابة الحروف والكلمات بخط جميل مع مراعاة الشكل والتناسب."],
 "طناب‌بازی":["بازی یا ورزش پریدن از روی طنابی که خود فرد یا شخص دیگری می‌چرخاند.","A game or exercise in which a person jumps over a turning rope.","لعبة أو تمرين يقفز فيه الشخص فوق حبل يديره بنفسه أو شخص آخر."],
 "آشتی کردن":["پس از اختلاف یا دلخوری دوباره رابطهٔ دوستانه برقرار کردن.","To make peace and restore a friendly relationship after a disagreement.","تصالحَ وأعاد العلاقة الودّية بعد خلاف أو زعل."],
 "صرافی":["محل یا کسب‌وکاری که در آن پول و ارزهای گوناگون خریدوفروش یا تبدیل می‌شود.","A business where money and different currencies are exchanged or traded.","محلّ أو نشاط تجاري تُباع فيه العملات المختلفة وتُشترى أو تُحوّل."],
 "چراغ راهنما":["چراغی در تقاطع یا مسیر که با رنگ‌های مشخص، زمان ایستادن یا حرکت را به رانندگان و عابران نشان می‌دهد.","A traffic signal that uses coloured lights to tell drivers and pedestrians when to stop or go.","إشارة مرور تستعمل أضواء ملوّنة لتبيّن للسائقين والمشاة متى يتوقّفون أو يتحرّكون."],
 "کمربند بستن":["کمربند ایمنی را پیش از حرکت خودرو به بدن و صندلی محکم کردن.","To fasten a seat belt before a vehicle moves.","ربطَ حزام الأمان وتثبيته قبل تحرّك السيارة."],
 "نقص فنی":["ایراد یا خرابی در دستگاه، وسیله یا سامانه که مانع کارکرد درست آن می‌شود.","A fault or malfunction in a machine, vehicle, or system that prevents it from working properly.","خلل أو عطل في جهاز أو مركبة أو نظام يمنعه من العمل بصورة صحيحة."],
 "فلفل دلمه‌ای":["نوعی فلفل درشت و شیرین با شکل زنگوله‌ای که معمولاً سبز، قرمز، زرد یا نارنجی است.","A large, mild, bell-shaped pepper, commonly green, red, yellow, or orange.","نوع كبير وحلو من الفلفل، شكله كالجَرس، ويكون غالباً أخضر أو أحمر أو أصفر أو برتقالياً."],
 "سرآشپز":["آشپز ارشد که کار آشپزخانه و آماده‌سازی غذا را هدایت و مدیریت می‌کند.","The head chef who leads and manages a kitchen and food preparation.","رئيس الطهاة الذي يقود المطبخ ويدير إعداد الطعام."],
 "نظرخواهی کردن":["از افراد خواستن که دربارهٔ موضوعی نظر یا پاسخ خود را بیان کنند.","To ask people to share their opinions or answers about a subject.","طلبَ من الناس إبداء آرائهم أو إجاباتهم حول موضوع."],
 "اتاق رو به دریا":["اتاقی در هتل یا اقامتگاه که پنجره یا بالکن آن به سمت دریا باز می‌شود.","A hotel or lodging room whose window or balcony faces the sea.","غرفة في فندق أو مكان إقامة تطلّ نافذتها أو شرفتها على البحر."],
 "مدرک تحصیلی":["گواهی رسمی‌ای که پایان یک دوره یا سطح مشخص از آموزش را تأیید می‌کند.","An official certificate confirming completion of a particular level or course of education.","شهادة رسمية تثبت إكمال مستوى أو مرحلة دراسية معيّنة."],
 "پرداخت کردن":["پول یا مبلغی را برای خرید کالا، دریافت خدمت یا تسویهٔ بدهی دادن.","To pay money for goods, services, or settling a debt.","دفعَ مبلغاً مقابل سلعة أو خدمة أو لتسوية دين."],
 "لوازم‌التحریر":["وسایل مورد استفاده برای نوشتن و کارهای مدرسه یا اداره، مانند قلم، دفتر و پاک‌کن.","Items used for writing and school or office work, such as pens, notebooks, and erasers.","أدوات الكتابة والدراسة والعمل المكتبي، مثل الأقلام والدفاتر والممحاة."],
 "مو را از ماست کشیدن":["با دقت بسیار زیاد جزئیات را بررسی کردن و از کوچک‌ترین نکته یا خطا نگذشتن.","To examine details extremely closely and overlook no small point or mistake.","دقّقَ في التفاصيل كثيراً ولم يترك صغيرةً أو خطأً من دون فحص."]
 };
 for(const [fa,v] of Object.entries(rows)) S[fa]={...(S[fa]||{}),faMeaning:v[0],enMeaning:v[1],arMeaning:v[2],faSynonyms:(S[fa]||{}).faSynonyms||[],enSynonyms:(S[fa]||{}).enSynonyms||[],arSynonyms:(S[fa]||{}).arSynonyms||[]};
 window.TERM2_ADDITIONAL_SEMANTICS_BATCH1=Object.keys(rows);
})();