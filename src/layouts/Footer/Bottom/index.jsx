import Icon from '../../../components/Icon';

import { TextBodyS } from '../../../assets/typography/TextBody';

import { FooterBottom, SocialMediaIcons } from './styled';
import { ContentMaxWidthContainer } from '../../../assets/styles/containers';

const Bottom = () => {
  return (
    <FooterBottom>
      <ContentMaxWidthContainer
        $alignItems='center'
        $justifyContent='space-between'
      >
        <TextBodyS $color='grey3'>©Webecy - All Rights Reserved</TextBodyS>
        <SocialMediaIcons>
          <a href='#'>
            <Icon src='facebook' size='2.4rem' />
          </a>
          <a href='#'>
            <Icon src='twitter' size='2.4rem' />
          </a>
          <a href='#'>
            <Icon src='instagram' size='2.4rem' />
          </a>
        </SocialMediaIcons>
      </ContentMaxWidthContainer>
    </FooterBottom>
  );
};
export default Bottom;
