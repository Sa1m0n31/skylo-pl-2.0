import React from 'react'
import portfolio from "../data/portfolio";
import searchPlus from '../static/img/search-plus.svg'
import link from '../static/img/link.svg'

const PortfolioSection = () => {
    return <section className="section section--portfolio">
         <span className="beforeMainHeader">
                Portfolio
            </span>
        <h2 className="mainHeader">
            Ostatnie realizacje
        </h2>
        <main className="portfolioSection">
            {portfolio.map((item, index) => {
                return <section className="portfolio__item" key={index}>
                    <img className="portfolio__item__img" src={item.img} alt={item.title} />
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
                                <img className="btn__img" src={searchPlus} alt="powieksz" />
                            </button>
                            <button className="portfolio__item__btn hover">
                                <img className="btn__img" src={link} alt="link" />
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

export default PortfolioSection;
