import React from 'react';
import ProjectHeader from "../components/ProjectHeader";
import { procentowo } from "../data/projects";
import procentowoMainImg from '../static/projects/procentowo/procentowo.png'
import et1 from '../static/projects/procentowo/Page7.png'
import et2 from '../static/projects/procentowo/Page11.png'
import ProjectGallery from "../components/ProjectGallery";

const PortfolioProcentowo = () => {
    return <main className="project">
        <ProjectHeader title={procentowo.title}
                       subtitle={procentowo.subtitle}
                       logo={procentowo.logo} />
        <main className="project__main">
            <h2 className="project__main__header">
                Prosty design, prosta sprzedaż
            </h2>
            <p className="project__main__text">
                W tej realizacji postawiliśmy na styl, który często pojawia się w naszych projektach. Zastosowaliśmy prosty design, który jest przyjemny w odbiorze i jest przyjazny dla użytkownika, który bez problemu zrealizuje wszystkie kroki potrzebne do tego, aby sfinalizować zakup.
            </p>
            <img className="project__main__img" src={procentowoMainImg} alt="strona-internetowa-procentowo-premium" />
            <h2 className="project__main__header">
                Konfigurator etykiet
            </h2>
            <p className="project__main__text">
                Sklep zawiera konfigurator etykiet. Każdy klient może spersonalizować etykietę butelki wybranego przez siebie alkoholu. W zależności od typu etykiety, do wyboru jest kilka, a czasem kilkanaście pól, gdzie można wpisać swój tekst, który finalnie znajdzie się na etykiecie wręczanej przez nas na prezent butelki alkoholu.
            </p>
            <section className="flex">
                <img className="project__half__img" src={et1} alt="strony-internetowe-brodnica" />
                <img className="project__half__img" src={et2} alt="strony-internetowe-brodnica" />
            </section>
        </main>
        <ProjectGallery gallery={procentowo.gallery}
                        siteLink={procentowo.siteLink}
                        siteButtonLabel={procentowo.siteButtonLabel}
                        galleryHeader={procentowo.galleryHeader} />
    </main>
};

export default PortfolioProcentowo;
