import icons from '../../assets/icons/sprite.svg';
import * as S from './styled';

const Icon = ({ icon, size, width, height }) => {
  return (
    <S.Icon $size={size} $height={height} $width={width}>
      <use href={`${icons}#${icon}`} xlinkHref={`${icons}#${icon}`} />
    </S.Icon>
  );
};
export default Icon;
