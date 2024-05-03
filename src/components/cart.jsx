import { useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { useState } from 'react';
import { useEffect } from 'react';
const Cart= () => {

  return (
    <>
    <div style={{backgroundColor:'beige'}}>
    <div style={{display:'flex',justifyContent:'space-evenly',color:'black',flexDirection:'row',width:'1450px',padding:'20px'}}>
   <input type='text' name='search' placeholder='search' style={{height:'30px'}}/>
    <img src='mb3.png' style={{width:'100px'}}/>
    
     <h5> <FaRegHeart style={{fontSize:'20px'}} /> 
           Favorites
    </h5>
    <h5> <AiOutlineShoppingCart style={{fontSize:'20px'}}  />
          Cart
   </h5>
   <h5><RiMoneyRupeeCircleLine style={{fontSize:'20px'}} />
         Payment
    </h5>
    </div>
    </div>


    <div>

      
    </div>
    
  


    </>
  );
};

export default Cart;