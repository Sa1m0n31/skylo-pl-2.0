import React from 'react';
import ProjectHeader from "../components/ProjectHeader";
import { czp } from "../data/projects";
import czpMainImg from '../static/projects/czp/CZP.png'
import ProjectGallery from "../components/ProjectGallery";

const PortfolioCZP = () => {
    return <main className="project">
        <ProjectHeader title={czp.title}
                       subtitle={czp.subtitle}
                       logo={czp.logo} />
        <main className="project__main">
            <h2 className="project__main__header">
                Firmowa strona internetowa
            </h2>
            <p className="project__main__text">
                Klientowi zależało na prostej stronie, która będzie służyła jako "wizytówka online". Znajdziemy na niej wszystkie informacje o profilu działalności firmy CZP Premium, a także dane kontaktowe. Stworzona przez nas strona w prosty sposób doprowadzi użytkownika do kontaktu z firmą i przedstawi mu wszystkie najważniejsze informacje o firmie naszego Klienta.
            </p>
            <img className="project__main__img" src={czpMainImg} alt="strona-internetowa-czp-premium" />
            <h2 className="project__main__header">
                Intuicyjne i proste zarządzanie witryną
            </h2>
            <p className="project__main__text">
                Do stworzenia tej strony internetowej wykorzystaliśmy platformę WordPress. Pozwala ona na proste i szybkie zarządzanie treścią na stronie. Klient w każdej chwili może od ręki zmienić zawartość, zaktualizować ofertę czy dodać nowe zdjęcia na swoją witrynę.
            </p>
        </main>
        <ProjectGallery gallery={czp.gallery}
                        siteLink={czp.siteLink}
                        siteButtonLabel={czp.siteButtonLabel}
                        galleryHeader={czp.galleryHeader} />
    </main>
};

export default PortfolioCZP;
