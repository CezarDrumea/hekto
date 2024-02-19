import styled from 'styled-components';
import { colors } from '../abstracts/constants';

export const SubtitleL = styled.h5`
  font-size: 2.6rem;
  font-weight: 700;
  line-height: 3.2rem;
  color: ${({ $color }) => colors[$color]};
`;

export const SubtitleM = styled(SubtitleL)`
  font-size: 2.2rem;
  line-height: 2.8rem;
`;

export const SubtitleS = styled(SubtitleL)`
  font-size: 2rem;
  line-height: 2.4rem;
`;

export const SubtitleXS = styled(SubtitleL)`
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2rem;
`;
