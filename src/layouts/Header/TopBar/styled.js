import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../../assets/abstracts/constants';

export const HeaderTopBar = styled.div`
  background-color: ${colors.tertiary};
  height: 4.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
  margin-left: auto;
`;

export const Contact = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: ${({ $withMargin }) => $withMargin && '4.8rem'};
`;

export const MenuLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;
