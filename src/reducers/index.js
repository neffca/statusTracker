import { ADD_STATUS } from "../constants/action-types";

const initialState = {
  status: []
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_STATUS) {
    return Object.assign({}, state, {
      status: state.status.concat(action.payload)
    });
  }
  return state;
}
export default rootReducer;
