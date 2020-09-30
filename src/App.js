import React from 'react';
import Input from './components/form/Input';
import Home from './components/Home/Home';
import { useState, useEffect } from 'react';
import Portfolio from './components/introduction/Portfolio';
import { Route, Switch, Redirect } from "react-router-dom";




function App() {

  const [data, setData] = useState({ name: '', pic: '', designitation: '', about: '', hobbie: '', work: '', gitlink: '', contact: '', linkedin: '', email: '' });
  const [uniqueId, setUniqueId] = useState();
  console.log(data, 'refreshed')


  useEffect(() => {
    console.log('Something happened')
  }, []);

  function onChanges(data) {
    setData(data);
    console.log(data);
  }



  return (

    <div >
      <div>
        <Switch>
          <Route path="/preview" render={() => <Portfolio data={data} />} />
          <Route path="/user" render={() => <Portfolio data={data} flag={'user'} />} />
          <Route path="/home" component={() => <Home setUniqueId={setUniqueId} />} />
          <Route path="/input-details" render={() => <Input data={data} onChanges={onChanges} uniqueId={uniqueId} />} />
          <Redirect from="/" exact to="/home" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
