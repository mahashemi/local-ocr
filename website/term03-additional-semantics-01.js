/* Term 03 additional vocabulary — semantic batch 1. */
(()=> {
 const S=window.PERSIAN_SEMANTICS||(window.PERSIAN_SEMANTICS={});
 const rows={
 "تشریف بردن":["با لحنی بسیار محترمانه به معنای رفتن یا خارج شدنِ مخاطب یا شخص محترم.","An honorific and deferential expression meaning to go or leave.","تعبير تكريمي مهذّب بمعنى الذهاب أو المغادرة."],
 "میل کردن":["در زبان مؤدبانه به معنای خوردن یا نوشیدن چیزی.","A polite expression meaning to eat or drink something.","تعبير مهذّب بمعنى تناول الطعام أو الشراب."],
 "صفا آوردن":["باعث شادی، دل‌نشینی یا خوشی شدن؛ در گفتار تعارف‌آمیز برای خوش‌آمدگویی نیز به‌کار می‌رود.","To bring pleasure or warmth; also used in welcoming expressions.","جلبَ السرور والأُنس؛ ويُستعمل أيضاً في عبارات الترحيب."],
 "بلافاصله":["بدون فاصله یا تأخیر و درست پس از رویداد قبلی.","Immediately, with no interval or delay.","فوراً ومن دون فاصل أو تأخير."],
 "راهکار":["روش یا اقدام پیشنهادی برای حل یک مشکل یا رسیدن به هدف.","A proposed method or action for solving a problem or reaching a goal.","طريقة أو إجراء مقترح لحل مشكلة أو بلوغ هدف."],
 "دفع":["دور کردن یا برطرف کردن چیزی؛ مانند دفع خطر، بیماری یا مزاحمت.","The act of repelling, removing, or warding something off, such as danger or illness.","إبعاد شيء أو دفعه أو التخلّص منه، كالخطر أو المرض أو الإزعاج."],
 "دلسوز":["کسی که نسبت به دیگران احساس همدردی و نگرانی دارد و برای کمک به آنان می‌کوشد.","Compassionate and caring; concerned about others and willing to help.","مشفق ومهتمّ بالآخرين، يشعر بمعاناتهم ويسعى إلى مساعدتهم."],
 "کودن":["کسی که کندذهن یا کم‌فهم دانسته می‌شود؛ واژه‌ای توهین‌آمیز و نامهربانانه است.","A person described as foolish or slow to understand; an insulting and unkind word.","شخص يُوصف بالغباء أو بطء الفهم؛ وهي كلمة مهينة وغير لطيفة."],
 "تو دل برو":["توصیف کسی یا چیزی که دوست‌داشتنی، جذاب و دلنشین است.","Charming, appealing, or endearing.","جذّاب ومحبوب ويبعث على الارتياح والمودّة."],
 "پابه‌پا":["در کنار هم و با گام‌های هماهنگ؛ همچنین به معنای هم‌زمان و همراه با دیگری.","Side by side with matching steps; also together or in step with someone.","جنباً إلى جنب بخطوات متناسقة؛ ويأتي بمعنى المرافقة ومسايرة الآخر."],
 "خوش‌گذرانی":["گذراندن وقت با سرگرمی و فعالیت‌های لذت‌بخش.","Spending time enjoying leisure activities and having fun.","قضاء الوقت في أنشطة ممتعة وترفيهية."],
 "خنده از ته دل":["خنده‌ای صادقانه و پرشور که از شادی واقعی می‌آید.","A hearty, genuine laugh that comes from real joy.","ضحكة صادقة وعميقة تنبع من الفرح الحقيقي."],
 "تحقیر کردن":["با گفتار یا رفتار، ارزش و شخصیت کسی را پایین آوردن و او را خوار شمردن.","To humiliate someone or make them feel worthless through words or actions.","أهانَ شخصاً وحطّ من قدره بكلام أو أفعال."],
 "خوش‌گذرانی کردن":["وقت خود را با فعالیت‌های سرگرم‌کننده و لذت‌بخش سپری کردن.","To spend time enjoying oneself through pleasant activities.","قضى وقته مستمتعاً بأنشطة لطيفة ومسلّية."],
 "انصراف دادن":["از ادامهٔ شرکت در کاری، مسابقه یا برنامه صرف‌نظر کردن و کنار کشیدن.","To withdraw or pull out of an activity, competition, or plan.","انسحبَ وتراجع عن المشاركة في نشاط أو منافسة أو خطة."],
 "جایگاه اجتماعی":["موقعیت و مرتبه‌ای که فرد یا گروه در ساختار جامعه دارد.","The position or status a person or group holds in society.","المكانة أو المرتبة التي يشغلها شخص أو جماعة في المجتمع."],
 "انگیزه":["دلیل یا نیروی درونی که فرد را به انجام کاری یا رسیدن به هدفی تشویق می‌کند.","A reason or inner drive that encourages someone to act or pursue a goal.","سبب أو دافع داخلي يشجّع الشخص على العمل أو السعي إلى هدف."],
 "دوران حاضر":["زمان کنونی و دوره‌ای که اکنون در آن زندگی می‌کنیم.","The present time or era in which we live.","الوقت أو العصر الحالي الذي نعيش فيه."],
 "عمده":["بخش اصلی یا بزرگ‌تر یک مجموعه؛ همچنین به معنای بیشتر و غالب.","The main or largest part of something; also most or predominant.","الجزء الرئيسي أو الأكبر من الشيء؛ ويأتي بمعنى معظم أو غالب."],
 "لباس دست‌دوم":["لباسی که پیش‌تر شخص دیگری از آن استفاده کرده و دوباره برای فروش یا استفاده عرضه می‌شود.","Clothing that someone else has previously worn and that is resold or reused.","ملابس استعملها شخص آخر من قبل ثم عُرضت للبيع أو لإعادة الاستعمال."],
 "سر زدن":["برای دیداری کوتاه به جایی رفتن؛ همچنین به معنای بررسی یا کنترل کردن.","To drop by for a brief visit; also to check on something.","زارَ مكاناً زيارة قصيرة؛ ويأتي أيضاً بمعنى تفقّد شيء."],
 "راضی بودن":["از وضعیت، نتیجه یا رفتار کسی احساس خشنودی و رضایت داشتن.","To be satisfied or pleased with a situation, result, or someone's behaviour.","كان راضياً أو مسروراً بحالة أو نتيجة أو سلوك شخص."],
 "کادو":["هدیه‌ای که به مناسبت یا برای ابراز محبت به کسی داده می‌شود.","A gift or present given to someone for an occasion or as a gesture of affection.","هدية تُقدّم لشخص في مناسبة أو تعبيراً عن المودّة."],
 "حساب بانکی":["حسابی در بانک که پول در آن نگهداری و واریز یا برداشت می‌شود.","An account at a bank where money is held, deposited, and withdrawn.","حساب في مصرف تُحفظ فيه الأموال وتُودع وتُسحب."],
 "موجودی":["مقدار پول یا کالایی که در یک حساب یا انبار در حال حاضر باقی مانده است.","The amount of money or goods currently remaining in an account or stock.","كمية المال أو البضائع المتبقية حالياً في حساب أو مخزون."],
 "نقد کردن":["چک یا دارایی را به پول نقد تبدیل کردن؛ همچنین به معنای بررسی و ارزیابی انتقادی.","To convert a cheque or asset into cash; also to review or assess critically.","حوّلَ شيكاً أو أصلاً إلى نقد؛ ويأتي أيضاً بمعنى التقييم والنقد."],
 "املاک":["زمین‌ها، خانه‌ها و ساختمان‌هایی که دارایی غیرمنقول به شمار می‌آیند.","Land, houses, and buildings considered real property.","الأراضي والمنازل والمباني التي تُعدّ عقارات."],
 "وارث":["شخصی که پس از مرگ فردی، طبق قانون یا وصیت بخشی از دارایی او را دریافت می‌کند.","A person who receives some of another person's property after their death by law or will.","شخص يرث جزءاً من ممتلكات المتوفّى بموجب القانون أو الوصية."],
 "سرمایه":["پول یا دارایی‌ای که برای راه‌اندازی، اداره یا گسترش فعالیتی به کار گرفته می‌شود.","Money or assets used to start, operate, or expand an activity or business.","مال أو أصول تُستعمل لبدء نشاط أو إدارته أو توسيعه."],
 "زیان":["از دست دادن پول، دارایی یا منفعت؛ نتیجه‌ای منفی در یک فعالیت یا معامله.","A financial or other loss; a negative result in an activity or transaction.","خسارة في المال أو الممتلكات أو المنفعة؛ ونتيجة سلبية لنشاط أو معاملة."]
 };
 for(const [fa,v] of Object.entries(rows)) S[fa]={...(S[fa]||{}),faMeaning:v[0],enMeaning:v[1],arMeaning:v[2],faSynonyms:(S[fa]||{}).faSynonyms||[],enSynonyms:(S[fa]||{}).enSynonyms||[],arSynonyms:(S[fa]||{}).arSynonyms||[]};
 window.TERM3_ADDITIONAL_SEMANTICS_BATCH1=Object.keys(rows);
})();