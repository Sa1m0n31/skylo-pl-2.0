import React from 'react'
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import painterIcon from '../static/img/painter.svg'
import OfferSectionContent from "../components/OfferSectionContent";
import ShortContactForm from "../components/ShortContactForm";

const Offer = () => {
    return <div className="container container--offer">
        <PageHeader currentPage={1} />
        <main className="page">
            <h1 className="heading">
                Zapoznaj się z naszą ofertą
            </h1>
            <p className="text">
                Jesteśmy agencją interaktywną. Tworzymy zgrany zespół, który kompleksowo podchodzi do każdej realizacji. Dzięki posiadanym umiejętnościom i wiedzy świadczymy usługi na najwyższym poziomie zarówno ze strony designu jak i programowania. Pomożemy Ci zaistnieć w sieci - stworzymy Twój wymarzony sklep online, zaprojektujemy świetną wizytówkę w postaci strony www lub przygotujemy wysokiej jakości oprawę graficzną do Twoich celów marketingowych. Projektujemy także aplikacje, interfejsy, programy, tworzymy aplikacje webowe, dodatkowo wspieramy w zakresie IT - pomożemy Ci wybrać odpowiedni hosting, utrzymać serwer czy zarządzać stroną.
            </p>
            <OfferSectionContent />
        </main>
        <section className="section">
            <h2 className="offer__heading">
                W myśl zasady "Wyróżnij się albo giń!" Pozwól nam tworzyć dla Ciebie.
            </h2>
            <article className="flex offer__firstSection">
                <p className="text text--offer">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                </p>
                <figure className="offer__img">
                    <img className="btn__img" src={painterIcon} alt="agencja-interaktywna-golub-dobrzyn" />
                </figure>
            </article>
        </section>
        <section className="section section--offerSecond">
            <h2 className="offer__heading offer__heading--second">
                Etapy współpracy
            </h2>
            <p className="etape etape--1">
                <span className="red">1. Przedstawienie celów i wizji</span> - na sam początek chcemy poznać Twoje potrzeby. W końcu tworzymy dla Ciebie, a więc zależy nam na Twojej satysfakcji. Zbieramy niezbędne informacje i analizujemy je, aby finalnie przedstawić ofertę w pełni dopasowaną do Twoich potrzeb i wymagań. Chcemy poznać Ciebie, a także Twoją markę i pomysł, by następnie w oparciu o te informacje przygotować dla Ciebie idealnie dopasowaną propozycję.
            </p>
            <p className="etape etape--2">
                <span className="red">2. Propozycja projektu, wizualizacje</span> - kiedy poznamy już Twoje wszystkie potrzeby i wymagania, nadchodzi pora na to, aby przygotować Ci wizualizację Twojego produktu. Przygotowujemy wizualizację, która pokazuje jak finalnie może wyglądać Twój projekt. Jeśli przedstawiona pierwotna propozycja Ci się nie spodoba, to wówczas wprowadzamy wszystkie Twoje poprawki. Nie przystąpimy do dalszych etapów dopóki projekt w stu procentach nie spełni Twoich oczekiwań.
            </p>
            <p className="etape etape--3">
                <span className="red">3. Wdrożenie projektu</span> - jeśli przedstawiona przez nas makieta strony w pełni Cię zadowala, to ruszamy z wdrażaniem projektu. Zaplecze techniczne przygotowujemy z wykorzystaniem najnowszych technologii, używając zaawansowanych środowisk programistycznych. Projekt może zostać również przekazany dalej, jeśli chcesz sam zająć się tematem kodowania strony.
            </p>
            <p className="etape etape--4">
                <span className="red">4. Finalizacja, testowanie, uruchomienie</span> - po ostatecznej akceptacji przechodzimy do finalizacji tworzonego dla Ciebie projektu. To miejsce na ostatnie ewentualne poprawki oraz testowanie i sprawdzenie wszystkich funkcjonalności i elementów.
            </p>
        </section>
        <ShortContactForm />
        <Footer />
    </div>
}

export default Offer;
