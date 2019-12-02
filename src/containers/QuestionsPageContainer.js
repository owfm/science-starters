import { connect } from 'react-redux';

import { fetchAllQuestions } from '../actions/dataFetching';
import QuestionsPage from '../components/QuestionsPage';

const mapStateToProps = state => {
  return {
    visibleQuestions: state.visibleQuestions,
    answersVisible: state.ui.answersVisible,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: () => dispatch(fetchAllQuestions()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage);
