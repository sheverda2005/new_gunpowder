import React, {useEffect, useRef, useState} from 'react';
import "./comfirmOrder.css"
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {NavLink} from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import {addressDepartmentNovaPoshta} from "../../store/actions/novaPoshtaCityActions";

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

function inputAddressHandler (setIsFocusDepartments: any) {
    setTimeout(()=> {
        setIsFocusDepartments(false)
    }, 200)
}

function inputCityHandler (setIsFocus: any) {
    setTimeout(()=> {
        setIsFocus(false)
    }, 200)
}

const ConfirmOrder = () => {
    const {
        confirmOrderName,
        confirmOrderSurName,
        confirmOrderAddress,
        confirmOrderEmail,
        confirmOrderTel,
        confirmOrderCity,
        confirmOrderSendData,
        resetConfirmOrderData,
        confirmOrderProducts,
        addCitiesNovaPoshta,
        chosenCityNovaPoshta
    } = useActions()
    const {name, surName, tel, address, city, email, products, send_success, loading} = useTypedSelector(state => state.confirmOrder)
    const {cities} = useTypedSelector(state => state.deliverySystem.novaPoshta)
    const [isFocus, setIsFocus] = useState(false)
    const {departments} = useTypedSelector(state => state.deliverySystem.novaPoshtaChosenCityReducer)
    const [isFocusDepartments, setIsFocusDepartments] = useState(false)
    const {addressDepartmentNovaPoshta} = useActions()
    const {chosenCity} = useTypedSelector(state => state.deliverySystem.novaPoshta)
    useEffect(()=> {
        let items = getAllProductsLocalStorage()
        // @ts-ignore
        confirmOrderProducts(items)
        resetConfirmOrderData()
        window.scrollTo(0, 0);
    }, [])
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
                           <label htmlFor="confirm_input_city">Місто або село</label>
                           <input onFocus={() => {
                               setIsFocus(true)
                           }} onBlur={()=> {
                               inputCityHandler(setIsFocus)
                           }}   onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                               confirmOrderCity(event.target.value)
                               addCitiesNovaPoshta(event.target.value)
                           }} value={city} className={"confirm_input_city"} type="text"/>
                           <div className="confirm_input_city_wrapper">
                               <div
                                   className={isFocus ? "form_confirm_input_choose_city active" : "form_confirm_input_choose_city"}>
                                   <ul>
                                       {cities.map(city => (
                                           <li onClick={(event) => {
                                               setIsFocus(false)
                                               confirmOrderCity(city.Present)
                                               chosenCityNovaPoshta(city)
                                           }}>{city.Present}</li>
                                       ))}
                                   </ul>
                               </div>
                           </div>
                       </div>
                       <div className={"form_confirm_input"}>
                           <label htmlFor="confirm_input_address">Адреса</label>
                           <input onFocus={() => {
                               setIsFocusDepartments(true)
                           }} onBlur={() => {
                               inputAddressHandler(setIsFocusDepartments)
                           }} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                               confirmOrderAddress(event.target.value)
                               addressDepartmentNovaPoshta(event.target.value, chosenCity?.DeliveryCity)
                           }} value={address} className={"confirm_input_address"} type="text"/>
                           <div className="confirm_input_city_wrapper">
                               <div
                                   className={isFocusDepartments ? "form_confirm_input_list_of_departments active" : "form_confirm_input_list_of_departments"}>
                                   <ul>
                                       {departments.map(department => (
                                           <li onClick={(event) => {
                                               setIsFocusDepartments(false)
                                               confirmOrderAddress(department.Description)
                                           }}>
                                               {department.Description}
                                           </li>
                                       ))}
                                   </ul>
                               </div>
                           </div>
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