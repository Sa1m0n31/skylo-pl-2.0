import React from 'react'
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import websitesImg from '../static/img/strony-internetowe-lipno.svg'
import SingleStrength from "../components/SingleStrength";
import rocket from '../static/img/rocket.svg'
import responsive from '../static/img/responsywne-strony-internetowe.svg'
import design from '../static/img/web-design2.svg'
import websites from "../data/websites";
import points from '../static/img/points.svg'
import SmallPortfolio from "../components/SmallPortfolio";
import ShortContactForm from "../components/ShortContactForm";
import vector from "../static/img/vector-4.png";

const Websites = () => {
    const strengths = [
        { title: 'Ponadprzeciętna szybkość', icon: rocket, text: 'Wykorzystanie nowoczesnych środowisk programistycznych pozwala na tworzenie ponadprzeciętnie szybkich stron www.' },
        { title: 'Pełna responsywność', icon: responsive, text: 'Tworzone przez nas strony bez problemu dopasowują się do każdego rodzaju urządzenia i rozmiaru ekranu.' },
        { title: 'Unikalny design', icon: design, text: 'Nie korzystamy z szablonów. Każda strona powstaje poprzez indywidualne podejście i tworzenie projektu od zera.' }
    ]

    return <div className="container container--websites">
        <PageHeader currentPage={1} />
        <img className="backgroundImg backgroundImg--1" src={vector} alt="tlo" />
        <img className="backgroundImg backgroundImg--2" src={vector} alt="tlo" />
        <main className="page">
            <h1 className="heading">
                Strony internetowe
            </h1>
            <p className="text">
                Projektujemy strony internetowe, landing page, serwisy (np. informacyjne), fora, portale lub blogi. Do każdego projektu podchodzimy w pełni indywidualnie. Chcemy tworzyć unikalne realizacje, które pomogą Ci promować Twoją markę lub firmę i pozwolą Ci zarabiać w sieci. Dbamy o najwyższą jakość zarówno po stronie designu, jak i po stronie technicznej - stawiamy na przyjemne w odbiorze, zjawiskowe projekty zgodne z wszelkimi zasadami UX oraz aktualnymi trendami i programujemy je z wykorzystaniem wszystkich nowoczesnych technologii. Nasze strony www pomogą Ci osiągnąć Twoje cele.
            </p>
            <section className="flex websites__section">
                <article className="websites__section__content">
                    <h2 className="offer__heading">
                        Dlaczego firma lub marka powinna posiadać własną stronę www?
                    </h2>
                    <p className="text">
                        Własna strona internetowa oraz obecność marki czy firmy w sieci to must have dzisiejszych czasów! Posiadając własną stronę www wzbudzamy u potencjalnych odbiorców zaufanie, a także budujemy pozytywny i trwały wizerunek marki. Strona internetowa to prosty sposób na reklamę swoich produktów czy usług. Papierowe wizytówki są jeszcze na czasie, ale jeszcze ważniejsza jest wizytówka w sieci - a taką rolę może pełnić strona www.
                    </p>
                </article>
                <figure className="websites__imgWrapper">
                    <img className="websites__img btn__img" src={websitesImg} alt="strony-internetowe-lipno" />
                </figure>
            </section>
            <h2 className="offer__heading offer__heading--websites2">
                Co charakteryzuje nasze strony internetowe?
            </h2>
            <main className="strengths strengths--websites flex">
                {strengths.map((item, index) => {
                    return <SingleStrength title={item.title} icon={item.icon} text={item.text} key={index} />
                })}
            </main>
            <h2 className="offer__heading offer__heading--100">
                Role strony www - co znaczy witryna dla firmy lub marki?
            </h2>
            <section className="flex offer__websites__frames">
                {websites.frames.map((item, index) => {
                    return <section className="aboutUs__frame" key={index}>
                        <span className="aboutUs__frame__number">
                            <img className="abousUs__frame__img" src={item.icon} alt={item.title} />
                        </span>
                        <h3 className="aboutUs__frame__header">
                            {item.title}
                        </h3>
                        <p className="aboutUs__frame__text">
                            {item.text}
                        </p>
                    </section>
                })}
            </section>
            <h3 className="offer__heading offer__heading--80">
                Proces tworzenia strony internetowej dla Ciebie Droga do własnej witryny w 5 krokach
            </h3>
            <section className="offer__points">
                <img className="offer__points__img d-over-900" src={points} alt="wlasna-strona-internetowa" />
                <article className="offer__points__content">
                    <p className="offer__points__item">
                        <span className="red">1. Analiza Twoich celów i wizji</span> - naszą współpracę zaczynamy od przeanalizowania Twoich celów, a także poznania Twojej koncepcji dotyczącej designu strony. Chcemy stworzyć taki projekt, który jednocześnie będzie podobał się Tobie, klientom, ale także będzie spełniał wszystkie wymagane funkcje, zgodne z Twoimi celami oraz standardami UX/UI.
                    </p>
                    <p className="offer__points__item">
                        <span className="red">2. Przedstawienie makiety</span> - po ustaleniu wszystkich szczegółów i podpisaniu umowy, przystępujemy do przygotowania wstępnego projektu Twojej strony www. Makieta przedstawia zazwyczaj projekt strony głównej, zawierający układ treści, elementów graficznych, przyjętą kolorystykę.
                    </p>
                    <p className="offer__points__item">
                        <span className="red">3. Projekt</span> - jeśli zaakceptujesz wstępną propozycję wyglądu Twojej strony (makiety), przystępujemy do finalizacji projektu. Na tym etapie postępy pokazujemy Ci regularnie, a Ty cały czas masz możliwość reagowania na bieżące zmiany i nowe elementy w projekcie. Nie przystąpimy do programowania do momentu, aż projekt zostanie przez Ciebie zaakceptowany.
                    </p>
                    <p className="offer__points__item">
                        <span className="red">4. Programowanie</span> - jeśli przygotowany przez nas projekt spełnia Twoje oczekiwania, wówczas rozpoczynamy programowanie strony. Nie martw się, jeśli zmienisz zdanie co do jakiegoś elementu w projekcie, cały czas istnieje możliwość poprawy i zmiany.
                    </p>
                    <p className="offer__points__item">
                        <span className="red">5. Testowanie, uruchomienie domeny</span> - zbliżamy się do finalizacji Twojej wirtualnej wizytówki. Na tym etapie, po ukończeniu prac, przystępujemy do testowania funkcji i sprawdzania poprawności działania strony. Po ukończeniu testów i Twojej akceptacji przenosimy stronę na Twoją docelową domenę. Nie masz domeny? Nie martw się, pomożemy Ci na każdym etapie, włącznie z wykupieniem i uruchomieniem domeny, hostingu czy serwera.
                    </p>
                </article>
            </section>
            <SmallPortfolio type={0} />
            <ShortContactForm />
        </main>
        <Footer />
    </div>
}

export default Websites;
