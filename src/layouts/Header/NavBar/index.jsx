import * as S from './styled';
import { LabelText } from '../../../assets/typography/LabelText';
import { ContentContainer } from '../styled';

const NavBar = () => {
  return (
    <S.NavBar>
      <ContentContainer>
        <S.Icon src='logo' width='10rem' height='2.8rem' />

        <S.Nav>
          <LabelText>Home</LabelText>
          <LabelText>Products</LabelText>
          <LabelText>Blog</LabelText>
          <LabelText>Contact</LabelText>
        </S.Nav>

        <S.Search placeholder='Text' />
      </ContentContainer>
    </S.NavBar>
  );
};

export default NavBar;
