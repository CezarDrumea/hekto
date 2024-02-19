import styled from 'styled-components';
import { colors } from '../../assets/abstracts/constants';

export const StyledButton = styled.button`
  padding: 1.6rem 4rem;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
  transition: 0.3s;

  background-color: ${colors.primary};
  color: ${colors.white};

  &:hover {
    background-color: ${colors.primaryDark};
  }
`;
