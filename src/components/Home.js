import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      skills: [],
      dataLoaded: false
    }
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: '/api/skills'
    })
    .then(data => {
      console.log('data: ',data.data.data);
      this.setState({
        skills: data.data.data,
        dataLoaded: true
      });
    })
    .catch(err => {
      console.log(err);
    });
  }

  renderSkills() {
    if (this.state.dataLoaded) {
      return this.state.skills.map(skill => {
        return(
          <div key={skill.id}>
            <p>{skill.skill}</p>
            <p>{skill.level}</p>
          </div>
        )
      })
    } else {
      <p>Loading...</p>
    }
  }


  render() {
    return (
      <div className="Home">
        <h1>These are my skills</h1>
        {this.renderSkills()}
      </div>
    )
  }
};

export default Home;
