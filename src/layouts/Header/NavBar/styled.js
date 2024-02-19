import styled from 'styled-components';
import Icon from '../../../components/Icon';
import SearchEl from '../../../components/Search';
import { NavLink as NavLinkEl } from 'react-router-dom';
import { colors } from '../../../assets/abstracts/constants';

export const HeaderNavBar = styled.div`
  background-color: ${({ theme }) => theme.white};
  height: 7.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoIcon = styled(Icon)`
  margin-right: 8rem;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 3.2rem;
`;

export const StyledNavLink = styled(NavLinkEl)`
  &.active {
    color: ${colors.primary};
  }
`;

export const Search = styled(SearchEl)`
  margin-left: auto;
`;
