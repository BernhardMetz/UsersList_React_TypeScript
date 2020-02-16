import { ListState, ActionType } from "../../interfaces/types"
import { GET_USERS } from "../../interfaces/consts"
const initialState: ListState = {
  pageNumber: 1,
  usersPerPage: 0,
  totalUsers: 0,
  users: [],
  loading: 0
}

const usersListReducer = (state = initialState, action: ActionType): ListState => {
  switch (action.type) {
    case GET_USERS:
      return state
    default:
      return state
  }
}

export default usersListReducer;