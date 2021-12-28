import React from 'react'
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import ShortContactForm from "../components/ShortContactForm";
import mailIcon from '../static/img/mail-red.svg'
import phoneIcon from '../static/img/phone-red.svg'
import vector from '../static/img/vector-4.png'
import OfferSection from "../components/OfferSection";
import OfferSectionContent from "../components/OfferSectionContent";
import SmallPortfolio from "../components/SmallPortfolio";

const PageLocal = ({city, where}) => {
    return <div className="container container--contact">
        <img className="backgroundImg backgroundImg--1" src={vector} alt="tlo" />
        <PageHeader />
        <main className="page page--policy">
            <h1 className="heading">
                Tworzenie stron i sklepów internetowych {city}
            </h1>
            <p className="text">
                Działamy aktywnie na rynku lokalnym i oferujemy kompleksową usługę dla firm w miejscowości {city} i całym województwie kujawsko-pomorskim. Możemy umówić się na spotkanie, aby przybliżyć Twoje cele i oczekiwania, by później jak najlepiej dostosować dla Ciebie naszą ofertę. Oferujemy dojazd do klienta na terenie miasta Toruń i w okolicach. Wybierając agencję interaktywną Skylo.pl stawiasz na lokalną firmę, która gwarantuje jakość i rzetelność. Pomożemy Ci zaistnieć w sieci.
            </p>
            <h2 className="whiteHeader marginTop20">
                Zakres naszych usług - Agencja Interaktywna {city} i okolice
            </h2>
            <OfferSectionContent />
            <ShortContactForm header={`Umówmy się na spotkanie w ${where} lub zdalnie na rozmowę telefoniczną`} />
            <SmallPortfolio type={2} />
        </main>
        <Footer />
    </div>
}

export default PageLocal;
