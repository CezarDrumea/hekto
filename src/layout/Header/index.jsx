import { SubtitleXS } from '../../typography/Subtitle';
import Container from '../../globalStyles/container';
import * as S from './styled';
import { Envelope } from '../../icons/Envelope';

const Header = () => {
  return (
    <>
      <S.TopBar>
        <Container $pageContainer $flex='1' $spaceBtwn>
          <Container $gap='4.8rem'>
            <Container $color='white' $gap='1rem' $pointer>
              <Envelope />
              <SubtitleXS>mhhasanul@gmail.com</SubtitleXS>
            </Container>

            <Container $color='white' $gap='1rem' $pointer>
              <Envelope />
              <SubtitleXS>(12345)67890</SubtitleXS>
            </Container>
          </Container>

          <Container $gap='3.2rem'>
            <select>
              <option value='eng'>English</option>
              <option value='ro'>Romanian</option>
              <option value='ru'>Russian</option>
            </select>
          </Container>
        </Container>
      </S.TopBar>

      <S.NavBar>
        <Container $pageContainer></Container>
      </S.NavBar>
    </>
  );
};

export default Header;
