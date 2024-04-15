import {Dispatch} from "react";
import {GetAllProductsActions, IProduct, IProductsTypes} from "../../types/getAllProducts";
import axios from "axios";


export function getAllProducts () {
    return async (dispatch: Dispatch<GetAllProductsActions>) => {
        try {
            const products = await axios.get<IProduct[]>("https://new-gunpowder-y33d24fd9-sheverdas-projects.vercel.app/api/getAllProducts")
            dispatch({type: IProductsTypes.GET_ALL_PRODUCTS, payload: products.data})
        } catch (e) {

        }
    }
}