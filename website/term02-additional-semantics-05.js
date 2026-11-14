/* Term 02 additional vocabulary — semantic batch 5. */
(()=> {
 const S=window.PERSIAN_SEMANTICS||(window.PERSIAN_SEMANTICS={});
 const rows={
 "هیجان‌انگیز":["چیزی که احساس شور، اشتیاق یا هیجان زیادی ایجاد می‌کند.","Something that creates strong excitement, enthusiasm, or suspense.","شيء يثير الحماس أو التشوّق أو الانفعال الشديد."],
 "برنامهٔ تلویزیونی":["محتوایی که در زمان مشخص از شبکهٔ تلویزیونی پخش می‌شود؛ مانند خبر، گفت‌وگو یا سرگرمی.","Content broadcast on television at a scheduled time, such as news, interviews, or entertainment.","محتوى يُبثّ عبر قناة تلفزيونية في وقت محدّد، مثل الأخبار أو المقابلات أو الترفيه."],
 "جشنواره":["رویدادی فرهنگی یا هنری که در آن آثار، اجراها یا فعالیت‌های گوناگون ارائه و گرامی داشته می‌شوند.","A cultural or artistic event featuring and celebrating various works, performances, or activities.","فعالية ثقافية أو فنية تُعرض فيها أعمال أو عروض أو أنشطة متنوعة ويُحتفى بها."],
 "صفت برتر":["ساخت صفتی در دستور زبان که برترین درجهٔ یک ویژگی را میان چند مورد نشان می‌دهد.","The superlative form of an adjective, expressing the highest degree of a quality among several items.","صيغة التفضيل العليا للصفة، وتدلّ على أعلى درجة من خاصية بين عدة أشياء."],
 "تابلو":["صفحه یا سطحی برای نمایش تصویر یا نوشته؛ مانند تابلوی نقاشی یا علامت راهنمایی.","A board or surface displaying an image or writing, such as a painting or sign.","لوحة أو سطح يُعرض عليه رسم أو كتابة، مثل لوحة فنية أو إشارة."],
 "کم‌رویی":["احساس خجالت و دشواری در آغاز گفت‌وگو یا رفتار آزادانه در جمع.","Shyness; feeling awkward or hesitant when speaking or acting freely among others.","الخجل والتردّد في بدء الحديث أو التصرّف بحرية أمام الآخرين."],
 "گذشتهٔ استمراری":["زمان فعلی در دستور فارسی برای بیان کاری که در گذشته در حال انجام بوده است.","A Persian past progressive tense used for an action that was ongoing in the past.","زمن ماضٍ مستمر في الفارسية يعبّر عن فعل كان جارياً في الماضي."],
 "شمارهٔ پرواز":["شماره یا کدی که برای شناسایی یک پرواز مشخص به کار می‌رود.","The number or code used to identify a particular flight.","رقم أو رمز يُستعمل للتعرّف على رحلة جوية معيّنة."],
 "خط عابر پیاده":["بخش علامت‌گذاری‌شدهٔ خیابان که عابران از آن برای عبور ایمن استفاده می‌کنند.","A marked part of a road where pedestrians can cross safely.","جزء محدّد بعلامات على الطريق يعبر منه المشاة بأمان."],
 "ماضی استمراری":["زمانی برای بیان کاری که در گذشته ادامه داشته یا در حال انجام بوده است.","A tense used for an action that continued or was in progress in the past.","زمن يُستعمل للتعبير عن فعل استمرّ أو كان جارياً في الماضي."],
 "در بین راه":["در مسیر حرکت از یک مبدأ به مقصد؛ در طول راه.","While travelling from a starting point to a destination; on the way.","أثناء الانتقال من نقطة البداية إلى الوجهة؛ في الطريق."],
 "ماضی بعید":["زمانی در دستور فارسی برای بیان کاری که پیش از رویداد دیگری در گذشته انجام شده بود.","The Persian past perfect tense, describing an action completed before another past event.","زمن الماضي التام في الفارسية، ويصف فعلاً اكتمل قبل حدث آخر في الماضي."],
 "آماده‌سازی":["کارهایی که برای مهیا کردن چیزی یا فراهم کردن شرایط لازم انجام می‌شود.","The process of preparing something or making the necessary arrangements.","عملية تجهيز شيء أو إعداد الترتيبات والظروف اللازمة."],
 "به روی چشم":["عبارتی مؤدبانه برای پذیرفتن درخواست با میل و احترام؛ یعنی با کمال میل انجام می‌دهم.","A polite expression accepting a request willingly and respectfully: 'certainly, with pleasure'.","عبارة مهذّبة لقبول الطلب برغبة واحترام، بمعنى: بكل سرور."],
 "پاکیزگی":["تمیز و عاری از آلودگی بودن؛ رعایت نظافت در محیط و بدن.","Cleanliness; the state or practice of being clean and free from dirt.","النظافة وخلوّ المكان أو الجسم من الأوساخ والتلوّث."],
 "رزرو اتاق":["از پیش درخواست و ثبت کردن یک اتاق در هتل یا اقامتگاه برای زمان مشخص.","The act of booking a room at a hotel or lodging for a specified time.","إجراء حجز غرفة في فندق أو مكان إقامة لوقت محدّد."],
 "فوق‌لیسانس":["مدرک دانشگاهی کارشناسی ارشد که پس از دورهٔ کارشناسی گرفته می‌شود.","A master's degree earned after completing a bachelor's degree.","شهادة الماجستير التي تُنال بعد إكمال مرحلة البكالوريوس."],
 "روان‌شناسی":["دانش مطالعهٔ ذهن، احساسات، رفتار و فرایندهای روانی انسان.","The scientific study of the human mind, emotions, behaviour, and mental processes.","علم دراسة العقل البشري والمشاعر والسلوك والعمليات النفسية."],
 "تعویض":["جایگزین کردن چیزی با چیز دیگر یا مبادلهٔ دو چیز.","The act of replacing one thing with another or exchanging two things.","استبدال شيء بآخر أو مبادلة شيئين."],
 "اصطلاح":["ترکیب یا عبارتی رایج که معنای آن گاهی از معنی تک‌تک واژه‌هایش قابل حدس نیست.","A commonly used expression whose meaning may not be clear from the individual words.","تعبير شائع قد لا يُفهم معناه من معاني كلماته المفردة."],
 "مضارع مستمر":["زمانی برای بیان کاری که در زمان حال در حال انجام است.","A present continuous tense describing an action happening now.","زمن المضارع المستمر الذي يصف فعلاً يحدث الآن."],
 "بستری شدن":["در بیمارستان پذیرش شدن و برای درمان یا مراقبت در آنجا ماندن.","To be admitted to a hospital and stay there for treatment or care.","أُدخلَ إلى المستشفى وأقام فيه للعلاج أو الرعاية."],
 "انجام دادن":["کاری را به مرحلهٔ عمل رساندن و آن را اجرا کردن.","To carry out, perform, or complete an action or task.","نفّذَ عملاً أو أدّى مهمةً وأتمّها."],
 "بازداشت شدن":["توسط پلیس یا مقام قانونی دستگیر و برای بررسی یا رسیدگی نگه داشته شدن.","To be arrested and held by police or legal authorities for investigation or proceedings.","قُبضَ عليه واحتُجز من قبل الشرطة أو السلطات القانونية للتحقيق أو الإجراءات."],
 "ناراحت شدن":["احساس غم، دلخوری یا نگرانی پیدا کردن.","To become sad, upset, hurt, or worried.","حزنَ أو انزعجَ أو شعر بالأذى أو القلق."],
 "حرکت دادن":["چیزی یا بخشی از بدن را از جای خود به موقعیت دیگری بردن.","To move something or a body part from one position to another.","حرّكَ شيئاً أو جزءاً من الجسم من موضع إلى آخر."],
 "مرخص شدن":["پس از پایان درمان یا مراقبت، اجازهٔ خروج از بیمارستان یا مرکز را دریافت کردن.","To be discharged from a hospital or facility after treatment or care.","حصلَ على إذن الخروج من المستشفى أو المركز بعد انتهاء العلاج أو الرعاية."],
 "آواره شدن":["خانه یا محل زندگی خود را از دست دادن و ناچار به جابه‌جایی و سرگردانی شدن.","To become displaced and be forced to leave one's home or usual place of residence.","أصبح نازحاً واضطرّ إلى ترك منزله أو مكان إقامته المعتاد."],
 "بیرون آوردن":["چیزی یا کسی را از داخل مکان یا ظرفی خارج کردن.","To take or bring something or someone out of a place or container.","أخرجَ شيئاً أو شخصاً من داخل مكان أو وعاء."],
 "سفر کردن":["از مکانی به مکان دیگر رفتن، معمولاً برای کار، زیارت، دیدار یا تفریح.","To travel from one place to another, for work, pilgrimage, visiting, or leisure.","سافرَ من مكان إلى آخر للعمل أو الزيارة أو السياحة أو الترفيه."]
 };
 for(const [fa,v] of Object.entries(rows)) S[fa]={...(S[fa]||{}),faMeaning:v[0],enMeaning:v[1],arMeaning:v[2],faSynonyms:(S[fa]||{}).faSynonyms||[],enSynonyms:(S[fa]||{}).enSynonyms||[],arSynonyms:(S[fa]||{}).arSynonyms||[]};
 window.TERM2_ADDITIONAL_SEMANTICS_BATCH5=Object.keys(rows);
})();