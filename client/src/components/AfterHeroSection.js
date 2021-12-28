import React from 'react'
import vector from '../static/img/vector-1.png'
import picture from '../static/img/agencja-interaktywna-torun.png'

const AfterHeroSection = () => {
    return <section className="section section--afterHero flex">
        <span id="o-nas"></span>
        <img className="backgroundImg backgroundImg--1" src={vector} alt="tlo" />
        <article className="afterHero__left">
            <span className="beforeMainHeader">
                Tworzymy pod Ciebie
            </span>
            <h2 className="mainHeader">
                Twój unikalny <span className="d-mobile"><br/></span> wizerunek w sieci
            </h2>
            <p className="text" data-aos="fade-in">
                Swój artystyczny zmysł i kreatywność łączymy z wysokim poziomem wiedzy oraz umiejętności w zakresie programowania. Takie połączenie gwarantuje najwyższą jakość obsługi oraz niepowtarzalność realizowanych projektów. Nie lubimy robienia czegoś "na jedno kopyto" - serio.
            </p>
            <figure className="afterHero__right d-mobile" data-aos="fade-in">
                <img className="btn__img afterHero__img" src={picture} alt="agencja-interaktywna-torun" />
            </figure>
            <p className="text" data-aos="fade-in">
                Chcemy, aby każda realizacja była na swój sposób wyjątkowa - nadajemy jej niepowtarzalny charakter oraz staramy się stworzyć unikalny design, dodatkowo chcemy uwzględnić wizję oraz życzenia Klienta. Wzajemnie zrozumienie to klucz do owocnej współpracy.
            </p>
            <a className="button button--hero center" href="/oferta">
                <svg>
                    <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                </svg>
                Zobacz, co potrafimy
            </a>
        </article>

        <figure className="afterHero__right d-desktop" data-aos="fade-in">
            <img className="btn__img afterHero__img" src={picture} alt="agencja-interaktywna-torun" />
        </figure>
    </section>
}

export default AfterHeroSection;
