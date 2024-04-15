import {GetAllProductsActions, IProduct, IProducts, IProductsTypes} from "../../types/getAllProducts";


const initialState: IProducts = {
    products: []
}


export const getAllProducts = (state = initialState, action: GetAllProductsActions): IProducts => {
    switch (action.type) {
        case IProductsTypes.GET_ALL_PRODUCTS:
            return {...state, products: action.payload}
        default:
            return state;
    }
}