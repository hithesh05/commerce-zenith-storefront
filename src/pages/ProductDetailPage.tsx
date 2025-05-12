
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';
import { getProductById, getCategoryById } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  // Get product data
  const product = id ? getProductById(id) : undefined;
  
  // If product not found, navigate to 404
  if (!product) {
    navigate('/404');
    return null;
  }
  
  // Get category data
  const category = getCategoryById(product.category);
  
  // Stock status
  const inStock = product.stock > 0;
  
  // Handle quantity changes
  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(prev => prev + 1);
    }
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  // Handle add to cart
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    });
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div>
            <div className="border rounded-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
          
          {/* Product Details */}
          <div className="flex flex-col">
            <div>
              {category && (
                <Badge variant="secondary" className="mb-2">
                  {category.name}
                </Badge>
              )}
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
              <Separator className="my-4" />
              <div className="mb-4">
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
              <Separator className="my-4" />
              
              {/* Stock Status */}
              <div className="flex items-center mb-4">
                <span className="text-sm font-medium mr-2">Availability:</span>
                {inStock ? (
                  <Badge variant="outline" className="text-green-500 border-green-500">
                    In Stock ({product.stock} available)
                  </Badge>
                ) : (
                  <Badge variant="outline" className="text-red-500 border-red-500">
                    Out of Stock
                  </Badge>
                )}
              </div>
              
              {/* Quantity Selector */}
              {inStock && (
                <>
                  <div className="flex items-center mb-6">
                    <span className="text-sm font-medium mr-2">Quantity:</span>
                    <div className="flex items-center border rounded-md">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={decreaseQuantity}
                        disabled={quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-10 text-center">{quantity}</span>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={increaseQuantity}
                        disabled={quantity >= product.stock}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Add to Cart Button */}
                  <Button 
                    size="lg" 
                    className="w-full md:w-auto flex items-center"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
