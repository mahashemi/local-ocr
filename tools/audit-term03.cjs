const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
global.window = global;
require("../website/term03-data.js");
require("../website/term03-lexicon-additions.js");
require("../website/term03-matn-verbs.js");
require("../website/term03-source-audit.js");
require("../website/term03-khulasa.js");
require("../website/term03-writing.js");
const entries = global.TERM3_DATA || [];
assert(entries.length >= 550, "Term 03 lexicon unexpectedly small: " + entries.length);
const sourceCounts = { FA3: 0, KH3: 0, N3: 0, SH3: 0 };
for (const item of entries) {
  assert(item.fa && item.tr && item.en && item.pos, "Missing core vocabulary fields: " + JSON.stringify(item));
  for (const source of (item.sources || [item.source]).filter(Boolean)) {
    const prefix = String(source).split("-")[0];
    if (Object.prototype.hasOwnProperty.call(sourceCounts, prefix)) sourceCounts[prefix]++;
  }
  assert(!/[\u0600-\u06ff]/.test(item.tr), "Persian script in transliteration: " + item.fa);
  if (/فعل|اصطلاح فعلی/.test(item.pos)) {
    assert(item.ms && item.amr && Array.isArray(item.m) && item.m.length >= 3,
      "Verb is missing its masdar form/example: " + item.fa);
    if (item.ms !== "—") assert(String(item.m[0] || "").includes(item.ms),
      "Masdar example does not demonstrate the listed masdar: " + item.fa);
    if (item.amr !== "—") {
      assert(Array.isArray(item.a) && item.a.length >= 3,
        "Verb with a direct imperative is missing its imperative example: " + item.fa);
      assert(String(item.a[0] || "").includes(item.amr),
        "Imperative example does not demonstrate the listed amr: " + item.fa);
      assert.notEqual(item.ms.trim(), item.amr.trim(),
        "Masdar and imperative must be different forms: " + item.fa + " (" + item.ms + ")");
      assert(!/[\u0600-\u06ff]/.test(item.a[1] || ""), "Persian script in imperative-example transliteration: " + item.fa);
    } else {
      assert(item.a === null || Array.isArray(item.a),
        "No-imperative verb must have either null or an example array: " + item.fa);
      assert(item.note && /[\u0600-\u06ff]/.test(item.note),
        "A verb without a natural imperative needs an explanation: " + item.fa);
    }
    assert(!/[\u0600-\u06ff]/.test(item.m[1] || ""), "Persian script in masdar-example transliteration: " + item.fa);
  } else {
    assert(Array.isArray(item.ex) && item.ex.length >= 3 && item.ex.every(Boolean),
      "Noun/adjective is missing a trilingual example: " + item.fa);
    assert(!/[\u0600-\u06ff]/.test(item.ex[1] || ""),
      "Persian script in vocabulary-example transliteration: " + item.fa);
  }
}
for (const [source, count] of Object.entries(sourceCounts)) assert(count > 0, "No entries for " + source);

const expectedSources = [
  ...Array.from({ length: 20 }, (_, i) => "FA3-" + String(i + 1).padStart(2, "0")),
  ...Array.from({ length: 20 }, (_, i) => "KH3-" + String(i + 1).padStart(2, "0")),
  ...Array.from({ length: 10 }, (_, i) => "N3-" + String(i + 1).padStart(2, "0")),
  ...Array.from({ length: 10 }, (_, i) => "SH3-" + String(i + 1).padStart(2, "0")),
];
const presentSources = new Set(entries.flatMap(item => (item.sources || [item.source]).filter(Boolean)));
for (const source of expectedSources) assert(presentSources.has(source), "No lexicon entry linked to " + source);

const studyDir = path.join(__dirname, "../study-materials/dars/term-03");
const studyFiles = fs.readdirSync(studyDir);
for (const source of expectedSources) {
  const filePrefix = source.startsWith("N3-") ? "T3_" + source + "-" : "T3_" + source.replace("-", "_") + "-";
  assert(studyFiles.some(name => name.startsWith(filePrefix)), "Missing original study-material file for " + source);
}
assert(studyFiles.length === 60, "Expected exactly 60 original Term 03 source files");

const appSource = fs.readFileSync(require.resolve("../website/index.html"), "utf8");

assert(Array.isArray(global.TERM3_WRITING?.chapters) && global.TERM3_WRITING.chapters.length === 20,
  "Expected a writing prompt for all 20 Term 03 chapters");
assert(global.TERM3_NEWESTAN_EXAMPLE?.source === "N3-10", "Expected the Newestan model to answer the final Insha exercise in Dars 10");
assert(global.TERM3_NEWESTAN_EXAMPLE.topicSentence && global.TERM3_NEWESTAN_EXAMPLE.supportingSentences?.length >= 2 &&
  global.TERM3_NEWESTAN_EXAMPLE.concludingSentence && global.TERM3_NEWESTAN_EXAMPLE.sample,
  "Newestan model must demonstrate topic, supporting and concluding sentences");
