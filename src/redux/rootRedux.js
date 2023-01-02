import { combineReducers} from "redux"
import ShopReducer from "../shopping/shopping.reducer"
const rootRudex = combineReducers({
  shop: ShopReducer,
})

export default rootRudex