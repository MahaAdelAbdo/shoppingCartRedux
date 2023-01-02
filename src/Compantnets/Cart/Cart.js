 import { Grid, Button } from '@mui/material'
 import "./Cart.css"
import React,{useEffect ,useState} from 'react';
 import {connect} from "react-redux"
import CardCart from './CardCart';
 function Cart({cart}) {
   const [totalPrice ,setTotalPrice]=useState(0);
      const [totalItem, setTotalItem] = useState(0);

       useEffect(() => {
         let price = 0;
        let items = 0;
        {cart.forEach(item =>{
          items += item.qty;
          price += item.price * item.qty
        })}
        setTotalPrice(price)
        setTotalItem(items)

       }, [cart, totalPrice, setTotalPrice, totalItem, setTotalItem])
     return (
       <div>
         <Grid container spacing={2}>
           <Grid item sm={7}>
             {cart.map((item )=> (
               <CardCart itemDate={item} key={item.id} />
             ))}
           </Grid>
           {/* total */}
           <Grid item sm={3}>
             <div className='cart-main'>
               <div className='cart-item'>
                 <h4>Cart Summary</h4>

                 <h6>total ({totalItem} items)</h6>
                 <h6>$ {totalPrice}</h6>

                 <Button className='btn' variant='contained'>
                   Contained
                 </Button>
               </div>
             </div>
           </Grid>
         </Grid>
       </div>
     )
 }

 const mapStateToProps=(state)=>{
return {
  cart: state.shop.cart,
}
  
 }
 
 export default connect(mapStateToProps)(Cart)
 