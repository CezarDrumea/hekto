import { TextLabel } from '../../../assets/typography/TextLabel';
import Icon from '../../../components/Icon';
import { ContentMaxWidthContainer } from '../../../assets/styles/containers';
import { HeaderNavBar, LogoIcon, Nav, Search, StyledNavLink } from './styled';

const NavBar = () => {
  return (
    <HeaderNavBar>
      <ContentMaxWidthContainer>
        <LogoIcon src='logo' width='10rem' height='2.8rem' />

        <Nav>
          <StyledNavLink to='home'>
            <TextLabel>Home</TextLabel>
          </StyledNavLink>
          <StyledNavLink to='products'>
            <TextLabel>Products</TextLabel>
          </StyledNavLink>
          <StyledNavLink to='blog'>
            <TextLabel>Blog</TextLabel>
          </StyledNavLink>
          <StyledNavLink to='contacts'>
            <TextLabel>Contacts</TextLabel>
          </StyledNavLink>
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
