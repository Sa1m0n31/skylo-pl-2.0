import React, {useEffect, useRef, useState} from 'react'
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import ShortContactForm from "../components/ShortContactForm";
import portfolio from "../data/portfolio";
import searchPlus from "../static/img/search-plus.svg";
import link from "../static/img/link.svg";
import vector from '../static/img/vector-4.png'
import closeIcon from "../static/img/close.svg";
import arrowIcon from "../static/img/arrow-white.svg";

const Portfolio = () => {
    const typesOfProjects = ['Wszystko', 'Strony www', 'Sklepy internetowe'];

    const [category, setCategory] = useState(0);

    const [container, setContainer] = useState(null);
    const [closeModalBtn, setCloseModalBtn] = useState(null);
    const [currentImage, setCurrentImage] = useState(0);
    const [gallery, setGallery] = useState([]);

    const galleryModal = useRef(null);
    const modalImgWrapper = useRef(null);

    useEffect(() => {
        setGallery(portfolio.map((item) => {
            return item.img;
        }));

        setContainer(document.querySelector('.container'));
        setCloseModalBtn(document.querySelector('.closeModalBtn'));
    }, []);

    const closeModal = () => {
        // const galleryTop = document.querySelector('.galleryTop');
        //
        // galleryModal.current.style.opacity = '0';
        // galleryTop.style.opacity = '0';
        setTimeout(() => {
            galleryModal.current.style.zIndex = '-1';
            galleryModal.current.style.visibility = 'hidden';
            // galleryTop.classList.remove('galleryTop');
        }, 500);
    }

    const openModal = (n) => {
        setCurrentImage(n);

        // const galleryTop = document.createElement('div');
        // galleryTop.classList.add('galleryTop');
        //
        // galleryTop.appendChild(closeModalBtn);
        // container.appendChild(galleryTop);

        galleryModal.current.style.opacity = '1';
        galleryModal.current.style.zIndex = '101';
        galleryModal.current.style.visibility = 'visible';
    }

    const animation = () => {
        modalImgWrapper.current.style.opacity = '0';
        setTimeout(() => {
            modalImgWrapper.current.style.opacity = '1';
        }, 300);
    }

    const nextImage = () => {
        animation();
        setTimeout(() => {
            setCurrentImage((prevState) => {
                if(prevState === gallery.length-1) return 0;
                else return prevState+1;
            });
        }, 200);
    }

    const prevImage = () => {
        animation();
        setTimeout(() => {
            setCurrentImage((prevState) => {
                if(prevState === 0) return gallery.length-1;
                else return prevState-1;
            });
        }, 200);
    }

    return <div className="container container--portfolio">
        <img className="backgroundImg backgroundImg--1" src={vector} alt="tlo" />
        <PageHeader currentPage={3} />

        <div className="galleryModal" ref={galleryModal} onClick={() => { closeModal(); }}>
            <button className="closeModalBtn" onClick={() => { closeModal(); }}>
                <img className="btn__img" src={closeIcon} alt="wyjdz" />
            </button>

            <button className="modal__arrow modal__arrow--prev"
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}>
                <img className="btn__img" src={arrowIcon} alt="poprzedni" />
            </button>
            <figure className="modalImgWrapper"
                    ref={modalImgWrapper}
                    onClick={(e) => { e.stopPropagation(); }}>
                <img className="btn__img" src={gallery[currentImage]} alt="zdjecie" />
            </figure>
            <button className="modal__arrow modal__arrow--next"
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}>
                <img className="btn__img" src={arrowIcon} alt="poprzedni" />
            </button>
        </div>

        <main className="page">
            <h1 className="heading">
                Portfolio
            </h1>
            <p className="text">
                Poniżej znajdziesz wszystkie projekty, które do tej pory zrealizowaliśmy.
            </p>
            {/*<nav className="portfolio__options flex">*/}
            {/*    <span>*/}
            {/*        Wybierz kategorię:*/}
            {/*    </span>*/}
            {/*    {typesOfProjects.map((item, index) => {*/}
            {/*        return <label className={index === category ? "contact__left__label contact__left__label--selected" : "contact__left__label"} key={index}>*/}
            {/*            <button className="contact__left__button center" onClick={() => { setCategory(index); }}></button>*/}
            {/*            {item}*/}
            {/*        </label>*/}
            {/*    })}*/}
            {/*</nav>*/}
            <main className="portfolioSection">
                {portfolio.map((item, index) => {
                    return <>
                    <span className={`portfolio__item__before--${index} d-mobile`}>
                        <h3 className="portfolio__item__title d-mobile">
                        {item.title}
                        </h3>
                        <h4 className="portfolio__item__subtitle d-mobile">
                            {item.subtitle}
                        </h4>
                    </span>
                        <section className="portfolio__item"
                                 data-aos="fade-in"
                                 key={index}>
                            <img className="portfolio__item__img" src={item.img} alt={item.title} />
                            <main className="portfolio__item__inner center d-desktop">
                                <h3 className="portfolio__item__title">
                                    {item.title}
                                </h3>
                                <h4 className="portfolio__item__subtitle">
                                    {item.subtitle}
                                </h4>
                                <a className="portfolio__item__link center" href={`/portfolio${item.link}`}>
                                    O współpracy
                                </a>
                                <aside className="portfolio__item__bottom flex">
                                    <button className="portfolio__item__btn hover" onClick={() => { openModal(index); }}>
                                        <img className="btn__img" src={searchPlus} alt="powieksz" />
                                    </button>
                                    <a className="portfolio__item__btn hover" href={`/portfolio${item.website}`} target="_blank">
                                        <img className="btn__img" src={link} alt="link" />
                                    </a>
                                </aside>
                            </main>
                        </section>
                        <span className={`portfolio__item__after--${index} d-mobile`}>
                        <a className="portfolio__btn--mobile center d-mobile" href={`/portfolio${item.link}`}>
                        O współpracy
                        </a>
                        <a className="portfolio__btn--mobile center d-mobile" href={item.website}>
                            Odwiedź witrynę
                        </a>
                    </span>
                    </>
                })}
            </main>
        </main>
        <ShortContactForm />
        <Footer />
    </div>
}

export default Portfolio;
