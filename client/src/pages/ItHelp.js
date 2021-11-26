import React from 'react'
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import itHelpImg from '../static/img/obsluga-it-lipno.svg'
import vector from "../static/img/vector-4.png";
import websitesImg from "../static/img/strony-internetowe-lipno.svg";
import SmallPortfolio from "../components/SmallPortfolio";
import ShortContactForm from "../components/ShortContactForm";
import itHelp from "../data/itHelp";

const ItHelp = () => {
    return <div className="container container--websites container--itHelp">
        <PageHeader currentPage={1} />
        <img className="backgroundImg backgroundImg--1" src={vector} alt="tlo" />
        <img className="backgroundImg backgroundImg--2" src={vector} alt="tlo" />
        <main className="page">
            <h1 className="heading">
                Obsługa IT
            </h1>
            <p className="text">
                {itHelp.firstParagraph}
            </p>
            <section className="flex websites__section">
                <article className="websites__section__content">
                    <h2 className="offer__heading">
                        {itHelp.secondHeader}
                    </h2>
                    <p className="text">
                        {itHelp.secondParagraph}
                    </p>
                </article>
                <figure className="websites__imgWrapper">
                    <img className="websites__img btn__img" src={itHelpImg} alt="obsluga-it-lipno" />
                </figure>
            </section>
            <h2 className="offer__heading offer__heading--100">
                Zakres naszych usług
            </h2>
            <section className="flex offer__websites__frames">
                {itHelp.frames.map((item, index) => {
                    return <section className="aboutUs__frame" key={index}>
                        <span className="aboutUs__frame__number">
                            <img className="abousUs__frame__img" src={item.icon} alt={item.title} />
                        </span>
                        <h3 className="aboutUs__frame__header">
                            {item.title}
                        </h3>
                        <p className="aboutUs__frame__text">
                            {item.text}
                        </p>
                    </section>
                })}
            </section>
            <SmallPortfolio type={2} />
            <ShortContactForm />
        </main>
        <Footer />
    </div>
}

export default ItHelp;
