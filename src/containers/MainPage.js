import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Loading from '../components/LoadingIcon';

import { fetchAllQuestions } from '../actions/dataFetching';

import Controls from './ControlsContainer';
import ChapterFilters from './ChapterFiltersContainer';
import QuesionPage from './QuestionsPageContainer';

const MainPage = ({ loading, fetchQuestions }) => {
  useEffect(() => fetchQuestions(), []);

  return loading ? (
    <Loading color='palevioletred' />
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
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: () => dispatch(fetchAllQuestions()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
