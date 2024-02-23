import styled from 'styled-components';
import { colors } from '../../assets/abstracts/constants';

export const CheckboxInput = styled.input`
  display: none;

  & + label > div > svg {
    height: 1rem;
    width: 1rem;
    fill: transparent;
  }

  &:checked + label > div > svg {
    fill: white;
  }
`;

export const Checkbox = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  background-color: ${({ $color }) => $color ?? colors.primaryLight};
`;
