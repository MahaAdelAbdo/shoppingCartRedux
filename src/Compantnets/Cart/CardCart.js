import React,{useState} from 'react'
import "./Cart.css"
import { adjustQry, RemoveToCart } from '../../shopping/Shopping.action'
  import { connect } from 'react-redux'
  // import {Button} from "@material-ui/core"
  import {Button}from "@mui/material"
function CardCart({ itemDate, RemoveToCart, adjustQry }) {
  const [input, setInput] = useState(itemDate.qty)
  const addInputHandle = (e) => {
    setInput(e.target.value)
    adjustQry(itemDate.id,e.target.value)
  }
  return (
    <div>
      <div className='contaner'>
        <div className='cart'>
          <div className='cart-image'>
            <img src={itemDate.image} alt={itemDate.title} />
          </div>
          <div className='cart-text'>
      
            <p>{itemDate.description}</p>
            <input
              type='number'
              value={input}
              onChange={addInputHandle}
              min='1'
            />
            <div className='trash'>
              <Button>
                 <i
                onClick={() => RemoveToCart(itemDate.id)}
                className='fas fa-trash-alt'
              ></i>
              </Button>
              
            </div>

            <h5>{itemDate.price}$</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
const RemoveInCart = (dispatch) => {
  return {
    RemoveToCart: (id) => dispatch(RemoveToCart(id)),
    adjustQry:(id,value)=> dispatch(adjustQry(id,value))
  }
}
export default connect(null, RemoveInCart)(CardCart)
