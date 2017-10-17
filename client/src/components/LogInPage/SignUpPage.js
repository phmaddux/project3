import React, { Component } from 'react';
import axios from 'axios'

class SignUpPage extends Component {
    state = {
        newUser: {
            name: '',
            password: '',
            picture: '',
        },
        redirectToProjects: false,
        newUserId: ''
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const updateUser = { ...this.state.newUser }
        updateUser[attribute] = event.target.value
        this.setState({ newUser: updateUser })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const res = await axios.post('/api/users', {
            'user': this.state.newUser
        })
        this.setState({ redirectToProjects: true, newUserId: res.data._id })
    }
    render() {
        if (this.state.redirectToProject) {
            return <redirect to={'/login'} />
        }

        return (
            <div>
                <h1>Join Us</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Profile Name</label>
                        <input
                            onChange={this.handleChange} name="name"
                            type="text" value={this.state.newUser.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input onChange={this.handleChange}
                            value={this.state.newUser.password}
                            name="password" type="text" />
                    </div>
                    <button>Sign Up</button>
                </form>
            </div>
        );
    }
}

export default SignUpPage;