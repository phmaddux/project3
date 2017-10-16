import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class LogInPage extends Component {
    state = {
        users: []
    }

    getAllUsers = () => {
        axios.get('/api/users').then(res => {
            this.setState({ users: res.data })
        })
    }
    componentWillMount(){
        this.getAllUsers()
    }

    render() {
        return (
            <div>
                <h1>Log-In</h1>
                <h3>Please Select an Existing User</h3>
                {this.state.users.map(user => {
                    return (<Link to={`/users/${user._id}`}>{user.name}</Link>)
                })}
            </div>
        )
    }
}

export default LogInPage