assert(global.TERM3_NEWESTAN_EXAMPLE.topic.includes("وظایف دانشجو در برابر استاد"), "Newestan model must use the actual Dars 10 final exercise topic");
assert(global.TERM3_NEWESTAN_EXAMPLE.subtopics?.length === 4, "Newestan model must preserve the four Dars 10 subtopics");
assert(global.TERM3_NEWESTAN_EXAMPLE.sections?.map(x=>x.kind).join(",") === "مقدمه,بدنه,بدنه,نتیجه", "Newestan model must have Muqaddama, two body bands and Natija");
assert(global.TERM3_NEWESTAN_EXAMPLE.sections.every(x=>x.heading&&x.paragraph), "Every Insha section needs a heading and developed paragraph");
const lexiconKeys = new Set(entries.map(x => String(x.fa).replace(/[\\u200c\\sـ]/g, "")));
for (const word of global.TERM3_NEWESTAN_EXAMPLE.vocabulary) {
  assert(lexiconKeys.has(String(word).replace(/[\\u200c\\sـ]/g, "")),
    "Newestan vocabulary must open a flashcard: " + word);
}
assert(appSource.includes("function addVocabularyForms(index,item)"), "Writing and Khulasa links must support Persian inflected forms");
assert(!appSource.includes("const examples=[item.xf,item.m?.[0],item.a?.[0]]"),
  "Arbitrary example tokens must not be indexed as vocabulary headwords");
assert(appSource.includes("Never index arbitrary tokens from example sentences"), "Writing links must explicitly prevent example-token false matches");
assert(appSource.includes("all().filter(i=>Number(i.bk)===term"), "Writing links must use the active term lexicon only");
assert(appSource.includes("vocabIrregularPlurals") && appSource.includes("vocabVerbForms"), "Writing links must use explicit plural and verb inflection maps");
assert(appSource.includes("attachVocabularyLinks(v.querySelector(\".writing-wrap\"))"), "Newestan/Sukhanrani content must use shared flashcard links");
assert(appSource.includes("newestan-vocabulary"), "Newestan model vocabulary must be rendered as linked flashcards");
assert(appSource.includes("newestanExample.sections.map") && appSource.includes("newestanExample.subtopics.map"), "Newestan Insha must render its essay sections and source subtopics");
assert(appSource.includes("--fa-reading-font") && appSource.includes(".newestan-example") && appSource.includes(".khulasa-lines"),
  "Persian reading typography styles are missing");
assert(Array.isArray(global.TERM3_SPEECHES) && global.TERM3_SPEECHES.length === 20,
  "Expected a speech prompt for all 20 Term 03 chapters");
assert(String(global.TERM3_UNIT_META[2].links).includes("N3-04"), "N3-04 must be linked to Unit 02");
assert(String(global.TERM3_UNIT_META[9].links).includes("N3-04"), "N3-04 emotional-needs vocabulary must also be linked to Unit 09");
assert(appSource.includes("units:Array.isArray(a.units)"), "Chapter items must preserve all linked learning units");
assert(appSource.includes("(i.units||[i.ch]).includes(Number(c))"), "Chapter filters must include shared vocabulary in every linked unit");
assert(appSource.includes("flatMap(i=>(i.units||[i.ch])"), "Chapter navigation must include shared vocabulary units");

assert(Object.keys(global.TERM3_UNIT_META || {}).length === 20, "Expected 20 FA chapter summaries");
for (const [unit, meta] of Object.entries(global.TERM3_UNIT_META)) assert(meta.summary, "Missing chapter summary for FA3-" + unit);
assert(Array.isArray(global.TERM3_KHULASA) && global.TERM3_KHULASA.length === 20, "Expected a dedicated Khulasa summary for all 20 FA chapters");
for (const item of global.TERM3_KHULASA) assert(item.lines.length >= 5 && item.lines.length <= 6, "Khulasa must contain five or six concise lines for FA3-" + item.ch);

// Source-wide vocabulary coverage triage. Unmatched tokens are candidates for review,
// not automatically declared vocabulary: OCR noise and grammar are filtered separately.
const normalizeFa = value => String(value).normalize("NFC")
  .replace(/[يى]/g, "ی").replace(/ك/g, "ک").replace(/[ۀة]/g, "ه")
  .replace(/[\u200c\u200dـ\u064b-\u065f]/g, "")
  .replace(/[^\u0621-\u064a\u066e-\u06d3\u06ee-\u06fc\u06ff]/g, "");
