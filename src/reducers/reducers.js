export default function postReducer(state = [], action) {
    switch (action.type) {
      case CHECK_USERNAME:
        return [...state, action.payload];
      default:
        return state;
    }
  }