import React from 'react';
import ProjectHeader from "../components/ProjectHeader";
import { zimnerzeczy } from "../data/projects";
import zimnerzeczyMainImg from '../static/projects/zimnerzeczy/glowna.png'
import ProjectGallery from "../components/ProjectGallery";

const PortfolioZimnerzeczy = () => {
    return <main className="project">
        <ProjectHeader title={zimnerzeczy.title}
                       subtitle={zimnerzeczy.subtitle}
                       logo={zimnerzeczy.logo} />
        <main className="project__main">
            <h2 className="project__main__header">
                Blog internetowy
            </h2>
            <p className="project__main__text">
                Stworzyliśmy blog internetowy dla projektu Zimne Rzeczy. Strona została oparta na platformie WordPress i pozwala na swobodne zarządzanie treścią oraz dodawanie wpisów na bloga, z precyzyjnym podziałem na kategorie. Z blogiem połączony jest również mały sklep internetowy, zbudowany na platformie WooCommerce.
            </p>
            <img className="project__main__img" src={zimnerzeczyMainImg} alt="strona-internetowa-zimnerzeczy" />
            <h2 className="project__main__header">
                Podział na kategorie
            </h2>
            <p className="project__main__text">
                Umożliwiliśmy autorowi bloga podział wpisów na kategorie, które domyślnie wyświetlają się na stronie głównej. Użytkownik odwiedzający stronę może bez problemu przeskakiwać z jednej kategorii do drugiej, co pomaga mu zlokalizować wpisy, które trafiają w jego zainteresowania.
            </p>
            <h2 className="project__main__header marginTop20">
                WordPress idealny dla blogów
            </h2>
            <p className="project__main__text">
                WordPress to platforma, która świetnie nada się do obsługi blogów. Panel administracyjny pozwala na intuicyjne i sprawne zarządzanie treściami na stronie, włączając w to dodawanie nowych wpisów na bloga.
            </p>
        </main>
        <ProjectGallery gallery={zimnerzeczy.gallery}
                        siteLink={zimnerzeczy.siteLink}
                        siteButtonLabel={zimnerzeczy.siteButtonLabel}
                        galleryHeader={zimnerzeczy.galleryHeader} />
    </main>
};

export default PortfolioZimnerzeczy;
