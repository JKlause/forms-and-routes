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
    page: 1,
    loading: false,
  }

 
  componentDidMount() {
    this.setState({ loading: true });
    callApi(this.props.match.params.searchQuery)
      .then((characters) => {
        this.setState({ characters, loading: false });
      });
  }


  handleCharacterClick = (id) => {
    this.props.history.push(`/detailpage/${id}`);
  }

  handleBackwardPaging = () => {
    this.setState({ loading: true });
    this.setState(state => {
      if(state.page > 1) {
        return ({ page: state.page - 1 });
      }
    }, () => {
      callApi(this.props.match.params.searchQuery, this.state.page)
        .then((characters) => {
          this.setState({ characters, loading: false });
        });
    });
  }

  handleForwardPaging = () => {
    this.setState({ loading: true });
    this.setState(state => ({ page: state.page + 1 }), () => {
      callApi(this.props.match.params.searchQuery, this.state.page)
        .then((characters) => {
          this.setState({ characters, loading: false });
        });
    });
  }


  render() {
    if(this.state.loading) return <img src='https://media.giphy.com/media/w461tXo03sQP6/giphy.gif'></img>;
    return (
      <>
        <div>
          <button onClick={this.handleBackwardPaging}>Previous Page</button>
          <button onClick={this.handleForwardPaging}>Next Page</button>
        </div>
        <div>
          <CharacterListDisplay characters={this.state.characters} handleCharacterClick={this.handleCharacterClick}/>
        </div>
      </>
    );
  }
}
