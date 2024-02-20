import { ContentMaxWidthContainer } from '../../../assets/styles/containers';
import FunctionalFilters from './FunctionalFilters';
import VisualFilters from './VisualFilters';

const FiltersAndProducts = () => {
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
