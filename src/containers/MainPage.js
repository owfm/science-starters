import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import Loading from '../components/LoadingIcon';

import { fetchAllQuestions } from '../actions/questionsApiCalls';

import Controls from './ControlsContainer';
import ChapterFilters from './ChapterFiltersContainer';
import QuesionPage from './QuestionsPageContainer';

const MainPage = ({ loading, needToFetchQuestions, fetchQuestions }) => {
  useEffect(() => {
    if (needToFetchQuestions) fetchQuestions();
  }, [needToFetchQuestions, fetchQuestions]);

  return loading ? (
    <Loading color='palevioletred' type='balls' />
  ) : (
    <>
      <Controls />
      <ChapterFilters />
      <QuesionPage />
    </>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.ui.loading,
    needToFetchQuestions: state.questions.length === 0,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: () => dispatch(fetchAllQuestions()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

MainPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  needToFetchQuestions: PropTypes.bool.isRequired,
  fetchQuestions: PropTypes.func.isRequired,
};
