import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Controls from '../components/Controls';
import * as uiActions from '../actions/ui';
import * as questionActions from '../actions/questions';

const FILTERED = true;
const UNFILTERED = false;

const ControlsContainer = ({
  toggleAnswersVisible,
  toggleChaptersVisible,
  generateQuestions,
  disableGenerateButton,
  chapterFiltersVisible,
  answersVisible,
}) => {
  function handleKeyPress({ key }) {
    if (key === 'a') toggleAnswersVisible();
    if (key === 'c') toggleChaptersVisible();
    if (key === 'g' && !disableGenerateButton) generateQuestions(FILTERED);
    if (key === 'l') generateQuestions(UNFILTERED); // lucky dip
  }

  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  });

  return (
    <Controls
      toggleAnswersVisible={toggleAnswersVisible}
      toggleChaptersVisible={toggleChaptersVisible}
      generateQuestions={generateQuestions}
      disableGenerateButton={disableGenerateButton}
      chapterFiltersVisible={chapterFiltersVisible}
      answersVisible={answersVisible}
    />
  );
};

const mapStateToProps = state => {
  return {
    disableGenerateButton: state.filters.length === 0,
    chapterFiltersVisible: state.ui.chapterFiltersVisible,
    answersVisible: state.ui.answersVisible,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    generateQuestions: filtered =>
      dispatch(questionActions.generateQuestions(filtered)),
    toggleAnswersVisible: () => dispatch(uiActions.toggleAnswersVisible()),
    toggleChaptersVisible: () => dispatch(uiActions.toggleChaptersVisible()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlsContainer);

ControlsContainer.propTypes = {
  toggleAnswersVisible: PropTypes.func.isRequired,
  toggleChaptersVisible: PropTypes.func.isRequired,
  generateQuestions: PropTypes.func.isRequired,
  disableGenerateButton: PropTypes.bool.isRequired,
  chapterFiltersVisible: PropTypes.bool.isRequired,
  answersVisible: PropTypes.bool.isRequired,
};
