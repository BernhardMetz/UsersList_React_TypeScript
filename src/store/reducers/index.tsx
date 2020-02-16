import usersListReducer from "./list.reducer"
import { combineReducers } from "redux"

const allReducers = combineReducers({
  usersListReducer
})

export default allReducers