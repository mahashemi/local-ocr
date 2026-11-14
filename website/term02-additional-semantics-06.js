/* Term 02 additional vocabulary — semantic batch 6.
   Each entry has a learner-oriented Persian definition and natural English and Arabic equivalents. */
(()=> {
 const S=window.PERSIAN_SEMANTICS||(window.PERSIAN_SEMANTICS={});
 const rows={
 "ورزش کردن":["برای حفظ سلامت و آمادگی جسمانی، فعالیت بدنی و تمرین انجام دادن.","To exercise or take part in physical activity to maintain health and fitness.","مارسَ نشاطاً بدنياً أو تمرّن للمحافظة على الصحة واللياقة."],
 "بیمارستان":["مرکزی درمانی که بیماران برای معاینه، درمان، جراحی یا مراقبت پزشکی به آن مراجعه می‌کنند.","A medical facility where people receive examination, treatment, surgery, or inpatient care.","مرفق طبي يراجعُه المرضى للفحص أو العلاج أو الجراحة أو الرعاية."],
 "بازی کردن":["برای سرگرمی یا تمرین، در یک بازی یا فعالیت تفریحی شرکت کردن.","To take part in a game or recreational activity for enjoyment or practice.","لَعِبَ أو شاركَ في لعبة أو نشاط ترفيهي للتسلية أو التدريب."],
 "برگشتن":["از جایی به محل پیشین یا نقطهٔ آغاز بازآمدن.","To return to a previous place or starting point.","عادَ إلى مكان سابق أو إلى نقطة البداية."],
 "تحصیل کردن":["در مدرسه، دانشگاه یا مرکز آموزشی درس خواندن و دانش یا مهارت آموختن.","To study at a school, university, or other educational institution.","درسَ في مدرسة أو جامعة أو مؤسسة تعليمية واكتسب المعرفة أو المهارة."],
 "مسابقات ورزشی":["رویدادهایی که در آن ورزشکاران یا تیم‌ها برای کسب نتیجه یا مقام با یکدیگر رقابت می‌کنند.","Sports competitions in which athletes or teams compete for a result, title, or ranking.","منافسات رياضية يتبارى فيها اللاعبون أو الفرق للفوز بنتيجة أو لقب أو مركز."],
 "خوش‌اخلاق":["کسی که رفتار خوشایند، مهربان و محترمانه با دیگران دارد.","Good-natured; someone who treats others kindly and pleasantly.","حَسَن الخُلُق؛ شخص يعامل الآخرين بلطف وودّ واحترام."],
 "نقاشی کردن":["با رنگ، مداد یا ابزار دیگر تصویر یا طرحی روی کاغذ، بوم یا سطحی دیگر ایجاد کردن.","To make a picture or design using paint, pencils, or other materials.","رسَمَ صورة أو شكلاً باستعمال الألوان أو الأقلام أو أدوات أخرى."],
 "مصرف کردن":["چیزی مانند غذا، آب، انرژی یا دارو را استفاده کردن یا به کار بردن.","To use or consume something such as food, water, energy, or medicine.","استهلكَ أو استعملَ شيئاً مثل الطعام أو الماء أو الطاقة أو الدواء."],
 "مهمان‌نواز":["کسی که با گرمی و احترام از مهمانان پذیرایی می‌کند.","Hospitable; welcoming and generously caring for guests.","مُضياف؛ يُحسن استقبال الضيوف ويكرمهم."],
 "سلام":["واژه یا عبارتی برای آغاز دیدار یا گفت‌وگو و ابراز درود و احترام.","A greeting used to begin an encounter or conversation and express goodwill.","تحيّة تُقال عند اللقاء أو بدء الحديث للتعبير عن الودّ والاحترام."],
 "ورزشکار":["فردی که به‌طور منظم یک یا چند رشتهٔ ورزشی را تمرین یا دنبال می‌کند.","A person who regularly trains in or takes part in one or more sports.","شخص يمارس رياضةً أو أكثر ويتدرّب عليها بانتظام."],
 "مقصد":["جایی که مسافر یا حرکت‌کننده قصد دارد به آن برسد؛ هدف نهایی سفر.","The place someone is travelling to; the intended endpoint of a journey.","المكان الذي يقصد المسافر الوصول إليه؛ أي الوجهة النهائية للرحلة."],
 "تاکسی":["خودرویی کرایه‌ای که مسافران را در برابر دریافت کرایه به مقصد می‌رساند.","A hired car that transports passengers to a destination in return for a fare.","سيارة أجرة تنقل الركاب إلى وجهتهم مقابل أجرة."],
 "تصادف کردن":["با وسیلهٔ نقلیه یا شیء دیگری برخورد ناخواسته و ناگهانی داشتن؛ معمولاً دربارهٔ حادثهٔ رانندگی.","To be involved in an accidental collision, especially a road traffic accident.","تعرّضَ لاصطدام غير مقصود ومفاجئ، ولا سيّما في حادث مروري."],
 "مشورت کردن":["برای تصمیم‌گیری یا حل مسئله، نظر و راهنمایی فرد آگاه دیگری را خواستن.","To seek another person's advice or opinion before making a decision or solving a problem.","استشارَ شخصاً آخر وطلب رأيه أو نصيحته لاتخاذ قرار أو حلّ مشكلة."],
 "ضعیف شدن":["از نظر نیرو، توانایی، سلامت یا شدت، قدرت کمتری پیدا کردن.","To become weaker in strength, ability, health, or intensity.","ضَعُفَ وأصبح أقلّ قوةً أو قدرةً أو صحةً أو شدّةً."],
 "تلویزیون دیدن":["به برنامه‌ها، فیلم‌ها یا خبرهایی که از تلویزیون پخش می‌شوند نگاه کردن.","To watch programmes, films, or news broadcast on television.","شاهدَ البرامج أو الأفلام أو الأخبار المعروضة على التلفاز."],
 "تمام کردن":["کاری را به پایان رساندن یا آخرین بخش چیزی را انجام دادن.","To finish or complete a task or the remaining part of something.","أتمَّ عملاً أو أنجزَ الجزء الأخير من شيء."],
 "خریدن":["در برابر پرداخت پول، کالا یا خدمتی را به دست آوردن.","To obtain a product or service by paying money for it.","اشترى سلعةً أو خدمةً مقابل دفع المال."],
 "کار کردن":["برای انجام وظیفه، کسب درآمد یا رسیدن به هدف، فعالیت و تلاش کردن.","To work; to perform tasks or make an effort, often for a job or a goal.","عَمِلَ وبذلَ جهداً لأداء مهمة أو كسب الرزق أو تحقيق هدف."],
 "مسواک زدن":["با مسواک دندان‌ها را تمیز کردن تا پلاک و باقی‌ماندهٔ غذا پاک شود.","To brush the teeth with a toothbrush to remove plaque and food residue.","نظّفَ الأسنان بفرشاة الأسنان لإزالة اللويحة وبقايا الطعام."],
 "باز و بسته کردن":["چیزی مانند در، پنجره یا قفل را از حالت بسته به باز و دوباره به حالت بسته بردن.","To open and close something such as a door, window, or lock.","فتحَ وأغلقَ شيئاً مثل الباب أو النافذة أو القفل."],
 "حرف زدن":["با زبان، واژه‌ها و جمله‌ها را برای ارتباط با دیگران بیان کردن.","To speak or talk with other people using words and sentences.","تكلّمَ مع الآخرين باستعمال الكلمات والجمل."],
 "متوجه شدن":["موضوع یا معنایی را فهمیدن، یا به وجود چیزی پی بردن.","To understand something or become aware of it.","فَهِمَ أمراً أو أدركَ وجوده أو معناه."],
 "اضافه کردن":["چیزی را به چیز یا مقدار دیگری افزودن تا مجموعه یا مقدار آن بیشتر شود.","To add something to another thing or amount, increasing the total.","أضافَ شيئاً إلى شيء أو كمية أخرى فزادَ المجموع."],
 "خوردن":["غذا یا خوراکی را از راه دهان وارد بدن کردن.","To eat food by taking it into the mouth and swallowing it.","أكلَ الطعام وأدخله إلى الفم ثم ابتلعه."],
 "سبزی خوردن":["سبزی‌های تازه‌ای مانند ریحان، تره و نعناع را همراه غذا خوردن.","To eat fresh herbs and leafy greens, such as basil, leek, and mint, with a meal.","تناولَ الأعشاب والخضروات الورقية الطازجة، كالريحان والكرّاث والنعناع، مع الطعام."],
 "اتاق گرفتن":["برای اقامت، اتاقی را در هتل یا محل سکونت موقت انتخاب و اجاره کردن.","To obtain or book a room for a stay, usually at a hotel or guesthouse.","حجزَ غرفةً أو استأجرها للإقامة، عادةً في فندق أو دار ضيافة."],
 "دیدن":["با چشم چیزی یا کسی را مشاهده کردن؛ همچنین به ملاقات کسی رفتن.","To see or look at someone or something; also, to visit someone.","رأى شخصاً أو شيئاً بعينيه؛ ويأتي أيضاً بمعنى زار شخصاً."],
 "درس خواندن":["برای یادگیری، فهمیدن یا آمادگی برای آزمون، مطالب درسی را مطالعه کردن.","To study or review lessons in order to learn, understand, or prepare for an exam.","درسَ وراجعَ المواد التعليمية للتعلّم أو الفهم أو الاستعداد للامتحان."]
 };
 for(const [fa,v] of Object.entries(rows)) S[fa]={...(S[fa]||{}),faMeaning:v[0],enMeaning:v[1],arMeaning:v[2],faSynonyms:(S[fa]||{}).faSynonyms||[],enSynonyms:(S[fa]||{}).enSynonyms||[],arSynonyms:(S[fa]||{}).arSynonyms||[]};
 window.TERM2_ADDITIONAL_SEMANTICS_BATCH6=Object.keys(rows);
})();