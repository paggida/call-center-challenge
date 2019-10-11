import React from 'react';
import PropTypes from 'prop-types';
import {Container, Tbody, Empty} from './styles';
import Call from '../Call'
import 'font-awesome/css/font-awesome.css';
import phone from '../../assets/img/phone.png';

const CallList = ({activeCalls}) => (
  <Container>
    <Tbody>
      {activeCalls.length ? (
        activeCalls.map(callObject => (
          <Call
            key={callObject.id}
            id={callObject.id}
            type={callObject.type}
            isFirstContact={callObject.isFirstContact}
          />
        ))
      ) : (
        <Empty>
          <img src={phone} alt="Teravoz" />
          <p>Nenhuma ligação em andamento.</p>
        </Empty>
      )}
    </Tbody>
  </Container>
);

CallList.propTypes = {
  activeCalls: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      typeRating: PropTypes.number,
      isFirstContact: PropTypes.bool,
    }),
  ).isRequired,
};

export default CallList;
