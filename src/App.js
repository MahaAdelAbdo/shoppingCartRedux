 import React from 'react';
 import Navber from "./Compantnets/Navber/Navber";
 import Products from "./Compantnets/Products/Products";
 import Cart from "./Compantnets/Cart/Cart";
 import Singleitem from "./Compantnets/Singleitem/singitem";
 import { BrowserRouter as Router , Route , Switch ,Redirect} from "react-router-dom";
 import { connect} from "react-redux"
function App({ currentItem }) {
  return (
    <Router>
      <Navber />
      <Switch>
        <Route exact path='/' component={Products} />
        <Route path='/cart' component={Cart} />
      
        {!currentItem ? (
          <Redirect to='/' />
        ) : (
          <Route path='/product/:id' component={Singleitem} />
        )}
      </Switch>
    </Router>
  )
}
const LoadAllSite = (state) => {
  return {
    currentItem: state.shop.currentItem,
    
  }
}
 
export default connect(LoadAllSite)(App);
