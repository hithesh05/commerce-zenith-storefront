
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AdminLayout from './AdminLayout';
import { 
  DollarSign, 
  Package, 
  ShoppingBag, 
  Users 
} from 'lucide-react';
import { products } from '@/data/products';

const AdminDashboard = () => {
  // Mock data for dashboard
  const dashboardStats = {
    totalSales: 12859.99,
    totalOrders: 156,
    totalProducts: products.length,
    totalCustomers: 89
  };
  
  // Recent orders mock data
  const recentOrders = [
    {
      id: 'ORD-001',
      customer: 'John Doe',
      date: '2023-10-25',
      amount: 259.99,
      status: 'Completed'
    },
    {
      id: 'ORD-002',
      customer: 'Jane Smith',
      date: '2023-10-24',
      amount: 129.99,
      status: 'Processing'
    },
    {
      id: 'ORD-003',
      customer: 'Robert Johnson',
      date: '2023-10-23',
      amount: 349.99,
      status: 'Completed'
    },
    {
      id: 'ORD-004',
      customer: 'Emily Davis',
      date: '2023-10-22',
      amount: 79.99,
      status: 'Shipping'
    },
    {
      id: 'ORD-005',
      customer: 'Michael Wilson',
      date: '2023-10-21',
      amount: 199.99,
      status: 'Completed'
    }
  ];
  
  // Low stock products mock data
  const lowStockProducts = products
    .filter(p => p.stock < 20)
    .sort((a, b) => a.stock - b.stock)
    .slice(0, 5);
  
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Overview of your store's performance</p>
        </div>
        
        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Sales</p>
                  <h3 className="text-2xl font-bold">${dashboardStats.totalSales.toFixed(2)}</h3>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <ShoppingBag className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Orders</p>
                  <h3 className="text-2xl font-bold">{dashboardStats.totalOrders}</h3>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Package className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Products</p>
                  <h3 className="text-2xl font-bold">{dashboardStats.totalProducts}</h3>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Customers</p>
                  <h3 className="text-2xl font-bold">{dashboardStats.totalCustomers}</h3>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Recent Activity Tabs */}
        <Tabs defaultValue="orders">
          <TabsList>
            <TabsTrigger value="orders">Recent Orders</TabsTrigger>
            <TabsTrigger value="inventory">Low Stock</TabsTrigger>
          </TabsList>
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-sm text-muted-foreground">
                        <th className="p-3 font-medium">Order ID</th>
                        <th className="p-3 font-medium">Customer</th>
                        <th className="p-3 font-medium">Date</th>
                        <th className="p-3 font-medium">Amount</th>
                        <th className="p-3 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order) => (
                        <tr key={order.id} className="border-t">
                          <td className="p-3 font-medium">{order.id}</td>
                          <td className="p-3">{order.customer}</td>
                          <td className="p-3">{order.date}</td>
                          <td className="p-3">${order.amount.toFixed(2)}</td>
                          <td className="p-3">
                            <span 
                              className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                order.status === 'Completed' 
                                  ? 'bg-green-100 text-green-800' 
                                  : order.status === 'Processing'
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}
                            >
                              {order.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="inventory">
            <Card>
              <CardHeader>
                <CardTitle>Low Stock Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-sm text-muted-foreground">
                        <th className="p-3 font-medium">Product</th>
                        <th className="p-3 font-medium">ID</th>
                        <th className="p-3 font-medium">Price</th>
                        <th className="p-3 font-medium">Stock</th>
                      </tr>
                    </thead>
                    <tbody>
                      {lowStockProducts.map((product) => (
                        <tr key={product.id} className="border-t">
                          <td className="p-3">
                            <div className="flex items-center space-x-3">
                              <img 
                                src={product.image} 
                                alt={product.name}
                                className="h-10 w-10 rounded object-cover"
                              />
                              <span className="font-medium">{product.name}</span>
                            </div>
                          </td>
                          <td className="p-3">{product.id}</td>
                          <td className="p-3">${product.price.toFixed(2)}</td>
                          <td className="p-3">
                            <span 
                              className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                product.stock < 10 
                                  ? 'bg-red-100 text-red-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}
                            >
                              {product.stock} left
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
