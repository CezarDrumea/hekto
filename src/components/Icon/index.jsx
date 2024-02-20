import icons from '../../assets/icons/sprite.svg';
import * as S from './styled';

const Icon = ({ className, src, size, width, height }) => {
  return (
    <S.Icon className={className} $size={size} $height={height} $width={width}>
      <use href={`${icons}#${src}`} xlinkHref={`${icons}#${src}`} />
    </S.Icon>
  );
};

export default Icon;
