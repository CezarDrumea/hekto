import Button from '../Button';
import { SearchContainer } from './styled';

const Search = ({ className, placeholder, btnContent, width }) => {
  return (
    <SearchContainer className={className} $width={width}>
      <input type='text' placeholder={placeholder} />
      <Button>{btnContent}</Button>
    </SearchContainer>
  );
};

export default Search;
