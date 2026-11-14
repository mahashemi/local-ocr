/* Term 02 additional vocabulary — final semantic batch for full Term 02 coverage. */
(()=> {
 const S=window.PERSIAN_SEMANTICS||(window.PERSIAN_SEMANTICS={});
 const rows={
 "اثر هنری":["محصولی خلاقانه مانند نقاشی، مجسمه، موسیقی یا اثر ادبی که ارزش هنری دارد.","A creative work, such as a painting, sculpture, piece of music, or literary work, that has artistic value.","عمل إبداعي ذو قيمة فنية، مثل لوحة أو منحوتة أو مقطوعة موسيقية أو عمل أدبي."],
 "پیشوندهای منفی‌ساز":["پیشوندهایی که با افزودن آن‌ها به آغاز واژه، معنای منفی، مخالف یا نبودِ ویژگی را می‌رسانند.","Prefixes that create a negative, opposite, or absence-related meaning when added to the beginning of a word.","سوابق تُضاف إلى بداية الكلمة لتفيد النفي أو التضاد أو عدم وجود الصفة."],
 "اصطلاح‌های فارسی":["ترکیب‌ها و عبارت‌های رایج در زبان فارسی که معنای شناخته‌شده و گاهی غیرلفظی دارند.","Common expressions in Persian whose established meanings may be idiomatic rather than literal.","تعبيرات شائعة في اللغة الفارسية لها معانٍ اصطلاحية قد لا تكون حرفية."],
 "گروهی":["مربوط به یک گروه یا انجام‌شده به وسیلهٔ چند نفر با هم.","Relating to a group or done by several people together.","متعلّق بجماعة أو يُنجَز بمشاركة عدة أشخاص معاً."],
 "کمدی":["گونه‌ای از نمایش، فیلم یا ادبیات که هدف اصلی آن خنداندن و سرگرم کردن مخاطب است.","A genre of film, performance, or literature primarily intended to make an audience laugh and feel entertained.","نوع من الأفلام أو العروض أو الأدب يهدف أساساً إلى إضحاك الجمهور وتسليته."],
 "هنرمندان":["افرادی که در زمینه‌هایی مانند نقاشی، موسیقی، تئاتر، سینما یا ادبیات فعالیت خلاقانه دارند.","People who work creatively in fields such as painting, music, theatre, film, or literature.","أشخاص يمارسون الإبداع في مجالات مثل الرسم والموسيقى والمسرح والسينما والأدب."],
 "گپ زدن":["با لحنی دوستانه و غیررسمی دربارهٔ موضوعات مختلف صحبت کردن.","To chat or have an informal, friendly conversation about various topics.","دردشَ وتحادثَ بصورة ودّية وغير رسمية في موضوعات مختلفة."],
 "قرار گرفتن":["در مکان، وضعیت یا موقعیتی واقع شدن یا جای داده شدن.","To be located, placed, or situated in a particular place, state, or position.","وُجدَ أو وُضعَ في مكان أو حالة أو موضع معيّن."],
 "پرتاب کردن":["چیزی را با نیروی دست یا وسیله‌ای به هوا یا به سوی نقطه‌ای رها کردن.","To throw or launch something through the air or toward a particular point.","رمى شيئاً أو قذفه بقوة اليد أو بوسيلة نحو الهواء أو نقطة معيّنة."],
 "اشاره کردن":["با دست، چشم یا واژه‌ها توجه کسی را به شخص یا موضوعی جلب کردن.","To point to or indicate a person or subject with a gesture, one's eyes, or words.","أشارَ إلى شخص أو موضوع باليد أو العين أو الكلام لجذب الانتباه إليه."],
 "دچار مشکل شدن":["با مانع، دشواری یا وضعیتی ناخوشایند روبه‌رو شدن.","To encounter a difficulty, obstacle, or troublesome situation.","واجهَ صعوبةً أو عقبةً أو وضعاً مزعجاً."],
 "گردگیری کردن":["گردوغبار روی وسایل و سطح‌ها را با دستمال یا ابزار مناسب پاک کردن.","To remove dust from furniture and surfaces using a cloth or suitable tool.","أزالَ الغبار عن الأثاث والأسطح باستعمال قطعة قماش أو أداة مناسبة."],
 "تی کشیدن":["با تی و معمولاً آب یا شوینده، کف زمین را تمیز کردن.","To clean a floor with a mop, usually using water or a cleaning solution.","مسحَ الأرضية بالممسحة، وغالباً باستعمال الماء أو سائل التنظيف."],
 "فریاد زدن":["با صدای بسیار بلند و ناگهانی سخن گفتن، معمولاً از خشم، ترس یا برای جلب توجه.","To shout or yell loudly, often because of anger, fear, or a need to attract attention.","صرخَ أو صاحَ بصوت عالٍ، غالباً بسبب الغضب أو الخوف أو لجذب الانتباه."],
 "دیر آمدن":["پس از زمان مورد انتظار یا زمان تعیین‌شده به مکانی رسیدن.","To arrive at a place later than expected or scheduled.","وصلَ إلى مكان بعد الوقت المتوقّع أو المحدّد."],
 "تهیه کردن":["چیزی را آماده یا فراهم کردن، یا مواد و وسایل لازم برای آن را به دست آوردن.","To prepare or arrange something, or obtain the materials and items needed for it.","أعدَّ شيئاً أو جهّزه، أو وفّرَ المواد والأدوات اللازمة له."],
 "فکر کردن":["با ذهن خود دربارهٔ موضوعی اندیشیدن، آن را بررسی کردن یا به نتیجه رسیدن.","To think about, consider, or mentally examine a subject.","فكّرَ في موضوع وتأمّله أو درسه ذهنياً للوصول إلى نتيجة."],
 "کشتی گرفتن":["در ورزشی رزمی، با گرفتن و مهار حریف تلاش کردن او را به زمین بزند یا بر او پیروز شود.","To wrestle: grapple with an opponent in a sport, aiming to control or pin them.","صارعَ خصمه في رياضة المصارعة محاولاً السيطرة عليه أو تثبيته."],
 "اصرار کردن":["با پافشاری و تکرار خواسته یا نظر خود را دنبال کردن و از آن دست نکشیدن.","To insist or persist in making a request or maintaining an opinion.","أصرَّ على طلبه أو رأيه وواصلَ التمسّك به من دون تراجع."],
 "غر زدن":["به‌طور مکرر و معمولاً با لحنی ناراضی از چیزی شکایت یا گله کردن.","To grumble or complain repeatedly, usually in a dissatisfied tone.","تذمّرَ أو اشتكى مراراً، غالباً بنبرة غير راضية."],
 "سفره پهن کردن":["سفره یا پوشش مخصوص غذا را روی زمین یا میز گستردن و غذا را برای خوردن آماده کردن.","To spread a dining cloth or table covering and set out a meal.","بسطَ مفرش الطعام على الأرض أو الطاولة وهيّأ الطعام لتناوله."],
 "توضیح دادن":["معنا، دلیل یا چگونگی چیزی را روشن و قابل فهم بیان کردن.","To explain the meaning, reason, or process of something clearly.","شرحَ معنى شيء أو سببه أو كيفية حدوثه بصورة واضحة ومفهومة."],
 "وزن کردن":["با ترازو جرم یا وزن چیزی یا کسی را اندازه گرفتن.","To measure the weight of a person or object using scales.","وزنَ شخصاً أو شيئاً باستعمال الميزان."],
 "موافقت کردن":["با نظر، پیشنهاد یا درخواست کسی پذیرفتن و هم‌نظر شدن.","To agree with someone's opinion, proposal, or request.","وافقَ على رأي شخص أو اقتراحه أو طلبه."],
 "خارج کردن":["چیزی یا کسی را از داخل یک مکان، ظرف یا مجموعه بیرون آوردن.","To take or remove something or someone from a place, container, or group.","أخرجَ شيئاً أو شخصاً من مكان أو وعاء أو مجموعة."],
 "خبر گرفتن":["برای آگاهی از وضعیت یا احوال کسی یا چیزی پرس‌وجو کردن.","To ask after someone or something in order to find out how they are or what is happening.","سألَ عن أحوال شخص أو وضع شيء لمعرفة أخباره."],
 "امتحان کردن":["چیزی یا کسی را برای سنجیدن کیفیت، توانایی یا درستی آن آزمایش کردن؛ یا چیزی را برای نخستین بار تجربه کردن.","To test something or someone to assess quality, ability, or correctness; also, to try something.","اختبرَ شيئاً أو شخصاً لقياس الجودة أو القدرة أو الصحة؛ ويأتي أيضاً بمعنى جرّب شيئاً."],
 "پختن":["با گرما غذا را آماده و قابل خوردن کردن.","To cook food by applying heat so that it becomes ready to eat.","طبخَ الطعام باستعمال الحرارة حتى يصبح صالحاً للأكل."],
 "کنار زدن":["چیزی یا کسی را از مسیر یا موقعیت فعلی به کنار راندن؛ همچنین کنار گذاشتن یک مانع.","To push or move something or someone aside; also, to remove an obstacle from the way.","أزاحَ شيئاً أو شخصاً إلى الجانب؛ ويأتي أيضاً بمعنى إزالة عائق من الطريق."],
 "گم کردن":["نتوانستن چیزی را پیدا کرد، چون جای آن را فراموش کرده یا از دسترس خارج شده است.","To lose something by no longer knowing where it is or being unable to find it.","أضاعَ شيئاً فلم يعد يعرف مكانه أو لم يستطع العثور عليه."]
 };
 for(const [fa,v] of Object.entries(rows)) S[fa]={...(S[fa]||{}),faMeaning:v[0],enMeaning:v[1],arMeaning:v[2],faSynonyms:(S[fa]||{}).faSynonyms||[],enSynonyms:(S[fa]||{}).enSynonyms||[],arSynonyms:(S[fa]||{}).arSynonyms||[]};
 window.TERM2_ADDITIONAL_SEMANTICS_BATCH9=Object.keys(rows);
})();