import React from 'react';
import ProjectHeader from "../components/ProjectHeader";
import { hideisland } from "../data/projects";
import hideislandMainImg from '../static/projects/hideisland/Hide.png'
import img2 from '../static/projects/hideisland/Panel-admin.png'
import ProjectGallery from "../components/ProjectGallery";

const PortfolioHideisland = () => {
    return <main className="project">
        <ProjectHeader title={hideisland.title}
                       subtitle={hideisland.subtitle}
                       logo={hideisland.logo} />
        <main className="project__main">
            <h2 className="project__main__header">
                Projekt spójny z charakterem marki
            </h2>
            <p className="project__main__text">
                HideIsland to nowopowstała marka odzieżowa, która od samego początku wybrała swój wyjątkowy styl i charakter. Tworząc nasz projekt, musieliśmy w pełni dostosować go do tego stylu i wizji naszego Klienta (twórcy HideIsland). Postawiliśmy na przejrzysty, prosty w obsłudze design, który obraca się w ciemnych barwach. co wskazuje na charakterystyczne cechy marki - nowoczesność czy wyjątkowość.
            </p>
            <img className="project__main__img" src={hideislandMainImg} alt="strona-internetowa-hideisland" />
            <h2 className="project__main__header">
                Dedykowany autorski CMS
            </h2>
            <p className="project__main__text">
                Sklep online marki HideIsland jest kolejną realizacją, którą stworzyliśmy w oparciu o nasz autorski CMS (Content Management System). Panel administracyjny jest dostosowany stylistycznie do designu strony oraz zawiera dedykowane funkcjonalności, które stworzyliśmy specjalnie dla naszego Klienta.
            </p>
            <h2 className="project__main__header marginTop20">
                Dedykowane opcje w sklepie i panelu
            </h2>
            <p className="project__main__text">
                Panel administracyjny sklepu HideIsland, oprócz podstawowych funkcjonalności, zawiera także kilka dedykowanych opcji, które dodaliśmy na życzenie Klienta. Mowa tu m.in. o rozbudowanej integracji z zewnętrznym API Paczkomatów InPost czy zaawansowanej edycji stanów magazynowych.
            </p>
            <img className="project__main__img" src={img2} alt="strona-internetowa-hideisland" />
        </main>
        <ProjectGallery gallery={hideisland.gallery}
                        siteLink={hideisland.siteLink}
                        siteButtonLabel={hideisland.siteButtonLabel}
                        galleryHeader={hideisland.galleryHeader} />
    </main>
};

export default PortfolioHideisland;
