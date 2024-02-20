import Icon from '../Icon';
import { FlexContainer } from './styled';

const Stars = ({ filledStars }) => {
  return (
    <FlexContainer>
      {[...Array(5)].map((_, i) => (
        <Icon
          key={i}
          src='star'
          bgColor={filledStars <= i ? 'grey2' : 'secondary'}
          size='1.6rem'
        />
      ))}
    </FlexContainer>
  );
};
export default Stars;
