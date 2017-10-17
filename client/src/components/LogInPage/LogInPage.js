import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SignUpPage from './SignUpPage'
import styled from 'styled-components'

const Heading = styled.div`
    font-size: 4.75rem;
    font-weight: Bold;
`
const Intro = styled.div` {
    font-size: 2rem;
}
`;

const UsersContainer = styled.div`
background-color: #fff;
border-radius: 3px;
width: 95vw;
max-width: 600px;
margin: 20px auto;
border: 1px solid #e6e6e6;
`;
const UserStyle = styled.div`
    border-radius: 3px;  
    border: 1px solid #e6e6e6;
    display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  img{
    height: 30px;
    width: 30px;
    border-radius: 100%;
  }
  span{
    padding-left: 5px;
    font-weight: bold;
  }
`;

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
                                <Link key={user._id} to={`/'/login/${this.state.newUserID}'`}>{user.name} </Link>
                                <img src={user.picture} alt="${user.name}'s picture"/>
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