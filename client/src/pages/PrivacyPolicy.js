import React from 'react'
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import ShortContactForm from "../components/ShortContactForm";
import mailIcon from '../static/img/mail-red.svg'
import phoneIcon from '../static/img/phone-red.svg'
import vector from '../static/img/vector-4.png'

const PrivacyPolicy = () => {
    return <div className="container container--contact">
        <img className="backgroundImg backgroundImg--1" src={vector} alt="tlo" />
        <PageHeader />
        <main className="page page--policy">
            <h1 className="heading">
                Polityka prywatności
            </h1>
            <p className="text">
                Administratorem Twoich danych osobowych jest Agencja Interaktywna Skylo Bartosz Jasiński, NIP:
                5030084949, REGON: 387829738. Dane osobowe przetwarzane są w celu: marketingu własnych produktów lub usług oraz w celu zawarcia umowy. Posiadasz prawo do cofnięcia udzielonej zgody w każdym czasie. Dane osobowe będą przetwarzane (w tym przechowywane) przez okres wynikający z przepisów prawa (np. ordynacja podatkowa, ustawa o rachunkowości) lub do czasu zrealizowania umów. Twoje dane osobowe nie będą przekazywane do państw trzecich. Podanie danych osobowych jest dobrowolne, chyba że przepisy prawa stanowią inaczej. Podstawą prawną dla przetwarzania danych osobowych jest art. 6 ust. 1 lit. a-c i f RODO.
            </p>
        </main>
        <Footer />
    </div>
}

export default PrivacyPolicy;
