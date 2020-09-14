import React from 'react';
import './Intro.css';
import port from '../../assets/port.svg';
import about from '../../assets/about.svg';
import work from '../../assets/work.svg';
import contact from '../../assets/contact.svg';

const Introduction = () => {
    return (
        <React.Fragment>
            <div>
                <img src={port} className="Intro-port" />
                <br /><br />
                <h1>Jaswenth</h1>
                <h3>Software Engineer<br /><br /><br /></h3>
            </div>
            <section>
                <br /><h1 align="center">About</h1>
                <img src={about} className="Intro-port" />
                <br /><br /><br /><br />
                <p align="left">Hi There !
                        I am a UI designer and a Beginning level software engineer with a passion for what I do .<br />
                        UI designing is a best way of expressing myself. I can mould ideas from concept-design-wireframes-Perfection <br />
                </p>
                <p>Rather Than Designing and coding
you can see me<br />
  # Designing Logos<br />
  # Drawing <br />
  # Editing Videos<br />
  # Playing Shuttle Batmiton<br />
                </p>
            </section>
            <section>
                <br /><h1 align="center">Work Sample</h1>
                <img src={work} className="Intro-port" />
                <br /><br /><br /><br /><br /><br />
            </section>
            <section>
                <br /><h1 align="center">Contact</h1>
                <img src={contact} className="Intro-port" />
                <h3>9543978567</h3>
                <a href="https://www.linkedin.com/in/jaswenth/"></a>
                <h3>jaswenthsivaraman@gmail.com</h3>
            </section>



        </React.Fragment>
    )

}

export default Introduction;
