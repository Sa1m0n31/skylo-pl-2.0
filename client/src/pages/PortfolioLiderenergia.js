import React from 'react';
import ProjectHeader from "../components/ProjectHeader";
import { lider } from "../data/projects";
import liderMainImg from '../static/projects/liderenergia/Liderenergia.png'
import ProjectGallery from "../components/ProjectGallery";
import et1 from "../static/projects/liderenergia/stopka-dokument.png";
import et2 from "../static/projects/liderenergia/stopka-mail.png";

const PortfolioLiderenergia = () => {
    return <main className="project">
        <ProjectHeader title={lider.title}
                       subtitle={lider.subtitle}
                       logo={lider.logo} />
        <main className="project__main">
            <h2 className="project__main__header">
                Firmowa witryna internetowa z interakcją dla użytkownika
            </h2>
            <p className="project__main__text">
                Zaprojektowana i stworzona przez nas strona www dla Lider Energia przede wszystkim opisuje firmę oraz jej usługi. W szybki i prosty sposób możemy poznać więcej szczegółów na temat oferty oraz samej firmy. Dodatkowo na stronie umieściliśmy kalkulator kosztów, który działa na zasadzie przesuwającego się suwaka.
            </p>
            <img className="project__main__img" src={liderMainImg} alt="strona-internetowa-lider-premium" />
            <h2 className="project__main__header">
                Projekt logo i stopki jako części identyfikacji
            </h2>
            <p className="project__main__text">
                Na życzenie Klienta podjęliśmy się także stworzenia logo marki. Jest to część składająca się na całość wizerunku firmy Lider Energia. Zaprojektowane przez nas logo miało być proste i jasno nawiązywać do branży, w której działa firma Lider Energia.
            </p>
            <p className="project__main__text marginTop20">
                Dodatkowo udało nam się zaprojektować stopkę mailową oraz dokumentową dla naszego Klienta.
            </p>
            <section className="flex">
                <img className="project__half__img" src={et1} alt="strony-internetowe-brodnica" />
                <img className="project__half__img" src={et2} alt="strony-internetowe-brodnica" />
            </section>
        </main>
        <ProjectGallery gallery={lider.gallery}
                        siteLink={lider.siteLink}
                        siteButtonLabel={lider.siteButtonLabel}
                        galleryHeader={lider.galleryHeader} />
    </main>
};

export default PortfolioLiderenergia;
