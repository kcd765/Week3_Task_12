import React from "react";
import Qn3 from "./components/qn3/qn3";
import Qn4 from "./components/qn4/qn4";
import './app.css'

const App = () => {
  return (
    <div>
      <Qn3 />

      <br/>

      <Qn4 />
      <SearchBar />
    </div>
  )
};

export default App;
