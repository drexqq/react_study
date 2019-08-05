import React, { useState } from "react";

function InputSample() {
  const [text, setText] = useState("");

  const onChange = e => {
    setText(e.target.value);
  };

  const onReset = e => {
    setText("");
  };
  return (
    <div>
      <input onChange={onChange} value={text} />
      <button onClick={onReset}>초기화</button>
      <div>
        <p>값 : </p>
        {text}입니당~
      </div>
    </div>
  );
}

export default InputSample;
