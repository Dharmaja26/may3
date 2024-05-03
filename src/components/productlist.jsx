import { useNavigate } from 'react-router-dom';

const Productlist= () => {
 
  return (
    <>
    <div style={{backgroundColor:'beige'}}>
    <div>
        <center>
    <img src='mb3.png' style={{width:'100px'}}/>
    </center>
    </div>
    
    <div style={{justifyContent:'space-between', display:'flex'}}>
     <input type='text' name='search' placeholder='Search here...'style={{width:'350px', height:'30px'}}/>
     <button style={{width:'200px'}}>+ ADD NEW</button>
     </div>
     <br/>
     <div style={{justifyContent:'space-between',display:'flex',border:'solid',borderRadius:'15px', borderColor:'gray'}}>
        <h4>Product</h4>
        <h4>Product ID</h4>
        <h4>Size</h4>
        <h4>Price</h4>    
     </div>
     <div style={{justifyContent:'space-between',display:'flex',}}>
      {/* <img src='picu.jpg'  style={{width:'50px',height:'50px',content:'Peach full length gown<'}} ></img> */}
      <h5>Shirt Gown</h5>
       <h5>771230956</h5>
       <h5>S , M , L ,XXL</h5>
       <h5>5000</h5>
     </div>
     <div style={{justifyContent:'space-between',display:'flex',}}>
      {/* <img src='picu.jpg'  style={{width:'50px',height:'50px',content:'Peach full length gown<'}} ></img> */}
      <h5>Sleeveless T</h5>
       <h5>45678</h5>
       <h5>S , M , L ,XXL</h5>
       <h5> 3999</h5>
     </div>
     <div style={{justifyContent:'space-between',display:'flex',}}>
      {/* <img src='picu.jpg'  style={{width:'50px',height:'50px',content:'Peach full length gown<'}} ></img> */}
      <h5>Zebra Pallazo</h5>
       <h5>8906755</h5>
       <h5>S , M , L ,XXL</h5>
       <h5>2999</h5>
     </div>
     <div style={{justifyContent:'space-between',display:'flex',}}>
      {/* <img src='picu.jpg'  style={{width:'50px',height:'50px',content:'Peach full length gown<'}} ></img> */}
      <h5>OverSized coat</h5>
       <h5>88706755</h5>
       <h5>S , M , L ,XXL</h5>
       <h5>2399</h5>
     </div>
     <div style={{justifyContent:'space-between',display:'flex',}}>
      {/* <img src='picu.jpg'  style={{width:'50px',height:'50px',content:'Peach full length gown<'}} ></img> */}
      <h5>Leather Coat</h5>
       <h5>4567899</h5>
       <h5>S , M , L ,XXL</h5>
       <h5>1299</h5>
     </div>
     <div style={{justifyContent:'space-between',display:'flex',}}>
      {/* <img src='picu.jpg'  style={{width:'50px',height:'50px',content:'Peach full length gown<'}} ></img> */}
      <h5>Cargo Pants</h5>
       <h5>5906755</h5>
       <h5>S , M , L ,XXL</h5>
       <h5>999</h5>
     </div>
     </div>

    
     </>
  );
};

export default Productlist;