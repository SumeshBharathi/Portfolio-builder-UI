import React from 'react';
import Input from './components/form/Input';
import { useState } from 'react';
import Portfolio from './components/introduction/Portfolio';
import { Route, Switch, Redirect } from "react-router-dom";
import { render } from '@testing-library/react';
 
function App() {
  const [data,setData]=useState({name:'',designitation:''});
   const onChanges =(data) =>{
    setData(data);
    console.log (data);
   }
  return (

    <div className="Intro-grad"> 
 <div>
  <Switch>
  <Route path="/Portfolio" render={ () => <Portfolio data={data} />} />
  <Route path="/Input" render={ ()=> <Input onChanges={onChanges} /> }/>
  <Redirect from="/" exact to="/Input" />
  </Switch>
  </div>
    </div>
  );
}

export default App;
