import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute,onClick} from 'react-router-dom';
import './Home.css';
import home from '../../assets/home.svg'

const Home =()=>{
    return(
        <React.Fragment>
             <section className="grad">
            <img src={home} className="Img"/>
            <h1>This is a Portfolio Builder</h1>
            <h3>Build Your Portfolio Here...</h3>
            <Link className="button" to="/Input">Build</Link>
           </section>
        </React.Fragment>

    );
}

export default Home;