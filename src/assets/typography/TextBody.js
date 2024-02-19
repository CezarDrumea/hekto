import styled from 'styled-components';
import { colors } from '../abstracts/constants';

export const TextBody = styled.p`
  font-family: Lato, sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2rem;
  color: ${({ $color }) => colors[$color]};
`;

export const TextBodyL = styled(TextBody)`
  font-size: 1.8rem;
  line-height: 2.4rem;
`;

export const TextBodyBold = styled(TextBody)`
  font-weight: 700;
  letter-spacing: 0.1rem;
`;

export const TextBodyS = styled(TextBody)`
  font-size: 1.4rem;
  line-height: 1.6rem;
`;
