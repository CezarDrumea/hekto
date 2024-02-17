import * as S from './styled';
import { LabelText } from '../../../assets/typography/LabelText';
import { ContentContainer } from '../styled';

const NavBar = () => {
  return (
    <S.NavBar>
      <ContentContainer>
        <S.Icon src='logo' width='10rem' height='2.8rem' />

        <S.Nav>
          <S.NavLink to='home'>
            <LabelText>Home</LabelText>
          </S.NavLink>
          <S.NavLink to='products'>
            <LabelText>Products</LabelText>
          </S.NavLink>
          <S.NavLink to='blog'>
            <LabelText>Blog</LabelText>
          </S.NavLink>
          <S.NavLink to='contacts'>
            <LabelText>Contacts</LabelText>
          </S.NavLink>
        </S.Nav>

        <S.Search placeholder='Text' />
      </ContentContainer>
    </S.NavBar>
  );
};

export default NavBar;
