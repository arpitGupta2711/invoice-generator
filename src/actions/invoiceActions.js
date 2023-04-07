export const addInvoice = (invoice) => async (dispatch) => {
  try {
    const invoiceWithId = { ...invoice, id: new Date().getTime() };
    dispatch({ type: "ADD_LIST", payload: invoiceWithId });
  } catch (err) {
  }
};
export const deleteAInvoice = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE", payload: id });
  } catch (err) {
  }
};
export const editInvoice = (invoice, id) => async (dispatch) => {
  try {
    const invoiceWithId ={...invoice}
    invoiceWithId.id=id.id;
    dispatch({ type: "EDIT", payload: invoiceWithId  });
  } catch (err) {
  }
};
