import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  margin-left: 25%;
  margin-right: 25%;
  flex-direction: column;
  min-width: 315px;
`;

export const Tbody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${colors.light} 4px 4px 12px 1px;
  margin-bottom: 15px;
  border-radius: 10px;
  overflow:hidden;
  background-color: ${colors.lighter};
`;
export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  img {
    margin-bottom: 15px;
    width: 150px;
  }
  p {
    font-weight: bold;
    font-size: 19px;
    color: ${colors.text};
  }
`;
