import { createSlice } from "@reduxjs/toolkit";

const initialState: IproductState = {
    name: "",
    price: 0
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.name = action.payload.name,
            state.price = action.payload.price
        },
        clearProduct: () => {
            return initialState
        }
    }
});

export const { setProduct, clearProduct } = productSlice.actions;
export default productSlice.reducer;