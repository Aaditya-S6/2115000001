import React from "react";
import { Route, Routes } from "react-router-dom";
import Number from "./components/Number";
import Answer from "./components/Answer";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Number/>} />
           <Route path="/answer" element={<Answer/>}/>
      </Routes>
    </>
  );
}

export default App;