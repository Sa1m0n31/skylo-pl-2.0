import React from 'react';
import ProjectHeader from "../components/ProjectHeader";
import { draft } from "../data/projects";
import mainImg from '../static/projects/draft4u/draft.png'
import ProjectGallery from "../components/ProjectGallery";

const PortfolioDraft = () => {
    return <main className="project">
        <ProjectHeader title={draft.title}
                       subtitle={draft.subtitle}
                       logo={draft.logo} />
        <main className="project__main">
            <h2 className="project__main__header">
                Dedykowana aplikacja skrojona pod potrzeby Klienta
            </h2>
            <p className="project__main__text">
                Naszym zleceniem było zaprogramowanie od zera aplikacji webowej na podstawie dostarczonego projektu graficznego. Po ustaleniu zakresu prac przystąpiliśmy do programowania aplikacji. We współpracy z Arturem Izdebskim (r2graphic.pl), który odpowiadał za graficzną stronę projektu, udało nam się stworzyć rozbudowany portal dla siatkarzy szukających klubów oraz właścicieli zespołów, szukających wzmocnień do swojego składu.
            </p>
            <img className="project__main__img" src={mainImg} alt="strona-internetowa-draft4u" />
            <h2 className="project__main__header">
                Show yourself!
            </h2>
            <p className="project__main__text">
                Aplikacja wyposażona jest w system rejestracji zawodników, którzy mogą zakładać konta zarówno lokalnie, jak i za pomocą swoich kont na Facebooku i Google. Po pomyślnym przejściu procesu rejestracji użytkownicy mają możliwość uzupełnienia swojego profilu o niezbędne informacje (pozycja na boisku, wzrost, waga, zasięg w ataku, wyskok dosiężny i inne) oraz dodawania filmików, na których prezentują swoje umiejętności.
            </p>
            <p className="project__main__text marginTop20">
                Po rejestracji użytkownik otrzymuje 14 dni darmowego okresu próbnego, po tym czasie konieczne jest opłacenie abonamentu, dlatego aplikacja wyposażona została w system płatności obsługujący przelewy internetowe oraz płatności BLIK.
            </p>
            <h2 className="project__main__header marginTop20">
                Rewolucja dla właścicieli klubów
            </h2>
            <p className="project__main__text">
                Portal Draft4U to prawdziwa rewolucja nie tylko dla zawodników dostępnych na siatkarskim rynku transferowym, ale także włascicieli klubów szukających nowych talentów do swojego zespołu. Stworzona przez nas aplikacja umożliwia nie tylko przeglądanie profili zawodników i ich siatkarskich popisów zamieszczonych na filmikach, ale także porównywanie zawodników w specjalnej porównywarce, tworzenie wirtualnych składów oraz kontaktowanie się z siatkarzami bezpośrednio za pomocą czatu w aplikacji.
            </p>
            <h2 className="project__main__header marginTop20">
                Najwyższa wydajność i najnowsze technologie
            </h2>
            <p className="project__main__text">
                Stworzenie tego typu projektu wymagało od nas nie tylko wielu godzin wytężonej pracy, ale też doboru odpowiednich technologii, zapewniających maksymalną wydajność aplikacji. Frontend projektu wykonany został w bibliotece React, natomiast na backendzie rządziła inna technologia z ekosystemu javascript - NodeJS. Jeśli chodzi o system bazodanowy, wybór padł tu na relacyjną bazę danych PostgreSQL.
            </p>
            <h2 className="project__main__header marginTop20">
                Od pomysłu, przez wdrożenie, aż do dalszego rozwoju
            </h2>
            <p className="project__main__text">
                Prace nad aplikacją rozpoczęły się we wrześniu 2021r., natomiast pierwsi użytkownicy mogli zarejestrować się w serwisie 1 stycznia 2022r. Przez długi proces programowania, testowania i wdrażania aplikacji towrzyszyliśmy naszemu Klientowi, doradzając w często niełatwych kwestiach takich jak dobór najbardziej optymalnych rozwiązań pod kątem UX czy wybór odpowiedniego dla tego typu projektu pakietu hostingowego. Od stycznia 2022r. kontynuujemy udaną współpracę z naszym Klientem, pracując nad dalszym rozwojem oraz utrzymaniem aplikacji.
            </p>
        </main>
        <ProjectGallery gallery={draft.gallery}
                        siteLink={draft.siteLink}
                        siteButtonLabel={draft.siteButtonLabel}
                        galleryHeader={draft.galleryHeader} />
    </main>
};

export default PortfolioDraft;
