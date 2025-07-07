import React, { useState } from 'react';
import { questions } from './data/questions';
import Question from './components/Question';
import Result from './components/Result';
import './App.css';

function App() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState({
    fruit: 0, flower: 0, perfume: 0, nature: 0, powder: 0, iff: 0, france: 0
  });

  const handleAnswer = (types) => {
    const newScores = { ...scores };
    types.forEach(type => newScores[type]++);
    setScores(newScores);
    setStep(step + 1);
  };

  return (
    <div className="app">
      {step < questions.length ? (
        <Question data={questions[step]} onAnswer={handleAnswer} />
      ) : (
        <Result scores={scores} />
      )}
    </div>
  );
}

export default App;
