/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import { Remarkable } from 'remarkable';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    padding: '.7rem',
    margin: '.7rem',
    fontSize: '1.4rem',
    // textAlign: "center",
  },
  answer: {
    color: 'red',
  },
});

const Question = ({ question, showAnswer }) => {
  const [showAnswerFromClick, setShowAnswerFromClick] = useState(false);

  const classes = useStyles();

  if (!question) return null;

  const handleClick = () => {
    setShowAnswerFromClick(!showAnswerFromClick);
  };

  const renderAnswer = () => {
    const htmlToRender = question.answer
      .replace('<eq>', "<span class='equation'>")
      .replace('</eq>', '</span>');
    const md = new Remarkable({ html: true });
    md.inline.ruler.enable(['sub', 'sup']);
    return { __html: md.render(htmlToRender) };
  };

  const renderQuestions = () => {
    const md = new Remarkable();
    md.inline.ruler.enable(['sub', 'sup']);
    return { __html: md.render(question.question) };
  };

  const answerRevealed = !!(showAnswer || showAnswerFromClick);

  return (
    <Card onClick={handleClick} raised className={classes.card}>
      <p variant='p' dangerouslySetInnerHTML={renderQuestions()} />

      {answerRevealed && (
        <p
          className={classes.answer}
          variant='p'
          dangerouslySetInnerHTML={renderAnswer()}
        />
      )}
    </Card>
  );
};

export default Question;

Question.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.string,
    question: PropTypes.string,
    answer: PropTypes.string,
    chapter: PropTypes.string,
  }).isRequired,
  showAnswer: PropTypes.bool.isRequired,
};
