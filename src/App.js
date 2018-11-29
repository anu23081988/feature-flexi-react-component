import React, { Component } from 'react';
import './App.css';
import { flexiConfig } from './constants/flexi-form-constants';
import Flexi from './utilities/FlexiForm/components/flexi-form-component';

class App extends Component {
  onSubmit = (model) =>{
      alert(JSON.stringify(model));
  }
  render() {
    return (
      <div className="App">
        <Flexi
         title="Flexi Form Component"
         config ={flexiConfig}
         onSubmit = {(flexiConfig) => {this.onSubmit(flexiConfig)}}
        />
      </div>
    );
  }
}

export default App;
