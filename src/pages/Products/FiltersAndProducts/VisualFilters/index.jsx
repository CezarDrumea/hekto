import { useState } from 'react';
import { ContentMaxWidthContainer } from '../../../../assets/styles/containers';
import { TextBody } from '../../../../assets/typography/TextBody';
import CustomSelect from '../../../../components/CustomSelect';
import Icon from '../../../../components/Icon';
import { FlexContainer } from './styled';

const VisualFilters = () => {
  const [isFlexView, setIsFlexView] = useState(true);

  const handleViewChange = (isFlexView) => () => setIsFlexView(isFlexView);

  return (
    <ContentMaxWidthContainer
      $justifyContent='flex-end'
      $alignItems='center'
      $gap='6.4rem'
    >
      <FlexContainer>
        <TextBody $color='grey3'>Per Page</TextBody>
        <CustomSelect options={[10, 20]} />
      </FlexContainer>
      <FlexContainer>
        <TextBody $color='grey3'>Sort By</TextBody>
        <CustomSelect options={['Price: High -> Low', 'Price: Low -> High']} />
      </FlexContainer>
      <FlexContainer>
        <TextBody $color='grey3'>View</TextBody>

        <Icon
          src='grid-view'
          size='2.4rem'
          borderColor={!isFlexView ? 'primary' : 'black'}
          bgColor={!isFlexView && 'primary'}
          pointer
          onClick={handleViewChange(false)}
        />

        <Icon
          src='flex-view'
          size='2.4rem'
          borderColor={isFlexView ? 'primary' : 'black'}
          bgColor={isFlexView && 'primary'}
          pointer
          onClick={handleViewChange(true)}
        />
      </FlexContainer>
    </ContentMaxWidthContainer>
  );
};
export default VisualFilters;
