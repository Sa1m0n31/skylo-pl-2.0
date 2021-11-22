import React from 'react'
import OfferItem from "./OfferItem";
import example from "../static/img/computer.png";

const OfferSectionContent = () => {
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

    return <main className="offer__main">
        {offerItems.map((item, index) => {
            return <OfferItem item={item} key={index} />
        })}
    </main>
}

export default OfferSectionContent;
