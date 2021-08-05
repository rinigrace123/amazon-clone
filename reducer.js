export const initialState = {
      basket: [],
      user: null,
};

const reducer = (state,action)  => {
    console.log(action);
    switch(action.type){
        case "ADD_TO_BASKET":
            //Logic for adding items to basket
            return { 
              ...state, 
              basket: [...state.basket, action.item],
            };
        case "RETURN_TO_BASKET":
            return { state };
        default:
            return state;

    }
};

export default reducer;