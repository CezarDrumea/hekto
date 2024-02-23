import { ColumnFlexContainer } from '../../../../../assets/styles/containers';
import { SubtitleS } from '../../../../../assets/typography/Subtitle';
import { Underline } from './styled';

const FilterColumn = () => {
  return (
    <div>
      <ColumnFlexContainer $gap='0.7rem'>
        <SubtitleS>Product Brand</SubtitleS>
        <Underline />
      </ColumnFlexContainer>
      <ColumnFlexContainer $gap='1.6rem'></ColumnFlexContainer>
    </div>
  );
};
export default FilterColumn;
