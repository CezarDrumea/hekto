import styled, { css } from 'styled-components';
import SVGIcon from '../../components/Icon';

const flexStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TopBar = styled.div`
  background-color: ${({ theme }) => theme.tertiary};
  height: 4.8rem;
  ${flexStyles}
`;

export const NavBar = styled.div`
  background-color: ${({ theme }) => theme.white};
  height: 7.2rem;
  ${flexStyles}
`;

export const Icon = styled(SVGIcon)`
  margin-right: 8rem;
`;
