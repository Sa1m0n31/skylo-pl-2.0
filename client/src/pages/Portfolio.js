import React, {useState} from 'react'
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import ShortContactForm from "../components/ShortContactForm";
import portfolio from "../data/portfolio";
import searchPlus from "../static/img/search-plus.svg";
import link from "../static/img/link.svg";
import vector from '../static/img/vector-4.png'

const Portfolio = () => {
    const typesOfProjects = ['Wszystko', 'Strony www', 'Sklepy internetowe'];

    const [category, setCategory] = useState(0);

    return <div className="container container--portfolio">
        <img className="backgroundImg backgroundImg--1" src={vector} alt="tlo" />
        <PageHeader currentPage={3} />
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
                                    {/*<button className="portfolio__item__btn hover">*/}
                                    {/*    <img className="btn__img" src={searchPlus} alt="powieksz" />*/}
                                    {/*</button>*/}
                                    <a className="portfolio__item__btn hover" href={item.website} target="_blank">
                                        <img className="btn__img" src={link} alt="link" />
                                    </a>
                                </aside>
                            </main>
                        </section>
                        <span className={`portfolio__item__after--${index} d-mobile`}>
                        <a className="portfolio__btn--mobile center d-mobile" href={item.link}>
                        O współpracy
                        </a>
                        <a className="portfolio__btn--mobile center d-mobile" href={item.link}>
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
