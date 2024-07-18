import './App.css';
import React, { useState, useEffect } from 'react';
import Burger from '../assets/foto/chek.png';
import Mus from '../assets/foto/mus.png';
import CloseIcon from '../assets/foto/CloseIcon.png';
import Logo from '../assets/foto/mash.png';
import Messeng from '../assets/foto/messeng.png';
import Telegramm from '../assets/foto/telegramm.png';
import Wotcapp from '../assets/foto/wotcapp.png';
import BackgroundVideo from '../assets/vedeo/vedeo.mp4';


const TextBlock01: React.FC<{ text: string }> = ({ text }) => {
    const parts = text.split('. ');
    const firstPart = 'Эффективные решения';
    const firstPars = 'в области управления отходами'
    const restPart = text.replace(firstPart, '').trim();
    return (
        <>
            <div className='textBlock1Highlight1'>
                <div className='textBlock1Highlight'>
                <span className="textBlock01Highlight"> {firstPart} </span>
                <span className="textBlock001Highlight"> {firstPars} </span>
                </div>
                <p className="textBlock01Rest">{restPart}</p>
            </div>
        </>
    );
};

const TextBlock02: React.FC<{ text: string }> = ({ text }) => {
    const parts = text.split('. ');
    const firstPart = 'Комплекс по обработке коммунальных отходов ';
    const firstPars = 'с высокой степенью механизации'
    const restPart = text.replace(firstPart, '').trim();
    return (
        <>
            <div className='textBlock2Highlight2'>
                <div className='textBlock2Highlight'>
                <span className="textBlock02Highlight">{firstPart}</span>
                <span className="textBlock002Highlight">{firstPars}</span>
                </div>
                <p className="textBlock02Rest">{restPart}</p>
            </div>
        </>
    );
};

const TextBlock03: React.FC<{ text: string }> = ({ text }) => {
    const parts = text.split('. ');
    const firstPart = 'Cтанция на пресс-компактор ';
    const firstPars = 'RMZ PC40-360'
    const restPart = text.replace(firstPart, '').trim();
    return (
        <>
            <div className='textBlock2Highlight2'>
                <div className='textBlock2Highlight'>
                    <span className="textBlock02Highlight">{firstPart}</span>
                    <span className="textBlock002Highlight">{firstPars}</span>
                </div>
                <p className="textBlock02Rest">{restPart}</p>
            </div>
        </>
    );
};

