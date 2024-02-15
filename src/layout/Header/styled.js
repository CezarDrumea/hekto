import styled from 'styled-components';

export const TopBar = styled.div`
  background-color: ${({ theme }) => theme.tertiary};
  height: 4.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavBar = styled.div`
  background-color: ${({ theme }) => theme.white};
  height: 4.2rem;
`;

export const Icon = styled.svg`
  height: 1.6rem;
  width: 1.6rem;
`;

export const Contacts = styled.div`
  display: flex;
  gap: 4.8rem;
`;

export const Menu = styled(Contacts)`
  gap: 3.2rem;
`;
