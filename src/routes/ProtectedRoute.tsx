import { useLocation, Navigate, Outlet } from "react-router-dom";

const ProtectedRoute: React.FC = () => {
  const location = useLocation();
  const loggedIn = true;

  return loggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;