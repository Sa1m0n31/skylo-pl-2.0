import React from 'react';
import ProjectHeader from "../components/ProjectHeader";
import { caloe } from "../data/projects";
import ProjectGallery from "../components/ProjectGallery";
import czpMainImg from "../static/projects/czp/CZP.png";
import img1 from '../static/projects/caloe/img1.png'
import img2 from '../static/projects/caloe/img2.png'
import points from "../static/img/three-dots.svg"

const PortfolioCaloe = () => {
    return <main className="project">
        <ProjectHeader title={caloe.title}
                       subtitle={caloe.subtitle}
                       logo={caloe.logo} />


        <main className="project__main">
            <h2 className="project__main__header">
                Zakres prac - co zrobiliśmy?
            </h2>
            <section className="offer__points">
                <img className="offer__points__img d-over-900" src={points} alt="wlasna-strona-internetowa" />
                <article className="offer__points__content">
                    <p className="offer__points__item">
                        <span className="red">1. Opracowanie nazwy marki na podstawie wytycznych i słów kluczowych</span> - pomogliśmy stworzyć naszej Klientce nazwę dla swojej marki, która zajmuje się dystrybucją produktów naturalnych na bazie aloesu. Po otrzymaniu listy słów kluczowych, opracowaniu targetu, listy skojarzeń, została wybrana propozycja nazwy marki - Caloe.
                    </p>
                    <p className="offer__points__item">
                        <span className="red">2. Projekt logotypu</span> - na podstawie utworzonej nazwy, zaprojektowaliśmy logotyp - znak rozpoznawczy marki.
                    </p>
                    <p className="offer__points__item">
                        <span className="red">3. Projekt i wdrożenie sklepu internetowego</span> - mając już do dyspozycji wytyczne,wymagania i cele Klientki, stworzyliśmy projekt sklepu internetowego, a następnie wdrożyliśmy go w oparciu o nasz autorski system CMS.
                    </p>
                </article>
            </section>
            <img className="project__main__img" src={img1} alt="strona-internetowa-czp-premium" />
            <h2 className="project__main__header">
                Kreatywne podejście do współpracy
            </h2>
            <p className="project__main__text">
                Od naszej Klientki dostaliśmy prawdziwe wyzwanie. Musieliśmy od zera stworzyć wizerunek marki. Udało nam się opracować nazwę, logotyp oraz stworzyć cały projekt sklepu online. Chcieliśmy stanąć na wysokości zadania i dostarczyć Klientce dokładnie to, czego chciała. Wykorzystaliśmy swoją kreatywność i udało się stworzyć dzięki temu ciekawy internetowy wizerunek nowej marki.
            </p>
            <h2 className="project__main__header marginTop20">
                Sklep online oparty na naszym autorskim CMS
            </h2>
            <p className="project__main__text">
                Realizację platformy sprzedażowej dla naszej Klientki rozpoczęliśmy od projektu. Dostosowaliśmy go do wytycznych Klientki, której zależało na prostym i przyjemnym dla oka designie. Do wdrożenia zastosowaliśmy m.in. środowisko programistyczne React, na którym oparty jest również nasz autorski CMS. Uniwersalny, ponadprzeciętnie szybki i bardzo prosty w obsłudze. W połączeniu z dobrym designem strony, tworzy znakomite środowisko do promocji i sprzedaży produktów ze sklepu.
            </p>
            <img className="project__main__img" src={img2} alt="strona-internetowa-czp-premium" />
        </main>

        <ProjectGallery gallery={caloe.gallery}
                        siteLink={caloe.siteLink}
                        siteButtonLabel={caloe.siteButtonLabel}
                        galleryHeader={caloe.galleryHeader} />
    </main>
};

export default PortfolioCaloe;
