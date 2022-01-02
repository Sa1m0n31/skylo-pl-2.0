import React from 'react';
import ProjectHeader from "../components/ProjectHeader";
import { bednarscy } from "../data/projects";
import ProjectGallery from "../components/ProjectGallery";
import bednarscyHeader from '../static/projects/bednarscy/bednarscy-header.png'

const PortfolioBednarscy = () => {
    return <main className="project">
        <ProjectHeader title={bednarscy.title}
                       subtitle={bednarscy.subtitle}
                       logo={bednarscy.logo} />
        <main className="project__main">
            <h2 className="project__main__header">
                Funkcja informacyjna i sprzedażowa
            </h2>
            <p className="project__main__text">
                Witryna dla Witraże Bednarscy spełnia dwa zadania. Jest to zarówno miejsce, gdzie możemy poznać informacje, historię pracowni oraz zobaczyć portfolio, a także platforma sprzedażowa, w której Klient może sprzedawać swoje prace, np. rękodzieła, pamiątki czy ozdoby. Strona dostarczy odpowiednią ilość informacji potencjalnemu nabywcy, który będzie zainteresowany współpracą, a także pozwoli na zakup drobnych artykułów ze sklepu działającego przy pracowni.
            </p>
            <img className="project__main__img" src={bednarscyHeader} alt="strona-internetowa-bednarscy-premium" />
            <h2 className="project__main__header">
                Wykorzystanie nowoczesnych technologii
            </h2>
            <p className="project__main__text">
                Witryna została stworzona m.in. w środowisku Reacta, co, tak jak zresztą w innych naszych realizacjach, gwarantuje szybkość i wygodę obsługi. Strona oraz sklep wyposażone są w dwie wersje językowe - polską oraz angielską.
            </p>
            <h2 className="project__main__header marginTop20">
                Autorski CMS
            </h2>
            <p className="project__main__text">
                To kolejna realizacja, która została oparta na naszym autorskim CMS. Szybki, intuicyjny i do bólu prosty w obsłudze panel administracyjny umożliwia zarządzanie sklepem, a także edycję wszystkich treści.
            </p>

        </main>
        <ProjectGallery gallery={bednarscy.gallery}
                        siteLink={bednarscy.siteLink}
                        siteButtonLabel={bednarscy.siteButtonLabel}
                        galleryHeader={bednarscy.galleryHeader} />
    </main>
};

export default PortfolioBednarscy;
