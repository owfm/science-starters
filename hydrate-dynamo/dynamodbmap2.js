const fs = require('fs');
let rawData = fs.readFileSync('questions.json');
const questions = JSON.parse(rawData);

const questionsMap = questions.map(function(item) {
  let obj = {};
  obj['id'] = { S: item.id };
  obj['question'] = { S: item.question };
  obj['answer'] = { S: item.answer };
  obj['chapter'] = { S: item.chapter };
  return obj;
});

const data = JSON.stringify(questionsMap);

fs.writeFileSync('questionsForDynamo.json', data);

console.log(questionsMap);
