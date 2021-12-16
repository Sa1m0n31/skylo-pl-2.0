import React, {useEffect} from 'react'
import react from '../static/img/react.svg'
import bootstrap from '../static/img/bootstrap.svg'
import adobexd from '../static/img/adobe-xd.svg'
import adobe from '../static/img/pakiet-adobe.svg'
import nodejs from '../static/img/node.png'
import wordpress from '../static/img/wordpress.png'
import gatsby from '../static/img/gatsby.png'
import woocommerce from '../static/img/woocommerce.png'
import skylocms from '../static/img/skylo-logo-white.png'
import SingleStrength from "./SingleStrength";
import ReactSiema from "react-siema";
import arrowWhite from "../static/img/arrow-white.svg";

const TechStack = () => {
    const stack = [
        {
            title: 'React',
            icon: react,
            text: 'Javascriptowa biblioteka do tworzenia interfejsów graficznych. W oparciu o nią swoje witryny zbudowali m.in. Netflix, PayPal czy Walmart.'
        },
        {
            title: 'Bootstrap',
            icon: bootstrap,
            text: 'Tworzona przez programistów Twittera biblioteka CSS. To m.in. dzięki niej Twoja strona będzie perfekcyjnie dopasowywać się do każdej rozdzielczości ekranu.'
        },
        {
            title: 'Pakiet Adobe',
            icon: adobe,
            text: 'Wszystkie projekty i wizualizacje tworzymy z wykorzystaniem licencjonowanego oprogramowania do tworzenia wszelkich projektów graficznych, interfejsów czy edycji wideo.'
        },
        {
            title: 'Adobe XD',
            icon: adobexd,
            text: 'Narzędzie do tworzenia interaktywnych prototypów stron internetowych. To tu pracujemy nad UX i szatą graficzną Twojej witryny.'
        },
        {
            title: 'NodeJS',
            icon: nodejs,
            text: 'Powstałe w 2009 roku środowisko uruchomieniowe aplikacji napisanych w Javascript. Od tego czasu zdążyli mu zaufać tacy giganci jak Microsoft, Yahoo! czy Uber.'
        },
        {
            title: 'WordPress',
            icon: wordpress,
            text: 'Najprostszy w obsłudze gotowy CMS - Content Management System - dzięki któremu unikniesz problemów z obsługą swojej witryny (a nawet jeśli, to i tak Ci pomożemy).'
        },
        {
            title: 'Gatsby',
            icon: gatsby,
            text: 'Generator stron statycznych o ogromnych możliwościach. Strony oparte na Gatsbym wyróżniają się większym bezpieczeństwem i ponadprzeciętną szybkością.'
        },
        {
            title: 'CMS Skylo.pl',
            icon: skylocms,
            text: 'Wychodząc naprzeciw oczekiwaniom i wymaganiom rynku, stworzyliśmy autorski system CMS, który cechuje się największą prostotą obsługi i maksymalną wydajnością.'
        },
        {
            title: 'WooCommerce',
            icon: woocommerce,
            text: 'Oferujemy także alternatywne rozwiązanie do naszego autorskiego CMS w postaci WordPressowej wtyczki, w oparciu o którą także tworzymy sklepy internetowe.'
        }
    ]

    let slider;

    const startInterval = () => {
        if(slider) {
            setInterval(() => {
                slider.next();
            }, 2000);
        }
    }

    useEffect(() => {
        if(window.innerWidth < 768) startInterval();
    }, []);

    return <section className="section section--strengths section--techStack">
        <h3 className="whiteHeader">
            W czym pracujemy?<span className="d-mobile"><br/></span> Poznaj nasze zaplecze
        </h3>
        <main className="strengths--carousel d-900">
            <button className="companies__arrow arrow--prev" onClick={() => { slider.prev(); }}>
                <img className="btn__img" src={arrowWhite} alt="poprzedni" />
            </button>
            <main className="strengths--carousel__main">
                <ReactSiema loop={true} ref={siema => slider = siema}>
                    {stack.map((item, index) => {
                        return <div className="strengths--carousel__item center" key={index}>
                            <img className="btn__img" src={item.icon} alt="technologia" />
                            <h4 className="strengths__header">
                                {item.title}
                            </h4>
                        </div>
                    })}
                </ReactSiema>
            </main>
            <button className="companies__arrow arrow--next" onClick={() => { slider.next(); }}>
                <img className="btn__img" src={arrowWhite} alt="poprzedni" />
            </button>
        </main>
        <main className="strengths flex d-over-900">
            {stack.map((item, index) => {
                return <SingleStrength title={item.title} icon={item.icon} text={item.text} key={index} />
            })}
        </main>
    </section>
}

export default TechStack;
