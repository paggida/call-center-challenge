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
<<<<<<< HEAD
        <Header funcRefreshList={this.getAllActiveCalls}/>
        <CallList activeCalls={data} />
=======
        <Header />
>>>>>>> ab1d16d7813dfa09b2a8e9b0cba2ab9a1ae58687
      </Fragment>
    );
  }
}

export default Home;
