import { Product } from "@utils/type";


export interface ProductListProps {
  title?: string;
  products: Product[];
  favorite?:boolean;
  categorylist?:boolean;
}