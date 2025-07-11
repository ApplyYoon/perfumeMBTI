import React, { useEffect, useState } from 'react';

const Question = ({ data, onAnswer }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [fadingIndexes, setFadingIndexes] = useState([]);

  useEffect(() => {
    // 새로운 질문일 때 상태 초기화
    setSelectedIndex(null);
    setFadingIndexes([]);
  }, [data]);

  const handleClick = (types, index) => {
    setSelectedIndex(index);

    // 선택되지 않은 버튼들을 순차적으로 숨김 처리
    const toFade = data.answers
      .map((_, i) => i)
      .filter(i => i !== index);

    toFade.forEach((i, seq) => {
      setTimeout(() => {
        setFadingIndexes(prev => [...prev, i]);
      }, 200 * seq); // 0.2초 간격으로 사라지게
    });

    // 모두 사라진 뒤 onAnswer 실행
    setTimeout(() => {
      onAnswer(types);
    }, 200 * toFade.length + 300);
  };

  return (
    <div className="question-box">
      <h2>{data.question}</h2>
      <div className="answer-list">
        {data.answers.map((a, i) => {
          const isSelected = selectedIndex === i;
          const isFading = fadingIndexes.includes(i);

          return (
            <button
              key={i}
              onClick={() => handleClick(a.types, i)}
              className={`answer-button 
                ${isSelected ? 'selected' : ''} 
                ${isFading ? 'hidden' : ''}`}
              style={{ animationDelay: `${i * 0.2}s` }}
              disabled={selectedIndex !== null} // 한 번만 클릭 가능하게
            >
              {a.text}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Question;