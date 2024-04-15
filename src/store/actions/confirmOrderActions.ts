import React, {Dispatch} from "react";
import {ConfirmOrderActions, IConfirmOrderTypes, IConfirmProduct} from "../../types/confirmOrderTypes";
import axios from "axios";

export function confirmOrderName(name: string) {
    return (dispatch: Dispatch<ConfirmOrderActions>) => {
        dispatch({
            type: IConfirmOrderTypes.INPUT_CONFIRM_ORDER_NAME,
            payload: name
        })
    }
}

export function confirmOrderSurName(surName: string) {
    return (dispatch: Dispatch<ConfirmOrderActions>) => {
        dispatch({
            type: IConfirmOrderTypes.INPUT_CONFIRM_ORDER_SURNAME,
            payload: surName
        })
    }
}

export function confirmOrderTel(tel: string) {
    return (dispatch: Dispatch<ConfirmOrderActions>) => {
        dispatch({
            type: IConfirmOrderTypes.INPUT_CONFIRM_ORDER_TEL,
            payload: tel
        })
    }
}

export function confirmOrderEmail(email: string) {
    return (dispatch: Dispatch<ConfirmOrderActions>) => {
        dispatch({
            type: IConfirmOrderTypes.INPUT_CONFIRM_ORDER_EMAIL,
            payload: email
        })
    }
}

export function confirmOrderCity(city: string) {
    return (dispatch: Dispatch<ConfirmOrderActions>) => {
        dispatch({
            type: IConfirmOrderTypes.INPUT_CONFIRM_ORDER_CITY,
            payload: city
        })
    }
}

export function confirmOrderAddress(address: string) {
    return (dispatch: Dispatch<ConfirmOrderActions>) => {
        dispatch({
            type: IConfirmOrderTypes.INPUT_CONFIRM_ORDER_ADDRESS,
            payload: address
        })
    }
}

export function confirmOrderProducts(products: IConfirmProduct[]) {
    return (dispatch: Dispatch<ConfirmOrderActions>) => {
        dispatch({
            type: IConfirmOrderTypes.CONFIRM_ORDER_PRODUCT,
            payload: products
        })
    }
}

export function confirmOrderSendData (name: string, surName: string, tel: string, address: string, city: string, email: string, products: IConfirmProduct[], event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    return async (dispatch: Dispatch<ConfirmOrderActions>) => {
      try {
          dispatch({type: IConfirmOrderTypes.SEND_CONFIRM_ORDER_DATA_LOADING})
          let user = {
              name,
              surName,
              tel,
              address,
              city,
              email
          }
          const request = await axios.post("https://new-gunpowder.vercel.app/api/getOrderData", {
              user,
              products
          })
          dispatch({type: IConfirmOrderTypes.SEND_CONFIRM_ORDER_DATA})
          dispatch({type: IConfirmOrderTypes.SEND_CONFIRM_ORDER_DATA_SUCCESS})
      } catch (e) {
          console.log(e)
      }
    }
}

export function resetConfirmOrderData () {
    return (dispatch: Dispatch<ConfirmOrderActions>) => {
        dispatch({type: IConfirmOrderTypes.RESET_CONFIRM_ORDER_DATA})
    }
}
