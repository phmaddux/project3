import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import UpdateForm from './UpdateForm'

const Name = styled.div`
font-size: 4.75rem;
font-weight: Bold;
margin: 15px 30px;
text-align: center;
`
const Picture = styled.div`
display: flex;
justify-content: center;
margin: 15px 30px;
img{
    border-radius: 20%;
    max-height: 800px;
    max-width: 800px;    
`
const AboutMe = styled.div`
font-size: 4.75rem;
margin: 15px 30px;
text-align: center;
display: flex;
justify-content: center;

`

class UsersPage extends Component {
    state = {
        user: {
            name: ''
        }
    }
    componentWillMount() {
        this.getAllUsers()
    }
    getAllUsers = async () => {
        try {
            const { id } = this.props.match.params
            const res = await axios.get(`/api/users/${id}`)
            this.setState({ user: res.data })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <Name>
                {this.state.user.name}
                </Name>
                <Picture>
                <img src={this.state.user.picture} alt="" />
                </Picture>
                <AboutMe>
                {this.state.user.aboutMe}
                </AboutMe>
                <UpdateForm />
            </div>
        );
    }
}

export default UsersPage;