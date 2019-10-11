import React from 'react';
import PropTypes from 'prop-types';
import {Container} from './styles';
import phone from '../../assets/img/icoPhone.png';
import newCustomer from '../../assets/img/icoNew.png';

const Call = ({id, type, isFirstContact}) => (
  <Container>
    <img src={isFirstContact? newCustomer :phone} alt="Ligação" />
    <p>{id}</p>
    <p>{type}</p>
  </Container>
);

Call.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isFirstContact: PropTypes.bool.isRequired,
};

export default Call;
