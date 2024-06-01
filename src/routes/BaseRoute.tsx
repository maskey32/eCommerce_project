import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import RoutesDetails from "./RoutesDetails";

const BaseRoute = () => (
    <Routes>
        {/* Public routes */}
        {RoutesDetails.default.map(({path, component}) => (
            <Route key={path} path={path} element={component} />
        ))}

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
        
        </Route>
  </Routes>
);

export default BaseRoute;