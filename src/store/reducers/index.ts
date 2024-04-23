import {combineReducers} from "redux";
import {ModalMenuReducer} from "./ModalMenuReducer";
import {SearchMenuModalReducer} from "./SearchMenuModalReducer";
import {getAllProducts} from "./getAllProductsReducer";
import {confirmOrderReducer} from "./confirmOrderReducer";
import {burgerMenuReducer} from "./burgerMenureducer";
import {novaPoshtaCityReducer} from "./novaPoshtaCityReducer";
import {ListOfDepartmentsReducer} from "./ listOfDepartmentsReducer";



const deliverySystem = combineReducers({
    novaPoshta: novaPoshtaCityReducer,
    novaPoshtaChosenCityReducer: ListOfDepartmentsReducer
})

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
    confirmOrder: confirmOrderReducer,
    deliverySystem,
})

export type RootReducer = ReturnType<typeof rootReducer>