export default function getRandomQuestions(state) {
  const filteredArray = state.filters
    ? state.questions.filter(question =>
        state.filters.includes(question.chapter)
      )
    : state.questions;

  const l = filteredArray.length;
  const returnList = [];
  const usedIds = new Set();
  for (let i = 0; i < l; i += 1) {
    const index = Math.floor(Math.random() * l - 1);
    if (!usedIds.has(index)) {
      usedIds.add(index);
      returnList.push(filteredArray[index]);
    } else {
      i -= 1;
    }
  }
  return returnList;
}
