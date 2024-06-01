import Home from "../views/Home";
import NotFound from "../views/NotFound";

const routeDetails: IrouteDetails = {
  default: [
    {
      path: "/",
      component: <Home />,
    },
    {
      path: "*",
      component: <NotFound />,
    }
  ],
  secured: []
};

export default routeDetails;