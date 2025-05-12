
import { useAuth } from '@/context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requireAdmin = false 
}) => {
  const { user, loading, isAdmin } = useAuth();
  const location = useLocation();
  
  // If still loading auth state, show loading message
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  // If no user, redirect to sign in
  if (!user) {
    return <Navigate to="/signin" state={{ from: location.pathname }} replace />;
  }
  
  // If admin required but user is not admin
  if (requireAdmin && !isAdmin) {
    return <Navigate to="/" replace />;
  }
  
  // Return children if all checks pass
  return <>{children}</>;
};

export default ProtectedRoute;
