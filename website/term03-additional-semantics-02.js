/* Term 03 additional vocabulary — semantic batch 2. */
(()=> {
 const S=window.PERSIAN_SEMANTICS||(window.PERSIAN_SEMANTICS={});
 const rows={
 "اولویت":["اهمیت یا تقدم بیشتری که باعث می‌شود کاری زودتر یا پیش از کارهای دیگر انجام شود.","The greater importance or precedence that makes something come before other tasks.","أهمية أو أولوية تجعل أمراً ما يُنجز قبل غيره."],
 "خرج کردن":["پول را برای خرید، خدمت یا نیاز مشخصی پرداخت کردن.","To spend money on a purchase, service, or particular need.","أنفقَ المال على شراء أو خدمة أو حاجة معيّنة."],
 "ضایع کردن حق":["حق یا سهم قانونی و اخلاقی شخصی را نادیده گرفتن یا از او گرفتن.","To disregard or deprive someone of a right or rightful share.","تجاهلَ حق شخص أو حرمه من حقّه أو نصيبه المستحق."],
 "قرارداد":["توافق رسمی میان دو یا چند طرف که تعهدها و شرایط آن‌ها را مشخص می‌کند.","A formal agreement between two or more parties that sets out their obligations and terms.","اتفاق رسمي بين طرفين أو أكثر يحدّد التزاماتهم وشروطهم."],
 "نوسان":["تغییر و بالا و پایین رفتن مقدار یا وضعیت چیزی در طول زمان.","A variation or repeated rise and fall in the level or condition of something.","تغيّر وتقلّب قيمة شيء أو حالته صعوداً وهبوطاً مع الزمن."],
 "پرس‌وجو کردن":["برای به دست آوردن اطلاعات، از افراد سؤال کردن یا دربارهٔ موضوعی تحقیق کردن.","To make enquiries or ask people for information about something.","استفسرَ وسأل الأشخاص للحصول على معلومات عن أمر."],
 "سیستم ایمنی":["مجموعهٔ سلول‌ها، بافت‌ها و اندام‌هایی که از بدن در برابر عوامل بیماری‌زا دفاع می‌کنند.","The cells, tissues, and organs that defend the body against disease-causing agents.","مجموعة الخلايا والأنسجة والأعضاء التي تدافع عن الجسم ضد مسبّبات الأمراض."],
 "آرام‌بخش":["دارو یا چیزی که اضطراب و تنش را کاهش می‌دهد و باعث آرامش می‌شود.","A medicine or substance that reduces anxiety or tension and produces calm.","دواء أو مادة تخفّف القلق أو التوتر وتسبّب الهدوء."],
 "برخورد قانونی":["اقدام رسمی و مطابق قانون در برابر تخلف یا رفتار ممنوع.","An official response taken according to the law against a violation or prohibited conduct.","إجراء رسمي وفق القانون تجاه مخالفة أو سلوك محظور."],
 "نسل‌های آینده":["افرادی که در سال‌ها و دوره‌های پس از زمان حاضر زندگی خواهند کرد.","People who will live in the years and periods after the present.","الأجيال التي ستعيش في السنوات والعصور اللاحقة للحاضر."],
 "آب‌پاش":["وسیله‌ای که آب را به صورت قطره یا پاشش روی گیاهان یا سطحی دیگر می‌پراکند.","A device that sprays or distributes water over plants or another surface.","جهاز يرشّ الماء أو يوزّعه على النباتات أو سطح آخر."],
 "خشک‌کن":["دستگاهی که با گرما یا جریان هوا لباس یا ماده‌ای دیگر را خشک می‌کند.","A machine that dries clothes or another material using heat or airflow.","جهاز يجفّف الملابس أو مادة أخرى باستعمال الحرارة أو تدفّق الهواء."],
 "آب‌بها":["مبلغی که برای مصرف یا تأمین آب پرداخت می‌شود.","The charge or bill paid for water supply or consumption.","المبلغ أو الفاتورة التي تُدفع مقابل إمداد المياه أو استهلاكها."],
 "آب غیرآشامیدنی":["آبی که برای نوشیدن مناسب یا ایمن نیست، اما ممکن است برای شست‌وشو یا آبیاری استفاده شود.","Water that is not safe or suitable to drink but may be used for washing or irrigation.","ماء غير صالح أو غير آمن للشرب، وقد يُستعمل للغسل أو الري."],
 "عوارض":["پیامدها یا اثرهای یک کار یا وضعیت؛ همچنین هزینه‌ها و رسوم قانونی در برخی کاربردها.","Consequences or side effects of an action or condition; also fees or charges in some contexts.","النتائج أو الآثار المترتّبة على فعل أو حالة؛ وتأتي أيضاً بمعنى الرسوم في بعض السياقات."],
 "پولک":["صفحهٔ کوچک و نازکی که سطح بدن ماهی یا برخی خزندگان را می‌پوشاند.","A small, thin plate covering the body of a fish or some reptiles; a scale.","صفيحة صغيرة رقيقة تغطّي جسم السمكة أو بعض الزواحف؛ حرشفة."],
 "نیش":["اندام نوک‌تیز جانور برای گزیدن یا تزریق زهر؛ همچنین اثر گزش.","A sharp part of an animal used to bite or inject venom; also the bite itself.","جزء حادّ في الحيوان يُستعمل للّسع أو حقن السمّ؛ ويعني أيضاً أثر اللدغة."],
 "چنگال":["ناخن‌های خمیده و تیز پرندگان یا جانوران برای گرفتن و پاره کردن؛ همچنین ابزار غذاخوری.","The curved, sharp nails of birds or animals used to grip and tear; also a fork used for eating.","أظافر معقوفة وحادّة للطيور أو الحيوانات للإمساك والتمزيق؛ ويعني أيضاً شوكة الطعام."],
 "زنده‌زا":["جانوری که نوزاد زنده به دنیا می‌آورد، نه اینکه تخم بگذارد.","An animal that gives birth to live young rather than laying eggs.","حيوان يلد صغاراً أحياء بدلاً من وضع البيض."],
 "کوهان":["برآمدگی بزرگ روی پشت برخی جانوران، مانند شتر، که در شتر محل ذخیرهٔ چربی است.","A raised hump on the back of some animals, such as a camel, where fat is stored.","نتوء مرتفع على ظهر بعض الحيوانات كالجمل، ويُخزَّن فيه الدهن عند الجمل."],
 "گرمسیر":["منطقه‌ای با آب‌وهوای گرم، به‌ویژه در بیشتر ماه‌های سال.","A region with a warm climate, especially during most of the year.","منطقة ذات مناخ دافئ، ولا سيّما في معظم أشهر السنة."],
 "خون‌سرد":["در زیست‌شناسی، جانوری که دمای بدنش تا حد زیادی با دمای محیط تغییر می‌کند.","In biology, an animal whose body temperature changes substantially with the surrounding environment.","في علم الأحياء، حيوان تتغيّر حرارة جسمه بدرجة كبيرة تبعاً لحرارة البيئة المحيطة."],
 "دخالت کردن":["بدون دعوت یا ضرورت وارد کار یا مسئلهٔ دیگران شدن و در آن اثر گذاشتن.","To interfere in another person's affairs without invitation or necessity.","تدخّلَ في شؤون الآخرين من دون دعوة أو ضرورة وأثّر فيها."],
 "زاد و ولد":["فرایند تولیدمثل و به وجود آمدن فرزندان در انسان‌ها یا جانوران.","The process of reproduction and producing offspring in humans or animals.","عملية التكاثر وإنجاب الذرية لدى البشر أو الحيوانات."],
 "پناهگاه":["مکانی امن که انسان یا جانور در آن از خطر، آب‌وهوا یا آسیب در امان می‌ماند.","A safe place where a person or animal is protected from danger, weather, or harm.","مكان آمن يحتمي فيه الإنسان أو الحيوان من الخطر أو الطقس أو الأذى."],
 "محدودهٔ جغرافیایی":["منطقه یا گستره‌ای که یک مکان، پدیده یا گونه در آن قرار دارد یا پراکنده شده است.","The area or range in which a place, phenomenon, or species is located or distributed.","المنطقة أو النطاق الذي يوجد فيه مكان أو ظاهرة أو نوع حيّ أو ينتشر ضمنه."],
 "مومیایی":["جسد مرده‌ای که با روش‌های ویژه حفظ شده تا از پوسیدن جلوگیری شود.","A dead body preserved by special methods to prevent decay.","جسد متوفّى حُفظ بطرق خاصة لمنع تحلّله."],
 "قلمرو":["سرزمین یا محدوده‌ای که زیر فرمان یا مالکیت کسی است؛ همچنین حوزهٔ فعالیت یا دانش.","A territory under someone's rule or control; also a field or domain of activity or knowledge.","أرض تخضع لحكم شخص أو سيطرته؛ ويأتي أيضاً بمعنى مجال النشاط أو المعرفة."],
 "مؤسس":["شخصی که سازمان، نهاد یا مجموعه‌ای را پایه‌گذاری می‌کند.","A person who establishes or founds an organisation, institution, or group.","شخص يؤسّس منظمة أو مؤسسة أو مجموعة."],
 "دستاورد":["نتیجه یا موفقیتی ارزشمند که از تلاش، پژوهش یا فعالیت به دست می‌آید.","A valuable result or achievement gained through effort, research, or activity.","نتيجة أو إنجاز ذو قيمة يتحقّق بفضل الجهد أو البحث أو العمل."]
 };
 for(const [fa,v] of Object.entries(rows)) S[fa]={...(S[fa]||{}),faMeaning:v[0],enMeaning:v[1],arMeaning:v[2],faSynonyms:(S[fa]||{}).faSynonyms||[],enSynonyms:(S[fa]||{}).enSynonyms||[],arSynonyms:(S[fa]||{}).arSynonyms||[]};
 window.TERM3_ADDITIONAL_SEMANTICS_BATCH2=Object.keys(rows);
})();