import React, { Component } from 'react';
import DetailView from '../components/DetailView';
import { callApi } from '../service/callApi';
import PropTypes from 'prop-types';

export default class DetailPage extends Component {


  static propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string
      })
    })
  }

  state = {
    character: {},
    loading: false
  }

 
  componentDidMount() {
    this.setState({ loading: true });
    callApi(this.props.match.params.id)
      .then((character) => {
        this.setState({ character, loading: false });
      });
  }


  render() {
    if(this.state.loading) return <img src='https://media.giphy.com/media/w461tXo03sQP6/giphy.gif'></img>;

    return (
      <>
        <DetailView {...this.state.character} />
      </>
    );
  }
}
