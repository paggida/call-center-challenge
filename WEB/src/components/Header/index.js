import React from 'react';
import PropTypes from 'prop-types';
import {Container, Title} from './styles';
import RefreshButton from '../RefreshButton'
import logo from '../../assets/img/logo.png';

const Call = ({funcRefreshList}) => (
  <Container>
    <Title>
    <img src={logo} alt="Teravoz" />
    <h2>Visualizador de chamadas</h2>
    <RefreshButton onClick={funcRefreshList}/>
    </Title>
  </Container>
);

<<<<<<< HEAD
Call.propTypes = {
  funcRefreshList: PropTypes.func.isRequired,
};

=======
>>>>>>> ab1d16d7813dfa09b2a8e9b0cba2ab9a1ae58687
export default Call;
