import React, { Component } from 'react';
import RandomImage from '../components/RandomImage';
import CharacterSearchForm from '../components/CharacterSearchForm';
import { callApi } from '../service/callApi';
import PropTypes from 'prop-types';

export default class HomePage extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  state = {
    photoUrl: '',
    name: '',
    searchQuery: '',
    loading: false
  }

  componentDidMount() {
    this.setState({ loading: true });
    callApi('random')
      .then(([{ photoUrl, name }]) => {
        this.setState({ photoUrl, name, loading: false });
      });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push(`/listpage/${this.state.searchQuery}`);
  }

  handleRandomGet = () => {
    this.setState({ loading: true });
    callApi('random')
      .then(([{ photoUrl, name }]) => {
        this.setState({ photoUrl, name, loading: false });
      });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    if(this.state.loading) return <img src='https://media.giphy.com/media/w461tXo03sQP6/giphy.gif'></img>;

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
