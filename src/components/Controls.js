import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { FILTERED, UNFILTERED } from './constants';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    minWidth: '100px',
  },
  input: {
    display: 'none',
  },
  questions: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
  },
  bullets: {
    listStyleType: 'none',
  },
  buttons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '.8rem',
    marginBottom: '.8rem',
  },
}));

const Controls = ({
  toggleAnswersVisible,
  toggleChaptersVisible,
  generateQuestions,
  disableGenerateButton,
  chapterFiltersVisible,
  answersVisible,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.buttons}>
      <Button
        disabled={disableGenerateButton}
        variant='contained'
        color='primary'
        className={classes.button}
        onClick={() => generateQuestions(FILTERED)}
      >
        <u>G</u>enerate!
      </Button>
      <Button
        variant='outlined'
        color='primary'
        className={classes.button}
        onClick={() => generateQuestions(UNFILTERED)}
      >
        <u>L</u>ucky Dip!
      </Button>

      <Button
        onClick={() => toggleAnswersVisible()}
        variant='outlined'
        color='secondary'
        className={classes.button}
      >
        {answersVisible ? 'Hide ' : 'Show '} <span>&nbsp;</span>
        <u>A</u>nswers!
      </Button>

      <Button
        onClick={() => toggleChaptersVisible()}
        variant='outlined'
        color='secondary'
        className={classes.button}
      >
        {chapterFiltersVisible ? 'Hide ' : 'Show '} <span>&nbsp;</span>
        <u>C</u>hapter List!
      </Button>

      {/* <Button
        // variant="outlined"
        color='secondary'
        className={classes.button}
        onClick={() => {
          setFilters([]);
          setShowChapterFilters(true);
          setQuestionsToShow([]);
        }}
      >
        Clear Chapters
      </Button> */}
    </div>
  );
};

export default Controls;

Controls.propTypes = {
  toggleAnswersVisible: PropTypes.func.isRequired,
  toggleChaptersVisible: PropTypes.func.isRequired,
  generateQuestions: PropTypes.func.isRequired,
  disableGenerateButton: PropTypes.bool.isRequired,
  chapterFiltersVisible: PropTypes.bool.isRequired,
  answersVisible: PropTypes.bool.isRequired,
};
