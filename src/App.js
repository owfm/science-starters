// App.js
import API from '@aws-amplify/api';
import React, { useEffect, useState } from 'react';

import sum from './sum';

function App() {
  const [number, setNumber] = useState(0);

  function handleClick() {
    setNumber(sum(number, 1));
  }
  useEffect(() => {
    async function fetchQuestions() {
      let apiName = 'sciencestarterapi';
      let path = '/questions';

      API.get(apiName, path)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error.response);
        });
    }
    fetchQuestions();
  }, []);

  return (
    <div>
      <p>test</p>
      <button className="increment-button" onClick={handleClick}>
        Increment
      </button>
      <p className="number">{number}</p>
    </div>
  );
}

export default App;
