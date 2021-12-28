import React from 'react';
import ProjectHeader from "../components/ProjectHeader";
import { hotic } from "../data/projects";
import hoticMainImg from '../static/projects/hotic/Hotic.png'
import hot1 from '../static/projects/hotic/Panel1.jpg'
import hot2 from '../static/projects/hotic/Panel2.jpg'
import ProjectGallery from "../components/ProjectGallery";
import et1 from "../static/projects/procentowo/Page7.png";
import et2 from "../static/projects/procentowo/Page11.png";

const PortfolioHotic = () => {
    return <main className="project">
        <ProjectHeader title={hotic.title}
                       subtitle={hotic.subtitle}
                       logo={hotic.logo} />
        <main className="project__main">
            <h2 className="project__main__header">
                Dedykowana platforma do sprzedaży
            </h2>
            <p className="project__main__text">
                Stworzona przez nas witryna pełni rolę sklepu internetowego z jednym produktem. Firma Hotic Polska sprzedaje pistolet masujący i to właśnie dla tego produktu powstała platforma sprzedażowa dla Hotic Polska.
            </p>
            <img className="project__main__img" src={hoticMainImg} alt="strona-internetowa-hotic" />
            <h2 className="project__main__header">
                Autorski CMS do zarządzania sklepem i stroną
            </h2>
            <p className="project__main__text">
                Platforma stworzona na Hotic Polska to jedna z pierwszych realizacji, która została zbudowana w oparciu o nasz autorski CMS. Ze względu na specyfikę sklepu, idealnym rozwiązaniem optymalizującym wydajność witryny była budowa systemu sprzedażowego w oparciu o NodeJS i nierelacyjną bazę danych MongoDB.
            </p>
            <section className="flex">
                <img className="project__half__img" src={hot1} alt="strony-internetowe-brodnica" />
                <img className="project__half__img" src={hot2} alt="strony-internetowe-brodnica" />
            </section>
        </main>
        <ProjectGallery gallery={hotic.gallery}
                        siteLink={hotic.siteLink}
                        siteButtonLabel={hotic.siteButtonLabel}
                        galleryHeader={hotic.galleryHeader} />
    </main>
};

export default PortfolioHotic;
