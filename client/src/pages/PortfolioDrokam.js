import React from 'react';
import ProjectHeader from "../components/ProjectHeader";
import { drokam } from "../data/projects";
import drokamMainImg from '../static/projects/drokam/DROKAM.png'
import ProjectGallery from "../components/ProjectGallery";
import drokamWizytowki from '../static/projects/drokam/drokam-wizytowki.png'

const PortfolioDrokam = () => {
    return <main className="project">
        <ProjectHeader title={drokam.title}
                       subtitle={drokam.subtitle}
                       logo={drokam.logo} />
        <main className="project__main">
            <h2 className="project__main__header">
                Strona internetowa typu portfolio
            </h2>
            <p className="project__main__text">
                Witryna, którą zrealizowaliśmy dla firmy DROKAM, jest przykładem wizytówki online. Na stronie przedstawiliśmy usługi, które oferuje firma DROKAM, a także zamieściliśmy portfolio podzielone na odpowiednie kategorie.
            </p>
            <img className="project__main__img" src={drokamMainImg} alt="strona-internetowa-drokam-premium" />
            <h2 className="project__main__header">
                Projekt wizytówki
            </h2>
            <p className="project__main__text">
                Po stworzeniu dla firmy DROKAM strony internetowej, podjęliśmy się zadania zaprojektowania wizytówki. Dostosowaliśmy design do przyjętego na stronie standardu stylistycznego i przygotowaliśmy gotowy do druku projekt.
            </p>
            <img className="project__main__img" src={drokamWizytowki} alt="strona-internetowa-drokam-premium" />
        </main>
        <ProjectGallery gallery={drokam.gallery}
                        siteLink={drokam.siteLink}
                        siteButtonLabel={drokam.siteButtonLabel}
                        galleryHeader={drokam.galleryHeader} />
    </main>
};

export default PortfolioDrokam;
