import React from 'react';
import logo from './logo.svg';
import {Link,Router,Route,HashRouter,Switch} from 'react-router-dom';
import {outerRoutes} from './router/index.js';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="App">
        <HashRouter>
            {outerRoutes.map((item,index)=>{
              return (<Route path={item.path} key={index} component={item.component} />)
            })}
        </HashRouter>
      </div>
    );
  }
}

export default App;
