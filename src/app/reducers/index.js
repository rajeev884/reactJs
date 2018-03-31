import { ADD_ARTICLE } from "../constants/action-types";
const initialState = {
  articles: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
        state={...state,articles: [...state.articles, action.payload]};
        break;
    default:
        state=state;
        break;
  }
  return state
};
export default rootReducer;