interface Category {
  id: string;
  title: string;
  image: string;
}

export interface CategoryListProps {
  data: Category[];
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string) => void;
}
