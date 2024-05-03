import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Addproduct= () => {
const [productName, setProductName] = useState('');
const [category, setCategory] = useState('');
const [gender, setGender] = useState('');          
const [brand, setBrand] = useState('');
const [size, setSize] = useState('');
const [image, setImage] = useState(null);

const imageUpload = (event) => {
  
 setImage(event.target.files[0])
 
}   

useEffect(() => {
  const pro =  axios.get('http://localhost:1000/allproduct');
  console.log(pro)
  // console.log('fgh',image);
}, image); 
  const handleSubmit = async (e) => {

  try {
    // console.log(productId,'123');
    const response = await axios.post('http://localhost:1000/addproduct', { image,category,gender,brand,size});
    // const { productId } = response.data;
    // dispatch({ type: 'SET_USER', payload: productId }); 
     if(response.data) {
      navigator('/addproduct');
     }       
  } catch (error) {
    console.error(' failed', error);
  }
};
  return (
    <>
    <div style={{backgroundColor:'beige'}}>
    <div>
        <center>
    <img src='mb3.png' style={{width:'100px'}}/>
    </center>
    </div>
    </div>
    <center>
    <div target='/admin' >
        <h1>Add Product</h1>
        <div>
        <label></label>
        <input placeholder='Enter Product Name*' style={{width:'278px',padding:'10px'}}
          type="text"   value={productName}  onChange={(e) => setProductName(e.target.value) }
         />
</div>
<div>
         <select  style={{width:'300px',height:"50px"}} onChange={(e) => setCategory(e.target.value)}>
            <option  value='none' selected disabled hidden >Choose Category</option>
              <option>Women</option>
              <option>Men</option>
              <option>Kids</option>
            </select>
            </div>
            <div>
         <select  style={{width:'300px',height:"50px"}}  onChange={(e) => setGender(e.target.value)}>
            <option  value='none' selected disabled hidden >Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            </div>
            <div>
         <select  style={{width:'300px',height:"50px"}}  onChange={(e) => setBrand(e.target.value)}>
            <option  value='none' selected disabled hidden >Brand</option>
              <option>Allen Solly</option>
              <option>Tommy hilfiger</option>
              <option>Levis</option>
              <option>U.S Pollo  Assn.</option>
              <option>Zara</option>
            </select>
            </div>
            <div>
            <select  style={{width:'300px',height:"50px"}}  onChange={(e) => setSize(e.target.value)}>
            <option  value='none' selected disabled hidden >Size</option>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>Freesize</option>
            </select>
            </div>   
            <table border={1} width={300}>
            <h5>Add Image:</h5>
            <input type="file" onChange={imageUpload} />
            </table>
            <input type='submit' onClick={handleSubmit} value='SUMBIT'></input>
           </div>
            </center>
   
    </>
  );
};

export default Addproduct;