import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const Heading = styled.div`
font-size: 4.75rem;
font-weight: Bold;
margin: 30px 30px;
`
const ProjectsContainer = styled.div`
`
const ProjectStyle = styled.div`
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
      const res = await axios.get('/api/projects')
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
          {this.state.projects.map(project => {
            return (
              <ProjectStyle>
                <img src={project.picture} alt="" />
                <Link key={project._id} to={`/api/projects${project._id}`}>{project.name} </Link>
              </ProjectStyle>
            )
          })}
          </ProjectsContainer>
      </div>
    )
  }
}

export default ProjectPage