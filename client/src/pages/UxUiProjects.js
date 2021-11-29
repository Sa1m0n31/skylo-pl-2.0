import React from 'react'
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import vector from "../static/img/vector-3.png";
import SingleStrength from "../components/SingleStrength";
import points from "../static/img/points-4.svg";
import SmallPortfolio from "../components/SmallPortfolio";
import ShortContactForm from "../components/ShortContactForm";
import ux from "../data/ux";

const UxUiProjects = () => {
    return <div className="container container--websites container--ux">
        <PageHeader currentPage={1} />
        <img className="backgroundImg backgroundImg--1" src={vector} alt="tlo" />
        <img className="backgroundImg backgroundImg--2" src={vector} alt="tlo" />
        <main className="page">
            <h1 className="heading">
                {ux.firstHeader}
            </h1>
            <p className="text">
                {ux.firstParagraph}
            </p>
            <section className="flex websites__section">
                <article className="websites__section__content">
                    <h2 className="offer__heading">
                        {ux.secondHeader}
                    </h2>
                    <p className="text">
                        {ux.secondParagraph}
                    </p>
                </article>
                <figure className="websites__imgWrapper">
                    <img className="websites__img btn__img" src={ux.mainImage} alt="projekty-ux-ui-lipno" />
                </figure>
            </section>
            <h2 className="offer__heading offer__heading--websites2">
                {ux.thirdHeader}
            </h2>
            <main className="strengths strengths--websites flex">
                {ux.strengths.map((item, index) => {
                    return <SingleStrength title={item.title} icon={item.icon} text={item.text} key={index} />
                })}
            </main>
            <h2 className="offer__heading offer__heading--100">
                Wybrane zalety makiet UX
            </h2>
            <section className="flex offer__websites__frames">
                {ux.frames.map((item, index) => {
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

            <section className="flex ux__section--1">
                <article className="ux__content">
                    <h3 className="offer__heading">
                        {ux.fourthHeader}
                    </h3>
                    <figure className="ux__imgWrapper d-900">
                        <img className="btn__img" src={ux.secondImage} alt={ux.fourthHeader} />
                    </figure>
                    <p className="text">
                        {ux.fourthParagraph}
                    </p>
                </article>
                <figure className="ux__imgWrapper d-over-900">
                    <img className="btn__img" src={ux.secondImage} alt={ux.fourthHeader} />
                </figure>
            </section>
            <section className="flex ux__section--2">
                <figure className="ux__imgWrapper">
                    <img className="btn__img" src={ux.thirdImage} alt={ux.fifthHeader} />
                </figure>
                <article className="ux__content">
                    <h3 className="offer__heading">
                        {ux.fifthHeader}
                    </h3>
                    <section className="text">
                        <p>
                            {ux.fifthParagraph[0]}
                        </p>
                        <p>
                            {ux.fifthParagraph[1]}
                        </p>
                        <p>
                            {ux.fifthParagraph[2]}
                        </p>
                    </section>
                </article>
            </section>
            <h3 className="offer__heading offer__heading--80">
                {ux.sixthParagraph}
            </h3>
            <section className="offer__points">
                <img className="offer__points__img d-over-900" src={points} alt="wlasna-strona-internetowa" />
                <article className="offer__points__content">
                    <p className="offer__points__item">
                        <span className="red">1. Analiza Twoich oczekiwań i celów</span> - standardowo na samym początku współpracy chcemy dowiedzieć się, czego od nas oczekujesz. Przeanalizujemy Twoje potrzeby oraz to, jakie cele masz związane z projektem. Poruszymy także temat Twojej wizji i wyobrażenia projektu.
                    </p>
                    <p className="offer__points__item">
                        <span className="red">2. Makieta UX</span> - po ustaleniu konkretów, przechodzimy do zaprojektowania makiety UX. Polega ona na wizualizacji projektu bez oprawy graficznej, z uwzględnieniem funkcji oraz działania poszczególnych elementów.
                    </p>
                    <p className="offer__points__item">
                        <span className="red">3. Projekt</span> - jeśli makieta UX spełnia Twoje oczekiwania, przystępujemy do nakładania elementów graficznych na projekt. Na tym etapie realizacja nabiera barw i charakteru.
                    </p>
                    <p className="offer__points__item">
                        <span className="red">4. Przekazanie projektu do programowania</span> - na ostatnim etapie współpracy przekazujemy projekt Twojemu zespołowi, abyś mógł go wdrożyć i uruchomić. Przekazujemy wszystkie pliki i kompletny widok oraz służymy pomocą przez cały czas trwania Twoich prac wdrożeniowych.
                    </p>
                </article>
            </section>
            <SmallPortfolio type={1} />
            <ShortContactForm />
        </main>
        <Footer />
    </div>
}

export default UxUiProjects;
