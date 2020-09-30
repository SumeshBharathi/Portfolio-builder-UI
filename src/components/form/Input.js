import React from 'react';
import { useState ,useEffect,useRef} from 'react';
import { Router, Route, Link, browserHistory, IndexRoute,onClick} from 'react-router-dom';
import './Form.css';

function Input({onChanges}) {
    const [form, setState] = useState({
      username: '',
      designation: '',about:[],hobbie:[],work:[],gitlink:'',contact:'',linkedin:'',email:''
    });
    const inputRef=useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    },[])
  
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
      <div>
      <div className="wrap">
        <h2>Registration</h2>
      <form onSubmit={printValues} >
        <label>
          Username:
          <input 
            ref={inputRef}
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
                    /><br />
        <label>Hobbies</label>
                    <textarea
                        type='text'
                        name="hobbie"
                        placeholder="Enter your hobbies"
                        value={form.hobbie}
                        onChange={updateField}
                    /><br />            
         <label>Work</label>
                    <textarea
                        type='text'
                        name="work"
                        placeholder="Enter your work details"
                        value={form.work}
                        onChange={updateField}
                    /> <br />
                    <label>
          Git Link:</label>
          <input
            value={form.gitlink}
            name="gitlink"
            type="url"
            onChange={updateField}
          /><br />
          <label>
          Contact:</label>
          <input
            value={form.contact}
            name="contact"
            type="number"
            onChange={updateField}
          /><br />
          <label>
          Linkedin:</label>
          <input
            value={form.linkedin}
            name="linkedin"
            type="url"
            onChange={updateField}
          /><br />
          <label>
          E-mail:
          <input
            
            value={form.email}
            name="email"
            type="email"
            onChange={updateField}
          /><br />
        </label> <br /> <br />                     
        <button className="btn">Build</button><br />
        <Link className="btn" to="/Portfolio"> Submit </Link>
      </form>
      </div>
      </div>
    );
  }
  
  
export default Input;