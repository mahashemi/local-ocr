/* Term 02 additional vocabulary — semantic batch 3. */
(()=> {
 const S=window.PERSIAN_SEMANTICS||(window.PERSIAN_SEMANTICS={});
 const rows={
 "خونریزی":["خارج شدن خون از رگ‌ها یا بافت‌های بدن، بر اثر زخم، آسیب یا بیماری.","The loss or escape of blood from blood vessels or body tissue due to injury, a wound, or illness.","خروج الدم من الأوعية الدموية أو أنسجة الجسم بسبب جرح أو إصابة أو مرض."],
 "سوزش سینه":["احساس سوزش یا گرمی در ناحیهٔ سینه که گاهی به علت برگشت اسید معده ایجاد می‌شود.","A burning sensation in the chest, sometimes caused by stomach acid reflux.","إحساس بحرقة أو حرارة في الصدر، وقد ينتج أحياناً عن ارتجاع حمض المعدة."],
 "یخبندان":["وضعیت بسیار سردی که در آن آب یا سطح زمین یخ می‌زند.","A period of freezing weather when water or the ground becomes icy.","حالة من البرد الشديد يتجمّد فيها الماء أو سطح الأرض."],
 "صدابردار":["فردی که هنگام فیلم‌برداری یا ضبط برنامه، صداها و گفت‌وگوها را ثبت و کنترل می‌کند.","A person who records and manages sound during filming or programme production.","شخص يسجّل الأصوات والحوار ويتحكّم بها أثناء تصوير فيلم أو إنتاج برنامج."],
 "قلمکاری":["هنر سنتی نقش‌زدن روی پارچه، معمولاً با قالب‌ها و رنگ‌های مخصوص.","A traditional craft of printing patterns on fabric, often using carved blocks and dyes.","حرفة تقليدية لطباعة الزخارف على القماش، غالباً باستعمال قوالب محفورة وأصباغ."],
 "حواس‌پرتی":["کاهش تمرکز به سبب توجه به چیزهای دیگر یا فراموش کردن موضوع اصلی.","A loss of concentration caused by attention shifting elsewhere.","تشتّت الانتباه بسبب الانشغال بأمور أخرى أو نسيان الموضوع الأساسي."],
 "عذرخواهی":["گفتن یا انجام دادن کاری برای ابراز تأسف از اشتباه یا رنجاندن دیگری.","An expression of regret for a mistake or for hurting someone.","التعبير عن الأسف بسبب خطأ أو إيذاء شخص آخر."],
 "زمان‌بندی":["تعیین زمان مناسب و ترتیب انجام کارها یا رویدادها.","The planning of when activities or events should happen and in what order.","تحديد أوقات الأنشطة أو الأحداث وترتيب تنفيذها."],
 "غلات":["دانه‌های خوراکی گیاهانی مانند گندم، برنج، جو و ذرت که غذای اصلی بسیاری از مردم‌اند.","Edible grains such as wheat, rice, barley, and maize, which are staple foods.","حبوب غذائية مثل القمح والأرز والشعير والذرة، وهي من الأغذية الأساسية."],
 "منوی کودکان":["فهرست غذاها و نوشیدنی‌هایی که رستوران به‌طور ویژه برای کودکان پیشنهاد می‌کند.","A list of foods and drinks specially offered by a restaurant for children.","قائمة أطعمة ومشروبات يقدّمها المطعم خصيصاً للأطفال."],
 "کارشناس":["فردی که در زمینه‌ای دانش و مهارت تخصصی دارد و می‌تواند نظر حرفه‌ای بدهد.","A person with specialised knowledge and skill who can provide expert advice.","شخص يمتلك معرفة ومهارة متخصّصة في مجال معيّن ويمكنه تقديم رأي خبير."],
 "باورکردنی":["چیزی که پذیرفتن یا واقعی دانستن آن برای انسان آسان و منطقی به نظر می‌رسد.","Something that seems plausible or easy to believe.","شيء يبدو معقولاً ويمكن تصديقه بسهولة."],
 "فیل و فنجان":["اصطلاحی برای دو چیز بسیار نامتناسب که با یکدیگر جور درنمی‌آیند.","An idiom describing two things that are extremely mismatched and do not go together.","تعبير عن شيئين غير متناسبين إطلاقاً ولا ينسجم أحدهما مع الآخر."],
 "فواره":["وسیله یا سازه‌ای که آب را با فشار به بالا یا اطراف پرتاب می‌کند.","A structure or device that sends water upward or outward in a jet.","منشأة أو جهاز يدفع الماء إلى الأعلى أو إلى الخارج على شكل نافورة."],
 "هشدار":["پیامی برای آگاه کردن دیگران از خطر، مشکل یا اتفاقی که ممکن است رخ دهد.","A warning that alerts people to a danger, problem, or possible event.","تنبيه يُعلِم الآخرين بخطر أو مشكلة أو حدث محتمل."],
 "خداحافظی":["عبارت یا رفتاری برای پایان دادن محترمانه به دیدار یا گفت‌وگو هنگام جدا شدن.","Words or actions used to say goodbye politely when parting.","كلمات أو تصرّف يُستعمل لإنهاء اللقاء أو الحديث بأدب عند الافتراق."],
 "اینترنت":["شبکهٔ جهانی‌ای که دستگاه‌ها و کاربران را برای تبادل اطلاعات و خدمات به هم متصل می‌کند.","The worldwide network connecting devices and users to exchange information and services.","الشبكة العالمية التي تربط الأجهزة والمستخدمين لتبادل المعلومات والخدمات."],
 "شمارهٔ اشتراک":["شماره‌ای که برای شناسایی یک مشترک یا حساب خدماتی به او اختصاص داده می‌شود.","A number assigned to identify a subscriber or service account.","رقم يُخصّص للتعرّف على مشترك أو حساب خدمة."],
 "مسابقه":["رقابت میان افراد یا گروه‌ها برای سنجش مهارت، سرعت یا توانایی و تعیین برنده.","A competition between people or teams to test skill, speed, or ability and determine a winner.","منافسة بين أفراد أو فرق لاختبار المهارة أو السرعة أو القدرة وتحديد الفائز."],
 "خبر":["اطلاعی دربارهٔ رویداد یا موضوعی که برای آگاه کردن دیگران بیان یا منتشر می‌شود.","Information about an event or subject that is communicated or published.","معلومة عن حدث أو موضوع تُنقل أو تُنشر لإعلام الآخرين."],
 "منبع خبری":["شخص، سازمان یا مدرکی که اطلاعات یک خبر از آن به دست می‌آید.","A person, organisation, or document from which news information is obtained.","شخص أو مؤسسة أو وثيقة تُستمدّ منها معلومات الخبر."],
 "سوختگی":["آسیب پوست یا بافت بدن بر اثر گرما، مواد شیمیایی، برق یا تابش.","Damage to skin or body tissue caused by heat, chemicals, electricity, or radiation.","تلف يصيب الجلد أو أنسجة الجسم بسبب الحرارة أو المواد الكيميائية أو الكهرباء أو الإشعاع."],
 "اورژانس":["بخش یا خدمتی برای رسیدگی فوری به بیماری‌ها و آسیب‌های ناگهانی و خطرناک.","A service or department that provides immediate care for sudden, serious illness or injury.","قسم أو خدمة تقدّم الرعاية العاجلة للأمراض والإصابات المفاجئة والخطيرة."],
 "پزشک عمومی":["پزشکی که بیماری‌های رایج را ارزیابی و درمان اولیه می‌کند و در صورت نیاز بیمار را ارجاع می‌دهد.","A doctor who assesses common illnesses, provides primary care, and refers patients when needed.","طبيب يقيّم الأمراض الشائعة ويقدّم الرعاية الأولية ويحوّل المريض عند الحاجة."],
 "جراح":["پزشکی که برای درمان بیماری یا آسیب، عمل جراحی انجام می‌دهد.","A doctor who performs surgical operations to treat illness or injury.","طبيب يجري عمليات جراحية لعلاج المرض أو الإصابة."],
 "تگرگ":["بارش دانه‌های یخ که از ابرها به زمین می‌افتند.","Precipitation in the form of balls or lumps of ice falling from clouds.","هطول على شكل كرات أو كتل من الجليد تسقط من السحب."],
 "آتش‌سوزی":["سوختن ناخواسته و گسترش آتش در ساختمان، جنگل یا محل دیگر.","An uncontrolled fire that burns in a building, forest, or other place.","حريق غير مسيطر عليه يشتعل في مبنى أو غابة أو مكان آخر."],
 "زیارتگاه":["مکانی که مردم برای زیارت و ادای احترام به شخص مقدس یا یادبود مذهبی به آن می‌روند.","A place people visit to pay respects to a sacred person or religious memorial.","مكان يزوره الناس لزيارة شخصية مقدّسة أو مَعلَم ديني وأداء الاحترام."],
 "بازیگر":["هنرمندی که نقش یک شخصیت را در فیلم، تئاتر یا برنامه اجرا می‌کند.","A performer who plays a character in a film, theatre production, or programme.","فنّان يؤدّي دور شخصية في فيلم أو مسرحية أو برنامج."],
 "فیلم‌نامه‌نویس":["فردی که داستان، صحنه‌ها و گفت‌وگوهای یک فیلم را می‌نویسد.","A person who writes the story, scenes, and dialogue for a film.","شخص يكتب قصة الفيلم ومشاهده وحواراته."]
 };
 for(const [fa,v] of Object.entries(rows)) S[fa]={...(S[fa]||{}),faMeaning:v[0],enMeaning:v[1],arMeaning:v[2],faSynonyms:(S[fa]||{}).faSynonyms||[],enSynonyms:(S[fa]||{}).enSynonyms||[],arSynonyms:(S[fa]||{}).arSynonyms||[]};
 window.TERM2_ADDITIONAL_SEMANTICS_BATCH3=Object.keys(rows);
})();