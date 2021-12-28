import React from 'react';
import ProjectHeader from "../components/ProjectHeader";
import { tabularii } from "../data/projects";
import tabulariiMainImg from '../static/projects/tabularii/Tabularii.png'
import ProjectGallery from "../components/ProjectGallery";

const PortfolioTabularii = () => {
    return <main className="project">
        <ProjectHeader title={tabularii.title}
                       subtitle={tabularii.subtitle}
                       logo={tabularii.logo} />
        <main className="project__main">
            <h2 className="project__main__header">
                Firmowa strona internetowa
            </h2>
            <p className="project__main__text">
                Strona www dla biura rachunkowego Tabularii to tzw. single page application, czyli niezawierająca podstron. Klientce, która zleciła nam stworzenie projektu witryny oraz logo zależało na ujęciu elegancji i klasy premium w prostym designie.
            </p>
            <img className="project__main__img" src={tabulariiMainImg} alt="strona-internetowa-tabularii-premium" />
        </main>
        <ProjectGallery gallery={tabularii.gallery}
                        siteLink={tabularii.siteLink}
                        siteButtonLabel={tabularii.siteButtonLabel}
                        galleryHeader={tabularii.galleryHeader} />
    </main>
};

export default PortfolioTabularii;
