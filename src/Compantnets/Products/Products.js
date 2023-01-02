import React from 'react';
import Product from "./Product/Product"
import { connect} from "react-redux"
import {Grid} from "@mui/material"
function Products({ products}) {
  return (
    <div className='products'>
      <Grid container>
        {products.map((prod) => (
          <Grid className="productsMap" item sm={6} md={4} lg={3}>
            <Product productData={prod} key={prod.id} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
const mapStateRedux =(state)=>{
    return {
      products: state.shop.products,
    }
}

export default connect(mapStateRedux)(Products) 




