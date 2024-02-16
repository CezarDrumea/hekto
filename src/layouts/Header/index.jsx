import Container from '../../assets/globalStyled/container';
import * as S from './styled';
import Select from './Select';
import { currencies, languages } from '../../assets/abstracts/constants';
import { SubtitleXS } from '../../assets/typography/Subtitle';
import { LabelText } from '../../assets/typography/LabelText';
import Icon from '../../components/Icon';

const Header = () => {
  return (
    <>
      <S.TopBar>
        <Container $pageContainer $flex='1' $spaceBtwn>
          <Container $gap='4.8rem'>
            <Container
              as='a'
              href='mailto:mhhasanul@gmail.com'
              $color='white'
              $gap='1rem'
              $alignCenter
            >
              <Icon icon='envelope' />
              <SubtitleXS>mhhasanul@gmail.com</SubtitleXS>
            </Container>

            <Container
              as='a'
              href='tel:'
              $color='white'
              $gap='1rem'
              $alignCenter
            >
              <Icon icon='phone' />
              <SubtitleXS>(12345)67890</SubtitleXS>
            </Container>
          </Container>

          <Container $gap='3.2rem' $alignCenter>
            <Select options={languages} />
            <Select options={currencies} />

            <Container $color='white' $gap='1rem' $alignCenter>
              <SubtitleXS>Login</SubtitleXS>
              <Icon icon='user' />
            </Container>

            <Container $color='white' $gap='1rem' $alignCenter>
              <SubtitleXS>Whishlist</SubtitleXS>
              <Icon icon='heart' />
            </Container>

            <Icon icon='cart' size='1.4rem' />
          </Container>
        </Container>
      </S.TopBar>

      <S.NavBar>
        <Container $pageContainer $flex='1rem' $spaceBtwn>
          <Container $gap='8rem'>
            <S.Icon icon='logo-text' width='10rem' height='2.8rem' />
            <Container $gap='3.2rem' $alignCenter>
              <LabelText>Home</LabelText>
              <LabelText>Products</LabelText>
              <LabelText>Blog</LabelText>
              <LabelText>Contact</LabelText>
            </Container>
          </Container>
        </Container>
      </S.NavBar>
    </>
  );
};

export default Header;
