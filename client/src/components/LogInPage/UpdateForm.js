import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

const Form = styled.div`
font-size: 1.25rem;
margin: 15px 15px 15px 15px;
`

class UpdateForm extends Component {
    state = {
        user: {
            name: '',
            password: '',
            picture: '',
            description: '',
        },
        redirectToUser: false,
        newUserId: ''
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const updateUser = { ...this.state.user }
        updateUser[attribute] = event.target.value
        this.setState({ user: updateUser })
    }
    updateUser = async (event) => {
        event.preventDefault()
        const res = await axios.patch('/api/users/:id', {
            // const res = await axios.patch(`/api/users/${userId}`)
            'user': this.state.user
        })
        this.setState({ redirectToLogin: true, newUserId: res.data._id })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Form>
                        <label htmlFor="name">Profile Name: </label>
                        <input
                            onChange={this.handleChange} name="name"
                            type="text" value={this.state.user.name}
                        />
                    </Form>
                    <Form>
                        <label htmlFor="password">Password: </label>
                        <input onChange={this.handleChange}
                            value={this.state.user.password}
                            name="password" type="text" />
                    </Form>
                    <Form>
                        <label htmlFor="picture">Picture Url: </label>
                        <input onChange={this.handleChange}
                            value={this.state.user.picture}
                            name="picture" type="text" />
                    </Form>
                    <Form>
                        <label htmlFor="aboutMe">About You: </label>
                        <input onChange={this.handleChange}
                            value={this.state.user.aboutMe}
                            name="aboutMe" type="text" />
                    </Form>
                    <button>Update</button>
                </form>
            </div>
        );
    }
}

export default UpdateForm;