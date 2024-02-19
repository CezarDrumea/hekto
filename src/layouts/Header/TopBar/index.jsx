import { languages, currencies } from '../../../assets/abstracts/constants';

import Icon from '../../../components/Icon';
import Select from '../Select';

import { SubtitleXS } from '../../../assets/typography/Subtitle';
import { ContentMaxWidthContainer } from '../../../assets/styles/containers';

import { Contact, HeaderTopBar, Menu, MenuLink } from './styled';

const TopBar = () => {
  return (
    <HeaderTopBar>
      <ContentMaxWidthContainer>
        <Contact href='mailto:mhhasanul@gmail.com'>
          <Icon src='envelope' />
          <SubtitleXS>mhhasanul@gmail.com</SubtitleXS>
        </Contact>

        <Contact href='tel:(12345)7890'>
          <Icon src='phone' />
          <SubtitleXS>(12345)67890</SubtitleXS>
        </Contact>

        <Menu>
          <Select options={languages} />
          <Select options={currencies} />

          <MenuLink to='login'>
            <SubtitleXS>Login</SubtitleXS>
            <Icon src='user' />
          </MenuLink>

          <MenuLink to='whishlist'>
            <SubtitleXS>Whishlist</SubtitleXS>
            <Icon src='heart' />
          </MenuLink>

          <MenuLink to='cart'>
            <Icon src='cart' size='1.4rem' />
          </MenuLink>
        </Menu>
      </ContentMaxWidthContainer>
    </HeaderTopBar>
  );
};

export default TopBar;
