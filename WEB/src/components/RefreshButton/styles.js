import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
display: flex;
button {
  color: ${colors.white};
  border-radius: 18px;
  background-color: ${colors.primary};
  cursor: pointer;
  width: 161px;
  height: 37px;
  &:hover {
    box-shadow: ${colors.light} 6px 6px 18px 1px;
    cursor: pointer;
  }
}
`;
