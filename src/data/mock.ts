export type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: 'men' | 'women' | 'kids' | 'accessories';
  image: string;
  images: string[];
  description: string;
  sizes: string[];
  colors: string[];
  isNew?: boolean;
  isSale?: boolean;
};

export const products: Product[] = [
  {
    id: "p1",
    name: "Classic Tailored Suit",
    price: 14999,
    originalPrice: 19999,
    category: "men",
    image: "https://images.pexels.com/photos/6764954/pexels-photo-6764954.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/6764954/pexels-photo-6764954.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=600&q=80"
    ],
    description: "Premium tailored suit perfect for formal occasions. Features a modern slim fit and high-quality wool blend.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Charcoal"],
    isSale: true
  },
  {
    id: "p2",
    name: "Elegant Evening Dress",
    price: 8999,
    category: "women",
    image: "https://images.pexels.com/photos/31589282/pexels-photo-31589282.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/31589282/pexels-photo-31589282.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "A stunning evening dress with sequence detailing and an elegant silhouette.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Red", "Black"],
    isNew: true
  },
  {
    id: "p3",
    name: "Casual Denim Jacket",
    price: 4500,
    category: "men",
    image: "https://images.pexels.com/photos/17896496/pexels-photo-17896496.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/17896496/pexels-photo-17896496.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Vintage wash denim jacket, an essential piece for any casual wardrobe.",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Blue", "Light Blue", "Black"]
  },
  {
    id: "p4",
    name: "Summer Floral Blouse",
    price: 3200,
    originalPrice: 4000,
    category: "women",
    image: "https://images.pexels.com/photos/9711303/pexels-photo-9711303.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/9711303/pexels-photo-9711303.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Light and airy floral blouse, perfect for summer outings.",
    sizes: ["S", "M", "L"],
    colors: ["White/Floral"],
    isSale: true
  },
  {
    id: "p5",
    name: "Kids Explorer T-Shirt",
    price: 1500,
    category: "kids",
    image: "https://images.pexels.com/photos/32071161/pexels-photo-32071161.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/32071161/pexels-photo-32071161.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Comfortable cotton t-shirt for kids with fun graphics.",
    sizes: ["4Y", "6Y", "8Y", "10Y"],
    colors: ["Yellow", "Red", "Blue"]
  },
  {
    id: "p6",
    name: "Leather Crossbody Bag",
    price: 5500,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80"
    ],
    description: "Genuine leather crossbody bag with adjustable strap.",
    sizes: ["One Size"],
    colors: ["Brown", "Black"],
  },
  {
    id: "p7",
    name: "Slim Fit Chinos",
    price: 4200,
    category: "men",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80"
    ],
    description: "Versatile stretch cotton chinos with a modern slim fit.",
    sizes: ["30", "32", "34", "36"],
    colors: ["Olive", "Khaki", "Navy"]
  },
  {
    id: "p8",
    name: "Pleated Midi Skirt",
    price: 4800,
    category: "women",
    image: "https://images.pexels.com/photos/4690501/pexels-photo-4690501.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/4690501/pexels-photo-4690501.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Elegant pleated midi skirt, can be dressed up or down.",
    sizes: ["S", "M", "L"],
    colors: ["Pink", "Black", "White"]
  }
];

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-PK', {
    style: 'currency',
    currency: 'PKR',
    minimumFractionDigits: 0,
  }).format(price);
};
