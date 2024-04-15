import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./componens/HomePage/HomePage";
import ComparisonPage from "./componens/ComparisonPage/ComparisonPage";
import ChosenPage from "./componens/ChosenPage/ChosenPage";
import ShopPage from "./componens/ShopPage/ShopPage";
import AboutUS from "./componens/AboutUsPage/AboutUS";
import DeliveryPayment from "./componens/DeliveryPaymentPage/DeliveryPayment";
import ContactPage from "./componens/ContactPage/ContactPage";
import SingleProduct from "./componens/SingleProduct/SingleProduct";
import ConfirmOrder from "./componens/ConfirmOrder/ConfirmOrder";

const useRouters = () => {
    return (
        <Routes>
            <Route path={"/"} element={<HomePage/>} />
            <Route path={'/comparison'} element={<ComparisonPage/>} />
            <Route path={"/chosen"} element={<ChosenPage/>} />
            <Route path={"/shop"} element={<ShopPage/>} />
            <Route path={"/about_us"} element={<AboutUS/>} />
            <Route path={"/delivery_payment"} element={<DeliveryPayment/>} />
            <Route path={"/contact"} element={<ContactPage/>} />
            <Route path={"/single_product/:id"} element={<SingleProduct/>} />
            <Route path={"/confirm_order"} element={<ConfirmOrder/>} />
        </Routes>
    );
};

export default useRouters;