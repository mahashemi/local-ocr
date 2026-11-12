const assert = require("node:assert/strict");
global.window = global;
require("../website/term03-data.js");
require("../website/term03-lexicon-additions.js");
require("../website/term03-matn-verbs.js");
require("../website/term03-source-audit.js");
require("../website/term03-khulasa.js");
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
    }
    assert(!/[\u0600-\u06ff]/.test(item.m[1] || ""), "Persian script in masdar-example transliteration: " + item.fa);
  }
}
for (const [source, count] of Object.entries(sourceCounts)) assert(count > 0, "No entries for " + source);
assert(Object.keys(global.TERM3_UNIT_META || {}).length === 20, "Expected 20 FA chapter summaries");
for (const [unit, meta] of Object.entries(global.TERM3_UNIT_META)) assert(meta.summary, "Missing chapter summary for FA3-" + unit);
assert(Array.isArray(global.TERM3_KHULASA) && global.TERM3_KHULASA.length === 20, "Expected a dedicated Khulasa summary for all 20 FA chapters");
for (const item of global.TERM3_KHULASA) assert(item.lines.length === 5, "Khulasa must contain five concise lines for FA3-" + item.ch);
console.log(JSON.stringify({ total: entries.length, sources: sourceCounts, verbs: entries.filter(x => /فعل|اصطلاح فعلی/.test(x.pos)).length, chapterSummaries: Object.keys(global.TERM3_UNIT_META).length, khulasaSummaries: global.TERM3_KHULASA.length }, null, 2));
