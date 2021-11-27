import React from 'react'
import img from '../static/img/agencja-interaktywna-bydgoszcz.png'

const AboutUsSection = () => {
    return <section className="section section--aboutUs flex">
       <article className="aboutUs__left">
            <span className="beforeMainHeader">
            Poznaj nas
        </span>
           <h2 className="mainHeader">
               No właśnie... Kim Ty w ogóle jesteś?
           </h2>
           <p className="text">
               Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
           </p>
           <figure className="aboutUs__right d-mobile">
               <img className="btn__img" src={img} alt="agencja-interaktywna-bydgoszcz" />
           </figure>
           <a className="button button--aboutUs center" href="/o-nas">
               Dowiedz się więcej
           </a>
       </article>

       <figure className="aboutUs__right d-desktop">
           <img className="btn__img" src={img} alt="agencja-interaktywna-bydgoszcz" />
       </figure>
    </section>
}

export default AboutUsSection;
