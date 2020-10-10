import React from 'react';
import './App.css';

class App extends React.Component{
  render(){
    return (
      <div className = "className">
        <header>
        <form id = "phoneBookApp">
          <input type ="text" placeholder= "Enter Text"/>
          <button type= 'submit' placeholder>Add</button>
        </form>
      </header>
      </div>
    );
  
  }
}

export default App;
