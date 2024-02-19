import styled from 'styled-components';
import { colors } from '../../assets/abstracts/constants';

export const SearchContainer = styled.div`
  width: ${({ $width }) => $width};
  height: 4rem;
  padding: 0.2rem 0.2rem 0.2rem 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
  border-radius: 0.8rem;
  border: 0.1rem solid ${colors.grey2};
  background-color: ${colors.white};

  input {
    flex: 1;
    align-self: stretch;
    border: none;
    outline: none;
    background-color: transparent;

    &,
    &::placeholder {
      font-family: Lato;
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 1.6rem;
    }

    &::placeholder {
      color: ${colors.grey3};
    }
  }

  button {
    display: grid;
    place-content: center;
    align-self: stretch;
    padding: 0 1.6rem;
  }
`;
