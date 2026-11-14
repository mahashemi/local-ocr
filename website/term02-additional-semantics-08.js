/* Term 02 additional vocabulary — semantic batch 8. */
(()=> {
 const S=window.PERSIAN_SEMANTICS||(window.PERSIAN_SEMANTICS={});
 const rows={
 "نوشتن":["واژه‌ها، جمله‌ها یا متن را با دست یا ابزار نوشتاری ثبت کردن.","To write words, sentences, or a text by hand or with a writing device.","كتبَ كلمات أو جملاً أو نصاً باليد أو باستعمال أداة للكتابة."],
 "پیروز شدن":["در رقابت، مبارزه یا تلاش به نتیجهٔ برتر رسیدن و برنده شدن.","To win or achieve victory in a competition, struggle, or effort.","فازَ أو حقّقَ النصر في منافسة أو صراع أو مسعى."],
 "مبتلا شدن":["به بیماری یا مشکل خاصی دچار شدن.","To become affected by or contract a particular illness or problem.","أُصيبَ بمرض أو ابتُليَ بمشكلة معيّنة."],
 "اهمیت دادن":["چیزی یا کسی را مهم دانستن و برای آن توجه و ارزش قائل شدن.","To consider something or someone important and give it attention or value.","اهتمَّ بشيء أو شخص وعدّه مهماً ومنحه العناية والقيمة."],
 "تشویق کردن":["با سخن یا رفتار، کسی را به انجام کاری یا ادامهٔ تلاش دلگرم کردن.","To encourage someone through words or actions to do something or keep trying.","شجّعَ شخصاً بالكلام أو الفعل على القيام بأمر أو مواصلة المحاولة."],
 "برچسب زدن":["برچسبی را روی چیزی چسباندن؛ همچنین نسبت دادن یک عنوان یا صفت به شخص یا گروه.","To attach a label to an item; also, to assign a label or description to a person or group.","ألصقَ بطاقةً على شيء؛ ويأتي أيضاً بمعنى إطلاق وصف أو تصنيف على شخص أو جماعة."],
 "توقف کردن":["حرکت یا فعالیت را متوقف ساختن یا برای مدتی از ادامهٔ آن دست کشیدن.","To stop moving or doing an activity, either temporarily or completely.","توقّفَ عن الحركة أو النشاط، مؤقتاً أو نهائياً."],
 "خالی کردن":["محتویات یا افراد را از داخل چیزی بیرون آوردن تا آن خالی شود.","To remove the contents or people from something so that it becomes empty.","أفرغَ الشيء من محتوياته أو أخرجَ الأشخاص منه حتى يصبح خالياً."],
 "مخلوط شدن":["دو یا چند ماده یا چیز با یکدیگر ترکیب شدن و درهم آمیختن.","For two or more substances or things to combine or become mixed together.","امتزجَت مادتان أو أشياء متعددة واختلطَ بعضها ببعض."],
 "نوازش کردن":["با دست به‌آرامی روی بدن یا سر کسی یا جانوری دست کشیدن، معمولاً برای ابراز محبت.","To gently stroke or caress a person or animal, usually to show affection.","مسحَ برفق على جسم شخص أو حيوان أو رأسه تعبيراً عن المودّة غالباً."],
 "جدا کردن":["چیزی یا کسی را از چیز یا گروه دیگری تفکیک و دور ساختن.","To separate or detach one thing or person from another.","فصلَ شيئاً أو شخصاً عن شيء أو مجموعة أخرى."],
 "کامل کردن":["بخش‌های باقی‌مانده را انجام دادن تا کاری یا چیزی به پایان و تمامیت برسد.","To finish the remaining parts so that a task or object is complete.","أكملَ الأجزاء المتبقية حتى يتمّ العمل أو يكتمل الشيء."],
 "ایمیل کردن":["پیام یا پرونده‌ای را از طریق پست الکترونیکی برای کسی فرستادن.","To send a message or file to someone by email.","أرسلَ رسالة أو ملفاً إلى شخص عبر البريد الإلكتروني."],
 "رژیم گرفتن":["برنامهٔ مشخصی برای خوردن و آشامیدن دنبال کردن، معمولاً برای سلامت یا مدیریت وزن.","To follow a planned diet, usually for health or weight management.","اتّبعَ نظاماً غذائياً محدّداً، غالباً لتحسين الصحة أو ضبط الوزن."],
 "جواب دادن":["به پرسش، درخواست یا سخن کسی پاسخ گفتن؛ همچنین پاسخ‌گو بودن به محرک یا وضعیت.","To answer a question, request, or person; also, to respond to a stimulus or situation.","أجابَ عن سؤال أو طلب أو كلام شخص؛ ويأتي أيضاً بمعنى الاستجابة لمؤثّر أو حالة."],
 "گوش کردن":["با دقت به صدا، سخن یا موسیقی توجه کردن و آن را شنیدن.","To listen attentively to a sound, speech, or music.","أصغى بانتباه إلى صوت أو كلام أو موسيقى."],
 "حمله کردن":["با قصد آسیب زدن یا غلبه کردن، به شخص، گروه یا مکانی یورش بردن.","To attack or assault a person, group, or place with the intention of causing harm or gaining control.","هاجمَ شخصاً أو جماعةً أو مكاناً بقصد الإيذاء أو السيطرة."],
 "نیش زدن":["با اندام نیش‌دار یا بخش تیز بدن، پوست را سوراخ کردن و زهر یا ماده‌ای وارد کردن.","To sting or pierce the skin with an animal's stinger or sharp body part, sometimes injecting venom.","لسعَ الجلد بإبرة الحيوان أو بجزء حادّ من جسمه، وقد يحقن السمّ."],
 "زمین خوردن":["تعادل خود را از دست دادن و روی زمین افتادن.","To lose one's balance and fall to the ground.","فقدَ توازنه وسقطَ على الأرض."],
 "بیهوش شدن":["برای مدتی هوشیاری و آگاهی از محیط را از دست دادن.","To lose consciousness and awareness of one's surroundings for a period of time.","فقدَ الوعي والإدراك بما حوله مدةً من الزمن."],
 "کمک کردن":["برای آسان‌تر شدن کار یا حل مشکل، به کسی یاری رساندن.","To assist someone in completing a task or solving a problem.","ساعدَ شخصاً على إنجاز عمل أو حلّ مشكلة."],
 "حرکت کردن":["از جایی به جای دیگر رفتن یا وضعیت و موقعیت خود را تغییر دادن.","To move from one place to another or change one's position.","تحرّكَ من مكان إلى آخر أو غيّرَ موضعه."],
 "پناه گرفتن":["برای در امان ماندن از خطر یا شرایط نامناسب، به مکانی امن رفتن.","To seek shelter in a safe place to avoid danger or harsh conditions.","لجأَ إلى مكان آمن طلباً للحماية من الخطر أو الظروف القاسية."],
 "آسیب دیدن":["در اثر حادثه یا عامل زیان‌آور، دچار صدمهٔ جسمی یا خسارت شدن.","To be injured or damaged as a result of an accident or harmful factor.","تضرّرَ أو أُصيبَ بأذى جسدي أو خسارة بسبب حادث أو عامل ضار."],
 "عکس گرفتن":["با دوربین یا تلفن همراه از شخص، منظره یا چیزی تصویر ثبت کردن.","To take a photograph of a person, scene, or object using a camera or phone.","التقطَ صورةً لشخص أو منظر أو شيء باستعمال كاميرا أو هاتف."],
 "عبادت کردن":["با گفتار یا رفتار دینی، خدا را پرستش و بندگی کردن.","To worship and serve God through religious words or acts.","عبدَ الله وتقرّب إليه بالأقوال أو الأعمال الدينية."],
 "از دست دادن":["چیزی یا کسی را که در اختیار یا همراه انسان بوده از کف دادن؛ همچنین فرصت یا توانایی را از دست دادن.","To lose something or someone one had; also, to miss an opportunity or lose an ability.","فقدَ شيئاً أو شخصاً كان لديه؛ ويأتي أيضاً بمعنى تفويت فرصة أو فقدان قدرة."],
 "سفر گروهی":["سفری که چند نفر با هم و معمولاً بر اساس برنامه‌ای مشترک انجام می‌دهند.","A trip taken by several people together, usually according to a shared plan.","رحلة يقوم بها عدد من الأشخاص معاً، عادةً وفق برنامج مشترك."],
 "فیلم کمدی":["فیلمی که با موقعیت‌ها و رویدادهای خنده‌آور برای سرگرم کردن مخاطب ساخته می‌شود.","A film designed to entertain viewers through humorous situations and events.","فيلم يهدف إلى تسلية المشاهدين بمواقف وأحداث مضحكة."],
 "تماشای تلویزیون":["نگاه کردن به برنامه‌ها، فیلم‌ها یا محتوای تصویری که از تلویزیون پخش می‌شود.","The activity of watching programmes, films, or visual content broadcast on television.","مشاهدة البرامج أو الأفلام أو المحتوى المرئي الذي يُعرض على التلفاز."]
 };
 for(const [fa,v] of Object.entries(rows)) S[fa]={...(S[fa]||{}),faMeaning:v[0],enMeaning:v[1],arMeaning:v[2],faSynonyms:(S[fa]||{}).faSynonyms||[],enSynonyms:(S[fa]||{}).enSynonyms||[],arSynonyms:(S[fa]||{}).arSynonyms||[]};
 window.TERM2_ADDITIONAL_SEMANTICS_BATCH8=Object.keys(rows);
})();