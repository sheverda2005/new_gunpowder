import React from 'react';
import "./burger_menu.css"
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import {burgerMenuActive} from "../../../store/actions/burgerMenuActions";
import {NavLink} from "react-router-dom";

const BurgerMenu = () => {
    const {active} = useTypedSelector(state => state.modalMenu.burgerMenu)
    const {burgerMenuActive} = useActions()
    return (
        <div className={"burger_menu"} >
            <div onClick={()=> {
                burgerMenuActive()
            }} className={active ? "burger_menu_content active": "burger_menu_content"}>
                <div className="burger_menu_item one"></div>
                <div className="burger_menu_item two"></div>
                <div className="burger_menu_item tree"></div>
            </div>
            <div className={active ? "burgerMenuModalItem active" : "burgerMenuModalItem"}>
                <ul onClick={()=> {
                    burgerMenuActive()
                }}>
                    <NavLink to={"/"}>
                        <li>Головна</li>
                    </NavLink>
                    <NavLink to={"/shop"}>
                        <li>Магазин</li>
                    </NavLink>
                    <NavLink to={"/about_us"}>
                        <li>Про нас</li>
                    </NavLink>
                    <NavLink to={"/contact"}>
                        <li>Контакти</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default BurgerMenu;