import * as React from 'react'
// import Box from '@material-ui/core/Box'
// import Card from '@material-ui/core/Card'
// import CardContent from '@material-ui/core/CardContent'
// import CardMedia from '@material-ui/core/CardMedia'
// import Typography from '@material-ui/core/Typography'
import {Link} from "react-router-dom"
// import Button from '@material-ui/core/Button'
// import Grid from '@material-ui/core/Grid'
import {connect} from "react-redux"
import {addToCart} from "../../shopping/Shopping.action"
import {Grid,Button,Typography,CardMedia,CardContent,Card,Box} from "@mui/material"
import "./singitem.css"

function Singitem({ addToCart ,currentItem} ) {
  return (
    <div className='controlCard'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <Box>
              <CardContent>
                <CardMedia
                  display='flex'
                  component='img'
                  sx={{ waxWidth: 20 }}
                  image={currentItem.image}
                  alt={currentItem.titel}
                />

                <Typography
                  display='grid'
                  justifyContent='end'
                  alignItems='end
                  '
                >
                  <br />
                  <Typography component='div' variant='body2'>
                    {currentItem.description}
                  </Typography>
                </Typography>
                <br />
                <Button
                  className='btn_one'
                  size='large'
                  onClick={() => addToCart(currentItem.id)}
                >
                  <Link to='/cart' className='link'>
                    Add to cart
                  </Link>
                </Button>
              </CardContent>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}
const singitemLink =(state)=>{
  return {
    currentItem:state.shop.currentItem
  }
}
const addIdCartHandle = (dispatch) => {
  return {
    addToCart:(id)=>dispatch(addToCart(id)),
  }
}
export default connect(singitemLink, addIdCartHandle)(Singitem)