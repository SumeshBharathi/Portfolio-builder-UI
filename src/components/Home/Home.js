import React, { useRef } from 'react';
import { useHistory } from "react-router-dom";
import './Home.css';
import home from '../../assets/home.svg'
const axios = require('axios');


const Home = ({ setUniqueId }) => {
    fetch('https://portfolio-builder-api.herokuapp.com/')
        .then(response => {
            //Just waking up...
            console.log(response)
        })
        .catch(error => {
            // handle the error
        });
    const input = useRef();
    let history = useHistory();

    function check() {
        axios.post('https://portfolio-builder-api.herokuapp.com/user/check-user', {
            userId: input.current.value
        })
            .then(function (response) {
                if (response.data === "success") {
                    setUniqueId(input.current.value)
                    history.push('/input-details')
                }
                else {
                    alert('Oops! Username is already taken, try something new...')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <div className="container mt-5">

                <div className="row mt-5">
                    <div className="col-sm-3">

                    </div>
                    <div className="col-sm-6 mt-5 text-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/Portfolio_.gif" width="70%" />
                        <img src="https://static.wixstatic.com/media/809fa5_c02c7069a7f246ed986e103ade08b3d1~mv2.gif" width="80%" />
                        <div class="form-group">
                            <label for="exampleInputEmail1">Choose your username</label>
                            <input type="text" ref={input} class="form-control" id="exampleInputEmail1" placeholder="Unique username" />

                        </div>


                        <button onClick={() => { if (input.current.value !== "") { check() } else { alert('Invalid input') } }} class="btn btn-primary">Start building</button>

                    </div>
                </div>
            </div>
        </>

    );
}

export default Home;