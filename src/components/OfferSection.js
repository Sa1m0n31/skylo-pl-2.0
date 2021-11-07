import React from 'react'
import example from '../static/img/computer.png'
import OfferItem from "./OfferItem";
import vector2 from '../static/img/vector-2.png'

const OfferSection = () => {
    const offerItems = [
        {
            icon: example,
            header: "Strony internetowe",
            text: "Tworzymy responsywne strony internetowe. Dostosujemy projekt do Twoich wymagań, nawiążemy do gotowego wizerunku Twojej marki albo stworzymy go od zera.",
            link: "/strony-internetowe"
        },
        {
            icon: example,
            header: "Strony internetowe",
            text: "Tworzymy responsywne strony internetowe. Dostosujemy projekt do Twoich wymagań, nawiążemy do gotowego wizerunku Twojej marki albo stworzymy go od zera.",
            link: "/strony-internetowe"
        },
        {
            icon: example,
            header: "Strony internetowe",
            text: "Tworzymy responsywne strony internetowe. Dostosujemy projekt do Twoich wymagań, nawiążemy do gotowego wizerunku Twojej marki albo stworzymy go od zera.",
            link: "/strony-internetowe"
        },
        {
            icon: example,
            header: "Strony internetowe",
            text: "Tworzymy responsywne strony internetowe. Dostosujemy projekt do Twoich wymagań, nawiążemy do gotowego wizerunku Twojej marki albo stworzymy go od zera.",
            link: "/strony-internetowe"
        },
        {
            icon: example,
            header: "Strony internetowe",
            text: "Tworzymy responsywne strony internetowe. Dostosujemy projekt do Twoich wymagań, nawiążemy do gotowego wizerunku Twojej marki albo stworzymy go od zera.",
            link: "/strony-internetowe"
        },
        {
            icon: example,
            header: "Strony internetowe",
            text: "Tworzymy responsywne strony internetowe. Dostosujemy projekt do Twoich wymagań, nawiążemy do gotowego wizerunku Twojej marki albo stworzymy go od zera.",
            link: "/strony-internetowe"
        },
    ]

    return <section className="section section--offer">
        <img className="backgroundImg backgroundImg--2" src={vector2} alt="tlo" />
        <h2 className="mainHeader">
            Poznaj naszą ofertę - co robimy?
        </h2>
        <p className="text">
            Jesteśmy agencją interaktywną. Tworzymy strony www, sklepy internetowe oraz platformy sprzedażowe. Projektujemy grafikę reklamową, projekty UX/UI (aplikacje, systemy, programy), tworzymy aplikacje webowe. Pomagamy w zakresie utrzymania domeny, hostingu oraz serwera. Z nami nie martwisz się o nic - skupiasz się na tym, aby Twoja strona zarabiała, my zadbamy o całą resztę - od aspektów wizualnych po zaplecze techniczne.
        </p>
        <main className="offer__main">
            {offerItems.map((item, index) => {
                return <OfferItem item={item} key={index} />
            })}
        </main>
    </section>
}

export default OfferSection;
