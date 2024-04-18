import React, {useEffect} from 'react';
import "./comfirmOrder.css"
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {NavLink} from "react-router-dom";
import Spinner from "../Spinner/Spinner";

function getAllProductsLocalStorage() {
    let allItems = []
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i); // Получаем ключ
        // @ts-ignore
        let value = JSON.parse(localStorage.getItem(key));
        // @ts-ignore
        let item = {
            key: key,
            value: value
        };
        allItems.push(item);
    }
    return allItems
}


const ConfirmOrder = () => {
    const {confirmOrderName, confirmOrderSurName, confirmOrderAddress, confirmOrderEmail, confirmOrderTel, confirmOrderCity, confirmOrderSendData, resetConfirmOrderData, confirmOrderProducts} = useActions()
    const {name, surName, tel, address, city, email, products, send_success, loading} = useTypedSelector(state => state.confirmOrder)
    useEffect(()=> {
        let items = getAllProductsLocalStorage()
        // @ts-ignore
        confirmOrderProducts(items)
        resetConfirmOrderData()
        window.scrollTo(0, 0);
    }, [])
    console.log(loading)
    return (
        <div className={"confirm_order_page"} >
           <div className="container">
               <div className="confirm_order_content">
                   <h2>Оформити замовлення</h2>
                   <form>
                       <div className={"form_confirm_input"}>
                           <label htmlFor="confirm_input_name">Ім'я</label>
                           <input onChange={(event: React.ChangeEvent<HTMLInputElement>)=> {
                               confirmOrderName(event.target.value)
                           }} value={name} className={"confirm_input_name"} type="text"/>
                       </div>
                       <div className={"form_confirm_input"}>
                           <label htmlFor="confirm_input_surname">Прізвище</label>
                           <input onChange={(event: React.ChangeEvent<HTMLInputElement>)=> {
                               confirmOrderSurName(event.target.value)
                           }} value={surName} className={"confirm_input_surname"} type="text"/>
                       </div>
                       <div className={"form_confirm_input"}>
                           <label htmlFor="confirm_input_number">Телефон</label>
                           <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                               confirmOrderTel(event.target.value)
                           }} value={tel} className={"confirm_input_number"} type="tel"/>
                       </div>
                       <div className={"form_confirm_input"}>
                           <label htmlFor="confirm_input_email">Email</label>
                           <input onChange={(event: React.ChangeEvent<HTMLInputElement>)=> {
                               confirmOrderEmail(event.target.value)
                           }} value={email} className={"confirm_input_email"} type="email"/>
                       </div>
                       <div className={"form_confirm_input"}>
                           <label htmlFor="confirm_input_city">Місто</label>
                           <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                               confirmOrderCity(event.target.value)
                           }} value={city} className={"confirm_input_city"} type="text"/>
                       </div>
                       <div className={"form_confirm_input"}>
                           <label htmlFor="confirm_input_address">Адреса</label>
                           <input onChange={(event: React.ChangeEvent<HTMLInputElement>)=> {
                               confirmOrderAddress(event.target.value)
                           }} value={address} className={"confirm_input_address"} type="text"/>
                       </div>
                       <div className="button_items">
                           {loading ?
                               <Spinner/> : send_success ? <div className={"form_confirm_success_items"}>
                                   <div className={"form_confirm_success"}>
                                       Замолення оформлено
                                   </div>
                                   <NavLink to={"/"}>
                                       <div className={"form_confirm_success_link"}>
                                           Повернутися на головну сторінку
                                       </div>
                                   </NavLink>
                               </div> : <button onClick={(event) => {
                                   confirmOrderSendData(name, surName, tel, address, city, email, products, event);
                               }} type={"submit"}>Оформити замовлення</button>}
                       </div>
                   </form>
               </div>
           </div>
        </div>
    );
};

export default ConfirmOrder;