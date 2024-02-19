import Icon from '../../../components/Icon';

import { TextBodyS } from '../../../assets/typography/TextBody';

import {
  ContentMaxWidthFlexContainer,
  FooterBottom,
  SocialMediaIcons,
} from './styled';

const Bottom = () => {
  return (
    <FooterBottom>
      <ContentMaxWidthFlexContainer>
        <TextBodyS $color='grey3'>©Webecy - All Rights Reserved</TextBodyS>
        <SocialMediaIcons>
          <Icon src='facebook' size='2.4rem' />
          <Icon src='twitter' size='2.4rem' />
          <Icon src='instagram' size='2.4rem' />
        </SocialMediaIcons>
      </ContentMaxWidthFlexContainer>
    </FooterBottom>
  );
};
export default Bottom;
