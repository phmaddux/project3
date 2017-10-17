import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SignUpPage from './SignUpPage'
import styled from 'styled-components'

const Heading = styled.div`
font-size: 4.75rem;
font-weight: Bold;
margin: 15px 30px;
`
const Intro = styled.div` {
font-size: 2rem;
margin: 15px 30px;
}
`
const UsersContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
background: rgba(225, 225, 225, .5);
border-radius: 3px;
width: 85vw;
margin: 20px auto;
border: 1px solid #e6e6e6;
`
const UserStyle = styled.div`   
border-radius: 3px;  
border: 1px solid #e6e6e6;
display: flex;
flex-grow: 1;
justify-content: center;
align-items: center;
padding: 16px;
    img{
        height: 65px;
        width: 65px;
        border-radius: 40%;
`

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
                <Heading>Join Us</Heading>
                <Intro>Or, Select an Existing User</Intro>
                <UsersContainer>
                    {this.state.users.map(user => {
                        return (
                            <UserStyle>
                                <img src={user.picture} alt=""/>
                                <Link key={user._id} to={`/'/login/${this.state.newUserID}'`}>{user.name} </Link>
                            </UserStyle>
                        )
                    })}
                </UsersContainer>
                <SignUpPage />
            </div>
        )
    }
}
export default LogInPage