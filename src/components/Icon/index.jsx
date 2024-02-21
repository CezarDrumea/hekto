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
  color,
  pointer,
  onClick,
}) => {
  return (
    <SVGIcon
      className={className}
      $size={size}
      $height={height}
      $width={width}
      $bgColor={bgColor}
      $borderColor={borderColor}
      $color={color}
      $pointer={pointer}
      onClick={onClick}
    >
      <use href={`${icons}#${src}`} xlinkHref={`${icons}#${src}`} />
    </SVGIcon>
  );
};

export default Icon;
