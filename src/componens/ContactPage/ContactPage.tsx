import React, {useEffect} from 'react';
import "./contact_page.css"
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const ContactPage = () => {
    const {inputFeedbackName, inputFeedbackNumber, inputFeedbackEmail, inputFeedbackMessage} = useActions()
    const {name, number, message, email} = useTypedSelector(state => state.feedback)
    useEffect(()=> {
        window.scrollTo(0,0);
    }, [])
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
                                    <span>+38 (068) 736 65 57</span>
                                    {/*<span>+38 (000) 000 00 00</span>*/}
                                    {/*<span>+38 (000) 000 00 00</span>*/}
                                </div>
                            </div>
                            <div className="email">
                                <div className="email_title">
                                    <img src="/image/contact_us_email.svg" alt="contact_us"/>
                                    Електрона пошта
                                </div>
                                <p>
                                    nsewerda04@gmail.com
                                </p>
                            </div>
                            <div className="address">
                                <div className="adress_title">
                                    <img src="/image/contact_us_address.svg" alt="address"/>
                                    Адреса офісу
                                </div>
                                <p>
                                    м. Київ, Солом'янський район
                                </p>
                            </div>
                        </div>
                        <div className="feedback">
                            <h2>Зворотній зв'зок</h2>
                            <div className="feedback_inputs">
                                <div className="feedback_inputs_userData">
                                    <input onChange={(event)=> {
                                        inputFeedbackName(event.target.value)
                                    }} value={name} placeholder={"Ім'я"} type="text"/>
                                    <input onChange={(event)=> {
                                        inputFeedbackNumber(event.target.value)
                                    }} value={number} placeholder={"Телефон"} type="tel"/>
                                    <input onChange={(event)=> {
                                        inputFeedbackEmail(event.target.value)
                                    }} value={email}  placeholder={"Email"} type="email"/>
                                </div>
                                <div className="feedback_inputs_massage">
                                    <textarea onChange={(event)=> {
                                        inputFeedbackMessage(event.target.value)
                                    }} value={message} placeholder={"Повідомлення"} />
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