import React from 'react'
 import {Card,CardActions,CardContent,CardMedia
,Button,Typography
} from "@mui/material"
//  import Card from '@material-ui/core/Card'
//  import CardActions from '@material-ui/core/CardActions'

//  import CardContent from '@material-ui/core/CardContent'
//  import CardMedia from '@material-ui/core/CardMedia'
//  import Button from '@material-ui/core/Button'
//  import Typography from '@material-ui/core/Typography'
 import { addToCart, LoadToCart } from '../../../shopping/Shopping.action'
 import { connect} from "react-redux"
import {Link } from "react-router-dom"
 import "./Product.css";
function Product({ productData, addToCart, LoadToCart }) {
  return (
    <div className='Product'>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component='img'
          height='140'
          image={productData.image}
          alt={productData.titel}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {productData.titel}
          </Typography>
          <Typography variant='body1' color='text.secondary'>
            {productData.description}
          </Typography>
          <br />

          <Typography gutterBottom variant='h6' component='div'>
            {productData.price}$ Price
          </Typography>
        </CardContent>
        <CardActions className='groupButton'>
          <Button
            onClick={() => addToCart(productData.id)}
            className='btn_one'
            size='large'
          >
            Add to cart
          </Button>
          {/* LoadTocart view more  */}
          <Button
            className='btn_two'
            size='large'
            onClick={() => LoadToCart(productData)}
          >
            <Link to={`/product/:id ${productData.id}`} className='link'>
              view More
            </Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

const mapAddCart =(dispatch)=>{
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    LoadToCart: (item) => dispatch(LoadToCart(item)),
  }

}

export default connect(null,mapAddCart)(Product)
