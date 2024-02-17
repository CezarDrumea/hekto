import styled from 'styled-components';

export const Icon = styled.svg`
  width: ${({ $size, $width }) => ($width ? $width : $size ? $size : '1.6rem')};
  height: ${({ $size, $height }) =>
    $height ? $height : $size ? $size : '1.6rem'};
  fill: ${({ $fill }) => ($fill ? $fill : 'currentColor')};
  display: block;
`;
