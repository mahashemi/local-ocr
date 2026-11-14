/* Term 02 additional vocabulary — semantic batch 4. */
(()=> {
 const S=window.PERSIAN_SEMANTICS||(window.PERSIAN_SEMANTICS={});
 const rows={
 "معماری":["هنر و دانش طراحی ساختمان‌ها و فضاها با توجه به کارکرد، زیبایی و استحکام.","The art and practice of designing buildings and spaces with attention to function, beauty, and structure.","فنّ وعلم تصميم المباني والفضاءات مع مراعاة الوظيفة والجمال والمتانة."],
 "عروسک":["پیکره‌ای شبیه انسان یا جانور که برای بازی یا نمایش از آن استفاده می‌شود.","A figure resembling a person or animal, used as a toy or in a performance.","مجسّم يشبه الإنسان أو الحيوان ويُستعمل لعبةً أو في عرض."],
 "شیطنت":["رفتار بازیگوشانه و گاهی دردسرساز، به‌ویژه از سوی کودک.","Playful, sometimes troublesome behaviour, especially by a child.","سلوك مشاغب ومرح وقد يسبّب المتاعب، ولا سيّما من الأطفال."],
 "گمرک":["اداره یا محل بازرسی کالا و مسافر در مرزها و دریافت حقوق و عوارض قانونی.","The customs authority or checkpoint that inspects goods and travellers at borders and collects duties.","دائرة أو نقطة تفتيش تراقب البضائع والمسافرين عند الحدود وتحصّل الرسوم القانونية."],
 "تحویل بار":["سپردن چمدان یا بار به شرکت هواپیمایی در فرودگاه پیش از سوار شدن.","The process of handing luggage to the airline at the airport before boarding.","إجراء تسليم الأمتعة إلى شركة الطيران في المطار قبل الصعود إلى الطائرة."],
 "لاستیک":["پوشش لاستیکی چرخ خودرو یا وسیلهٔ نقلیه که با سطح جاده تماس دارد.","The rubber tyre fitted to a vehicle's wheel that contacts the road.","الإطار المطاطي المثبّت على عجلة المركبة والملامس للطريق."],
 "برف‌پاک‌کن":["وسیله‌ای روی شیشهٔ خودرو که باران و برف را پاک می‌کند تا دید راننده بهتر شود.","A device on a vehicle's windshield that clears rain and snow to improve the driver's view.","جهاز على زجاج السيارة الأمامي يمسح المطر والثلج لتحسين رؤية السائق."],
 "تأخیر":["دیرتر رخ دادن یا انجام شدن چیزی نسبت به زمان تعیین‌شده.","A delay; something happening or being done later than scheduled.","تأخّر حدوث شيء أو تنفيذه عن الوقت المحدّد."],
 "غذای سبک":["غذایی کم‌حجم یا نسبتاً کم‌چرب که هضم آن معمولاً آسان‌تر است.","A small or relatively low-fat meal that is usually easier to digest.","وجبة خفيفة أو قليلة الدهون نسبياً يسهل هضمها عادةً."],
 "کلسترول":["ماده‌ای چربی‌مانند در خون و سلول‌های بدن که مقدار زیاد برخی انواع آن می‌تواند خطر بیماری قلبی را افزایش دهد.","A waxy, fat-like substance in blood and cells; high levels of certain types can increase heart-disease risk.","مادة شمعية شبيهة بالدهون توجد في الدم والخلايا، وقد ترفع المستويات العالية من بعض أنواعها خطر أمراض القلب."],
 "پرس":["یک سهم یا مقدار مشخص از غذا که برای یک نفر سرو می‌شود.","A serving or portion of food served to one person.","حصة أو كمية محدّدة من الطعام تُقدَّم لشخص واحد."],
 "کاسه":["ظرفی گود و معمولاً گرد برای نگهداری یا خوردن غذا و مایعات.","A deep, usually round dish used for holding or eating food and liquids.","إناء عميق مستدير غالباً يُستعمل لحفظ الطعام أو تناوله."],
 "خشک‌شویی":["شست‌وشوی لباس با روش و مواد ویژه، معمولاً بدون غوطه‌ور کردن آن در آب.","Cleaning clothes with special solvents or processes, usually without immersing them in water.","تنظيف الملابس بمواد أو طرق خاصة، غالباً من دون غمرها في الماء."],
 "استخر":["حوض بزرگ و ساخته‌شده‌ای که برای شنا و آب‌تنی استفاده می‌شود.","A large constructed pool used for swimming.","حوض كبير مُنشأ يُستعمل للسباحة."],
 "کنکور":["آزمون رقابتی ورود به دانشگاه یا مؤسسهٔ آموزش عالی.","A competitive examination for admission to a university or higher-education institution.","امتحان تنافسي للقبول في جامعة أو مؤسسة للتعليم العالي."],
 "پایان‌نامه":["پژوهش و نوشتهٔ علمی مستقلی که دانشجو برای پایان یک دورهٔ دانشگاهی ارائه می‌کند.","A substantial research paper or dissertation submitted by a student to complete an academic programme.","بحث علمي وبحث مكتوب يقدّمه الطالب لإكمال مرحلة دراسية جامعية."],
 "خرید اینترنتی":["خرید کالا یا خدمت از طریق وب‌سایت یا برنامهٔ اینترنتی.","Buying goods or services through a website or online application.","شراء السلع أو الخدمات عبر موقع إلكتروني أو تطبيق على الإنترنت."],
 "واحد شمارش":["واژه یا مقداری که برای شمردن نوع خاصی از اسم به کار می‌رود؛ مانند «جلد» برای کتاب.","A counting expression or measure word used with a particular type of noun.","لفظ أو وحدة تُستعمل لعدّ نوع معيّن من الأسماء، مثل كلمة «مجلّد» للكتاب."],
 "خسیس":["کسی که از خرج کردن پول یا بخشیدن دارایی حتی در موقع لازم خودداری می‌کند.","A person who is unwilling to spend or share money, even when appropriate.","شخص يمتنع عن إنفاق المال أو مشاركة ممتلكاته حتى عند الحاجة."],
 "در خدمتم":["عبارتی مؤدبانه برای اعلام آمادگی جهت کمک یا انجام خواستهٔ مخاطب.","A polite expression offering to help or be available to someone.","عبارة مهذّبة لإعلان الاستعداد للمساعدة أو تلبية طلب المخاطَب."],
 "تماس تلفنی":["ارتباط گفتاری میان دو یا چند نفر از راه تلفن.","A spoken conversation between two or more people over the telephone.","محادثة صوتية بين شخصين أو أكثر عبر الهاتف."],
 "برنامه‌ریزی زمانی":["تنظیم و تقسیم زمان برای انجام کارها به ترتیب و در موعد مناسب.","Organising and allocating time so tasks are completed in a suitable order and schedule.","تنظيم الوقت وتوزيعه لإنجاز الأعمال بالترتيب وفي المواعيد المناسبة."],
 "رقابت":["تلاش دو یا چند فرد یا گروه برای رسیدن به هدف یا برتری نسبت به یکدیگر.","A contest in which two or more people or groups try to achieve a goal or outperform one another.","تنافس شخصين أو جماعتين أو أكثر لتحقيق هدف أو التفوّق بعضهم على بعض."],
 "نجات جان":["حفظ زندگی انسان از خطر مرگ یا آسیب بسیار شدید.","The act of saving a person from death or severe harm.","إنقاذ حياة إنسان من خطر الموت أو الأذى الشديد."],
 "مرجع ضمیر":["اسم یا عبارتی که ضمیر در جمله به آن اشاره می‌کند.","The noun or phrase to which a pronoun refers.","الاسم أو العبارة التي يعود إليها الضمير في الجملة."],
 "تلفات":["تعداد کشته‌ها، زخمی‌ها یا خسارت‌های انسانی و مالی در حادثه‌ای بزرگ.","The number of people killed or injured, or the losses caused by a major incident.","عدد القتلى أو المصابين أو الخسائر البشرية والمادية الناتجة عن حادث كبير."],
 "سفر تفریحی":["سفری با هدف استراحت، گردش و لذت بردن، نه انجام کار ضروری.","A trip taken for relaxation, sightseeing, and enjoyment rather than essential work.","رحلة هدفها الاستراحة والتنزه والاستمتاع، لا أداء عمل ضروري."],
 "حرم امام رضا(ع)":["مجموعهٔ زیارتی و مذهبی پیرامون آرامگاه امام رضا(ع) در شهر مشهد.","The religious and pilgrimage complex surrounding the shrine of Imam Reza in Mashhad.","المجمّع الديني والزياري المحيط بمرقد الإمام الرضا عليه السلام في مدينة مشهد."],
 "اختلال خواب":["مشکلی که الگوی خواب، کیفیت خواب یا توانایی به خواب رفتن و بیدار ماندن را مختل می‌کند.","A condition that disrupts sleep patterns, sleep quality, or the ability to fall or stay asleep.","حالة تُخلّ بنمط النوم أو جودته أو القدرة على البدء بالنوم أو الاستمرار فيه."],
 "فیلم مستند":["فیلمی که برای نمایش واقعیت، افراد، رویدادها یا موضوعی واقعی ساخته می‌شود.","A film made to present real people, events, or subjects.","فيلم يُنتَج لعرض أشخاص أو أحداث أو موضوعات واقعية."]
 };
 for(const [fa,v] of Object.entries(rows)) S[fa]={...(S[fa]||{}),faMeaning:v[0],enMeaning:v[1],arMeaning:v[2],faSynonyms:(S[fa]||{}).faSynonyms||[],enSynonyms:(S[fa]||{}).enSynonyms||[],arSynonyms:(S[fa]||{}).arSynonyms||[]};
 window.TERM2_ADDITIONAL_SEMANTICS_BATCH4=Object.keys(rows);
})();