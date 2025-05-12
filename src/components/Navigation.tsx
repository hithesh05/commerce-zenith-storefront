
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShoppingBag, 
  User, 
  Search, 
  Menu, 
  X,
  ShoppingCart,
  LogIn
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { categories } from '@/data/products';

const Navigation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();
  const { user, signOut, isAdmin } = useAuth();
  const navigate = useNavigate();
  
  const itemCount = cart.items.reduce((count, item) => count + item.quantity, 0);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };
  
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-6 w-6" />
            <span className="font-bold text-xl">ShopCommerce</span>
          </Link>
          
          {/* Search - Hidden on Mobile */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative flex w-full">
              <Input
                type="search"
                placeholder="Search products..."
                className="pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                type="submit" 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 top-0"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </form>
          
          {/* Right Nav Items */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            
            {/* User Menu */}
            {user ? (
              <div className="relative group">
                <Button variant="ghost" size="icon" className="hidden md:flex">
                  <User className="h-5 w-5" />
                </Button>
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg py-1 hidden group-hover:block">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                  <Link to="/orders" className="block px-4 py-2 text-sm hover:bg-gray-100">My Orders</Link>
                  {isAdmin && (
                    <Link to="/admin" className="block px-4 py-2 text-sm hover:bg-gray-100">Admin Dashboard</Link>
                  )}
                  <button 
                    onClick={signOut} 
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/signin">
                <Button variant="ghost" size="icon" className="hidden md:flex">
                  <LogIn className="h-5 w-5" />
                </Button>
              </Link>
            )}
            
            {/* Cart */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {itemCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center">
                      {itemCount}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full md:max-w-md">
                <SheetHeader>
                  <SheetTitle>Your Cart</SheetTitle>
                </SheetHeader>
                
                {cart.items.length > 0 ? (
                  <div className="flex flex-col h-full">
                    <div className="flex-grow overflow-auto py-4">
                      {cart.items.map((item) => (
                        <div key={item.id} className="flex items-center py-4 border-b">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="h-16 w-16 object-cover rounded"
                          />
                          <div className="ml-4 flex-grow">
                            <h4 className="font-medium">{item.name}</h4>
                            <div className="flex justify-between items-center mt-1">
                              <span className="text-sm">${item.price.toFixed(2)} × {item.quantity}</span>
                              <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between mb-4">
                        <span className="font-semibold">Subtotal</span>
                        <span className="font-semibold">${cart.subtotal.toFixed(2)}</span>
                      </div>
                      <Link to="/cart">
                        <Button className="w-full mb-2">View Cart</Button>
                      </Link>
                      <Link to="/checkout">
                        <Button variant="outline" className="w-full">Checkout</Button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full">
                    <ShoppingBag className="h-12 w-12 text-muted-foreground mb-4" />
                    <p className="text-muted-foreground mb-4">Your cart is empty</p>
                    <Link to="/products">
                      <Button>Browse Products</Button>
                    </Link>
                  </div>
                )}
              </SheetContent>
            </Sheet>
          </div>
        </div>
        
        {/* Mobile Search - Only visible on mobile */}
        <form onSubmit={handleSearch} className="md:hidden py-2">
          <div className="relative flex w-full">
            <Input
              type="search"
              placeholder="Search products..."
              className="pr-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              type="submit" 
              variant="ghost" 
              size="icon" 
              className="absolute right-0 top-0 h-10"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </form>
      </div>
      
      {/* Categories Navigation */}
      <nav className="bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <ul className="flex items-center space-x-6 overflow-x-auto py-2 scrollbar-hide">
            <li>
              <Link 
                to="/products" 
                className="text-sm font-medium whitespace-nowrap hover:text-primary transition-colors"
              >
                All Products
              </Link>
            </li>
            {categories.map(category => (
              <li key={category.id}>
                <Link 
                  to={`/category/${category.id}`}
                  className="text-sm font-medium whitespace-nowrap hover:text-primary transition-colors"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="bg-background border-t border-gray-200 px-4 py-3 space-y-3">
          {user ? (
            <>
              <div className="px-2 py-2 border-b border-gray-100 mb-2">
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
              <Link 
                to="/orders" 
                className="block px-2 py-2 text-sm hover:bg-gray-100 rounded-md"
              >
                My Orders
              </Link>
              {isAdmin && (
                <Link 
                  to="/admin" 
                  className="block px-2 py-2 text-sm hover:bg-gray-100 rounded-md"
                >
                  Admin Dashboard
                </Link>
              )}
              <button 
                onClick={() => {
                  signOut();
                  setIsMenuOpen(false);
                }} 
                className="block w-full text-left px-2 py-2 text-sm text-red-600 hover:bg-gray-100 rounded-md"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link 
                to="/signin" 
                className="block px-2 py-2 text-sm hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link 
                to="/signup" 
                className="block px-2 py-2 text-sm hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
