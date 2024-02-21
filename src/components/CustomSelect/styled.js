import styled from 'styled-components';
import { colors } from '../../assets/abstracts/constants';
import Icon from '../Icon';

export const StyledOption = styled.div`
  height: 4rem;
  padding-left: 0.8rem;
  border-radius: 0.9rem;
  display: flex;
  align-items: center;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${colors.grey1};
  }
`;

export const StyledSelect = styled.div`
  position: relative;
`;

export const SelectedOption = styled.div`
  height: 4rem;
  border: 0.1rem solid ${colors.grey2};
  border-radius: 0.8rem;
  padding: 0 1.2rem 0 1.6rem;
  display: flex;
  align-items: center;
  gap: 4rem;
  cursor: pointer;
`;

export const StyledOptions = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 4.4rem;
  border: 0.1rem solid ${colors.grey2};
  border-radius: 0.8rem;
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const SelectArrow = styled(Icon)`
  rotate: ${({ $rotate }) => $rotate && '180deg'};
`;
