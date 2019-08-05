import React, { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(prevNumber => prevNumber + 1);
    console.log("up");
  };
  const decrease = () => {
    setNumber(prevNumber => prevNumber - 1);
    console.log("down");
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increase}>Up</button>
      <button onClick={decrease}>Down</button>
    </div>
    // 이벤트를 걸때는 함수를 호출하게되면 렌더링 될때 바로 실행됨
  );
}

export default Counter;
