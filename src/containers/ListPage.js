import React, { Component } from 'react';
import CharacterListDisplay from '../components/CharacterListDisplay';
import { callApi } from '../service/callApi';

export default class ListPage extends Component {

  state = {
    characters: [],
  }


  handleCharacterClick = (id) => {
    callApi(id)
      .then(([{ photoUrl, name }]) => {
        this.setState({ photoUrl, name });
      });
  }


  render() {
    return (
      <div>
        <CharacterListDisplay characters={this.state.characters} handleCharacterClick={this.handleCharacterClick}/>
      </div>
    );
  }
}
