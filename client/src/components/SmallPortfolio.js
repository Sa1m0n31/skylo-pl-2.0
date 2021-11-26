import React from 'react'
import {smallPortfolios} from "../data/portfolio";
import searchPlus from "../static/img/search-plus.svg";
import link from "../static/img/link.svg";

const SmallPortfolio = ({type}) => {
    return <section className="smallPortfolio">
        <h4 className="offer__heading">
            Wybrane realizacje
        </h4>
        <main className="smallPortfolio__main flex">
            {smallPortfolios[type].map((item, index) => {
                return <section className="portfolio__item" key={index}>
                    <img className="portfolio__item__img" src={item.img} alt={item.title}/>
                    <main className="portfolio__item__inner center">
                        <h3 className="portfolio__item__title">
                            {item.title}
                        </h3>
                        <h4 className="portfolio__item__subtitle">
                            {item.subtitle}
                        </h4>
                        <a className="portfolio__item__link center" href={item.link}>
                            O współpracy
                        </a>
                        <aside className="portfolio__item__bottom flex">
                            <button className="portfolio__item__btn hover">
                                <img className="btn__img" src={searchPlus} alt="powieksz"/>
                            </button>
                            <button className="portfolio__item__btn hover">
                                <img className="btn__img" src={link} alt="link"/>
                            </button>
                        </aside>
                    </main>
                </section>
            })}
        </main>
        <a className="portfolioBtn center" href="/portfolio">
            Zobacz nasze portfolio i przekonaj się sam, co potrafimy
        </a>
    </section>
}

export default SmallPortfolio;
