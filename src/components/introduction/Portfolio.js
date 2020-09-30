import React ,{useState}from 'react';
import './Intro.css';
import port from '../../assets/port.svg';
import about from '../../assets/about.svg';
import work from '../../assets/work.svg';
import menu from '../../assets/menu.svg';
import contact from '../../assets/contact.svg';

const Portfolio = ({data}) => {
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
       return (
        <React.Fragment>
            <div className="Intro-grad">    
            {/* <div id="mySidenav" class="sidenav">
  <a href="#" class="closebtn" onclick={closeNav}>&times;</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>
<img src={menu} onClick={openNav} /> */}
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
                <p align="left">{data.about}</p><br /><br />
                <p align="left">{data.hobbie}</p><br /><br />
            </section>
            <section>
                <br /><h1 align="center">Work Sample</h1>
                <img src={work} className="Intro-port" />
       <br /><br /><br /><h3>{data.work}</h3>
       <h4>{data.gitlink}</h4>
                <br /><br /><br />
            </section>
            <section>
                <br /><h1 align="center">Contact</h1>
                <img src={contact} className="Intro-port" />
                <h3>{data.contact}</h3>
                <h3>{data.linkedin}</h3>
                <h3>{data.email}</h3>
            </section>


            </div>
        </React.Fragment>
    )

}

export default Portfolio;
