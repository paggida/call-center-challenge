import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  width: 80%;
  background-color: ${colors.lighter};
  justify-content: space-between;
  img {
    width: 40px;
    height: 40px;
  }
`;
