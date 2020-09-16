import React from 'react';
import { useState } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute,onClick} from 'react-router-dom';

function Input({onChanges}) {
    const [form, setState] = useState({
      username: '',
      designation: '',about:[],
    });
  
    const printValues = e => {
      e.preventDefault();
      onChanges(form);
    };
  
    const updateField = e => {
      setState({
        ...form,
        [e.target.name]: e.target.value
      });
    };
  
    return (
      <form onSubmit={printValues}>
        <label>
          Username:
          <input
            value={form.username}
            name="username"
            onChange={updateField}
          />
        </label>
        <br />
        <label>
          Designation:
          <input
            value={form.designation}
            name="designation"
            type="text"
            onChange={updateField}
          />
        </label>
        <br />
        <label>About</label>
                    <textarea
                        type='text'
                        name="about"
                        placeholder="Enter a short Bio"
                        value={form.about}
                        onChange={updateField}
                    />
        <button>Build</button>
        <Link to="/Portfolio"> Submit </Link>
      </form>
      
    );
  }
  
  
export default Input;