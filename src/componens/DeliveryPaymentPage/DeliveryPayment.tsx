import React from 'react';
import "./delivery_payment.css"

const DeliveryPayment = () => {
    return (
        <div className={"delivery_payment"} >
            <div className="container">
                <div className="delivery_payment_content">
                    <h2>Доставка і оплата</h2>
                    <section className={"payment"} >
                        <h3>Оплата</h3>
                        <p>Оплату можна здійснити наступними способами:</p>
                        <ul>
                            <li>За допомогою карт VISA / Mastercard на сайті під час замовлення
                            </li>
                            <li>Готівкою при отриманні товару у відділенні «Нова пошта»
                            </li>
                            <li>За допомогою сервісів Google Pay, Apple Pay
                            </li>
                        </ul>
                    </section>
                    {/*<div className="delivery">*/}
                    {/*    <h3>Доставка</h3>*/}
                    {/*    <p>У період з 26 квітня по 1 червня 2021 року діють спеціальні умови на доставку: замовлення на суму від 50 гривень доставляються на відділення Нової пошти і кур'єром за адресою - безкоштовно!</p>*/}
                    {/*    <p>Вартість доставки замовлень на суму до 50 грн, оплачених при оформленні замовлення онлайн:</p>*/}
                    {/*    <ul>*/}
                    {/*        <li>до відділення Нової пошти - 35 грн;*/}
                    {/*        </li>*/}
                    {/*        <li>кур'єрська доставка Нової пошти - 45 грн*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*    <p>Оформлення післяплатою - вартість доставки за тарифами Нової пошти + 20 грн (фіксована сума переказу грошових коштів) + 2% від суми замовлення.*/}
                    {/*    </p>*/}
                    {/*    <p>Орієнтовний термін доставки Замовлення складає від 1-го до 3-х робочих днів. Доставка деяких Замовлень (залежить від обраного товару) може становити термін до 5-ти робочих днів. Терміни поставки Замовлення наведено без урахування дня замовлення і при використанні перевізника ТОВ "Нова Пошта". Про точний термін доставки Замовлення Покупця оповіщає перевізник.*/}
                    {/*    </p>*/}
                    {/*    <p>*/}
                    {/*        <div>Увага!</div>*/}
                    {/*        <div>                            Замовлення зберігається на складі транспортної компанії не більше 5-ти робочих днів, після вичерпання цього терміну - відправляється назад.*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            Отримати замовлення може тільки та людина, яка зазначена в транспортній декларації як одержувач.*/}

                    {/*        </div>*/}
                    {/*        <div>                            При собі необхідно мати документ, що посвідчує особу.*/}
                    {/*        </div>*/}
                    {/*        <div>                            Замовлення з доставкою через «Нову пошту» приймаються згідно графіка роботи перевізника. Графік роботи компанії «Нова пошта» Ви зможете знайти на її офіційному сайті.*/}
                    {/*        </div>*/}
                    {/*    </p>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};

export default DeliveryPayment;