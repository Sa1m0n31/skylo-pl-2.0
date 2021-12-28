import React from 'react'
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import ShortContactForm from "../components/ShortContactForm";
import mailIcon from '../static/img/mail-red.svg'
import phoneIcon from '../static/img/phone-red.svg'
import vector from '../static/img/vector-4.png'

const Contact = () => {
    return <div className="container container--contact">
        <img className="backgroundImg backgroundImg--1" src={vector} alt="tlo" />
        <PageHeader currentPage={4} />
        <main className="page">
            <h1 className="heading">
                Kontakt
            </h1>
            <p className="text">
                Jeśli masz jakieś pytania, chcesz omówić współpracę - zapraszamy do kontaktu! Jesteśmy dostępni dla Ciebie 7 dni w tygodniu, przez cały rok.
            </p>
            <section className="contact__flex flex">
                <a className="contactPage__link" href="tel:+48697099402">
                    <img className="contactPage__link__img" src={phoneIcon} alt="telefon" />
                    697 099 402
                </a>
                <a className="contactPage__link" href="tel:+48600179174">
                    <img className="contactPage__link__img" src={phoneIcon} alt="telefon" />
                    600 179 174
                </a>
                <a className="contactPage__link" href="mailto:kontakt@skylo.pl">
                    <img className="contactPage__link__img" src={mailIcon} alt="telefon" />
                    kontakt@skylo.pl
                </a>
            </section>
        </main>
        <ShortContactForm header="Możesz również skorzystać z formularza" />
        <aside className="contact__bottomHeader">
            <h3>
                Lub, jeśli wolisz, możesz skontaktować się z nami za pomocą czatu online na stronie!
            </h3>
        </aside>
        <Footer />
    </div>
}

export default Contact;
