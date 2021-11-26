import React from 'react'
import footer from '../data/footer'
import mailIcon from '../static/img/mail-icon.svg'
import phoneIcon from '../static/img/phone-icon.svg'

const Footer = () => {
    return <footer className="section section--footer">
        <section className="flex">
            <section className="footer__col">
                <h4 className="footer__header">
                    Nasza oferta
                </h4>
                <ul className="footer__list">
                    {footer.offer.map((item, index) => {
                        return <li className="footer__list__item" key={index}>
                            <a className="footer__list__link" href={item.link}>
                                {item.name}
                            </a>
                        </li>
                    })}
                </ul>
            </section>
            <section className="footer__col">
                <h4 className="footer__header">
                    Informacje
                </h4>
                <ul className="footer__list">
                    {footer.info.map((item, index) => {
                        return <li className="footer__list__item" key={index}>
                            <a className="footer__list__link" href={item.link}>
                                {item.name}
                            </a>
                        </li>
                    })}
                </ul>
            </section>
            <section className="footer__col">
                <h4 className="footer__header">
                    Usługi lokalne
                </h4>
                <ul className="footer__list">
                    {footer.local.map((item, index) => {
                        return <li className="footer__list__item" key={index}>
                            <a className="footer__list__link" href={item.link}>
                                {item.name}
                            </a>
                        </li>
                    })}
                </ul>
            </section>
            <section className="footer__col">
                <h4 className="footer__header">
                    Dane firmy
                </h4>
                <span className="footer__address">
                    <span>Agencja Interaktywna Skylo.pl</span>
                    <span>NIP: 5030084949</span>
                    <span>ul. Kościuszki 34/19</span>
                    <span>87-400 Golub-Dobrzyń</span>
                </span>
                <a className="footer__link" href="tel:+48697099402">
                    <img className="footer__link__img" src={phoneIcon} alt="numer-telefonu" />
                    697 099 402
                </a>
                <a className="footer__link" href="mailto:kontakt@skylo.pl">
                    <img className="footer__link__img" src={mailIcon} alt="adres-email" />
                    kontakt@skylo.pl
                </a>
            </section>
        </section>
        <aside className="footer__bottom flex">
            <h6 className="footer__bottom__header">
                &copy; { new Date().getFullYear() } by Skylo.pl
            </h6>
            <span className="footer__bottom__socialMedia flex">
                Skylo.pl w social media:
                <a className="footer__bottom__link" href={footer.others.facebook}>
                    Facebook
                </a>
                <a className="footer__bottom__link" href={footer.others.instagram}>
                    Instagram
                </a>
            </span>
        </aside>
    </footer>
}

export default Footer;
