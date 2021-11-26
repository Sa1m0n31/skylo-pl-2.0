import React from 'react'
import vector2 from '../static/img/vector-2.png'
import OfferSectionContent from "./OfferSectionContent";

const OfferSection = () => {
    return <section className="section section--offer">
        <img className="backgroundImg backgroundImg--2" src={vector2} alt="tlo" />
        <h2 className="mainHeader">
            Poznaj naszą ofertę - co robimy?
        </h2>
        <p className="text">
            Jesteśmy agencją interaktywną. Tworzymy strony www, sklepy internetowe oraz platformy sprzedażowe. Projektujemy grafikę reklamową, projekty UX/UI (aplikacje, systemy, programy), tworzymy aplikacje webowe. Pomagamy w zakresie utrzymania domeny, hostingu oraz serwera. Z nami nie martwisz się o nic - skupiasz się na tym, aby Twoja strona zarabiała, my zadbamy o całą resztę - od aspektów wizualnych po zaplecze techniczne.
        </p>
        <OfferSectionContent />
    </section>
}

export default OfferSection;
