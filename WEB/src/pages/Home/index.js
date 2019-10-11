import React, { Fragment, Component } from 'react';
import Header from '../../components/Header';
import CallList from '../../components/CallList';
import api from '../../services/api'

class Home extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.getAllActiveCalls();
  }

  getAllActiveCalls= async ()=>{
    const {data:{list:data}} = await api.get('/activecalls');
    this.setState({ data });
  }

  render() {
    const {data} = this.state
    return (
      <Fragment>
        <Header funcRefreshList={this.getAllActiveCalls}/>
        <CallList activeCalls={data} />
      </Fragment>
    );
  }
}

export default Home;
