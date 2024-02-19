import styled, { css } from 'styled-components';
import { colors } from '../abstracts/constants';

const defaultHeadingStyles = css`
  text-transform: capitalize;
  font-weight: 700;
  color: ${({ $color }) => colors[$color]};
`;

export const Heading1 = styled.h4`
  font-size: 5.2rem;
  line-height: 6.4rem;
  letter-spacing: 0.078rem;
  ${defaultHeadingStyles}
`;

export const Heading2 = styled.h3`
  font-size: 4.4rem;
  line-height: 5.2rem;
  letter-spacing: 0.066rem;
  ${defaultHeadingStyles}
`;

export const Heading3 = styled.h2`
  font-size: 3.6rem;
  line-height: 4.4rem;
  letter-spacing: 0.054rem;
  ${defaultHeadingStyles}
`;

export const Heading4 = styled.h1`
  font-size: 2.8rem;
  line-height: 3.6rem;
  letter-spacing: 0.042rem;
  ${defaultHeadingStyles}
`;
