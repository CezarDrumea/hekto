import styled from 'styled-components';
import { colors } from '../../../assets/abstracts/constants';

export const FooterTop = styled.div`
  height: 48.8rem;
  padding: 9.4rem 0 14.2rem;
  background-color: ${colors.grey1};
  display: flex;
  justify-content: center;
`;

export const LogoColumn = styled.div`
  width: 30.4rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  margin-right: 14.4rem;
  align-self: flex-start;
`;

export const CategoriesColumn = styled.div`
  margin-right: 11.2rem;
  padding-top: 0.4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  color: ${colors.grey3};
`;

export const CustomerCareColumn = styled(CategoriesColumn)`
  margin-right: 13rem;
`;

export const PagesColumn = styled(CategoriesColumn)`
  margin-right: 0;
`;
