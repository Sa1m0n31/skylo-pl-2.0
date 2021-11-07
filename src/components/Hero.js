import React from 'react'
import logo from '../static/img/skylopl-logo.png'
import menuBtn from '../static/img/menu.svg'
import facebookIcon from '../static/img/facebook.svg'
import instagramIcon from '../static/img/instagram.svg'

const Hero = () => {
    return <main className="hero">
        <main className="hero__content">
            <header className="hero__header flex">
                <a className="hero__header__logoWrapper" href="/">
                    <img className="btn__img hero__header__logo" src={logo} alt="agencja-interaktywna-skylo" />
                </a>

                <button className="button--menu">
                    <img className="btn__img" src={menuBtn} alt="menu" />
                </button>
            </header>

            <main className="hero__main">
                <h1 className="hero__main__header">
                    Nie bądź gwiazdą.
                </h1>
                <h2 className="hero__main__header">
                    Bądź całą galaktyką.
                </h2>
                <p className="hero__main__text">
                    Miliony gwiazd na niebie, ale tylko jedna galaktyka, w której istniejemy. Wyróżnij się spośród wielu. Stworzymy Twój unikalny wizerunek w sieci.
                </p>
                <a className="button button--hero center" href="#kontakt">
                    Darmowa wycena
                </a>
                <p className="hero__main__thin">
                    Projektujemy i wdrażamy strony www, sklepy internetowe, aplikacje webowe. Tworzymy także projekty graficzne. Wyróżnij się z tłumu i pokaż swoją markę w internecie. Stawiamy na oryginalne oraz indywidualne podejście i tworzymy unikalne projekty.
                </p>
            </main>

            <aside className="hero__socialMedia">
                <a className="hero__socialMedia__link" target="_blank" rel="noreferrer" href="">
                    <img className="btn__img" src={facebookIcon} alt="skylo-facebook" />
                </a>
                <a className="hero__socialMedia__link" target="_blank" rel="noreferrer" href="">
                    <img className="btn__img" src={instagramIcon} alt="skylo-instagram" />
                </a>
            </aside>

            <aside className="hero__bottom">
                <span className="hero__bottom__span">
                    Poznaj nas
                </span>
            </aside>
        </main>
    </main>
}

export default Hero;
