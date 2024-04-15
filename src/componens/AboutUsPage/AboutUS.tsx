import React from 'react';
import "./about_us.css"

const AboutUs = () => {
    return (
        <div className={"about_us"} >
            <div className="container">
                <div className="about_us_content">
                    <h2>Про нас</h2>
                    <section className={"our_history"}>
                        <h3>Історія</h3>
                        <p>Ми спеціалізуємося на виробництві та продажу <strong>великим і дрібним оптом</strong> модною
                            елегантного одягу для жінок.</p>
                        <p>Наша компанія успішно <strong>працює на ринку України більше 10 років</strong>. За цей час ми
                            зуміли зайняти свою нішу не тільки серед виробників жіночого одягу в Україні, а й вийти на
                            закордонні ринки.</p>
                        <p>Ми створили виробництво європейського рівня і зібрали колектив висококваліфікованих фахівців.
                            Ми справді пишаємося і цінуємо співробітників, які працюють у нас на виробництві.</p>
                        <p>Ми не збираємося зупинятися на досягнутому - <strong>наша компанія постійно розвивається і
                            піднімає для себе планку</strong>.</p>
                        <p>Як виробник, ми особливо зацікавлені в продажу жіночого одягу оптом і розширенні нашої
                            дистриб'юторської мережі. Ми надамо Вам <strong>максимально вигідні умови</strong> як для
                            великих оптових покупців, так і для дропшіпперов.</p>
                    </section>
                    <section className={'why_us'} >
                        <h3>Чому вигідно працювати з нами:</h3>
                        <ul>
                            <li>Великий, надійний виробник, трепетно ​​ставиться до своєї репутації. Ми беремо на себе відповідальність за якість продукції і за високий рівень обслуговування.
                            </li>
                            <li>Доступні ціни.
                            </li>
                            <li>Фабричне якість. Вся продукція проходить через відділ технічного контролю.
                            </li>
                            <li>Безпроблемний повернення / обмін.
                            </li>
                            <li>Сайт пов'язаний зі складом. На сайті завжди актуальне наявність.
                            </li>
                            <li>Оперативна обробка замовлення. Відправлення протягом доби після оплати.
                            </li>
                            <li>Дропшиппінг. Можливість відправки замовлення по Україні безпосередньо вашим покупцям.
                            </li>
                            <li>
                                Система накопичувальних знижок для постійних клієнтів.
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;