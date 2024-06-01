import { ReactNode } from "react";

export interface IButtonProps {
    handleClick: () => void;
    render?: () => ReactNode;
};