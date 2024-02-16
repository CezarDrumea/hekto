import styled from 'styled-components';

const Container = styled.div.attrs(
  ({
    theme,
    $pageContainer,
    $spaceBtwn,
    $alignCenter,
    $gap,
    $color,
    $flex,
  }) => ({
    $pageContainer: $pageContainer ? '131.2rem' : 'none',
    $display: $spaceBtwn || $alignCenter || $gap ? 'flex' : 'block',
    $spaceBtwn: $spaceBtwn ? 'space-between' : 'normal',
    $alignCenter: $alignCenter ? 'center' : 'normal',
    $gap: $gap ? $gap : 'normal',
    $color: theme[$color] ? theme[$color] : theme.black,
    $flex: $flex ? $flex : '0 1 auto',
  })
)`
  max-width: ${({ $pageContainer }) => $pageContainer};
  display: ${({ $display }) => $display};
  justify-content: ${({ $spaceBtwn }) => $spaceBtwn};
  align-items: ${({ $alignCenter }) => $alignCenter};
  gap: ${({ $gap }) => $gap};
  color: ${({ $color }) => $color};
  flex: ${({ $flex }) => $flex};
`;

export default Container;
