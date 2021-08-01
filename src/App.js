import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content"
import Subject from "./components/Subject"
import './App.css';





class App extends Component { 
  render() {
    return(
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject title="React" sub="For Ui"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
        <Content title="CSS" desc="CSS is good."></Content>
      </div>
    );
  }
}
//외부파일로 사용할수있도록 export해줌
export default App;
