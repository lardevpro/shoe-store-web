export interface Shoe {
    id: string;
    product_name: string;
    gender:string;
    description: string;
    brand: string;
    price: number;
    sizes?: number[];
    images: string[];
    category: string;
    stock: number;
  }