const headwords = new Set(entries.map(x => normalizeFa(x.fa)).filter(Boolean));
const coverageStopWords = new Set(("و در به از که را با برای این آن او آنها ما شما من یک هر هم نیز اما اگر تا یا چون زیرا ولی بلکه پس سپس بعد قبل اکنون امروز بیشتر کمتر بسیار همه هیچ خود دیگر همین همان چه چگونه چرا کدام است شوند شود شده دارد دارند داشت داشتن باید نباید نیست نیستند هستند آن‌ها آنچه چنین مانند مثل دربارهٔ میان روی زیر نزد طرف هنگام زمان سال روز ماه بسم الله الرحمن الرحیم سلام علیکم والسلام الحمد رب العالمین الصلاة محمد آله الطاهرین الف کاال الهای").split(/\s+/).map(normalizeFa));
const irregularCoverage = {"منابع":"منبع","آثار":"اثر","حقوق":"حق","شرایط":"شرط","عوامل":"عامل","روابط":"رابطه","رسوم":"رسم","افراد":"فرد","حیوانات":"حیوان","موضوعات":"موضوع","نکات":"نکته","مراحل":"مرحله","اخبار":"خبر","امور":"امر","آداب":"ادب","اشعار":"شعر","وظایف":"وظیفه","فرزندان":"فرزند","ویژگیهای":"ویژگی","واژهها":"واژه","تصاویر":"تصویر","کالاها":"کالا","پاسخها":"پاسخ","عادتهای":"عادت","مسافران":"مسافر","غذاها":"غذا","دانشجویان":"دانشجو"};
const verbCoverage = {"کنید":"کردن","کند":"کردن","کنند":"کردن","میکنند":"کردن","میکنید":"کردن","می‌کند":"کردن","میکند":"کردن","کرد":"کردن","کردند":"کردن","کرده":"کردن","کنیم":"کردن","میکنیم":"کردن","شود":"شدن","می‌شود":"شدن","میشود":"شدن","شد":"شدن","شده":"شدن","شدند":"شدن","میشوند":"شدن","بخوانید":"خواندن","خواند":"خواندن","خوانده":"خواندن","بنویسید":"نوشتن","نوشت":"نوشتن","نوشته":"نوشتن","بگویید":"گفتن","گفت":"گفتن","گفته":"گفتن","گفتند":"گفتن","ببینید":"دیدن","دید":"دیدن","دیده":"دیدن","می‌رود":"رفتن","میرود":"رفتن","رفت":"رفتن","رفته":"رفتن","دهید":"دادن","بدهید":"دادن","میدهد":"دادن","داد":"دادن","داده":"دادن","بود":"بودن","باشد":"بودن","بوده":"بودن","بودند":"بودن","هست":"بودن","هستند":"بودن","هستم":"بودن","هستی":"بودن","هستیم":"بودن","باش":"بودن","باشید":"بودن","باشند":"بودن","میتواند":"توانستن","بتواند":"توانستن","داشته":"داشتن","بپرهیزد":"پرهیز کردن","بیاموزیم":"آموختن","خورد":"خوردن","خوردند":"خوردن","می‌خورد":"خوردن","بخورید":"خوردن"};
const coveredWord = word => {
  if (headwords.has(word)) return true;
  if (coverageStopWords.has(word)) return true;
  const base = irregularCoverage[word] || verbCoverage[word];
  if (base && headwords.has(normalizeFa(base))) return true;
  for (const suffix of ["هایی","ها","های","گان","یان","ان","هایمان","هایتان","هایشان","مان","تان","شان","ش","م","ت","ی"]) {
    if (word.length > 3 && headwords.has(word.slice(0, -normalizeFa(suffix).length))) return true;
  }
  return false;
};
const candidates = new Map();
const recordCoverageText = (text, source) => {
  for (const token of String(text).match(/[\u0621-\u064a\u066e-\u06d3\u06ee-\u06fc\u06ff]+(?:‌[\u0621-\u064a\u066e-\u06d3\u06ee-\u06fc\u06ff]+)*/g) || []) {
    const word = normalizeFa(token);
    if (word.length < 3 || coveredWord(word)) continue;
    const item = candidates.get(word) || { word, count: 0, sources: new Set() };
    item.count += 1; item.sources.add(source); candidates.set(word, item);
  }
};
const writingSourceFiles = studyFiles.filter(name => /^T3_(N3-|SH3_)/.test(name));
for (const name of writingSourceFiles) recordCoverageText(fs.readFileSync(path.join(studyDir, name), "utf8"), name);
for (const [name, value] of [["Khulasa", global.TERM3_KHULASA], ["Sukhanrani", global.TERM3_SPEECHES], ["Newestan model", global.TERM3_NEWESTAN_EXAMPLE]]) {
  recordCoverageText(JSON.stringify(value), name);
}
const unmatchedCandidates = [...candidates.values()]
  .map(x => ({ word: x.word, count: x.count, sources: [...x.sources].slice(0, 3) }))
  .sort((a, b) => b.count - a.count || a.word.localeCompare(b.word, "fa"));
console.log("Term 03 writing vocabulary coverage triage:", JSON.stringify({
  sourceDarsScanned: writingSourceFiles.length,
  unmatchedUniqueCandidates: unmatchedCandidates.length,
  topUnmatchedCandidates: unmatchedCandidates.slice(0, 100)
}, null, 2));

console.log(JSON.stringify({ total: entries.length, sources: sourceCounts, verifiedVerbs: entries.filter(x => /فعل|اصطلاح فعلی/.test(x.pos)).length, chapterSummaries: Object.keys(global.TERM3_UNIT_META).length, khulasaSummaries: global.TERM3_KHULASA.length, writingPrompts: global.TERM3_WRITING.chapters.length, speechPrompts: global.TERM3_SPEECHES.length, sourceChapters: expectedSources.length, sourceFiles: studyFiles.length }, null, 2));
