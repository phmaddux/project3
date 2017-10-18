import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import UpdateForm from './UpdateForm'

class UsersPage extends Component {
    render() {
        return (
            <div>
                Is this thing on?
                {}
                <UpdateForm />
            </div>
        );
    }
}

export default UsersPage;