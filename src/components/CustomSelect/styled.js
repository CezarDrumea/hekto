import styled from 'styled-components';
import { colors } from '../../assets/abstracts/constants';

export const StyledOption = styled.div`
  height: 4rem;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${colors.grey1};
  }
`;

export const StyledSelect = styled.div``;

export const SelectedOption = styled.div`
  height: 4rem;
  border: 0.1rem solid ${colors.grey2};
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
