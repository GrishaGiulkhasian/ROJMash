import React, { useState, useEffect } from 'react';
import './info.css';
import Uno from '../assets/foto/1.png';
import To from '../assets/foto/2.png';
import Free from '../assets/foto/3.png';

const Info: React.FC = () => {

    return (
        <div className="conterInfo">
            <div className="conterInfo1">
                <div className='menu3'>
                    <div>Компания</div>
                    <div className='me3'>Кто мы</div>
                    <div className='me3'>Преимущества</div>
                </div>
            </div>
            <div className="conterInfo2">
                <span className='border1'></span>
                <span className='border2'></span>
                <div className="name">Наши <span> преимущества </span> </div>
                <div className="bloc1">
                    <img src={Uno} className="fotoo" alt="foto" />
                    <div className="bloc1_inner">
                        <span className="bloc1_title">01</span>
                        <span className="bloc1_title1">Техническая <span> экспертиза </span> </span>
                        <div className="bloc1_title01">РЖЕВМАШ — это, прежде всего, команда профессиональных инженеров.<span> В своих разработках мы опираемся на опыт лучших мировых производителей, адаптируя его к российским реалиям.</span></div>
                        <div className="bloc1_title001">Каждый проект проходит <span>тщательную инженерную проработку с учетом имеющейся инфраструктуры</span> и особенностей работы клиента. Вы можете быть уверены в том, что получите сбалансированное техническое решение, полностью отвечающее вашим потребностям.</div>
                    </div>
                    <div className="border-anim"></div>
                </div>
                <div className="bloc2">
                    <div className="bloc2_inner">
                        <span className="bloc2_title">02</span>
                        <span className="bloc2_title2"><span>Собственное</span> производство</span>
                        <div className="bloc2_title02">Наша производственная площадка – завод «РЖЕВМАШ» – располагается в Тверской области, всего в 3 часах езды от Москвы.<span> Территория 14 га, площадь производственных площадей более 20 000 кв.м. Современный станочный парк, крупногабаритные покрасочные камеры, железнодорожные подъездные пути.</span></div>
                        <div className="bloc2_title002">Локализация производства в России не только позволяет снизить стоимость нашего оборудования по сравнению с зарубежными аналогами, но и существенно сокращает время ожидания для клиента.</div>
                    </div>
                    <img src={To} className="fotoo1" alt="foto" />
                    <div className="border-anim"></div>
                </div>
                <div className="bloc3">
                    <img src={Free} className="fotoo3" alt="foto3" />
                    <div className="bloc3_inner">
                        <span className="bloc3_title">03</span>
                        <span className="bloc3_title3">Сервис и <span>обслуживание</span></span>
                        <div className="bloc3_title03">РЖЕВМАШ — это российское машиностроительное предприятие,<span> а значит наши специалисты всегда рядом и могут выехать к заказчику для консультации или проведения технического обслуживания.</span></div>
                        <div className="bloc3_title003">Это выгодно отличает нас от западных производителей.</div>
                    </div>
                    <div className="border-anim"></div>
                </div>
            </div>
            <div className="conterInfo3">
            </div>
        </div>
    );
}

export default Info;