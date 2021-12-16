import React, {useEffect, useRef, useState} from 'react'
import logo from '../static/img/skylopl-logo.png'
import arrowLeft from "../static/img/arrow-long-left.svg";
import heroData from "../data/hero";
import developerImg from "../static/img/aplikacje-webowe-torun.svg";
import phoneIcon from "../static/img/phone-menu.svg";
import mailIcon from "../static/img/mail-icon.svg";
import infoIcon from "../static/img/info-menu.svg";
import menuBtn from "../static/img/menu.svg";

const PageHeader = ({currentPage}) => {
    const [email, setEmail] = useState("");
    const [emailResult, setEmailResult] = useState(0);

    const menu = useRef(null);

    const isEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const openMenu = () => {
        menu.current.style.transform = "scaleX(1)";
        menu.current.style.opacity = "1";
        setTimeout(() => {
            Array.from(document.querySelectorAll(".menu *")).forEach((item) => {
                item.style.opacity = "1";
            });
        }, 400);
    }

    const closeMenu = () => {
        Array.from(document.querySelectorAll(".menu *")).forEach((item) => {
            item.style.opacity = "0";
        });
        setTimeout(() => {
            menu.current.style.transform = "scaleX(0)";
            menu.current.style.opacity = "0";
        }, 400);
    }

    const handleSubmit = () => {
        if(isEmail(email)) {
            setEmail("");
            setEmailResult(1);
        }
        else {
            setEmailResult(-1);
        }
    }

    useEffect(() => {
        if(emailResult === -1) {
            setTimeout(() => {
                setEmailResult(0);
            }, 2000);
        }
    }, [emailResult]);

    return <header className="pageHeader flex">
        <aside className="menu center hideScrollbar" ref={menu}>
            <button className="menu__back flex" onClick={() => { closeMenu(); }}>
                <img className="menu__back__img" src={arrowLeft} alt="wroc" />
                Wróć
            </button>

            <main className="menu__main">
                <h3 className="menu__header">
                    Nawigacja
                </h3>
                <section className="flex">
                    <menu className="menu__menu">
                        <ul className="menu__menu__list">
                            {heroData.menu.map((item, index) => {
                                return <li className="menu__menu__list__item" key={index}>
                                    <a className="menu__menu__list__link" href={item.link}>
                                        {item.name}
                                    </a>
                                </li>
                            })}
                        </ul>
                    </menu>
                    <figure className="menu__imgWrapper d-desktop">
                        <img className="btn__img" src={developerImg} alt="agencja-interaktywna-torun" />
                    </figure>
                </section>
            </main>
            <aside className="menu__bottom">
                <h3 className="menu__header">
                    Skontaktuj się
                </h3>
                <section className="flex">
                    <section className="menu__contact">
                        <a className="menu__contact__link" href="tel:+48697099402">
                            <img className="menu__contact__link__img" src={phoneIcon} alt="numer-telefonu" />
                            +48 697 099 402
                        </a>
                        <a className="menu__contact__link" href="mailto:kontakt@skylo.pl">
                            <img className="menu__contact__link__img" src={mailIcon} alt="adres-email" />
                            kontakt@skylo.pl
                        </a>
                        <span className="menu__contact__link d-desktop">
                            <img className="menu__contact__link__img" src={infoIcon} alt="informacje" />
                            Agencja Interaktywna Skylo.pl<br/>
                            ul. Kościuszki 34/19,<br/>
                            87-400 Golub-Dobrzyń<br/>
                            NIP: 5030084949<br/>
                            REGON: 387829738
                        </span>
                    </section>
                    <section className="menu__form">
                        <h3 className="menu__form__header">
                            Zostaw swojego maila - napiszemy do Ciebie!
                        </h3>
                        <label>
                            <input className="input input--menu"
                                   value={email}
                                   onChange={(e) => { setEmail(e.target.value); }}
                                   placeholder="Adres e-mail" />
                        </label>
                        {!emailResult ? <button className="menu__form__btn center" onClick={() => { handleSubmit(); }}>
                            Wyślij formularz
                        </button> : <span className="emailResult">
                            {emailResult === -1 ? "Wpisz poprawny adres e-mail" : "Dziękujemy! Skontaktujemy się z Tobą w ciągu 24h! W razie braku wiadomości, sprawdź folder spam."}
                        </span>}
                        <img className="menu__form__logo d-desktop" src={logo} alt="agencja-interaktywna-brodnica" />
                    </section>
                </section>
            </aside>
        </aside>

        <a className="pageHeader__logoWrapper" href="/">
            <img className="btn__img" src={logo} alt="agencja-interaktywna-skylo" />
        </a>
        <button className="button--menu d-mobile" onClick={() => { openMenu(); }}>
            <img className="btn__img" src={menuBtn} alt="menu" />
        </button>
        <menu className="pageHeader__menu d-desktop">
            <ul className="pageHeader__menu__list flex">
                <li className={currentPage !== 0 ? "pageHeader__menu__list__item" : "pageHeader__menu__list__item pageHeader__menu__list__item--current"}>
                    <a className="pageHeader__menu__list__link" href="/">
                        Home
                    </a>
                </li>
                <li className={currentPage !== 1 ? "pageHeader__menu__list__item" : "pageHeader__menu__list__item pageHeader__menu__list__item--current"}>
                    <a className="pageHeader__menu__list__link" href="/oferta">
                        Oferta
                    </a>
                </li>
                <li className={currentPage !== 2 ? "pageHeader__menu__list__item" : "pageHeader__menu__list__item pageHeader__menu__list__item--current"}>
                    <a className="pageHeader__menu__list__link" href="/o-nas">
                        O nas
                    </a>
                </li>
                <li className={currentPage !== 3 ? "pageHeader__menu__list__item" : "pageHeader__menu__list__item pageHeader__menu__list__item--current"}>
                    <a className="pageHeader__menu__list__link" href="/portfolio">
                        Portfolio
                    </a>
                </li>
                <li className={currentPage !== 4 ? "pageHeader__menu__list__item" : "pageHeader__menu__list__item pageHeader__menu__list__item--current"}>
                    <a className="pageHeader__menu__list__link" href="/kontakt">
                        Kontakt
                    </a>
                </li>
                {/*<li className={currentPage !== 5 ? "pageHeader__menu__list__item" : "pageHeader__menu__list__item pageHeader__menu__list__item--current"}>*/}
                {/*    <a className="pageHeader__menu__list__link" href="/blog">*/}
                {/*        Blog*/}
                {/*    </a>*/}
                {/*</li>*/}
            </ul>
        </menu>
    </header>
}

export default PageHeader;
