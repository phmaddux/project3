import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

const Form = styled.div`
font-size: 1.25rem;
margin: 15px 15px 15px 15px;
`

class SignUpPage extends Component {
    state = {
        newUser: {
            name: '',
            password: '',
            picture: '',
            description: '',
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
            return <Redirect to={`/login/users/${this.state.newUserId}`} />
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Form>
                        <label htmlFor="name">Profile Name: </label>
                        <input
                            onChange={this.handleChange} name="name"
                            type="text" value={this.state.newUser.name}
                        />
                    </Form>
                    <Form>
                        <label htmlFor="password">Password: </label>
                        <input onChange={this.handleChange}
                            value={this.state.newUser.password}
                            name="password" type="text" />
                    </Form>
                    <Form>
                        <label htmlFor="picture">Picture Url: </label>
                        <input onChange={this.handleChange}
                            value={this.state.newUser.picture}
                            name="picture" type="text" />
                    </Form>
                    <Form>
                        <label htmlFor="aboutMe">About You: </label>
                        <input onChange={this.handleChange}
                            value={this.state.newUser.aboutMe}
                            name="aboutMe" type="text" />
                    </Form>
                    <button>Sign Up</button>
                </form>
            </div>
        );
    }
}

export default SignUpPage;