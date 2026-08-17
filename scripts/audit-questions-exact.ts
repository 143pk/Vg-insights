import { TOPIC_DETAILS } from '../src/data/topicDetails';

console.log('=== EXACT AUDIT OF ALL TOPICS IN TOPIC_DETAILS ===\n');

const keys = Object.keys(TOPIC_DETAILS);
const report: { key: string; name: string; count: number; missing: number }[] = [];

for (const key of keys) {
  const detail = TOPIC_DETAILS[key];
  const pqs = detail?.practiceQuestions || detail?.practiceCards || [];
  const count = pqs.length;
  const missing = Math.max(0, 10 - count);
  
  report.push({
    key,
    name: detail?.topicName || detail?.title || key,
    count,
    missing
  });
}

report.sort((a, b) => a.count - b.count);

let totalDeficit = 0;
let topicsUnder10 = 0;

for (const item of report) {
  totalDeficit += item.missing;
  if (item.count < 10) {
    topicsUnder10++;
    console.log(`Key: ${item.key.padEnd(38)} | Count: ${String(item.count).padStart(2)} | Missing: +${item.missing} | Name: ${item.name}`);
  }
}

console.log('\n======================================================');
console.log(`Total topics in TOPIC_DETAILS: ${keys.length}`);
console.log(`Topics with < 10 practice questions: ${topicsUnder10}`);
console.log(`Total practice questions to add: ${totalDeficit}`);
console.log('======================================================');
