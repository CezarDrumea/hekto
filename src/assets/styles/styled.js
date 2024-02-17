import { css } from 'styled-components';

export const flexContainerStyles = css`
  display: flex;
  gap: ${({ $gap }) => $gap && null};
  justify-content: ${({ $justCont }) => $justCont && null};
  align-items: ${({ $alignCont }) => $alignCont && null};
`;
