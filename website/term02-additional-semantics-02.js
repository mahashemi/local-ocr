/* Term 02 additional vocabulary — semantic batch 2. */
(()=> {
 const S=window.PERSIAN_SEMANTICS||(window.PERSIAN_SEMANTICS={});
 const rows={
 "قرض گرفتن":["پول یا چیزی را از دیگری به‌طور موقت دریافت کردن و متعهد شدن که آن را پس بدهیم.","To borrow money or an item temporarily with an obligation to return it.","اقترضَ مالاً أو شيئاً مؤقتاً مع الالتزام بإعادته."],
 "مخفی شدن":["خود را از دید دیگران پنهان کردن تا دیده یا پیدا نشدن.","To hide oneself so that others cannot see or find you.","اختبأَ حتى لا يراه الآخرون أو يعثروا عليه."],
 "در ذهن ماندن":["در حافظه باقی ماندن و به‌آسانی فراموش نشدن.","To remain in someone's memory and not be easily forgotten.","بقيَ في الذاكرة ولم يُنسَ بسهولة."],
 "کنسل شدن":["لغو شدن برنامه، قرار یا خدماتی که پیش‌تر تعیین شده بود.","For a plan, appointment, or service to be cancelled.","أُلغيَ برنامج أو موعد أو خدمة سبق تحديدها."],
 "طرف مقابل":["شخص یا گروهی که در گفت‌وگو، معامله یا رابطه در سوی دیگر قرار دارد.","The person or group on the other side of a conversation, deal, or relationship.","الشخص أو الجهة الموجودة في الجانب الآخر من حوار أو صفقة أو علاقة."],
 "تلفن همراه":["تلفنی قابل حمل که از طریق شبکهٔ بی‌سیم امکان تماس و ارتباط را فراهم می‌کند.","A portable phone that enables calls and communication over a wireless network.","هاتف محمول يتيح المكالمات والاتصال عبر شبكة لاسلكية."],
 "حریم خصوصی":["بخش شخصی زندگی و اطلاعات فرد که دیگران بدون اجازه نباید به آن دسترسی داشته باشند.","The personal aspects of someone's life and information that others should not access without permission.","الجوانب الشخصية من حياة الفرد ومعلوماته التي لا ينبغي للآخرين الوصول إليها من دون إذنه."],
 "شادابی":["حالت سرزندگی، نشاط و احساس تازگی در جسم یا روح.","A state of freshness, vitality, and cheerfulness in body or mind.","حالة من الحيوية والنشاط والانتعاش في الجسد أو النفس."],
 "پذیرش":["موافقت با دریافت یا قبول شخص، درخواست، نظر یا واقعیتی.","The act of accepting or agreeing to receive a person, request, opinion, or fact.","قبول شخص أو طلب أو رأي أو حقيقة والموافقة عليها."],
 "خسارت":["زیان مالی یا آسیب واردشده به شخص، دارایی یا محیط.","Financial loss or damage caused to a person, property, or environment.","خسارة مالية أو ضرر يلحق بشخص أو ممتلكات أو بيئة."],
 "نقاط قوت و ضعف":["ویژگی‌های مثبت و منفی یک شخص، طرح یا موضوع که در ارزیابی آن بررسی می‌شوند.","The positive and negative features of a person, plan, or subject considered in an evaluation.","الخصائص الإيجابية والسلبية لشخص أو خطة أو موضوع عند تقييمه."],
 "پیشوند":["جزئی که در آغاز واژه می‌آید و در ساخت واژه یا تغییر معنای آن نقش دارد.","A word element placed at the beginning of a word to form a new word or change its meaning.","جزء لغوي يأتي في بداية الكلمة ويسهم في تكوين كلمة جديدة أو تغيير معناها."],
 "باند فرودگاه":["سطحی بلند و آماده در فرودگاه که هواپیما از آن برای برخاستن و فرود آمدن استفاده می‌کند.","A prepared strip at an airport used by aircraft for take-off and landing.","مدرج مجهّز في المطار تستعمله الطائرات للإقلاع والهبوط."],
 "پیشوند منفی‌ساز":["پیشوندی که با آمدن در آغاز واژه، معنای آن را منفی یا مخالف می‌کند.","A prefix that makes a word negative or expresses the opposite meaning.","سابقة تُضاف إلى بداية الكلمة لتجعل معناها سلبياً أو مضاداً."],
 "فضاپیما":["وسیله‌ای که برای سفر یا انجام مأموریت در فضا طراحی شده است.","A vehicle designed to travel or operate in outer space.","مركبة صُمّمت للسفر أو العمل في الفضاء الخارجي."],
 "دسترسی":["امکان رسیدن به چیزی، استفاده از آن یا دریافت اطلاعات و خدمات.","The ability or opportunity to reach, use, or obtain something or information.","إمكانية الوصول إلى شيء أو استعماله أو الحصول على معلومات أو خدمات."],
 "قیمت مناسب":["قیمتی که با کیفیت، ارزش کالا یا توان مالی خریدار تناسب داشته باشد.","A price that is reasonable in relation to quality, value, or the buyer's means.","سعر معقول يتناسب مع الجودة أو القيمة أو قدرة المشتري المالية."],
 "آش شور و بی‌نمک":["توصیفی کنایه‌آمیز برای چیزی که کیفیت یا نتیجهٔ آن نامطلوب و نامتعادل است.","An ironic expression for something that is poorly made, unsatisfactory, or badly balanced.","تعبير ساخر عن شيء رديء أو غير مُرضٍ أو غير متوازن."],
 "اشکال املایی":["خطا در نوشتن درست حروف یا شکل نوشتاری یک واژه.","An error in the correct spelling or written form of a word.","خطأ في التهجئة الصحيحة أو الصورة الكتابية للكلمة."],
 "کسب مقام":["به دست آوردن رتبه یا جایگاه در یک مسابقه، رقابت یا رویداد.","To achieve a rank or position in a competition or event.","أحرزَ مرتبة أو مركزاً في مسابقة أو منافسة أو فعالية."],
 "قند خون":["مقدار گلوکز موجود در خون که بدن برای تأمین انرژی از آن استفاده می‌کند.","The amount of glucose in the blood, which the body uses for energy.","كمية الغلوكوز الموجودة في الدم ويستعملها الجسم للحصول على الطاقة."],
 "فیلم‌بردار":["فردی که با دوربین، تصویرهای فیلم یا برنامه را ضبط می‌کند.","A person who records the images for a film or programme using a camera.","شخص يصوّر مشاهد الفيلم أو البرنامج باستعمال الكاميرا."],
 "خاطره":["یاد و بازنمایی ذهنی یک رویداد یا تجربهٔ گذشته.","A memory or mental recollection of a past event or experience.","ذكرى أو استرجاع ذهني لحدث أو تجربة سابقة."],
 "قید زمان":["قید یا عبارتی که زمان انجام فعل یا وقوع رویداد را مشخص می‌کند.","An adverb or phrase that specifies when an action happens or an event occurs.","ظرف أو عبارة تحدّد زمن حدوث الفعل أو الواقعة."],
 "رب انار":["چاشنی غلیظ و ترشی که از جوشاندن و غلیظ کردن آب انار تهیه می‌شود.","A thick, tart condiment made by reducing pomegranate juice.","مُتبّل كثيف وحامض يُحضّر بتكثيف عصير الرمّان بالغليان."],
 "منظره":["چیزی که از یک نقطه دیده می‌شود؛ به‌ویژه چشم‌انداز طبیعی یا شهری.","A view seen from a particular place, especially a natural or urban landscape.","مشهد يُرى من مكان معيّن، ولا سيّما منظر طبيعي أو عمراني."],
 "نشانه‌گذاری":["به‌کار بردن علامت‌هایی مانند نقطه، ویرگول و پرسش برای روشن کردن ساختار و معنای نوشته.","The use of punctuation marks such as full stops, commas, and question marks to clarify writing.","استعمال علامات الترقيم كالنقطة والفاصلة وعلامة الاستفهام لتوضيح بنية النص ومعناه."],
 "آتش‌نشانی":["خدمت و سازمانی که برای خاموش کردن آتش و نجات افراد در حوادث اقدام می‌کند.","The service or organisation that extinguishes fires and rescues people during emergencies.","خدمة أو مؤسسة تعمل على إخماد الحرائق وإنقاذ الناس أثناء الحوادث."],
 "باشگاه بدن‌سازی":["مکانی برای تمرین‌های قدرتی و ورزشی با دستگاه‌ها و وزنه‌ها برای تقویت بدن.","A gym where people do strength and fitness training using machines and weights.","نادي رياضي تُمارس فيه تمارين القوة واللياقة باستعمال الأجهزة والأوزان."],
 "ریزگرد":["ذرات بسیار ریز گردوغبار که در هوا معلق می‌شوند و می‌توانند تنفس و دید را مختل کنند.","Very fine dust particles suspended in the air that can affect breathing and visibility.","جسيمات غبار دقيقة جداً تبقى معلّقة في الهواء وقد تؤثّر في التنفّس والرؤية."]
 };
 for(const [fa,v] of Object.entries(rows)) S[fa]={...(S[fa]||{}),faMeaning:v[0],enMeaning:v[1],arMeaning:v[2],faSynonyms:(S[fa]||{}).faSynonyms||[],enSynonyms:(S[fa]||{}).enSynonyms||[],arSynonyms:(S[fa]||{}).arSynonyms||[]};
 window.TERM2_ADDITIONAL_SEMANTICS_BATCH2=Object.keys(rows);
})();