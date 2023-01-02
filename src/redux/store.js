import { createStore } from 'redux';
import rootRedux   from "./rootRedux"
import { composeWithDevTools} from "redux-devtools-extension"

const store = createStore(rootRedux, composeWithDevTools())
export default store
