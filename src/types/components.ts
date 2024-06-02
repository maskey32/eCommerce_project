import { ReactNode } from "react";

export interface IButtonProps {
    handleClick: () => void;
    children: ReactNode;
};

export interface Iproduct {
    id: number;
    name: string;
    price: number;
    description: string;
}