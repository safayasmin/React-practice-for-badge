// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setProducts,
//   addProduct,
//   deleteProduct,
// } from "../redux/productSlice";

// const Product = () => {
//   const [name, setName] = useState("");

//   const dispatch = useDispatch();
  
//   const products = useSelector((state) => state.products.products);
//   // GET
//   const getProducts = async () => {
//     const res = await axios.get("http://localhost:5000/products");
//     dispatch(setProducts(res.data));
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);

//   // ADD
//   const handleAdd = async () => {
//     if (name === "") return;

//     const newProduct = {
//       name: name,
//     };

//     const res = await axios.post(
//       "http://localhost:5000/products",
//       newProduct
//     );

//     dispatch(addProduct(res.data));

//     setName(""); // input clear cheyyan
//   };

//   // DELETE
//   const handleDelete = async (id) => {
//     await axios.delete(`http://localhost:5000/products/${id}`);

//     dispatch(deleteProduct(id));
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter Product Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <button onClick={handleAdd}>Add</button>

//       {products.map((item) => (
//         <div key={item.id}>
//           <h3>{item.name}</h3>

//           <button onClick={() => handleDelete(item.id)}>
//             Delete
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Product;





import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { setProducts,
    addProduct,
    deleteProduct
 } from '../redux/productSlice';

const Product = () => {
    const [name,setname]=useState("");
    const dispatch=useDispatch();
    const products=useSelector((state)=>state.products.products);

    const getproduct=async()=>{
        const res=await axios("http://localhost:5000/products");
        dispatch(setProducts(res.data))
    }
    useEffect(()=>{
        getproduct()
    },[]);

    const handleadd=async()=>{
        if(!name==="") return

        const addnew={
            name:name,
        }
        const res=await axios.post(`http://localhost:5000/products`,addnew);
        dispatch(addProduct(res.data));

       
        getproduct();
         setname("");
    }

    const dltproduct=async(id)=>{
        await axios.delete(`http://localhost:5000/products/${id}`);
        dispatch(deleteProduct(id));
    }
  return (
    <div>
        <h1>user</h1>
        <input
        type='text'
        placeholder='enter your name'
        value={name}
        onChange={(e)=>setname(e.target.value)}      
        className='border py-2 px-2' />

        <button onClick={()=>handleadd()}>add</button>

        {products.map((n)=>(
            <div key={n.id}>
                <h1 className='text-2xl font-bold'>{n.name}</h1>
                <button onClick={()=>dltproduct(n.id)}>delete</button>
            </div>
        ))}
    </div>
  )
}

export default Product
