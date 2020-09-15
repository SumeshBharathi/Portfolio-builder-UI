import React from 'react';
import Introduction from './components/introduction/Introduction';
import Form from './components/form/Form';

function App() {
  let data = { name: 'Dummy name', domain: 'Dummy domain', about: 'Dummy about', } // add the data needed here

  return (
    <div className="Intro-grad">

      {/* Handle router here  */}

      <Introduction data={data} />
    </div>
  );
}

export default App;
