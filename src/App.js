import React from 'react';
import Input from './components/form/Input';
import Home from './components/Home/Home';
import { useState } from 'react';
import Portfolio from './components/introduction/Portfolio';
import { Route, Switch, Redirect } from "react-router-dom";
import { render } from '@testing-library/react';
 
function App() {
  const [data,setData]=useState({name:'',designitation:'',about:[],hobbie:[],work:[],gitlink:'',contact:'',linkedin:'',email:''});
   const onChanges =(data) =>{
    setData(data);
    console.log (data);
   }
  return (

    <div > 
 <div>
  <Switch>
  <Route path="/Portfolio" render={ () => <Portfolio data={data} />} />
  <Route path="/Home" component={ ()=> <Home/> }/>
  <Route path="/Input" render={ ()=> <Input onChanges={onChanges} /> }/>
  <Redirect from="/" exact to="/Home" />
  </Switch>
  </div>
    </div>
  );
}

export default App;
