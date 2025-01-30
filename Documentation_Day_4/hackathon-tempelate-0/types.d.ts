interface Product {
    id: string;
    name: string;
    price: string;
    description: string;
    image: {
      asset: {
        _ref: string;
      };
    };
    discountPercentage: number;
    isFeaturedProduct: boolean;
    category: string;
    stockLevel: number;
  }