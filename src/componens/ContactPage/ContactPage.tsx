import React from 'react';
import "./contact_page.css"

const ContactPage = () => {
    return (
        <div className={"contact_page"} >
            <div className="container">
                <div className="contact_page_content">
                    <h2>Контакти</h2>
                    <div className="contact_page_content_items">
                        <div className="contact_us">
                            <div className="call_us">
                                <div className="call_us_title">
                                    <img src="/image/contact_page_call_us.svg" alt="call us"/>
                                    Зателефонувати нам
                                </div>
                                <div className="numbers">
                                    <span>+38 (000) 000 00 00</span>
                                    <span>+38 (000) 000 00 00</span>
                                    <span>+38 (000) 000 00 00</span>
                                </div>
                            </div>
                            <div className="email">
                                <div className="email_title">
                                    <img src="/image/contact_us_email.svg" alt="contact_us"/>
                                    Електрона пошта
                                </div>
                                <p>
                                    support@support.com.ua
                                </p>
                            </div>
                            <div className="address">
                                <div className="adress_title">
                                    <img src="/image/contact_us_address.svg" alt="address"/>
                                    Адреса офісу
                                </div>
                                <p>
                                    м. Київ, вул. Київська
                                </p>
                            </div>
                        </div>
                        <div className="feedback">
                            <h2>Зворотній зв'зок</h2>
                            <div className="feedback_inputs">
                                <div className="feedback_inputs_userData">
                                    <input placeholder={"Ім'я"} type="text"/>
                                    <input placeholder={"Телефон"} type="tel"/>
                                    <input placeholder={"Email"} type="email"/>
                                </div>
                                <div className="feedback_inputs_massage">
                                    <textarea placeholder={"Повідомлення"} />
                                </div>
                                <div className="button_send_message">
                                    <button>Надіслати</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;