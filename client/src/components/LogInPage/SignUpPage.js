import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class SignUpPage extends Component {
    state = {
        newUser: {
            name: '',
            password: '',
            picture: '',
        },
        redirectToLogin: false,
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
        this.setState({ redirectToLogin: true, newUserId: res.data._id })
    }
    render() {
        if (this.state.redirectToLogin) {
            return <Redirect to={'/login/${this.state.newUserID}'} />
        }

        return (
            <div>
                <h1></h1>
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
                    <div>
                        <label htmlFor="picture">Picture Url</label>
                        <input onChange={this.handleChange}
                            value={this.state.newUser.picture}
                            name="picture" type="text" />
                    </div>
                    <button>Sign Up</button>
                </form>
            </div>
        );
    }
}

export default SignUpPage;