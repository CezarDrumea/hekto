import styled from 'styled-components';
import { maxContentWidth } from '../abstracts/constants';

export const AppMinHeightContainer = styled.div`
  min-height: calc(100vh - 66.4rem);
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: ${({ $paddingTop }) => $paddingTop};
  padding-bottom: ${({ $paddingBottom }) => $paddingBottom};
`;

export const ContentMaxWidthContainer = styled.div`
  max-width: ${maxContentWidth};
  display: ${({ $alignItems, $justifyContent }) =>
    $alignItems || $justifyContent ? 'flex' : null};
  align-items: ${({ $alignItems }) => $alignItems};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  gap: ${({ $gap }) => $gap};
  flex: 1;
`;

export const ColumnFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap};
`;
