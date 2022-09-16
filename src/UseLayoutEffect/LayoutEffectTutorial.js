import React, { useLayoutEffect, useEffect, useRef } from "react";

const LayoutEffectTutorial = () => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "HELLO";
  }, []);

  return (
    <div>
      <input ref={inputRef} value="PEDRO" style={{ width: 400, height: 60 }} />
    </div>
  );
};

export default LayoutEffectTutorial;

/* 
    UseLayoutEffect is called earlier stage of your page rendering than the useEffect

    - so UseEffect called after the page has rendered (but is happen so quickly that it is almost impossible to notice)

    - UseLayoutEffect called before the page rendering

    - UseLayoutEffect is UI Based

*/
