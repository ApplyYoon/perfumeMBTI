import React from 'react';

const perfumeMap = {
  fruit: ["레몬", "블랙체리", "바닐라"],
  flower: ["웨딩데이", "미드나잇자스민", "레몬라벤더", "러브스펠", "샤넬5", "도손"],
  nature: ["베이비파우더"],
  powder: ["클린코튼"],
  iff: ["라임바질만다린", "코코마드모아젤"],
  france: ["미드썸나잇", "웜우드"],
};

const labelMap = {
  fruit: "과일",
  flower: "플로럴",
  perfume: "향수",
  nature: "자연",
  powder: "파우더",
  iff: "IFF",
  france: "프랑스"
};

const Result = ({ scores }) => {
  const top = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  const displayName = labelMap[top] || top;
  const recommendations = perfumeMap[top];

  return (
    <div className="result-box">
      <h2>당신의 취향은 {displayName} 계열이에요!</h2>
      <p>추천 향수</p>
      <ul>
        {recommendations?.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
};

export default Result;