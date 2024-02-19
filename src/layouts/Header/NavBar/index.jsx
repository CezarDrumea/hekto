import { TextLabel } from '../../../assets/typography/TextLabel';
import Icon from '../../../components/Icon';
import { ContentMaxWidthContainer } from '../../../assets/styles/containers';
import { HeaderNavBar, LogoIcon, Nav, Search, StyledNavLink } from './styled';

const NavBar = () => {
  return (
    <HeaderNavBar>
      <ContentMaxWidthContainer $alignItems='center'>
        <LogoIcon src='logo' width='10rem' height='2.8rem' />

        <Nav>
          <TextLabel as={StyledNavLink} to='home'>
            Home
          </TextLabel>

          <TextLabel as={StyledNavLink} to='products'>
            Products
          </TextLabel>

          <TextLabel as={StyledNavLink} to='blog'>
            Blog
          </TextLabel>

          <TextLabel as={StyledNavLink} to='contacts'>
            Contacts
          </TextLabel>
        </Nav>

        <Search
          placeholder='Text'
          btnContent={<Icon src='magnifying-glass' size='2rem' />}
          width='32.8rem'
        />
      </ContentMaxWidthContainer>
    </HeaderNavBar>
  );
};

export default NavBar;
