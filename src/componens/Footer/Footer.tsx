import React from 'react';
import "./footer.css"
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer_content">
                    <div className="footer_item footer_logo_social_info">
                        <div className="footer_logo">
                            <h1>Новий порох</h1>
                            <span>Буде змінено.....</span>
                            {/*<img src="/image/logo-main.svg" alt="footer_logo"/>*/}
                        </div>
                        <div className="footer_social_links">
                            <div className="footer_social_link_item">
                                <img src="/image/facebook.svg" alt="facebook"/>
                            </div>
                            <div className="footer_social_link_item">
                                <img src="/image/instagram.svg" alt="instagram"/>
                            </div>
                            <div className="footer_social_link_item">
                                <img src="/image/viber.svg" alt="viber"/>
                            </div>
                            <div className="footer_social_link_item">
                                <img src="/image/telegram.svg" alt="telegram"/>
                            </div>
                            <div className="footer_social_link_item">
                                <img src="/image/whatsApp.svg" alt="whatsApp"/>
                            </div>
                        </div>
                    </div>
                    <div className="footer_links_content_items">
                        <div className="footer_item">
                            <p>Товари</p>
                            <ul>
                                <li>
                                    РЕБ
                                </li>
                                <li>
                                    Датчикі цілі
                                </li>
                            </ul>
                        </div>
                        <div className="footer_item footer_menu">
                            <p>
                                Меню
                            </p>
                            <ul>
                                <NavLink to={"/"}>
                                    <li>Головна</li>
                                </NavLink>
                                <NavLink to={"/shop"}>
                                    <li>Магазин</li>
                                </NavLink>
                                <NavLink to={"/contact"}>
                                    <li>Контакти</li>
                                </NavLink>
                            </ul>
                        </div>
                        <div className="footer_item footer_contact_info">
                            <p>
                                Контакти
                            </p>
                            <ul>
                                <li>
                                    <img src="/image/maps.svg" alt="maps"/>
                                    <span>м. Київ, Солом'янський район</span>
                                </li>
                                <li>
                                    <img src="/image/call-footer.svg" alt="call"/>
                                    <span>+38 (068) 736 655 7</span>
                                </li>
                                <li>
                                    <img src="/image/email_footer.svg" alt="email"/>
                                    <span>nsewerda04@gmail.com</span>
                                </li>
                                {/*<li className={"footer_method_of_pay"}>*/}
                                {/*    <img src="/image/visa.svg" alt="visa"/>*/}
                                {/*    <img src="/image/mastercard.svg" alt="mastercard"/>*/}
                                {/*</li>*/}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer_name_of_shop">
                    <div className="footer_name_of_shop_item">
                        New gunpowder © 2024
                    </div>
                    <div className="footer_name_of_shop_item currency">
                        <div className="footer_name_of_shop_item_UAN">
                            UAH
                        </div>
                        <div className="footer_name_of_shop_item_USD">
                            USD
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;