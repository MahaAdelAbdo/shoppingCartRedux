import React ,{useEffect ,useState} from 'react';
import "./Navber.css"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
 
function Navber({cart}) {
    const [ cartCount ,setCartCount ]=useState(0) ;
  
    useEffect(() => {
      let count = 0
      cart.forEach((item) => {
        count += item.qty
      })
      setCartCount(count)
    },[cart, cartCount])

    return (
      <div>
        <nav>
          <Link  to='/' className='cartHeader'>
            shopping cart
          </Link>
 

          <Link to='/cart' className='cartItem'>
            <div className='cartItem'>
              <h3>cart</h3>
              <i className='fas fa-shopping-cart'></i>
              <div className='cart_number'>{cartCount}</div>
            </div>
          </Link>
        </nav>
      </div>
    )
}
const NavberStateShop =(state)=>{
    return {
      cart: state.shop.cart,
    }
    
}

export default connect(NavberStateShop)(Navber)
