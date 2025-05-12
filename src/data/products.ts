
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  featured?: boolean;
};

export type Category = {
  id: string;
  name: string;
  description?: string;
};

export const categories: Category[] = [
  {
    id: "1",
    name: "Electronics",
    description: "Latest gadgets and electronic devices",
  },
  {
    id: "2",
    name: "Clothing",
    description: "Fashion items and apparel",
  },
  {
    id: "3",
    name: "Home & Kitchen",
    description: "Everything for your home",
  },
  {
    id: "4",
    name: "Books",
    description: "Books across all genres",
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    description: "High-quality sound with noise cancellation feature. Long-lasting battery life and comfortable design for extended wear.",
    price: 129.99,
    category: "1",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    stock: 50,
    featured: true,
  },
  {
    id: "2",
    name: "Smart Watch",
    description: "Track your fitness, receive notifications, and more with this waterproof smart watch.",
    price: 199.99,
    category: "1",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    stock: 30,
    featured: true,
  },
  {
    id: "3",
    name: "Men's Casual Shirt",
    description: "Comfortable cotton shirt perfect for casual outings.",
    price: 39.99,
    category: "2",
    image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
    stock: 100,
  },
  {
    id: "4",
    name: "Coffee Maker",
    description: "Start your day with the perfect cup of coffee made with this easy-to-use coffee maker.",
    price: 89.99,
    category: "3",
    image: "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    stock: 20,
  },
  {
    id: "5",
    name: "Bestselling Novel",
    description: "Award-winning fiction that's captivating readers worldwide.",
    price: 14.99,
    category: "4",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    stock: 200,
  },
  {
    id: "6",
    name: "Laptop",
    description: "Powerful laptop with high performance for work and entertainment.",
    price: 999.99,
    category: "1",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    stock: 15,
    featured: true,
  },
  {
    id: "7",
    name: "Women's Summer Dress",
    description: "Light and comfortable dress perfect for summer days.",
    price: 49.99,
    category: "2",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    stock: 80,
  },
  {
    id: "8",
    name: "Cast Iron Pan",
    description: "Durable cast iron pan that will last for generations.",
    price: 29.99,
    category: "3",
    image: "https://images.unsplash.com/photo-1574181609941-50e049783151?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    stock: 40,
  },
  {
    id: "9",
    name: "Self-Help Book",
    description: "Transform your life with practical advice from this bestseller.",
    price: 19.99,
    category: "4",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    stock: 150,
  },
  {
    id: "10",
    name: "Wireless Phone Charger",
    description: "Convenient wireless charging for compatible smartphones.",
    price: 34.99,
    category: "1",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    stock: 60,
  },
  {
    id: "11",
    name: "Running Shoes",
    description: "Comfortable and supportive shoes for all your running needs.",
    price: 79.99,
    category: "2",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    stock: 45,
  },
  {
    id: "12",
    name: "Blender",
    description: "Powerful blender for smoothies, soups, and more.",
    price: 69.99,
    category: "3",
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1005&q=80",
    stock: 25,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};
