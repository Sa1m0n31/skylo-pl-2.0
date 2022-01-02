import React from 'react';
import ProjectHeader from "../components/ProjectHeader";
import { benmar } from "../data/projects";
import ProjectGallery from "../components/ProjectGallery";

const PortfolioBenmar = () => {
    return <main className="project">
        <ProjectHeader title={benmar.title}
                       subtitle={benmar.subtitle}
                       logo={benmar.logo} />
        <main className="project__main">
            <h2 className="project__main__header">
                Firmowa strona internetowa
            </h2>
            <p className="project__main__text">
                Klientowi zależało na prostej stronie, która będzie służyła jako "wizytówka online". Znajdziemy na niej wszystkie informacje o profilu działalności firmy Benmar, a także dane kontaktowe. Stworzona przez nas strona w prosty sposób doprowadzi użytkownika do kontaktu z firmą i przedstawi mu wszystkie najważniejsze informacje o firmie naszego Klienta.
            </p>
            <h2 className="project__main__header marginTop20">
                Intuicyjne i proste zarządzanie witryną
            </h2>
            <p className="project__main__text">
                Do stworzenia tej strony internetowej wykorzystaliśmy platformę WordPress. Pozwala ona na proste i szybkie zarządzanie treścią na stronie. Klient w każdej chwili może od ręki zmienić zawartość, zaktualizować ofertę czy dodać nowe zdjęcia na swoją witrynę.
            </p>
        </main>
        <ProjectGallery gallery={benmar.gallery}
                        siteLink={benmar.siteLink}
                        siteButtonLabel={benmar.siteButtonLabel}
                        galleryHeader={benmar.galleryHeader} />
    </main>
};

export default PortfolioBenmar;
