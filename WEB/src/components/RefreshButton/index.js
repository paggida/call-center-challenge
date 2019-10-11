import React from 'react';
import PropTypes from 'prop-types';
import {Container} from './styles';
import 'font-awesome/css/font-awesome.css';


const RefreshButton = ({onClick}) => (
  <Container>
    <button type="button" onClick={onClick}>
      <i className="fa fa-refresh fa-lg" /> Atualizar chamadas
    </button>
  </Container>
);

RefreshButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default RefreshButton;
