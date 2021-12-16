import React from 'react';
import ProjectHeader from "../components/ProjectHeader";
import { brunchbox } from "../data/projects";
import brunchboxMainImg from '../static/projects/brunchbox/Brunch.png'
import ProjectGallery from "../components/ProjectGallery";
import points from "../static/img/points-4.svg";

const PortfolioBrunchbox = () => {
    return <main className="project">
        <ProjectHeader title={brunchbox.title}
                       subtitle={brunchbox.subtitle}
                       logo={brunchbox.logo} />
        <main className="project__main">
            <h2 className="project__main__header">
                Projekt dostosowany do wymagań Klienta
            </h2>
            <p className="project__main__text">
                Projekt całej platformy stworzyliśmy w oparciu o specyficzne wymagania naszego Klienta. Klimat całej szaty graficznej miał obracać się w klimatach eleganckich, premium, i jednocześnie miał być to prosty, przyjemny dla oka design. Połączyliśmy przede wszystkim dwa kolory - czarny i biały, postawiliśmy na proste w użytkowaniu rozwiązania. Owocem naszych prac jest projekt platformy Brunch Box.
            </p>
            <img className="project__main__img" src={brunchboxMainImg} alt="strona-internetowa-brunchbox-premium" />
            <h2 className="project__main__header marginTop20">
                Customowe rozwiązania dla usprawnienia sprzedaży
            </h2>
            <p className="project__main__text">
                Naszemu Klientowi zależało na dostosowaniu panelu i funkcjonalności dla zamawiających, aby usprawnić sprzedaż z uwagi na jej specyfikę. Do naszego autorskiego CMS wprowadziliśmy kilka dodatkowych funkcjonalności..
            </p>
            <h2 className="project__main__header marginTop20">
                Dedykowane opcje w sklepie i w panelu
            </h2>
            <p className="project__main__text">
                Zaprojektowana i stworzona przez nas platforma to dedykowana realizacja, która zawiera funkcjonalności i opcje stworzone i dostosowanie specjalnie dla Klienta. Stworzone przez nas funkcje i dostosowania panelu są skrojone pod specjalizację i typ działalności Klienta i wpływają na usprawnienie jego pracy. Poniżej kilka opcji, które stworzyliśmy:
            </p>
            <section className="offer__points offer__points--brunchbox">
                <img className="offer__points__img d-over-900" src={points} alt="wlasna-strona-internetowa" />
                <article className="offer__points__content">
                    <p className="offer__points__item">
                        <span className="red">Cena dostawy w zależności od odległości</span> - administrator ma możliwość dostosowania przedziałów cenowych i odległościowych, co przełoży się na finalną cenę za dostawę, która będzie zależna od odległości przesyłki na terenie Warszawy..
                    </p>
                    <p className="offer__points__item">
                        <span className="red">Wybór godzin i daty zamówienia</span> - stworzyliśmy opcję wyboru daty i konkretnej godziny, w której zamówienie ma zostać zrealizowane. Administrator ma możliwość wybrać godziny oraz dni wyłączone z dostawy. Ten system możesz przetestować składając zamówienie na BrunchBox.pl.
                    </p>
                    <p className="offer__points__item">
                        <span className="red">Customowa edycja produktu</span> - administrator ma do dyspozycji rozbudowany panel edycji produktu. Zawarte są tam opcje wybierania alergenów, rozmiarów, rodzajów (a także przypisywania różnych cen w zależności od wyboru). Istnieje także możliwość dodawania osobnych opisów i przypisania osobnych zdjęć dla wybranych opcji.
                    </p>
                    <p className="offer__points__item">
                        <span className="red">Angielska wersja językowa </span> - wychodząc na przeciw Klientom obcojęzycznym, dodaliśmy angielską wersję językową strony.
                    </p>
                </article>
            </section>
            <h2 className="project__main__header marginTop20">
                Szybkie i intyicyjne działanie
            </h2>
            <p className="project__main__text">
                Sklep został stworzony z wykorzystaniem m.in. Reacta, co pozwala na uzyskanie ponadprzeciętnej szybkości. Dodatkowo postaraliśmy się o przyjemną w odbiorze i użytkowaniu warstwę UX, która pozwala na intuicyjne działania - zarówno ze strony użytkownika (zamawiającego), jak i administratora przy zarządzaniu i edycji treści.
            </p>
        </main>
        <ProjectGallery gallery={brunchbox.gallery}
                        siteLink={brunchbox.siteLink}
                        siteButtonLabel={brunchbox.siteButtonLabel}
                        galleryHeader={brunchbox.galleryHeader} />
    </main>
};

export default PortfolioBrunchbox;
