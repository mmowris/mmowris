import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Skill extends Component {
  constructor() {
    super();
    this.state = {
      skill: null,
      dataLoaded: false
    }
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: '/api/skills/${this.props.match.params.id}'
    })
    .then(data => {
      this.setState({
        skill: data.data.data,
        dataLoaded: true
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  renderSkill() {
    const skill = this.state.skill;
    if (this.state.dataLoaded) {
      return (
        <div>
          <p className="skill">"{skill.skill}"</p>
          <p className="level">"{skill.level}"</p>
        </div>
      )
    } else {
      return(
        <p>Loading...</p>
      )
    }
  }

  render() {
    return (
      <div className="Skill">
        {this.renderSkill()}
        <Link to="/">Home</Link>
      </div>
    )
  }
};

export default Skill;
