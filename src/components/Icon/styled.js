import styled from 'styled-components';
import { colors } from '../../assets/abstracts/constants';

export const SVGIcon = styled.svg`
  transition: 1s;
  width: ${({ $size, $width }) => ($width ? $width : $size ? $size : '1.6rem')};
  height: ${({ $size, $height }) =>
    $height ? $height : $size ? $size : '1.6rem'};
  fill: ${({ $bgColor }) => colors[$bgColor] ?? 'transparent'};
  stroke: ${({ $borderColor }) => colors[$borderColor] ?? 'transparent'};
  display: block;
`;
