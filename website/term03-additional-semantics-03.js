/* Term 03 additional vocabulary — semantic batch 3. */
(()=> {
 const S=window.PERSIAN_SEMANTICS||(window.PERSIAN_SEMANTICS={});
 const rows={
 "مصنوعی":["ساخته‌شده به دست انسان، نه به‌وجودآمده به‌طور طبیعی.","Made by humans rather than occurring naturally.","مصنوع بيد الإنسان وليس موجوداً بصورة طبيعية."],
 "سوگواری":["ابراز اندوه و عزاداری برای درگذشت یا مصیبت کسی.","The expression of grief or mourning for someone's death or a tragedy.","إظهار الحزن والحداد على وفاة شخص أو وقوع مصيبة."],
 "دامداری":["پرورش و نگهداری دام‌هایی مانند گاو، گوسفند و بز برای تولید غذا و محصولات دیگر.","The raising and care of livestock such as cattle, sheep, and goats for food and other products.","تربية المواشي مثل الأبقار والأغنام والماعز لإنتاج الغذاء والمنتجات الأخرى."],
 "خطوط قرمز":["حدود یا اصولی که نباید از آن‌ها عبور کرد یا آن‌ها را نقض کرد.","Limits or principles that must not be crossed or violated.","حدود أو مبادئ لا يجوز تجاوزها أو انتهاكها."],
 "پخش کردن":["چیزی را میان افراد یا مکان‌های مختلف توزیع کردن؛ همچنین انتشار برنامه یا صدا و تصویر.","To distribute something among people or places; also to broadcast audio, video, or a programme.","وزّعَ شيئاً على أشخاص أو أماكن مختلفة؛ ويأتي أيضاً بمعنى بثّ برنامج أو صوت أو صورة."],
 "کفن":["پارچه‌ای که پیکر فرد درگذشته را پیش از دفن با آن می‌پوشانند.","The cloth used to wrap a deceased person before burial.","القماش الذي يُلفّ به جسد المتوفّى قبل الدفن."],
 "پرفروش":["کالا، کتاب یا فیلمی که تعداد زیادی از آن فروخته شده است.","A product, book, or film that has sold in large quantities.","منتج أو كتاب أو فيلم بيع منه عدد كبير."],
 "اشتراک":["عضویت یا پرداخت دوره‌ای برای استفاده از یک خدمت؛ همچنین سهم مشترک یا ویژگی مشترک.","A membership or recurring payment for a service; also a shared part or common feature.","عضوية أو دفع دوري للاستفادة من خدمة؛ ويأتي أيضاً بمعنى حصة أو صفة مشتركة."],
 "به خود اختصاص دادن":["بخش یا سهمی از چیزی را برای خود گرفتن یا در اختیار خود قرار دادن.","To take or occupy a particular share or portion for oneself.","استحوذَ على جزء أو حصة معيّنة وجعلها لنفسه."],
 "سلاح گرم":["سلاحی که با انفجار باروت یا نیروی گاز، گلوله یا پرتابه شلیک می‌کند.","A weapon that fires a bullet or projectile using an explosive charge or expanding gas.","سلاح يطلق رصاصة أو مقذوفاً باستعمال شحنة متفجرة أو غاز متمدّد."],
 "ضربان":["حرکت یا تپش منظم و تکرارشونده، به‌ویژه تپیدن قلب یا نبض.","A regular repeated beat or pulse, especially of the heart or pulse.","نبض أو خفقان منتظم ومتكرر، ولا سيّما ضربات القلب."],
 "افزودن":["چیزی را به مقدار یا مجموعه‌ای اضافه کردن.","To add something to an amount or collection.","أضافَ شيئاً إلى كمية أو مجموعة."],
 "فانوس":["چراغی قابل حمل که برای روشنایی، معمولاً با شیشه یا پوشش محافظ، استفاده می‌شود.","A portable lamp, often with a protective glass or casing, used for illumination.","مصباح محمول يُستعمل للإضاءة، وغالباً يكون له زجاج أو غطاء واقٍ."],
 "ولیمه":["مهمانی غذایی که معمولاً به مناسبت ازدواج یا رویدادی خوشایند برگزار می‌شود.","A celebratory meal or feast, often held for a wedding or happy occasion.","وليمة أو مأدبة احتفالية تُقام غالباً بمناسبة الزواج أو حدث سعيد."],
 "دفترخانه":["محل رسمی ثبت اسناد و انجام امور حقوقی مانند ثبت ازدواج یا معاملات.","An official office where documents and legal matters, such as marriages or transactions, are registered.","مكتب رسمي لتسجيل الوثائق وإتمام المعاملات القانونية كالزواج والعقود."],
 "گرداندن":["چیزی را چرخاندن؛ یا اداره و مدیریت کردن یک کسب‌وکار، سازمان یا فعالیت.","To turn something around; also to run or manage a business, organisation, or activity.","أدارَ شيئاً أو جعله يدور؛ ويأتي أيضاً بمعنى إدارة عمل أو مؤسسة أو نشاط."],
 "بنا شدن":["ساخته شدن یا شکل گرفتن یک ساختمان، نهاد یا ساختار.","To be built or established; for a building or structure to be created.","شُيّدَ أو أُنشئَ مبنى أو كيان أو هيكل."],
 "بددهان":["کسی که عادت دارد از واژه‌های زشت و ناسزا استفاده کند.","A person who habitually uses foul or abusive language.","شخص اعتاد استعمال الألفاظ البذيئة والشتائم."],
 "زشت‌گفتار":["کسی که با واژه‌ها و لحنی ناپسند و بی‌ادبانه صحبت می‌کند.","Someone who speaks in an offensive or impolite manner.","شخص يتكلّم بألفاظ ونبرة قبيحة أو غير مهذّبة."],
 "بدوبیراه":["واژه‌ها و عبارت‌های توهین‌آمیز و ناسزا که برای آزار یا تحقیر دیگری گفته می‌شوند.","Insults and abusive words used to offend or humiliate someone.","شتائم وألفاظ مسيئة تُقال لإيذاء شخص أو إهانته."],
 "گستاخ":["کسی که با بی‌احترامی و جرئت نامناسب رفتار یا صحبت می‌کند.","Rude or disrespectful; showing improper boldness.","وقح أو قليل الاحترام ويتصرّف بجرأة غير لائقة."],
 "شرمسار شدن":["به سبب اشتباه یا رفتار نادرست احساس شرم و خجالت کردن.","To feel ashamed or embarrassed because of a mistake or improper behaviour.","شعرَ بالخجل والعار بسبب خطأ أو تصرّف غير سليم."],
 "ترک تحصیل":["پیش از پایان دورهٔ آموزشی، درس و تحصیل را رها کردن.","To leave school or an educational programme before completing it.","تركَ المدرسة أو البرنامج الدراسي قبل إكماله."],
 "کلمات همگون":["واژه‌هایی که از نظر آوا یا نوشتار به هم شبیه‌اند، اما معناهای متفاوتی دارند.","Words that resemble one another in sound or spelling but have different meanings.","كلمات تتشابه في الصوت أو الكتابة لكن تختلف في المعنى."],
 "واردکننده":["شخص یا شرکتی که کالا را از کشور دیگری وارد می‌کند.","A person or company that brings goods into a country from abroad.","شخص أو شركة تستورد السلع من بلد آخر."],
 "فیزیکدان":["دانشمندی که ماده، انرژی، حرکت و قوانین فیزیکی طبیعت را بررسی می‌کند.","A scientist who studies matter, energy, motion, and the physical laws of nature.","عالِم يدرس المادة والطاقة والحركة والقوانين الفيزيائية للطبيعة."],
 "بمباران":["حمله با بمب یا مواد انفجاری از هوا یا زمین به یک منطقه یا هدف.","An attack on an area or target using bombs or explosive weapons.","هجوم على منطقة أو هدف باستعمال القنابل أو الأسلحة المتفجرة."],
 "تسلیم شدن":["مقاومت را متوقف کردن و خود یا موضع را به طرف مقابل واگذار کردن.","To stop resisting and surrender oneself or one's position to the other side.","أوقفَ المقاومة واستسلمَ أو سلّم موقفه للطرف الآخر."],
 "سرزنش کردن":["کسی را به سبب اشتباه یا رفتار نادرست ملامت کردن.","To blame or reproach someone for a mistake or improper action.","لامَ شخصاً أو وبّخه بسبب خطأ أو تصرّف غير سليم."],
 "سنگ‌تراش":["پیشه‌وری که سنگ را می‌بُرد، شکل می‌دهد یا روی آن نقش و طرح ایجاد می‌کند.","A craftsperson who cuts, shapes, or carves stone.","حِرَفي يقطع الحجر أو يشكّله أو ينحت عليه الزخارف."]
 };
 for(const [fa,v] of Object.entries(rows)) S[fa]={...(S[fa]||{}),faMeaning:v[0],enMeaning:v[1],arMeaning:v[2],faSynonyms:(S[fa]||{}).faSynonyms||[],enSynonyms:(S[fa]||{}).enSynonyms||[],arSynonyms:(S[fa]||{}).arSynonyms||[]};
 window.TERM3_ADDITIONAL_SEMANTICS_BATCH3=Object.keys(rows);
})();