import React from 'react';

const Question = ({ data, onAnswer }) => {
  return (
    <div className="question-box">
      <h2>{data.question}</h2>
      <div className="answer-list">
        {data.answers.map((a, i) => (
          <button key={i} onClick={() => onAnswer(a.types)} className="answer-button">
            {a.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;