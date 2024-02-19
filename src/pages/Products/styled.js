import { colors } from '../../assets/abstracts/constants';
import { Heading1 } from '../../assets/typography/Heading';

import styled from 'styled-components';

export const CenteredHeading1 = styled(Heading1)`
  text-align: center;
`;

export const ProductsNav = styled.nav`
  margin: 2.4rem auto 8rem;
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 1.6rem;
`;

export const Circle = styled.div`
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background-color: ${colors.greyCircle};
`;
