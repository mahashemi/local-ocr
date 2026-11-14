/* Term 01 core vocabulary — Persian, English and Arabic semantic explanations.
   These complete the semantic layer for the remaining core F1 entries. */
(()=> {
 const S=window.PERSIAN_SEMANTICS||(window.PERSIAN_SEMANTICS={});
 const rows={
 "اتاق خواب":["اتاقی در خانه که برای خوابیدن و استراحت شبانه استفاده می‌شود.","A room in a home used mainly for sleeping and resting.","غرفةٌ في المنزل تُستعمل أساساً للنوم والراحة."],
 "پذیرایی":["بخش اصلی خانه برای نشستن، پذیرایی از مهمان و دورهمی خانواده.","The main living room used for sitting, receiving guests, and family gatherings.","غرفة المعيشة الرئيسية للجلوس واستقبال الضيوف واجتماع أفراد الأسرة."],
 "آشپزخانه":["بخشی از خانه که در آن غذا آماده و پخته می‌شود.","The part of a home where food is prepared and cooked.","جزءٌ من المنزل يُحضَّر فيه الطعام ويُطبخ."],
 "حیاط":["فضای بازِ داخل یا کنار ساختمان که معمولاً برای رفت‌وآمد، استراحت یا نگهداری گیاهان است.","An open area inside or beside a building, often used for access, relaxation, or plants.","مساحةٌ مفتوحة داخل المبنى أو بجانبه، تُستعمل غالباً للمرور أو الاستراحة أو زراعة النباتات."],
 "باغچه":["قسمت کوچکی از زمین که در آن گل، سبزی یا گیاه پرورش می‌دهند.","A small plot where flowers, vegetables, or other plants are grown.","قطعةٌ صغيرة من الأرض تُزرع فيها الأزهار أو الخضراوات أو النباتات."],
 "طبقه":["یکی از بخش‌های افقی ساختمان؛ همچنین به معنای لایه یا مرتبه.","One level or storey of a building; also a layer or rank.","مستوى أفقي من المبنى؛ ويأتي أيضاً بمعنى طبقة أو مرتبة."],
 "پله":["هر یک از سطح‌های کوتاه و پیاپی در راه‌پله که برای بالا یا پایین رفتن استفاده می‌شود.","One of the steps in a staircase, used to go up or down.","درجةٌ من درجات السُّلَّم تُستعمل للصعود أو النزول."],
 "مستقیم":["بدون پیچ‌وخم یا تغییر جهت؛ در راهنمایی مسیر یعنی در همان جهت ادامه دادن.","Without bending or changing direction; in directions, continue along the same route.","من دون انحناء أو تغيير في الاتجاه؛ وفي إرشاد الطريق تعني متابعة السير في الاتجاه نفسه."],
 "جلوتر":["در فاصله‌ای پیشِ رو و دورتر از جایگاه کنونی.","At a point farther ahead from the current position.","في موضعٍ أبعد إلى الأمام من المكان الحالي."],
 "میدان":["فضای باز و معمولاً گسترده در شهر که چند خیابان ممکن است به آن برسند.","An open public square or plaza in a town or city, sometimes where several streets meet.","ساحةٌ عامة مفتوحة في البلدة أو المدينة، وقد تلتقي عندها عدة شوارع."],
 "کوچه":["گذر یا خیابان باریک، معمولاً میان خانه‌ها و ساختمان‌ها.","A narrow lane or alley, usually between houses or buildings.","زقاق أو ممرّ ضيّق، غالباً بين البيوت والمباني."],
 "پلاک":["شماره‌ای که برای مشخص کردن خانه، ساختمان یا واحد در یک نشانی به کار می‌رود.","A number used to identify a house, building, or unit in an address.","رقمٌ يُستعمل لتحديد منزل أو مبنى أو وحدة ضمن العنوان."],
 "رد شدن":["از کنار یا میان چیزی عبور کردن و از آن گذشتن.","To pass by, across, or through something.","اجتازَ شيئاً أو مرَّ بجانبه أو عبره."],
 "استراحت کردن":["برای رفع خستگی، مدتی کار و فعالیت را متوقف کردن و آرام گرفتن.","To pause work or activity for a while in order to relax and recover energy.","توقّفَ عن العمل أو النشاط مدةً للراحة واستعادة النشاط."],
 "خوابیدن":["به حالت خواب رفتن و برای مدتی در خواب بودن.","To fall asleep and remain asleep for a period of time.","دخلَ في النوم وبقي نائماً مدةً من الزمن."],
 "هر روز":["در تک‌تک روزها؛ به‌صورت روزانه و پیوسته.","On every day; daily or each day.","في كلّ يوم؛ بصورة يومية."],
 "تمیز کردن":["چرک، گردوغبار یا آلودگی را از چیزی یا مکانی پاک کردن.","To remove dirt, dust, or unwanted material from something or a place.","أزالَ الأوساخ أو الغبار أو التلوّث عن شيءٍ أو مكان."],
 "غذا پختن":["مواد غذایی را با گرما آماده کردن تا قابل خوردن شوند.","To prepare food by applying heat so that it is ready to eat.","طهى الطعام باستعمال الحرارة ليصبح صالحاً للأكل."],
 "ظرف شستن":["بشقاب‌ها، لیوان‌ها و دیگر وسایل غذاخوری را پس از استفاده شستن.","To wash plates, cups, and other eating utensils after use.","غسلَ الصحون والأكواب وسائر أدوات الطعام بعد استعمالها."],
 "خرید کردن":["برای به دست آوردن کالا یا خدمات، چیزی را از فروشگاه یا فروشنده خریدن.","To buy goods or services from a shop or seller.","اشترى سلعاً أو خدماتٍ من متجر أو بائع."],
 "آب دادن":["به گیاه آب رساندن؛ یا در معنای کلی‌تر به کسی آب دادن.","To water a plant; more generally, to give water to someone.","سقى نباتاً؛ ويأتي عموماً بمعنى أعطى الماء لشخص."],
 "حدود":["مقدار یا اندازه‌ای تقریبی، نه عددی کاملاً دقیق.","An approximate amount or figure, rather than an exact one.","مقدار أو رقم تقريبي، لا قيمة دقيقة تماماً."],
 "تقویم":["جدولی یا سامانه‌ای که روزها، هفته‌ها، ماه‌ها و تاریخ‌ها را نشان می‌دهد.","A chart or system showing days, weeks, months, and dates.","جدول أو نظام يبيّن الأيام والأسابيع والأشهر والتواريخ."],
 "آب‌وهوا":["وضعیت معمول یا فعلی جوّ یک منطقه، مانند دما، باد، باران و رطوبت.","The usual or current atmospheric conditions in a place, such as temperature, wind, rain, and humidity.","حالة الجو المعتادة أو الحالية في منطقة، مثل الحرارة والرياح والمطر والرطوبة."],
 "بهار":["فصل پس از زمستان و پیش از تابستان که معمولاً با هوای ملایم و شکوفه‌دادن گیاهان همراه است.","The season after winter and before summer, often associated with mild weather and blooming plants.","الفصل الذي يأتي بعد الشتاء وقبل الصيف، ويتميّز غالباً باعتدال الطقس وتفتّح النباتات."],
 "تابستان":["گرم‌ترین فصل سال در بسیاری از مناطق، میان بهار و پاییز.","The warmest season of the year in many regions, between spring and autumn.","أحرّ فصول السنة في مناطق كثيرة، ويقع بين الربيع والخريف."],
 "پاییز":["فصل پس از تابستان و پیش از زمستان که در بسیاری از مناطق برگ درختان تغییر رنگ می‌دهد و می‌ریزد.","The season after summer and before winter, when leaves often change colour and fall.","الفصل الذي يأتي بعد الصيف وقبل الشتاء، وتتغيّر فيه ألوان أوراق الأشجار وتتساقط غالباً."],
 "زمستان":["سردترین فصل سال در بسیاری از مناطق، پس از پاییز و پیش از بهار.","The coldest season of the year in many regions, after autumn and before spring.","أبرد فصول السنة في مناطق كثيرة، ويأتي بعد الخريف وقبل الربيع."],
 "آفتابی":["دارای نور خورشید و بدون پوشش گستردهٔ ابر در آسمان.","Having plenty of sunshine, with little or no cloud cover.","مشمس؛ تشرق فيه الشمس مع قلّة الغيوم أو انعدامها."],
 "برف‌بازی":["بازی و سرگرمی با برف، مانند گلوله‌برفی درست کردن یا آدم‌برفی ساختن.","Playing in the snow, for example making snowballs or building a snowman.","اللعب بالثلج، مثل صنع كرات الثلج أو رجل الثلج."],
 "جشن تولد":["مراسم یا مهمانی برای بزرگداشت سالروز تولد یک شخص.","A party or celebration held to mark someone's birthday.","حفلة أو مناسبة احتفالية لإحياء ذكرى ميلاد شخص."],
 "هدیه":["چیزی که بدون دریافت پول، برای ابراز محبت، احترام یا شادی به دیگری داده می‌شود.","Something given to another person without payment, to show affection, respect, or celebration.","شيءٌ يُقدَّم إلى شخصٍ آخر من دون مقابل، تعبيراً عن المودة أو الاحترام أو الاحتفال."]
 };
 for(const [fa,v] of Object.entries(rows)) S[fa]={...(S[fa]||{}),faMeaning:v[0],enMeaning:v[1],arMeaning:v[2],faSynonyms:(S[fa]||{}).faSynonyms||[],enSynonyms:(S[fa]||{}).enSynonyms||[],arSynonyms:(S[fa]||{}).arSynonyms||[]};
 window.TERM1_CORE_SEMANTICS_COUNT=Object.keys(rows).length;
 window.TERM1_CORE_SEMANTICS_KEYS=Object.keys(rows);
})();