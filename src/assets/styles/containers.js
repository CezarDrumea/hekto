import styled from 'styled-components';
import { maxContentWidth } from '../abstracts/constants';

export const AppMinHeightContainer = styled.div`
  min-height: calc(100vh - 66.4rem);
`;

export const ContentMaxWidthContainer = styled.div`
  max-width: ${maxContentWidth};
  display: flex;
  align-items: center;
  flex: 1;
`;
