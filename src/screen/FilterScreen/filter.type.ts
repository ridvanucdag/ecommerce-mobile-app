import {Product} from '@utils/type';

export type FilterScreenProps = {
  products: Product[];
  onApplyFilters: (filteredProducts: Product[]) => void;
};
