import styled from 'styled-components';

export const Icon = styled.svg`
  height: ${({ $size }) => ($size ? $size : '1.6rem')};
  width: ${({ $size }) => ($size ? $size : '1.6rem')};
  fill: ${({ $color }) => ($color ? $color : 'currentColor')};
`;
