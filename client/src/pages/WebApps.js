import React from 'react'
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import vector from "../static/img/vector-3.png";
import SingleStrength from "../components/SingleStrength";
import points from "../static/img/points.svg";
import SmallPortfolio from "../components/SmallPortfolio";
import ShortContactForm from "../components/ShortContactForm";
import webApps from '../data/webApps'
import ux from "../data/ux";

const WebApps = () => {
    return <div className="container container--websites container--webapps">
        <PageHeader currentPage={1} />
        <img className="backgroundImg backgroundImg--1" src={vector} alt="tlo" />
        <img className="backgroundImg backgroundImg--2" src={vector} alt="tlo" />
        <main className="page">
            <h1 className="heading">
                {webApps.firstHeader}
            </h1>
            <p className="text">
                {webApps.firstParagraph}
            </p>
            <section className="flex websites__section">
                <article className="websites__section__content">
                    <h2 className="offer__heading">
                        {webApps.secondHeader}
                    </h2>
                    <p className="text">
                        {webApps.secondParagraph}
                    </p>
                </article>
                <figure className="websites__imgWrapper">
                    <img className="websites__img btn__img" src={webApps.mainImage} alt="aplikacje-webowe-torun" />
                </figure>
            </section>
            <h2 className="offer__heading offer__heading--websites2">
                {webApps.thirdHeader}
            </h2>
            <main className="strengths strengths--websites flex">
                {webApps.strengths.map((item, index) => {
                    return <SingleStrength title={item.title} icon={item.icon} text={item.text} key={index} />
                })}
            </main>

            <section className="flex ux__section--2">
                <figure className="ux__imgWrapper">
                    <img className="btn__img" src={webApps.secondImage} alt={webApps.fourthHeader} />
                </figure>
                <article className="ux__content">
                    <h3 className="offer__heading">
                        {webApps.fourthHeader}
                    </h3>
                    <section className="text">
                        <p>
                            {webApps.fourthParagraph[0]}
                        </p>
                        <p>
                            {webApps.fourthParagraph[1]}
                        </p>
                        <p>
                            {webApps.fourthParagraph[2]}
                        </p>
                    </section>
                </article>
            </section>
            <h3 className="offer__heading offer__heading--80">
                Jak powstaje Twoja aplikacja internetowa?
            </h3>
            <section className="offer__points">
                <img className="offer__points__img d-over-900" src={points} alt="wlasna-strona-internetowa" />
                <article className="offer__points__content">
                    <p className="offer__points__item">
                        <span className="red">1. Omówienie szczegółów współpracy</span> - każdy projekt zaczynamy od dialogu. Chcemy, by realizowane przez nas projekty maksymalnie spełniały Twoje oczekiwania i wymagania. Podczas początkowej rozmowy przedstawisz nam swoje cele, a my dokonamy analizy i na podstawie wyciągniętych wniosków przystąpimy do dalszych etapów tworzenia Twojej aplikacji.
                    </p>
                    <p className="offer__points__item">
                        <span className="red">2. Makieta UX</span> - w oparciu o ustalenia z pierwszych rozmów przystępujemy do tworzenia makiety UX, dzięki której zobaczysz funkcjonalności Twojej aplikacji, a także rozmieszczenie elementów czy układ treści.
                    </p>
                    <p className="offer__points__item">
                        <span className="red">3. Projekt</span> - makieta UX przedstawia funkcjonowanie aplikacji, ale to na tym etapie przystępujemy do nadawania charakteru Twojej aplikacji. Na podstawie wcześniejszych ustaleń opracowujemy warstwę wizualną projektu.
                    </p>
                    <p className="offer__points__item">
                        <span className="red">4. Wdrażanie aplikacji</span> - jeśli wizualizacja projektu spełnia Twoje wymagania i dajesz nam tzw. zielone światło, możemy wówczas przystąpić do kodowania.
                    </p>
                    <p className="offer__points__item">
                        <span className="red">5. Testowanie, uruchomienie</span> - na sam koniec po zaprogramowaniu aplikacji odbywają się testy, a kiedy zakończą się one pomyślnie, możemy wówczas możemy uruchomić projekt na docelowym serwerze.
                    </p>
                </article>
            </section>
            <SmallPortfolio type={1} />
            <ShortContactForm />
        </main>
        <Footer />
    </div>
}

export default WebApps;
