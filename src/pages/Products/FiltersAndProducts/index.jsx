// import { useEffect } from 'react';
import { ContentMaxWidthContainer } from '../../../assets/styles/containers';
import FunctionalFilters from './FunctionalFilters';
import VisualFilters from './VisualFilters';

const FiltersAndProducts = () => {
  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch('http://localhost:3000/products?_start=0&_end=5');
  //     const data = await res.json();
  //     console.log(data);
  //   })();
  // }, []);

  return (
    <>
      <VisualFilters />
      <ContentMaxWidthContainer $justifyContent='space-between'>
        <FunctionalFilters />
      </ContentMaxWidthContainer>
    </>
  );
};
export default FiltersAndProducts;
