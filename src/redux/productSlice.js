// import { createSlice } from "@reduxjs/toolkit";



// const productSlice = createSlice({
//   name: "products",

//   initialState: {
//     products: [],
//   },

//   reducers: {
//     setProducts: (state, action) => {
//       state.products = action.payload;
//     },

//     addProduct: (state, action) => {
//       state.products.push(action.payload);
//     },

//     deleteProduct: (state, action) => {
//       state.products = state.products.filter(
//         (item) => item.id !== action.payload
//       );
//     },
//   },
// });

// export const {
//   setProducts,
//   addProduct,
//   deleteProduct,
// } = productSlice.actions;

// export default productSlice.reducer;





import { createSlice } from "@reduxjs/toolkit"
import Product from "../components/Product"

const productSlice = createSlice({
    name:"products",
    initialState:{
        products:[]
    },

    reducers:{
        setProducts:(state,action)=>{
            state.products=action.payload;
        },
        addProduct:(state,action)=>{
            state.products.push(action.payload);
        },
        deleteProduct:(state,action)=>{
            state.products=state.products.filter(
                (item)=>item.id!==action.payload
            );
        }
    }
})
export const {
    setProducts,
    addProduct,
    deleteProduct
}=productSlice.actions;
export default productSlice.reducer;
