const fs = require('fs');

const rawData = fs.readFileSync('questions.json');
const questions = JSON.parse(rawData);

const questionsMap = questions.map(item => {
  const obj = {};
  obj.id = { S: item.id };
  obj.question = { S: item.question };
  obj.answer = { S: item.answer };
  obj.chapter = { S: item.chapter };
  return obj;
});

const data = JSON.stringify(questionsMap);

fs.writeFileSync('questionsForDynamo.json', data);
