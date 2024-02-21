import styled from 'styled-components';
import { colors } from '../../assets/abstracts/constants';

export const SVGIcon = styled.svg`
  transition: 0.2s;
  width: ${({ $size, $width }) => ($width ? $width : $size ? $size : '1.6rem')};
  height: ${({ $size, $height }) =>
    $height ? $height : $size ? $size : '1.6rem'};
  fill: ${({ $bgColor, $color }) =>
    colors[$bgColor ?? $color] ?? 'transparent'};
  stroke: ${({ $borderColor, $color }) =>
    colors[$borderColor ?? $color] ?? 'transparent'};
  display: block;
  cursor: ${({ $pointer }) => $pointer && 'pointer'};
`;
