import {Dispatch} from "react";
import {GetAllProductsActions, IProduct, IProductsTypes} from "../../types/getAllProducts";
import axios from "axios";


export function getAllProducts () {
    return async (dispatch: Dispatch<GetAllProductsActions>) => {
        try {
            const products = await axios.get<IProduct[]>("new-gunpowder-server.vercel.app/api/getAllProducts")
            dispatch({type: IProductsTypes.GET_ALL_PRODUCTS, payload: products.data})
        } catch (e) {

        }
    }
}