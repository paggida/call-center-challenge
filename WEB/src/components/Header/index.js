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

Call.propTypes = {
  funcRefreshList: PropTypes.func.isRequired,
};

export default Call;
