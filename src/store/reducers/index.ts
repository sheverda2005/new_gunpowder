import {combineReducers} from "redux";
import {ModalMenuReducer} from "./ModalMenuReducer";
import {SearchMenuModalReducer} from "./SearchMenuModalReducer";
import {getAllProducts} from "./getAllProductsReducer";
import {confirmOrderReducer} from "./confirmOrderReducer";
import {burgerMenuReducer} from "./burgerMenureducer";

const modalMenu = combineReducers({
    modalMenu: ModalMenuReducer,
    burgerMenu: burgerMenuReducer
})

const search = combineReducers({
    searchMenu: SearchMenuModalReducer
})
export const rootReducer = combineReducers({
    modalMenu,
    search,
    allProducts: getAllProducts,
    confirmOrder: confirmOrderReducer
})

export type RootReducer = ReturnType<typeof rootReducer>