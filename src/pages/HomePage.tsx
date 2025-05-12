
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Truck, 
  Shield, 
  CreditCard,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import { getFeaturedProducts, categories } from '@/data/products';

const HomePage = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Shop the Latest Products</h1>
            <p className="text-lg mb-8">
              Discover amazing products at great prices. Shop with confidence today!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button size="lg">Shop Now</Button>
              </Link>
              <Link to="/category/1">
                <Button variant="outline" size="lg">
                  Explore Electronics
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div 
          className="hidden md:block absolute inset-0 bg-cover bg-center opacity-30" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
            mixBlendMode: "overlay"
          }}
        />
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Why Shop With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Free shipping on orders over $50. Get your items delivered quickly and securely.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Secure Shopping</h3>
              <p className="text-muted-foreground">
                Your personal information is always protected. Shop with confidence.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <CreditCard className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Easy Payments</h3>
              <p className="text-muted-foreground">
                Multiple payment options available for your convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link to="/products" className="flex items-center text-primary hover:underline">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id}>
                <Card className="overflow-hidden h-full card-hover">
                  <div className="aspect-square w-full relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-2 line-clamp-2">{product.description}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                      <Button size="sm">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Shop By Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link to={`/category/${category.id}`} key={category.id} className="group">
                <div className="bg-white rounded-lg shadow overflow-hidden transition-transform transform group-hover:-translate-y-1">
                  <div className="p-6">
                    <h3 className="font-semibold text-xl mb-2">{category.name}</h3>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <span className="text-primary flex items-center">
                      Browse Products <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter to receive updates on new products, special offers, and discount information.
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md text-black"
              />
              <Button variant="secondary" size="lg">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
