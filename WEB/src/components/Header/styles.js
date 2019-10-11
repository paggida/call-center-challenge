import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  min-width: max-content;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.regular};
  flex-direction: row;
  align-items: center;
  overflow: hidden;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 30px 0px 30px;
  width: 100%;
  img {
    width: 196px;
    height: 45px;
  }
  h2 {
    font-weight: bold;
    font-size: 19px;
    text-align: center;
    color: ${colors.text};
    padding: 10px;
  }
`;