const Menu: React.FC<{ isOpen: boolean; toggleMenu: () => void }> = ({ isOpen, toggleMenu }) => {
    return (
        <div className={`menuContainer ${isOpen ? 'open' : ''}`}>
            <div className="menuContent">
                <div className="menuHeader">
                    <img src={Logo} className="logoClon"alt="close menu" />
                    <img src={CloseIcon} className="menuCloseIcon" onClick={toggleMenu} alt="close menu" />
                </div>
                <div className="menuBody">
                    <input type="text" className="searchInput" placeholder="Поиск по сайту..."/>
                    <div className="menuLinks">
                        <div className="menuColumn">
                            <h3>О Нас</h3>
                            <a href="#">Наша Компания</a>
                            <a href="#">Вопрос Ответ</a>
                            <a href="#">История</a>
                            <a href="#">Решения</a>
                        </div>
                        <div className="menuColumn">
                            <h3>Продукция</h3>
                            <a href="#">Все</a>
                            <a href="#">Грохоты и сепараторы</a>
                            <a href="#">Прессовое оборудование</a>
                        </div>
                        <div className="menuColumn">
                            <h3>Пресс-центр</h3>
                            <a href="#">Новости</a>
                            <a href="#">Наши Отзывы</a>
                            <a href="#">Новости</a>
                        </div>
                        <div className="menuColumn">
                            <h3>Контакты</h3>
                            <span>+1 (234) 567-89-01</span>
                            <span>example@mail.com</span>
                            <div className="socialIcons">
                                <img src={Wotcapp} className=""alt="close menu" />
                                <img src={Telegramm} className=""alt="close menu" />
                                <img src={Messeng} className=""alt="close menu" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const App: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const [contentIndex, setContentIndex] = useState(1);
    const [content, setContent] = useState([
        {
            id: 1,
            label: 'РЖЕВМАШ',
            description: 'Мы проектируем и строим мусоросортировочные комплексы, станции мусороперегрузки, а также производим различное оборудование для сортировки и переработки ТКО, предназначенное специально для российских условий эксплуатации.',
            videoLink: '',
        },
        {
            id: 2,
            label: 'Мусоросортировочный комплекс',
            description: 'Оснащенн «открывателем пакетов» собственной разработки, барабанным грохотом, магнитными сепараторами, пресс-компактором для остаточных фракции, а также горизонтальным прессом для вторичного сырья.',
            videoLink: '',
        },
        {
            id: 3,
            label: 'Мусороперегрузочная станция',
            description: 'Предназначена для перегрузки отходов из мусоровозов в контейнер для последующей перевозки на большегрузном транспорте (мультилифт). Бетонная или сборно-разборная металлическая эстакада может быть оперативно смонтирована в удобном месте. Разгрузка мусоровоза занимает от 3 до 10 минут, а заполнение контейнера объемом 30 м3 за 40 минут. Может принять до 150 тонн отходов в смену. Не требует строительства ангара, сложных бетонных работ.',
            videoLink: '',
        }
    ]);

    const highlightText = (text: string) => {
        if (text === 'РЖЕВМАШ') {
            return (
                <>
                   <div className='textHead1'> <span className="highlight">РЖЕВ</span>МАШ </div>
                </>
            );
        } else if (text === 'Мусоросортировочный комплекс') {
            return (
                <>
                    Мусоро<span className="highlight">сортировочный</span> комплекс
                </>
            );
        } else if (text === 'Мусороперегрузочная станция') {
            return (
                <>
                    Мусоро<span className="highlight">перегрузочная</span> станция
                </>
            );
        }
        return text;
    };

    const selectedContent = content.find(item => item.id === contentIndex);

    // Добавьте этот useEffect для управления кастомным курсором
    useEffect(() => {
        const customCursor = document.createElement('div');
        customCursor.classList.add('custom-cursor');
        customCursor.innerText = 'CLIK';
        document.body.appendChild(customCursor);

        const moveCursor = (e: MouseEvent) => {
            customCursor.style.left = `${e.clientX}px`;
            customCursor.style.top = `${e.clientY}px`;
        };

        const handleHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('a') || target.closest('button') || window.getComputedStyle(target).cursor === 'pointer') {
                customCursor.classList.add('cursor-hover');
            } else {
                customCursor.classList.remove('cursor-hover');
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleHover);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleHover);
            document.body.removeChild(customCursor);
        };
    }, []);

    return (
        <div className="Container">
            <video autoPlay loop muted className="backgroundVideo">
                <source src={BackgroundVideo} type="video/mp4" />
            </video>
            <div className='ContentHeader'>
                <div className='Logo'></div>
                <nav className="nav">
                    <a className="nav_link" href="#info-section">О компании</a>
                    <a className="nav_link" href="#servis-section">Продукция</a>
                    <a className="nav_link" href="#kyrs-section">Решения</a>
                    <a className="nav_link" href="#kont-section">Новости</a>
                </nav>
                <div></div>
                <div className='shec' onClick={toggleMenu}>
                    <img src={isMenuOpen ? CloseIcon : Burger} alt="menu icon" />
                </div>
            </div>
            <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <div className='ContentHead'>
                <div></div>
                {selectedContent && (
                    <div className='textHead'>
                        {highlightText(selectedContent.label)}
                    </div>
                )}
                <div className='punkt'>
                    <div onClick={() => setContentIndex(1)} className='punkt1'>
                        <div className='punkt_inner'>01</div>
                        <div className='punkt_title'>Пара слов о
                            нашей компании</div>
                    </div>
                    <div onClick={() => setContentIndex(2)} className='punkt2'>
                        <div className='punkt_inner'>02</div>
                        <div className='punkt_title'>Мусоросортировочная
                            станция</div>
                    </div>
                    <div onClick={() => setContentIndex(3)} className='punkt3'>
                        <div className='punkt_inner'>03</div>
                        <div className='punkt_title'>Мусороперегрузочная
                            станция</div>
                    </div>
                </div>
                <div></div>
            </div>
            <div className='ContentFoot'>
                <div className='menu'>
                    <div className='set'>Компания</div>
                    <div>Кто мы</div>
                    <div>Преимущества</div>
                </div>
                <div className='info'>
                    {selectedContent && selectedContent.id === 1 && (
                        <TextBlock01 text={selectedContent.description} />
                    )}
                    {selectedContent && selectedContent.id === 2 && (
                        <TextBlock02 text={selectedContent.description} />
                    )}
                    {selectedContent && selectedContent.id === 3 && (
                        <TextBlock03 text={selectedContent.description} />
                    )}
                </div>
                <div className="buttonContainer">
                    <button className="animatedButton"><span>Узнать подробнее</span></button>
                </div>
                <div className='shec1'>
                    <img src={Mus} />
                </div>
            </div>
        </div>
    );
}

export default App;
