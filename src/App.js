import React, { useState } from "react";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import "./styles/app.css";

function App() {

  return (
    <div className="App">
        <PostItem post = {{id: 1, title: 'LOREM IPSUM', body: 'LOREM IPSUM DOLOREM SIT AMET'}} />
    </div>
  );
}

export default App;
