import styled from 'styled-components';
import { colors } from '../abstracts/constants';

export const TextLabel = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2rem;
  display: flex;
  align-items: center;
  color: ${({ $color }) => colors[$color]};
`;

export const TextLabelBold = styled(TextLabel)`
  font-weight: 700;
`;

export const TextLabelS = styled(TextLabel)`
  font-size: 1.4rem;
  line-height: 1.6rem;
`;
