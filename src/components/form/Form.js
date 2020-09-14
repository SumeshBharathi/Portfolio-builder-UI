import React, { Component } from 'react';

export class Form extends Component{
    constructor(props) {
        super(props)

        this.state = {
            username: '', about: '', image: null, mobNo: '',
            mail: '', link: ''
        }
    }
    
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleAboutChange = (event) => {
        this.setState({
            about: event.target.value
        })
    }

    handleImageChange = (event) => {
        this.setState({
            image: event.target.files[0]
        })
    }

    handlePhoneChange = (event) => {
        this.setState({
            mobNo: event.target.value
        })
    }

    handleMailChange = (event) => {
        this.setState({
            mail: event.target.value
        })
    }

    handleLinkChange = (event) => {
        this.setState({
            link: event.target.value
        })
    }

    handleSubmit = event => {
        alert('Your Profile updated')
        event.preventdefault()
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                   Genenral
                   <br /><br />
                    <label>Name</label>
                    <input 
                        type='text'
                        value={this.state.username} 
                        onChange={this.handleUsernameChange}
                    />
                    <br /><br />
                    <label>About</label>
                    <textarea
                        type='text'
                        placeholder="Enter a short Bio"
                        value={this.state.about}
                        onChange={this.handleAboutChange}
                    />
                    <br /><br />
                    <label>Select Your Profile Pic</label>
                    <input type="file" onChange={this.handleImageChange} />
                    <br /><br />
                    Contact
                    <br /><br />
                    <label>Phone No</label>
                    <input type="number" placeholder="Enter your Mobile no." value={this.state.mobNo} onChange={this.handlePhoneChange}/>
                    <br /><br />
                    <label>E-Mail</label>
                    <input type="text" placeholder="Enter your Mail ID" value={this.state.mail} onChange={this.handleMailChange}/>
                    <br /><br />
                    <label>LinkedIn</label>
                    <input type="text" placeholder="Enter your Linked ID" value={this.state.link} onChange={this.handleLinkChange}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form;