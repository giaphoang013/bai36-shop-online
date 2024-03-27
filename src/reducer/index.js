
import {combineReducers} from "redux";
import cartReducer from "./cart";
const allReducers = combineReducers({
    cartReducer,
    
   //thêm nhiều vào đây
});
export default allReducers;