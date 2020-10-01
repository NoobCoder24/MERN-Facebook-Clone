import React from "react";
import "./App.css";
import Feed from "./Components/Feed";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
      {/*HEader*/}
      <Header />
      {/*sidebar*/}
      <Sidebar />
      {/*feed*/}
      <Feed />
      {/*widgets*/}
    </div>
  );
}

export default App;
