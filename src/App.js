import React from "react";
import "./App.css";

import StateTutorial from "./UseState/StateTutorial";
import StateTutorial2 from "./UseState/StateTutorial2";
import ReducerTutorial from "./UseReducer/ReducerTutorial";
import EffectTutorial from "./UseEffect/EffectTutorial";
import RefTutorial from "./UseRef/RefTutorial";
import LayoutEffectTutorial from "./UseLayoutEffect/LayoutEffectTutorial";
import ImperativeHandle from "./UseImperativeHandle/ImperativeHandle";
import ContextTutorial from "./UseContext/ContextTutorial";
import MemoTutorial from "./UseMemo/MemoTutorial";
import CallbackTutorial from "./UseCallback/CallbackTutorial";

function App() {
  return (
    <div>
      {/* <StateTutorial /> */}
      {/* <StateTutorial2 /> */}
      {/* <ReducerTutorial /> */}
      {/* {<EffectTutorial />} */}
      {/* <RefTutorial /> */}
      {/* <LayoutEffectTutorial /> */}
      {/* <ImperativeHandle /> */}
      {/* <ContextTutorial /> */}
      <MemoTutorial />
      {/* <CallbackTutorial/> */}
    </div>
  );
}

export default App;
