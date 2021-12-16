import React from 'react';
import ProjectHeader from "../components/ProjectHeader";
import { flightmedia } from "../data/projects";
import flightmediaMainImg from '../static/projects/flightmedia/FLIGHT.png'
import ProjectGallery from "../components/ProjectGallery";

const PortfolioFlightmedia = () => {
    return <main className="project">
        <ProjectHeader title={flightmedia.title}
                       subtitle={flightmedia.subtitle}
                       logo={flightmedia.logo} />
        <main className="project__main">
            <h2 className="project__main__header">
                Strona internetowa typu portfolio
            </h2>
            <p className="project__main__text">
                Strona internetowa stworzona dla Flightmedia pełni rolę portfolio. W jednym miejscu ukazaliśmy momenty i obrazy uchwycone przez naszego Klienta. Strona internetowa z portfolio to prosty sposób, by pokazać swoje możliwości.
            </p>
            <img className="project__main__img" src={flightmediaMainImg} alt="strona-internetowa-flightmedia-premium" />
            <h2 className="project__main__header">
                Intuicyjne i proste zarządzanie witryną
            </h2>
            <p className="project__main__text">
                Do stworzenia tej strony internetowej wykorzystaliśmy platformę WordPress. Pozwala ona na proste i szybkie zarządzanie treścią na stronie. Klient w każdej chwili może od ręki zmienić zawartość, zaktualizować ofertę czy dodać nowe zdjęcia na swoją witrynę.
            </p>
        </main>
        <ProjectGallery gallery={flightmedia.gallery}
                        siteLink={flightmedia.siteLink}
                        siteButtonLabel={flightmedia.siteButtonLabel}
                        galleryHeader={flightmedia.galleryHeader} />
    </main>
};

export default PortfolioFlightmedia;
