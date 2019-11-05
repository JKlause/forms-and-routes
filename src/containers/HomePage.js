import React, { Component } from 'react';
import RandomImage from '../components/RandomImage';
import CharacterSearchForm from '../components/CharacterSearchForm';
import { callApi } from '../service/callApi';

export default class HomePage extends Component {

  state = {
    photoUrl: '',
    name: '',
    searchQuery: ''
  }

  componentDidMount() {
    callApi('random')
      .then(([{ photoUrl, name }]) => {
        this.setState({ photoUrl, name });
      });
  }

  handleSubmit = event => {
    event.preventDefault();

    callApi(this.state.searchQuery)
      .then(([{ photoUrl, name }]) => {
        this.setState({ photoUrl, name });
      });
  }

  handleRandomGet = () => {
    callApi('random')
      .then(([{ photoUrl, name }]) => {
        this.setState({ photoUrl, name });
      });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {

    const randomImageProps = {
      photoUrl: this.state.photoUrl,
      name: this.state.name,
      handleRandomGet: this.handleRandomGet
    };

    const CharacterSearchFormProps = {
      searchQuery: this.state.searchQuery,
      handleSubmit: this.handleSubmit,
      handleChange: this.handleChange
    };
    
    return (
      <div>
        <RandomImage {...randomImageProps}/>
        <CharacterSearchForm {...CharacterSearchFormProps}/>
      </div>
    );
  }
}
