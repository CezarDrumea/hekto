import { TextBody } from '../../assets/typography/TextBody';

import {
  AppMinHeightContainer,
  ContentMaxWidthContainer,
} from '../../assets/styles/containers';
import { CenteredHeading1, Circle, ProductsNav } from './styled';
import { Link } from 'react-router-dom';

import FiltersAndProducts from './FiltersAndProducts';

const Products = () => {
  return (
    <AppMinHeightContainer $paddingTop='5.6rem' $paddingBottom='10rem'>
      <ContentMaxWidthContainer>
        <CenteredHeading1>Products</CenteredHeading1>
        <ProductsNav>
          <TextBody as={Link} to='/home' $color='grey3'>
            Home
          </TextBody>
          <Circle />
          <TextBody as={Link} $color='primary'>
            Products
          </TextBody>
        </ProductsNav>

        <FiltersAndProducts></FiltersAndProducts>
      </ContentMaxWidthContainer>
    </AppMinHeightContainer>
  );
};
export default Products;
