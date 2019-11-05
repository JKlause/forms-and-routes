import React, { Component } from 'react';
import DetailView from '../components/DetailView';
import { callApi } from '../service/callApi';
import PropTypes from 'prop-types';

export default class ListPage extends Component {


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
  }

 
  componentDidMount() {
    callApi(this.props.match.params.id)
      .then((character) => {
        this.setState({ character });
      });
  }


  render() {
    return (
      <>
        <DetailView {...this.state.character} />
      </>
    );
  }
}
