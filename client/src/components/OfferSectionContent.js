import React from 'react'
import OfferItem from "./OfferItem";
import itHelp from '../static/img/computer.png'
import www from '../static/img/strony-www.svg'
import eCommerce from '../static/img/sklepy-internetowe.svg'
import ux from '../static/img/ui.svg'
import webApps from '../static/img/aplikacje-webowe.svg'
import graphics from '../static/img/strony-internetowe.svg'

const OfferSectionContent = () => {
    const offerItems = [
        {
            icon: www,
            header: "Strony internetowe",
            text: "Tworzymy responsywne strony internetowe. Dostosujemy projekt do Twoich wymagań, nawiążemy do gotowego wizerunku Twojej marki albo stworzymy go od zera.",
            link: "/strony-internetowe"
        },
        {
            icon: eCommerce,
            header: "Sklepy internetowe",
            text: "Przygotujemy dla Ciebie platformę sprzedażową na dedykowanym systemie CMS z autorską szatą graficzną dostosowaną do Twoich potrzeb.",
            link: "/sklepy-internetowe"
        },
        {
            icon: ux,
            header: "Projekty aplikacji, intefejsów UX/UI",
            text: "Stawiamy na projekty, które nie tylko dobrze wyglądają, ale także są przyjazne dla użytkownika. Stawiamy na zaawansowane rozwiązania w jak najprostszej formie.",
            link: "/projekty-ux-i-ui"
        },
        {
            icon: graphics,
            header: "Projektowanie graficzne",
            text: "Projekty graficzne dla Internetu oraz do druku. Grafika social media, projekty wizytówek, banery, plakaty, ulotki dla Twojej firmy lub marki.",
            link: "/projektowanie-graficzne"
        },
        {
            icon: webApps,
            header: "Aplikacje webowe",
            text: "Tworzymy dedykowane aplikacje internetowe w oparciu o nowoczesne technologie i aktualne metody tworzenia.",
            link: "/aplikacje-webowe"
        },
        {
            icon: itHelp,
            header: "Obsługa IT",
            text: "Masz kłopot z serwerem, hostingiem, domeną lub administracją strony? Dobrze trafiłeś - z nami nie będziesz musiał się martwić o takie sprawy.",
            link: "/obsluga-it"
        }
    ]

    return <main className="offer__main">
        {offerItems.map((item, index) => {
            return <OfferItem item={item} key={index} />
        })}
    </main>
}

export default OfferSectionContent;
