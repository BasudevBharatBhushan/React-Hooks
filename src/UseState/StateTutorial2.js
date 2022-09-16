import React, { useState } from "react";

function StateTutorial2() {
  const [inputValue, setInputValue] = useState("Basudev");

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
    </div>
  );
}

export default StateTutorial2;
