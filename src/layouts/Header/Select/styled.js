import styled from 'styled-components';

export const Select = styled.select`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.white};
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2rem;
  outline: none;
  width: min-content;
  flex: 0;
`;
