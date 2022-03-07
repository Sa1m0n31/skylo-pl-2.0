import React from 'react';
import ProjectHeader from "../components/ProjectHeader";
import { bolingier } from "../data/projects";
import bolingierMainImg from '../static/projects/bolingier/glowna.png'
import ProjectGallery from "../components/ProjectGallery";

const PortfolioBolingier = () => {
    return <main className="project">
        <ProjectHeader title={bolingier.title}
                       subtitle={bolingier.subtitle}
                       logo={bolingier.logo} />
        <main className="project__main">
            <h2 className="project__main__header">
                Sklep internetowy
            </h2>
            <p className="project__main__text">
                Wykonaliśmy sklep internetowy dla marki Bolingier. Jest on zbudowany w oparciu o silnik WooCommerce i pozwala na podstawowe zarządzanie asortymentem oraz treścią na stronie. Sklep posiada dwie wersje językowe (polską i angielską) oraz zintegrowany jest z systemem płatności PayPal, co umożliwia Klientowi sprzedaż produktów poza granicami Polski.
            </p>
            <img className="project__main__img" src={bolingierMainImg} alt="strona-internetowa-bolingier" />
            <h2 className="project__main__header">
                Sklep na platformie WooCommerce
            </h2>
            <p className="project__main__text">
                Sklep internetowy Bolingier.com powstał z wykorzystaniem platformy WordPress, a konkretniej - WooCommerce. Jest to gotowe rozwiązanie dedykowane dla małych i średnich sklepów. Zawiera wszystkie podstawowe funkcjonalności, które pozwalają na prowadzenie i zarządzanie sklepem i stroną (asortyment, zamówienia, treści).
            </p>
        </main>
        <ProjectGallery gallery={bolingier.gallery}
                        siteLink={bolingier.siteLink}
                        siteButtonLabel={bolingier.siteButtonLabel}
                        galleryHeader={bolingier.galleryHeader} />
    </main>
};

export default PortfolioBolingier;
