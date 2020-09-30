import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './Form.css';
import { Link } from 'react-router-dom';
const axios = require('axios');


function Input({ data, onChanges, uniqueId }) {

  const [form, setForm] = useState({
    username: data.username,
    pic: data.pic,
    designation: data.designation,
    about: data.about,
    hobbie: data.hobbie,
    work: data.work,
    gitlink: data.gitlink,
    contact: data.contact,
    linkedin: data.linkedin,
    email: data.email
  });

  const fullname = useRef();
  const about = useRef();
  const designation = useRef();
  const hobbies = useRef();
  const work = useRef();
  const git = useRef();
  const contact = useRef();
  const linkedin = useRef();
  const email = useRef();
  const pic = useRef();


  function updateField() {
    onChanges({
      username: fullname.current.value,
      pic: pic.current.value,
      designation: designation.current.value,
      about: about.current.value,
      hobbie: hobbies.current.value,
      work: work.current.value,
      gitlink: git.current.value,
      contact: contact.current.value,
      linkedin: linkedin.current.value,
      email: email.current.value
    })
    setForm({
      username: fullname.current.value,
      pic: pic.current.value,
      designation: designation.current.value,
      about: about.current.value,
      hobbie: hobbies.current.value,
      work: work.current.value,
      gitlink: git.current.value,
      contact: contact.current.value,
      linkedin: linkedin.current.value,
      email: email.current.value
    })
  }

  function generateURL() {
    axios.post('https://portfolio-builder-api.herokuapp.com/user/save-user', {
      "userId": uniqueId,
      "name": form.username,
      "about": form.about,
      "pic": form.pic,
      "phone": form.contact,
      "mail": form.email,
      "linkedin": form.linkedin,
      "designation": form.designation,
      "github": form.gitlink,
      "hobbie": form.hobbie,
      "work": form.work,
    })
      .then(function (response) {
        if (response.data === "success") {
          alert("Awesome! Here is your URL - https://portfolios-builder.web.app/user?id=" + uniqueId);
        }
        else if (response.data === "exists") {
          alert('Oops! Username already exists')
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <img className="mt-5 mr-5" src="https://d331tpl5vusgqa.cloudfront.net/wp-content/uploads/2019/01/thumbnail_image003.png" width="80%" />
        </div>
        <div className="col-sm-6 mt-5 mb-5" style={{ border: '1px black solid', borderRadius: '30px' }}>
          <div className="wrap">

            <h2 className="mb-5 ">Welcome {uniqueId}!</h2>

            <form  >
              <label >
                Full name* :
       <input

                  ref={fullname}
                  value={form.username}
                  name="username"
                  onChange={updateField}
                />
              </label>
              <br />
              <label >
                Picture link:
       <input
                  ref={pic}
                  value={form.pic}
                  name="pic"
                  type="text"
                  onChange={updateField}
                />
              </label >
              <br />
              <label >
                Designation:
       <input
                  ref={designation}
                  value={form.designation}
                  name="designation"
                  type="text"
                  onChange={updateField}
                />
              </label>
              <br />

              <label>About* :</label>
              <textarea
                ref={about}
                type='text'
                name="about"
                placeholder="Enter a short Bio"
                value={form.about}
                onChange={updateField}
              />
              <br />
              <label>Hobbies</label>
              <textarea
                ref={hobbies}
                type='text'
                name="hobbie"
                placeholder="Enter your hobbies"
                value={form.hobbie}
                onChange={updateField}
              /><br />
              <label>Work</label>
              <textarea
                ref={work}
                type='text'
                name="work"
                placeholder="Enter your work details"
                value={form.work}
                onChange={updateField}
              /> <br />
              <label>
                Git Link:</label>
              <input
                ref={git}
                value={form.gitlink}
                name="gitlink"
                type="url"
                onChange={updateField}
              /><br />
              <label>
                Contact:</label>
              <input
                ref={contact}
                value={form.contact}
                name="contact"
                type="number"
                onChange={updateField}
              /><br />
              <label>
                Linkedin:</label>
              <input
                ref={linkedin}
                value={form.linkedin}
                name="linkedin"
                type="url"
                onChange={updateField}
              /><br />
              <label>
                E-mail:
       <input
                  ref={email}
                  value={form.email}
                  name="email"
                  type="email"
                  onChange={updateField}
                /><br />
              </label> <br /> <br />

              <Link className="btn p-3 mb-4" to="/preview"> Preview </Link>
              <div className="btn" onClick={() => { if (fullname.current.value !== "" && about.current.value !== "") { generateURL() } else { alert('Please fill out the required fields') } }}>Save & generate URL</div><br />
            </form>
          </div>
        </div>

      </div>

    </div>
  );
}


export default Input;