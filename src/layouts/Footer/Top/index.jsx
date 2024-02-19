import Icon from '../../../components/Icon';
import Search from '../../../components/Search';
import { TextBody } from '../../../assets/typography/TextBody';
import { SubtitleM } from '../../../assets/typography/Subtitle';
import { ContentMaxWidthContainer } from '../../../assets/styles/containers';
import {
  FooterTop,
  LogoColumn,
  CategoriesColumn,
  CustomerCareColumn,
  PagesColumn,
} from './styled';
import { Link } from 'react-router-dom';

const Top = () => {
  return (
    <FooterTop>
      <ContentMaxWidthContainer>
        <LogoColumn>
          <Icon src='logo' height='3rem' width='10.3rem' />
          <Search placeholder='Enter Email Address' btnContent='Sign Up' />
          <TextBody $color='grey3'>
            17 Princess Road, London, Greater London NW1 8JR, UK
          </TextBody>
        </LogoColumn>

        {/* Todo: Implement correct link redirection */}
        <CategoriesColumn>
          <SubtitleM $color='black'>Categories</SubtitleM>
          <TextBody as={Link}>Laptops & Computers</TextBody>
          <TextBody as={Link}>Cameras & Photography</TextBody>
          <TextBody as={Link}>Smart Phones & Tablets</TextBody>
          <TextBody as={Link}>Video Games & Consoles</TextBody>
          <TextBody as={Link}>Waterproof Headphones</TextBody>
        </CategoriesColumn>

        <CustomerCareColumn>
          <SubtitleM $color='black'>Customer Care</SubtitleM>
          <TextBody as={Link}>My Account</TextBody>
          <TextBody as={Link}>Discount</TextBody>
          <TextBody as={Link}>Returns</TextBody>
          <TextBody as={Link}>Orders History</TextBody>
          <TextBody as={Link}>Order Tracking</TextBody>
        </CustomerCareColumn>

        <PagesColumn>
          <SubtitleM $color='black'>Pages</SubtitleM>
          <TextBody as={Link}>Blog</TextBody>
          <TextBody as={Link}>Browse the Shop</TextBody>
          <TextBody as={Link}>Category</TextBody>
          <TextBody as={Link}>Pre-Built Pages</TextBody>
          <TextBody as={Link}>Visual Composer Elements</TextBody>
        </PagesColumn>
      </ContentMaxWidthContainer>
    </FooterTop>
  );
};
export default Top;
