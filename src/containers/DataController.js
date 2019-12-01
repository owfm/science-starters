import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Container from './Container';
import LoadingIcon from '../components/LoadingIcon';

const DataController = () => {
  const [questions, setQuestions] = useState(null);
  const [chapters, setChapters] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          'https://k18vythvo2.execute-api.eu-west-2.amazonaws.com/dev/questions',
          {
            headers: {
              'content-type': 'application/json',
            },
          }
        );
        setQuestions([...response.data.data]);
        console.log(JSON.stringify([...response.data.data]));
        setChapters([...new Set(response.data.data.map(item => item.chapter))]);
      } catch (err) {
        setError("Couldn't fetch questions, sorry! " + err);
      }
    };
    fetchData();
  }, []);
  if (!questions || !chapters)
    return <LoadingIcon type={'spin'} color={'palevioletred'} />;
  if (error) return <p>{error}</p>;

  return <Container questions={questions} chapters={chapters} />;
};

export default DataController;
