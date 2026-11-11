const assert = require("node:assert/strict");
global.window = global;
require("../website/term03-data.js");
require("../website/term03-lexicon-additions.js");
require("../website/term03-matn-verbs.js");
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
    assert(item.ms && item.amr && Array.isArray(item.m) && item.m.length >= 3 && Array.isArray(item.a) && item.a.length >= 3,
      "Verb is missing masdar/amr/examples: " + item.fa);
    assert(!/[\u0600-\u06ff]/.test(item.m[1] || ""), "Persian script in masdar-example transliteration: " + item.fa);
    assert(!/[\u0600-\u06ff]/.test(item.a[1] || ""), "Persian script in imperative-example transliteration: " + item.fa);
  }
}
for (const [source, count] of Object.entries(sourceCounts)) assert(count > 0, "No entries for " + source);
assert(Object.keys(global.TERM3_UNIT_META || {}).length === 20, "Expected 20 FA chapter summaries");
for (const [unit, meta] of Object.entries(global.TERM3_UNIT_META)) assert(meta.summary, "Missing chapter summary for FA3-" + unit);
console.log(JSON.stringify({ total: entries.length, sources: sourceCounts, verbs: entries.filter(x => /فعل|اصطلاح فعلی/.test(x.pos)).length, chapterSummaries: Object.keys(global.TERM3_UNIT_META).length }, null, 2));
