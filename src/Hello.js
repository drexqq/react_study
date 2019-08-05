import React from "react";

function Hello({ color, name, isSpecial }) {
  return (
    <div
      style={{
        color
      }}
    >
      <b>{isSpecial ? "Say ! " : "Not say ! "}</b>
      {/* {isSpecial ? <b>*</b> : null} */}
      {/* isSpeical && <b>*</b> */}
      안녕 {name}
    </div>
    // 삼항 연산자를 사용하는경우
    // 조건에 따라 값이 바뀌어야 하는 경우
    // 그렇지 않은 경우에는 && 를 사용하는게 효율적
  );
}

Hello.defaultProps = {
  // props의 기본값 정하기
  name: "???"
};
export default Hello;
