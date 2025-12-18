
export enum Category {
  FOOD = 'FOOD',
  NON_FOOD = 'NON_FOOD'
}

export interface Product {
  id: number;
  name: string;
  company: string;
  category: Category;
  image: string;
}

export interface Notice {
  id: number;
  title: string;
  date: string;
  important: boolean;
}

export interface PressRelease {
  id: number;
  title: string;
  source: string;
  date: string;
  image: string;
}
