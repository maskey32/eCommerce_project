import Home from "../views/Home";
import NotFound from "../views/NotFound";
import ProductDetails from "../views/ProductDetails";

const routeDetails: IrouteDetails = {
  default: [
    {
      path: "/",
      component: <Home />,
    },
    {
      path: "*",
      component: <NotFound />,
    },
    {
      path: "/product-details/:id",
      component: <ProductDetails />,
    }
  ],
  secured: []
};

export default routeDetails;