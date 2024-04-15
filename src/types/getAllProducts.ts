
export interface IProduct {
    img: string,
    productName: string,
    price: string,
    productDescription: string,
    _id: string,
    productLink: string
}

export interface IProducts {
    products: IProduct[]
}

export enum IProductsTypes {
    "GET_ALL_PRODUCTS"="GET_ALL_PRODUCTS"
}

interface getAllProducts {
    type: IProductsTypes.GET_ALL_PRODUCTS
    payload: IProduct[]
}

export type  GetAllProductsActions = IProductsTypes | any