import React from 'react'
import img from '../static/img/agencja-interaktywna-bydgoszcz.png'

const AboutUsSection = () => {
    return <section className="section section--aboutUs flex">
       <article className="aboutUs__left">
            <span className="beforeMainHeader">
            Poznaj nas
        </span>
           <h2 className="mainHeader">
               Z kim masz do czynienia?
           </h2>
           <p className="text" data-aos="fade-in">
               Nasza misja w Skylo.pl jako agencja interaktywna to nie tylko praca i droga zawodowa, ale także pasja i sposób na życie - tworzymy i programujemy z pasji, a naszym Klientom chcemy dostarczać realizacje na najwyższym poziomie. Nasza agencja to połączenie tego, co w tworzeniu jest najważniejsze - kreatywność, zaangażowanie, wiedza oraz doświadczenie. Chcemy pomóc Ci rozwijać Twój biznes lub markę, mając na uwadze, że Internet to nie tylko przyszłość, ale i teraźniejszość!
           </p>
           <figure className="aboutUs__right d-mobile" data-aos="fade-in">
               <img className="btn__img" src={img} alt="agencja-interaktywna-bydgoszcz" />
           </figure>
           <a className="button button--hero center" data-aos="fade-in" href="/o-nas">
               <svg>
                   <rect x="0" y="0" fill="none" width="100%" height="100%"/>
               </svg>
               Dowiedz się więcej
           </a>
       </article>

       <figure className="aboutUs__right d-desktop" data-aos="fade-in">
           <img className="btn__img" src={img} alt="agencja-interaktywna-bydgoszcz" />
       </figure>
    </section>
}

export default AboutUsSection;
