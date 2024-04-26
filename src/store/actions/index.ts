import * as ModalMenu from "./modalMenu"
import * as SearchMenu from "./searchActions"
import * as GetAllProducts from "./getAllProdcuts"
import * as ConfirmOrder from "./confirmOrderActions"
import * as BurgerMenu from "./burgerMenuActions"
import * as NovaPoshtaCity from "./novaPoshtaCityActions"
import * as FeedBack from "./feedbackActions"

export default {
    ...ModalMenu,
    ...SearchMenu,
    ...GetAllProducts,
    ...ConfirmOrder,
    ...BurgerMenu,
    ...NovaPoshtaCity,
    ...FeedBack
}