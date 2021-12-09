import React, {useEffect, useRef, useState} from 'react'
import logo1 from '../static/img/Bednarscy-Witraze.png'
import logo2 from '../static/img/BrunchBox.png'
import logo3 from '../static/img/Bolingier.png'
import logo4 from '../static/img/Caloe.png'
import logo5 from '../static/img/CZP.png'
import logo6 from '../static/img/DROKAM.png'
import logo7 from '../static/img/Flightmedia.png'
import logo8 from '../static/img/Happy13.png'
import logo9 from '../static/img/HideIsland.png'
import logo10 from '../static/img/Hotic-Polska.png'
import logo11 from '../static/img/Kalchem.png'
import logo12 from '../static/img/Kancelaria-Jurkiewicz.png'
import logo13 from '../static/img/Lider-Energia.png'
import logo14 from '../static/img/Procentowo.png'
import logo15 from '../static/img/Tabularii.png'
import logo16 from '../static/img/Zdrowko.png'
import logo17 from '../static/img/BioStories.png'
import ReactSiema from 'react-siema'
import arrowWhite from '../static/img/arrow-white.svg'

const CompaniesSection = () => {
    const slide1 = useRef(null);
    const slide2 = useRef(null);
    const slide3 = useRef(null);
    const slide4 = useRef(null);
    const slide5 = useRef(null);

    const [page, setPage] = useState(0);
    const [companiesSlides, setCompaniesSlides] = useState([slide1, slide2, slide3, slide4, slide5]);
    const [logos, setLogos] = useState([
        logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16, logo17
    ]);

    const startInterval = () => {
        setInterval(() => {
            setPage(prevState => {
                if(prevState === 4) return 0;
                else return prevState+1;
            });
        }, 3000);
    }

    const startMobileInterval = () => {
        setInterval(() => {
            slider.next();
        }, 2000);
    }

    useEffect(() => {
        if(window.innerWidth > 768) startInterval();
        else startMobileInterval();
    }, []);

    useEffect(() => {
        companiesSlides.forEach((item, index) => {
            item.current.style.opacity = '0';
            if(index === page) {
                item.current.style.opacity = '1';
            }
        });
    }, [companiesSlides, page]);

    let slider;

    return <section className="section section--companies">
            <span className="beforeMainHeader">
                Zaufali nam
            </span>
            <h2 className="mainHeader">
                Te firmy wybrały jakość
            </h2>
        <main className="companies d-mobile">
            <button className="companies__arrow arrow--prev" onClick={() => { slider.prev(); }}>
                <img className="btn__img" src={arrowWhite} alt="poprzedni" />
            </button>
            <ReactSiema loop={true} ref={siema => slider = siema}>
                {logos?.map((item, index) => {
                    return <div className="companies__mobile__slide center" key={index}>
                        <img className="companies__mobile__img" src={item} alt="logo-firmy" />
                    </div>
                })}
            </ReactSiema>
            <button className="companies__arrow arrow--next" onClick={() => { slider.next(); }}>
                <img className="btn__img" src={arrowWhite} alt="poprzedni" />
            </button>
        </main>
            <main className="companies center d-desktop">
                <main className="companies__main">
                    <div className="companies__slide companies__slide--3 flex" ref={slide1}>
                        <img className="companies__slide__img" src={logo9} alt="logo-firmy" />
                        <img className="companies__slide__img" src={logo4} alt="logo-firmy" />
                        <img className="companies__slide__img" src={logo6} alt="logo-firmy" />
                    </div>
                    <div className="companies__slide companies__slide--3 flex" ref={slide2}>
                        <img className="companies__slide__img" src={logo1} alt="logo-firmy" />
                        <img className="companies__slide__img" src={logo3} alt="logo-firmy" />
                        <img className="companies__slide__img" src={logo13} alt="logo-firmy" />
                    </div>
                    <div className="companies__slide flex" ref={slide3}>
                        <img className="companies__slide__img" src={logo5} alt="logo-firmy" />
                        <img className="companies__slide__img" src={logo11} alt="logo-firmy" />
                        <img className="companies__slide__img" src={logo7} alt="logo-firmy" />
                        <img className="companies__slide__img" src={logo17} alt="logo-firmy" />
                    </div>
                    <div className="companies__slide companies__slide--3 flex" ref={slide4}>
                        <img className="companies__slide__img" src={logo8} alt="logo-firmy" />
                        <img className="companies__slide__img" src={logo16} alt="logo-firmy" />
                        <img className="companies__slide__img" src={logo12} alt="logo-firmy" />
                    </div>
                    <div className="companies__slide flex" ref={slide5}>
                        <img className="companies__slide__img" src={logo2} alt="logo-firmy" />
                        <img className="companies__slide__img" src={logo10} alt="logo-firmy" />
                        <img className="companies__slide__img" src={logo15} alt="logo-firmy" />
                        <img className="companies__slide__img" src={logo14} alt="logo-firmy" />
                    </div>

                </main>
                <nav className="companies__dots flex center">
                    {companiesSlides?.map((item, index) => {
                        return <button className={index === page ? "testimonials__btn testimonials__btn--selected" : "testimonials__btn"}
                                       key={index}
                                       onClick={() => { setPage(index); }}>

                        </button>
                    })}
                </nav>
            </main>
    </section>
}

export default CompaniesSection;
