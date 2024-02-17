import { languages, currencies } from '../../../assets/abstracts/constants';

import Icon from '../../../components/Icon';
import { SubtitleXS } from '../../../assets/typography/Subtitle';
import Select from '../Select';

import { ContentContainer } from '../styled';
import * as S from './styled';

const TopBar = () => {
  return (
    <S.TopBar>
      <ContentContainer>
        <S.Contact href='mailto:mhhasanul@gmail.com'>
          <Icon src='envelope' />
          <SubtitleXS>mhhasanul@gmail.com</SubtitleXS>
        </S.Contact>

        <S.Contact href='tel:(12345)7890'>
          <Icon src='phone' />
          <SubtitleXS>(12345)67890</SubtitleXS>
        </S.Contact>

        <S.Menu>
          <Select options={languages} />
          <Select options={currencies} />

          <S.MenuLink to='login'>
            <SubtitleXS>Login</SubtitleXS>
            <Icon src='user' />
          </S.MenuLink>

          <S.MenuLink to='whishlist'>
            <SubtitleXS>Whishlist</SubtitleXS>
            <Icon src='heart' />
          </S.MenuLink>

          <S.MenuLink to='cart'>
            <Icon src='cart' size='1.4rem' />
          </S.MenuLink>
        </S.Menu>
      </ContentContainer>
    </S.TopBar>
  );
};

export default TopBar;
