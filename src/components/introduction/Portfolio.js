import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Intro.css';
import port from '../../assets/port.svg';
import about from '../../assets/about.svg';
import work from '../../assets/work.svg';
import menu from '../../assets/menu.svg';
import contact from '../../assets/contact.svg';
const axios = require('axios');

let effect = false;

const Portfolio = ({ data, flag }) => {
    const [form, setForm] = useState({
        username: data.username,
        pic: data.pic,
        designation: data.designation, about: data.about, hobbie: data.hobbie, work: data.work,
        gitlink: data.gitlink, contact: data.contact, linkedin: data.linkedin, email: data.email
    });

    console.log(data)
    let { uniqueId } = useParams()

    useEffect(() => {
        console.log('Something happened')
    }, [form]);

    if (flag === 'user') {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const id = params.get('id');
        // alert(id)

        axios.post('https://portfolio-builder-api.herokuapp.com/user', {
            userId: id
        })
            .then(function (response) {
                if (response.data !== "exists") {
                    if (!effect) {
                        effect = true;
                        console.log(response.data[0])
                        setForm({
                            username: response.data[0].name,
                            pic: response.data[0].pic,
                            designation: response.data[0].designation,
                            about: response.data[0].about,
                            hobbie: response.data[0].hobbie,
                            work: response.data[0].work,
                            gitlink: response.data[0].gitlink,
                            contact: response.data[0].phone,
                            linkedin: response.data[0].linkedin,
                            email: response.data[0].mail
                        })
                    }
                }
                else {
                    alert('Oops! Username is already taken, try something new...')
                }
            })
            .catch(function (error) {
                console.log(error);
            });


    }

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
    return (
        <React.Fragment>
            <div className="Intro-grad" style={{ fontFamily: "'Pacifico', cursive", textAlign: 'center' }}>

                <div>
                    <img src={port} className="Intro-port" />
                    <br /><br />
                    <h1 style={{ fontFamily: "'Pacifico', cursive", marginTop: '0px', fontSize: '60px' }}>{form.username}</h1>
                    <h3 style={{ fontFamily: "'Pacifico', cursive", color: "lightgreen", fontSize: '60px' }}>{form.designation}<br />
                        {form.pic !== "" ? <img className="mt-5" width="250px" style={{ borderRadius: '150px' }} src={form.pic} alt="profile-picture" /> : null}
                        <br /><br /></h3>
                </div>
                <section style={{ marginRight: '150px' }}>
                    <br /><h1 align="center" style={{ marginTop: '80px', }}>About</h1>
                    <img src={about} className="Intro-port" />
                    <br /><br /><br /><br />
                    <h3 align="left">{form.about}</h3><br /><br />
                    <h3 align="left">{form.hobbie}</h3><br /><br />
                </section>
                <section style={{ marginRight: '150px' }}>
                    <br /><h1 align="center" style={{ marginTop: '80px', }}>Work Sample</h1>
                    <img src={work} className="Intro-port" />
                    <br /><br /><br /><h3>{form.work}</h3>
                    <h3><img width="60px" src="https://pngimg.com/uploads/github/github_PNG63.png" />
                        {data.gitlink}</h3>
                    <br /><br /><br />
                </section>
                <section style={{ height: '1200px' }}>
                    <br /><h1 align="center" style={{ marginTop: '80px', }}>Contact</h1>
                    <img src={contact} className="Intro-port" />
                    <h3 className="mb-5">{form.contact}</h3>
                    <h3><img width="60px" src="https://i.dlpng.com/static/png/250446_preview.png" />{form.linkedin}</h3>
                    <h3 className="mb-5">{form.email}</h3>
                </section>


            </div>
        </React.Fragment>
    )

}

export default Portfolio;
