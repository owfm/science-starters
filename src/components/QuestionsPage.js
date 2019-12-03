import React from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';
import { makeStyles } from '@material-ui/core/styles';
import Question from './Question';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
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
    justifyContent: 'center',
    marginTop: '.8rem',
    marginBottom: '.8rem',
  },
}));

const QuestionsPage = ({ visibleQuestions, answersVisible }) => {
  const classes = useStyles();
  return (
    <div className={classes.questions}>
      {visibleQuestions.map((q, index) => (
        <Question
          key={uuidv1()}
          number={index}
          question={q}
          showAnswer={answersVisible}
        />
      ))}
    </div>
  );
};

export default QuestionsPage;

QuestionsPage.propTypes = {
  visibleQuestions: PropTypes.arrayOf(PropTypes.object),
  answersVisible: PropTypes.bool.isRequired,
};

QuestionsPage.defaultProps = {
  visibleQuestions: [],
};
