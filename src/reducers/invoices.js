const reducer = (state = { invoices: [] }, action) => {
  switch (action.type) {
    case "ADD_LIST":
      return { ...state, invoices: [...state.invoices, action.payload] };

    case "DELETE":
      return {
        ...state,
        invoices: [
          ...state.invoices.filter((item) => {
            return item.id !== action.payload;
          }),
        ],
      };

    case "EDIT":
      return {
        ...state,
        invoices: [
          ...state.invoices.map((item) => {
            if (parseInt(item.id) === parseInt(action.payload.id)) {
              return action.payload;
            } else {
              return item;
            }
          }),
        ],
      };
    default:
      return state;
  }
};

export default reducer;
