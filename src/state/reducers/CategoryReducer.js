import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  RETRIEVE_CATEGORY,
  RETRIEVE_CATEGORY_ID,
  UPDATE_CATEGORY,
} from "./../action-types/CategoryType";

const initialState = [];

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_CATEGORY:
      return [...state, payload].sort((a, b) => -(a.id - b.id));
    case DELETE_CATEGORY:
      return state.filter(({ id }) => id !== payload.id);
    case RETRIEVE_CATEGORY:
      return payload;
    case RETRIEVE_CATEGORY_ID:
      console.log(
        "state: ",
        state.find(({ id }) => id === payload.id)
      );
      return state.find(({ id }) => id === payload.id);
    case UPDATE_CATEGORY:
      console.log("state: ", state);
      console.log("action: ", action);
      return state.map((category) => {
        if (category.id === payload.id) {
          return {
            ...payload,
          };
        } else {
          return category;
        }
      });
    default:
      return state;
  }
};

export default reducer;
