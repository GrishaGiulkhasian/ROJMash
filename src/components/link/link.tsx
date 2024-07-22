import React, { useState, useEffect } from 'react';import './link.css'; 
import Mus_blakc from '../assets/foto/mus_blakc.png';
import useCustomCursor from '../useCustomCursor';

const Link: React.FC = () => {

    useCustomCursor();

    return (
        <div className="conterLink">
            <div className="backgroundOverlay"></div>
            <div className='menu2'>
                <div>Компания</div>
                <div className='me'>Кто мы</div>
                <div className='me'>Преимущества</div>
            </div>
            <div className='russia'>
                Российский разработчик и производитель эффективных решений <span> в области управления отходами </span>
            </div>
            <div className='russiaText'>
                Имея за плечами опыт создания собственного завода по рециклингу полимеров и находясь в постоянном контакте с нашими поставщиками сырья, мы как никто другой знаем все нюансы сбора и сортировки отходов. Нашим клиентам мы предлагаем как типовые решения с различной степенью механизации, так и сложнейшие автоматические сортировочные комплексы, разработанные по индивидуальным проектам.
                С 2010 года нами введено в эксплуатацию более 48 мусоросортировочных комплексов и мусороперегрузочных станций.
            </div>
            <div className="buttonContainer1">
                    <button className="animatedButton1"><span>Узнать подробнее</span></button>
            </div>
            <div className='rector'>
                <div className='rector_lit1'>
                    <div className='uno'>01</div>
                    <div className='setti1'>Полный цикл
                    разработки</div>
                </div>
                <div className='rector_lit2'>
                    <span className='border1'></span>
                    <div className='uno'>02</div>
                    <div className='setti2'>Пиндивидуальные
                    проекты</div>
                    <span className='border2'></span>
                </div>
                <div className='rector_lit3'>
                    <div className='unot'>03</div>
                    <div className='setti3'>42 Объекта</div>
                </div>
            </div>
            <div className='shec11'>
                <img src={Mus_blakc} />
            </div>
        </div>
    );
};

export default Link;
