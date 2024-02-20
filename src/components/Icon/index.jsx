import icons from '../../assets/icons/sprite.svg';
import { SVGIcon } from './styled';

const Icon = ({
  className,
  src,
  size,
  width,
  height,
  bgColor,
  borderColor,
}) => {
  return (
    <SVGIcon
      className={className}
      $size={size}
      $height={height}
      $width={width}
      $bgColor={bgColor}
      $borderColor={borderColor}
    >
      <use href={`${icons}#${src}`} xlinkHref={`${icons}#${src}`} />
    </SVGIcon>
  );
};

export default Icon;
