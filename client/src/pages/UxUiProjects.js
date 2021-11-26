import React from 'react'
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import vector from "../static/img/vector-3.png";
import ecommerceImg from "../static/img/tworzenie-sklepow-internetowych-brodnica.svg";
import SingleStrength from "../components/SingleStrength";
import ecommerce from "../data/ecommerce";
import points from "../static/img/points.svg";
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
                    <p className="text">
                        {ux.fourthParagraph}
                    </p>
                </article>
                <figure className="ux__imgWrapper">
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
                <img className="offer__points__img" src={points} alt="wlasna-strona-internetowa" />
                <article className="offer__points__content">
                    <p className="offer__points__item">
                        <span className="red">1. Analiza Twoich celów i wizji</span> - naszą współpracę zaczynamy od przeanalizowania Twoich celów, a także poznania Twojej koncepcji dotyczącej designu strony. Chcemy stworzyć taki projekt, który jednocześnie będzie podobał się Tobie, klientom, ale także będzie spełniał wszystkie wymagane funkcje, zgodne z Twoimi celami oraz standardami UX/UI.
                    </p>
                    <p className="offer__points__item">
                        <span className="red">2. Przedstawienie makiety</span> - po ustaleniu wszystkich szczegółów i podpisaniu umowy, przystępujemy do przygotowania wstępnego projektu Twojej strony www. Makieta przedstawia zazwyczaj projekt strony głównej, zawierający układ treści, elementów graficznych, przyjętą kolorystykę.
                    </p>
                    <p className="offer__points__item">
                        <span className="red">3. Projekt</span> - jeśli zaakceptujesz wstępną propozycję wyglądu Twojej strony (makiety), przystępujemy do finalizacji projektu. Na tym etapie postępy pokazujemy Ci regularnie, a Ty cały czas masz możliwość reagowania na bieżące zmiany i nowe elementy w projekcie. Nie przystąpimy do programowania do momentu, aż projekt zostanie przez Ciebie zaakceptowany.
                    </p>
                    <p className="offer__points__item">
                        <span className="red">4. Programowanie</span> - jeśli przygotowany przez nas projekt spełnia Twoje oczekiwania, wówczas rozpoczynamy programowanie strony. Nie martw się, jeśli zmienisz zdanie co do jakiegoś elementu w projekcie, cały czas istnieje możliwość poprawy i zmiany.
                    </p>
                    <p className="offer__points__item">
                        <span className="red">5. Testowanie, uruchomienie domeny</span> - zbliżamy się do finalizacji Twojej wirtualnej wizytówki. Na tym etapie, po ukończeniu prac, przystępujemy do testowania funkcji i sprawdzania poprawności działania strony. Po ukończeniu testów i Twojej akceptacji przenosimy stronę na Twoją docelową domenę. Nie masz domeny? Nie martw się, pomożemy Ci na każdym etapie, włącznie z wykupieniem i uruchomieniem domeny, hostingu czy serwera.
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
