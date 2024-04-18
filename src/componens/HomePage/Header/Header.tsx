import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="container header">
                <div className="header_wrapper">
                    <div className="header_options">
                        <ul>
                            <li>
                                <NavLink to={"/single_product/661d4f7103682320bcbb7637"}>
                                    <p>РЕБ</p>
                                </NavLink>
                                <div className="border_gradient">
                                </div>
                            </li>
                            <li>
                                <p>Датчикі цілі</p>
                                <div className="border_gradient">
                                </div>
                            </li>
                            <li>
                                <p>Контакти</p>
                                <div className="border_gradient">
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="header_slider">
                        <div className="header_slider_wrapper">
                            <div className="header_slider_content">
                                <h1>електронні системи</h1>
                                <p>Наш сайт містить електронні системи для виконання військових завдань</p>
                                <NavLink to={"/shop"}>
                                    <button>До каталогу</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;