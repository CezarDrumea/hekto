import { ContentMaxWidthContainer } from '../../../../assets/styles/containers';
import { TextBody } from '../../../../assets/typography/TextBody';
import Icon from '../../../../components/Icon';
import { FlexContainer } from './styled';

const VisualFilters = () => {
  return (
    <ContentMaxWidthContainer
      $justifyContent='flex-end'
      $alignItems='center'
      $gap='6.4rem'
    >
      <FlexContainer>
        <TextBody $color='grey3'>Per Page</TextBody>
        <select>
          <option value='10'>10</option>
          <option value='20'>20</option>
        </select>
      </FlexContainer>
      <FlexContainer>
        <TextBody $color='grey3'>Sort By</TextBody>
        <select>
          <option value='high-low'>Price: High -{'>'} Low</option>
          <option value='low-high'>Price: Low -{'>'} High</option>
        </select>
      </FlexContainer>
      <FlexContainer>
        <TextBody $color='grey3'>View</TextBody>
        <Icon
          src='grid-view'
          size='2.4rem'
          borderColor='black'
          bgColor='none'
        />
        <Icon
          src='flex-view'
          size='2.4rem'
          borderColor='black'
          bgColor='none'
        />
      </FlexContainer>
    </ContentMaxWidthContainer>
  );
};
export default VisualFilters;
