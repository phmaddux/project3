import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const Heading = styled.div`
font-size: 4.75rem;
font-weight: Bold;
margin: 30px 30px;
text-align: center;
`
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
    max-height: 600px;
    max-width: 600px;    
`
const Text = styled.div`
font-size: 1.75rem;
text-align: center;
margin: 15px 30px;
`

const ProjectsContainer = styled.div`
background: rgba(225, 225, 225, .3);
border-radius: 3px;
width: 85vw;
margin: 10px auto;
border: 1px solid #e6e6e6;
`
const ProjectStyle = styled.div`
border-radius: 3px;  
border: 1px solid #e6e6e6;
background: rgba(225, 225, 225, .3);
padding: 16px;
font-size: 1.75rem;
font-weight: Bold;
margin: 15px 30px;
`

class ProjectPage extends Component {
  state = {
    projects: []
  }
  componentWillMount() {
    this.getAllProjects()
  }
  getAllProjects = async () => {
    try {
      const res = await axios.get(`/api/projects`)
      // const res = await axios.get(`/api/projects/${id}`)
      this.setState({ projects: res.data })
    } catch (err) {
      console.log(err)
    }
  }


  render() {
    return (
      <div>
        <Heading>Project Types</Heading>
        <ProjectsContainer>
          <br></br>
          {this.state.projects.map(project => {
            return (
              <ProjectStyle>
                <Name>
                  {project.type}
                </Name>
                <Picture>
                  <img src={project.picture} alt="" />
                </Picture>
                <Text>
                Description: {project.description}
                </Text>
                <Text>
                Materials: {project.materials}
                </Text>
                <Text>
                Tools: {project.tools}
                </Text>
                <br></br>
              </ProjectStyle>
            )
          })}
        </ProjectsContainer>
      </div>
    )
  }
}

export default ProjectPage