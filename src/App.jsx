// App.js
import React, { useState } from 'react';
import { connect } from 'react-redux';

import { fetchAllQuestions } from './actions/dataFetching';

import sum from './sum';

function App({ fetchQuestions }) {
  const [number, setNumber] = useState(0);

  React.useEffect(() => {
    fetchQuestions();
  }, []);

  function handleClick() {
    setNumber(sum(number, 1));
  }

  return (
    <div>
      <p>test</p>
      <button type='button' className='increment-button' onClick={handleClick}>
        Increment
      </button>
      <p className='number'>{number}</p>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: () => dispatch(fetchAllQuestions()),
  };
};

export default connect(null, mapDispatchToProps)(App);
