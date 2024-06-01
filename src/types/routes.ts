interface IrouteData {
    path: string;
    component: JSX.Element;
};

interface IrouteDetails {
    default: IrouteData[];
    secured: IrouteData[];
};