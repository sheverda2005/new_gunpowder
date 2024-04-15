import * as ModalMenu from "./modalMenu"
import * as SearchMenu from "./searchActions"
import * as GetAllProducts from "./getAllProdcuts"
import * as ConfirmOrder from "./confirmOrderActions"
import * as BurgerMenu from "./burgerMenuActions"

export default {
    ...ModalMenu,
    ...SearchMenu,
    ...GetAllProducts,
    ...ConfirmOrder,
    ...BurgerMenu
}