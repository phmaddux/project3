import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SignUpPage from './SignUpPage'


class LogInPage extends Component {
    state = {
        users: []
    }

    componentWillMount() {
        this.getAllUsers()
    }
    getAllUsers = async () => {
        try {
            const res = await axios.get('/api/users')
            this.setState({ users: res.data })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <h1>Join Us</h1>
                <h4>Or, Select an Existing User</h4>
                {this.state.users.map(user => {
                    return (<Link key={user._id} to={`/project`}>{user.name} </Link>)
                })}
                <SignUpPage/>
            </div>
        )
    }
}

export default LogInPage