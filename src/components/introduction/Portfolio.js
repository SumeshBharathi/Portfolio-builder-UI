import React ,{useState}from 'react';
import './Intro.css';
import port from '../../assets/port.svg';
import about from '../../assets/about.svg';
import work from '../../assets/work.svg';
import contact from '../../assets/contact.svg';

const Portfolio = ({data}) => {
       return (
        <React.Fragment>
            <div>
                <img src={port} className="Intro-port" />
                <br /><br />
                <h1>{data.username}</h1>
                <h3>{data.designation}<br /><br /><br /></h3>
            </div>
            <section>
                <br /><h1 align="center">About</h1>
                <img src={about} className="Intro-port" />
                <br /><br /><br /><br />
                <p align="left">{data.about}</p>
                <p></p>
            </section>
            <section>
                <br /><h1 align="center">Work Sample</h1>
                <img src={work} className="Intro-port" />
       <br /><br /><br /><h3></h3>
                <br /><br /><br />
            </section>
            <section>
                <br /><h1 align="center">Contact</h1>
                <img src={contact} className="Intro-port" />
                <h3>9543978567</h3>
                <h3>jaswenthsss</h3>
                <h3>jash@gmail</h3>
            </section>



        </React.Fragment>
    )

}

export default Portfolio;
