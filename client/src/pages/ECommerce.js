import React from 'react'
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import cms from '../static/img/cms.svg'
import shake from '../static/img/shake.svg'
import report from '../static/img/report.svg'
import ecommerceImg from '../static/img/tworzenie-sklepow-internetowych-brodnica.svg'
import vector from '../static/img/vector-3.png'
import SingleStrength from "../components/SingleStrength";
import ecommerce from "../data/ecommerce";
import points from '../static/img/points-6.svg'
import SmallPortfolio from "../components/SmallPortfolio";
import ShortContactForm from "../components/ShortContactForm";

const ECommerce = () => {
    const strengths = [
        { title: 'Prosty w obsłudze CMS', icon: cms, text: 'Intuicyjne i przyjemne zarządzanie sklepem to domena oferowanego przez nas systemu CMS.' },
        { title: 'User-friendly', icon: shake, text: 'Nie chcemy, by Twój klient musiał poświęcić zbyt wiele czasu, aby sfinalizować zakup. Stawiamy na prostotę.' },
        { title: 'Wsparcie sprzedaży', icon: report, text: 'Integracja z płatnościami, API firm kurierskich i dodanie potrzebnych do łatwej sprzedaży funkcjonalności.' }
    ]

    return <div className="container container--websites container--ecommerce">
        <PageHeader currentPage={1} />
        <img className="backgroundImg backgroundImg--1" src={vector} alt="tlo" />
        <img className="backgroundImg backgroundImg--2" src={vector} alt="tlo" />
        <main className="page">
            <h1 className="heading">
                Sklepy internetowe
            </h1>
            <p className="text">
                Tworzymy sklepy online w oparciu o nowoczesne i proste w obsłudze systemy CMS. Dysponujemy autorskim systemem CMS by Skylo.pl, a także realizujemy sklepy z wykorzystaniem takich CMS jak np. WooCommerce. Stawiamy na w pełni autorskie i indywidualne projekty sklepów, z uwzględnieniem potrzeb i wizji klienta. Nasz autorski CMS charakteryzuje się większą wydajnością niż inne gotowe systemy, a także jest całkowicie rozwojowy - po odpowiednich rozmowach istnieje możliwość dodania funkcjonalności do panelu, których akurat potrzebujesz. Nasze sklepy charakteryzuje również prostota UX. Stworzymy Ci sklep internetowy, który pozwoli Ci zarabiać w sieci.
            </p>
            <section className="flex websites__section">
                <article className="websites__section__content">
                    <h2 className="offer__heading">
                        Dlaczego warto postawić na sprzedaż online?
                    </h2>
                    <p className="text">
                        Robienie zakupów nigdy nie było chyba prostsze dzięki temu, że swoje ulubione produkty możemy kupić za pomocą kilku kliknięć. Aby udostępnić Klientom taką możliwość, potrzebne jest odpowiednie narzędzie - z pomocą przychodzi własny sklep internetowy. Sprzedaż internetowa to prosty sposób na dotarcie do szerokiego grona odbiorców. Dodatkowo taki sklep jest czynny cały czas - Klient może dokonać zakupu o której tylko chce i gdzie tylko chce!
                    </p>
                </article>
                <figure className="websites__imgWrapper">
                    <img className="websites__img btn__img" src={ecommerceImg} alt="strony-internetowe-lipno" />
                </figure>
            </section>
            <h2 className="offer__heading offer__heading--websites2">
                Co charakteryzuje nasze sklepy internetowe?
            </h2>
            <main className="strengths strengths--websites flex">
                {strengths.map((item, index) => {
                    return <SingleStrength title={item.title} icon={item.icon} text={item.text} key={index} />
                })}
            </main>
            <h2 className="offer__heading offer__heading--100">
                Zalety sklepów internetowych
            </h2>
            <section className="flex offer__websites__frames">
                {ecommerce.frames.map((item, index) => {
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
                Wspólna droga do Twojego sklepu internetowego. Pomożemy Ci zacząć sprzedawać w sieci
            </h3>
            <section className="offer__points">
                <img className="offer__points__img d-over-900" src={points} alt="wlasna-strona-internetowa" />
                <article className="offer__points__content">
                    <p className="offer__points__item">
                        <span className="red">1. Przedstawienie oczekiwań, analiza</span> - na początku, jak zawsze, chcemy poznać to, czego oczekujesz od sklepu oraz jaką masz wizję i plany. Na tym etapie wspólnie ustalimy, co będzie najlepsze dla Ciebie oraz Twoich celów marketingowych i sprzedażowych.
                    </p>
                    <p className="offer__points__item">
                        <span className="red">2. Planowanie struktury i wyglądu sklepu</span> - czas na przygotowanie odpowiedniej koncepcji Twojego sklepu - planujemy zarówno wygląd (design), jak i funkcjonalności i całą strukturę. Dedykowane opcje, konfiguratory, intuicyjne wybory - to wszystko ustalamy na tym etapie.
                    </p>
                    <p className="offer__points__item">
                        <span className="red">3. Przedstawienie makiety</span> - mając już ustalone informacje z powyższych etapów, możemy przystąpić do przedstawienia wstępnego projektu strony (makiety), zawierającego układ i położenie elementów i treści oraz kolorystykę.
                    </p>
                    <p className="offer__points__item">
                        <span className="red">4. Projekt</span> - jak w przypadku tworzenia strony internetowej, po otrzymaniu od Ciebie zielonego światła przystępujemy do finalizacji całkowitego projektu sklepu - od strony głównej, po wszystkie podstrony, np. te prezentujące produkty. Do następnego etapu, czyli programowania, przejdziemy dopiero wtedy, kiedy zaakceptujesz projekt.
                    </p>
                    <p className="offer__points__item">
                        <span className="red">5. Programowanie i integracja</span> - jeśli projekt graficzny sklepu odpowiada Twoim wymaganiom, rozpoczynamy kodowanie sklepu. Oprócz wdrażania, należy również dokonać integracji i połączenia z zewnętrznymi API i systemem płatności internetowych. Otrzymasz nasze wsparcie w całym procesie integracji.
                    </p>
                    <p className="offer__points__item">
                        <span className="red">6. Testowanie, transfer na docelową domenę</span> - na sam koniec musimy jeszcze przetestować wszystkie funkcjonalności sklepu. Dopiero kiedy testy zakończą się sukcesem, przenosimy Twój sklep online na docelową domenę. Jeśli na tym etapie będziesz miał kłopoty - nie martw się, pomożemy Ci wybrać odpowiednią domenę i hosting, żeby później przenieść tam sklep.
                    </p>
                </article>
            </section>
            <SmallPortfolio type={1} />
            <ShortContactForm />
        </main>
        <Footer />
    </div>
}

export default ECommerce;
