import React, { Component } from 'react';
import CharacterListDisplay from '../components/CharacterListDisplay';
import { callApi } from '../service/callApi';
import PropTypes from 'prop-types';

export default class ListPage extends Component {


  static propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        searchQuery: PropTypes.string
      })
    })
  }

  state = {
    characters: [],
    searchQuery: '',
    page: 1
  }

 
  componentDidMount() {
    callApi(this.props.match.params.searchQuery)
      .then((characters) => {
        this.setState({ characters });
      });
  }


  handleCharacterClick = (id) => {
    this.props.history.push(`/detailpage/${id}`);
  }

  handleBackwardPaging = () => {

  }

  handleForwardPaging = () => {

  }


  render() {
    return (
      <>
        <div>
          <button onClick={this.handleBackwardPaging}>Next Page</button>
          <button onClick={this.handleForwardPaging}>Previous Page</button>
        </div>
        <div>
          <CharacterListDisplay characters={this.state.characters} handleCharacterClick={this.handleCharacterClick}/>
        </div>
      </>
    );
  }
}
