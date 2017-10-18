import React, { Component } from 'react'
import styled from 'styled-components'

const Heading = styled.div`
    font-size: 4.75rem;
    font-weight: Bold;
    margin: 35px 30px;
`
const Intro = styled.div` {
    font-size: 2rem;
    margin: 15px 50px;
}
`;

class HomePage extends Component {
    render() {
        return (
            <div>
                <Heading>Welcome to The Forge</Heading>
                <Intro>A crowdsourced collection of projects for anyone to use.</Intro>
                <Intro>Pick a project, try it out, share your knowledge.</Intro>
                <Intro>Let's all make something amazing.</Intro>
            </div>
        )
    }
}

export default HomePage