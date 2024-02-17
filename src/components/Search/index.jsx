import Button from '../Button';
import Icon from '../Icon';
import * as S from './styled';

const Search = ({ className, placeholder }) => {
  return (
    <S.SearchContainer className={className}>
      <input type='text' placeholder={placeholder} />
      <Button>
        <Icon src='magnifying-glass' size='2rem' />
      </Button>
    </S.SearchContainer>
  );
};

export default Search;
