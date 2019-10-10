import React, { Fragment, Component } from 'react';
import Header from '../../components/Header';
import CallList from '../../components/CallList';
import api from '../../services/api'

class Home extends Component {
  componentDidMount() {
    this.getAllActiveCalls()
  }

  getAllActiveCalls=()=>{
    //Chama a API
    console.log('Chama a API')
  }

  /* return (
      <Fragment>
        <Header />
        <CallList />
      </Fragment>
    ); */

  render() {
    return (
      <Fragment>
        <Header />
      </Fragment>
    );
  }
}

export default Home;
