import * as actionType from "./Shopping.Type"

export const addToCart = (itemID)=> {
  return {
    type: actionType.Add_to_cart,
    payload: {
      id: itemID,
    },
  }
}
 
export const RemoveToCart =(itemID)=>{
    return {
      type: actionType.Remove_to_cart,
      payload: {
        id: itemID,
      },
    }
}

export const adjustQry =(itemID ,value)=>{
    return {
      type: actionType.ADjust_Qry,
      payload: {
        id: itemID,
        qty: value,
      },
    }
}

export const LoadToCart =(item) => {
  return {
    type: actionType.Load_Item,
    payload:item,
  }
}