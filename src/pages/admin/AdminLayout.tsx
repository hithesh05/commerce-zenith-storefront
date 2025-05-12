
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Package, 
  Grid, 
  Tag, 
  ShoppingBag, 
  Users, 
  Settings, 
  Menu, 
  X,
  Home,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/context/AuthContext';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Navigation items for the sidebar
  const navItems = [
    {
      title: 'Dashboard',
      icon: <Grid className="h-5 w-5" />,
      href: '/admin',
    },
    {
      title: 'Products',
      icon: <Package className="h-5 w-5" />,
      href: '/admin/products',
    },
    {
      title: 'Categories',
      icon: <Tag className="h-5 w-5" />,
      href: '/admin/categories',
    },
    {
      title: 'Orders',
      icon: <ShoppingBag className="h-5 w-5" />,
      href: '/admin/orders',
    },
    {
      title: 'Customers',
      icon: <Users className="h-5 w-5" />,
      href: '/admin/customers',
    },
    {
      title: 'Settings',
      icon: <Settings className="h-5 w-5" />,
      href: '/admin/settings',
    },
  ];
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const handleSignOut = () => {
    signOut();
    navigate('/');
  };
  
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - Desktop */}
      <aside className={`
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        fixed inset-y-0 z-50 w-64 bg-white border-r border-gray-200 transition-transform duration-200 lg:translate-x-0 lg:static
      `}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-4 flex items-center justify-between border-b">
            <Link to="/admin" className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6" />
              <span className="font-bold text-lg">Admin</span>
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className={`
                  flex items-center space-x-2 px-3 py-2 rounded-md transition-colors
                  ${isActive(item.href) 
                    ? 'bg-gray-100 text-primary' 
                    : 'hover:bg-gray-100'
                  }
                `}
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            ))}
          </nav>
          
          {/* Sidebar Footer */}
          <div className="p-4 border-t">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-medium text-primary">
                  {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                </span>
              </div>
              <div>
                <p className="font-medium line-clamp-1">{user?.name}</p>
                <p className="text-xs text-muted-foreground line-clamp-1">{user?.email}</p>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <Link to="/">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Home className="h-4 w-4 mr-2" />
                  Back to Shop
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="w-full justify-start text-red-500" 
                size="sm"
                onClick={handleSignOut}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </aside>
      
      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top Navigation Bar */}
        <header className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <div className="text-lg font-semibold lg:hidden">Admin Dashboard</div>
            <div /> {/* Empty div to maintain flex spacing */}
          </div>
        </header>
        
        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
      
      {/* Backdrop for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminLayout;
