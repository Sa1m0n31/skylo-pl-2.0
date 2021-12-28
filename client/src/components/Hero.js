import React, {useEffect, useState, useRef} from 'react'
import logo from '../static/img/skylopl-logo.png'
import menuBtn from '../static/img/menu.svg'
import facebookIcon from '../static/img/facebook.svg'
import instagramIcon from '../static/img/instagram.svg'
import arrowLeft from '../static/img/arrow-long-left.svg'
import developerImg from '../static/img/aplikacje-webowe-torun.svg'
import heroData from '../data/hero'
import phoneIcon from '../static/img/phone-menu.svg'
import mailIcon from '../static/img/mail-icon.svg'
import infoIcon from '../static/img/info-menu.svg'
import smallLogo from '../static/img/skylo-small.png'
import axios from "axios";
import footer from "../data/footer";

const Hero = () => {
    const [email, setEmail] = useState("");
    const [emailResult, setEmailResult] = useState(0);
    const [loader, setLoader] = useState(false);

    const menu = useRef(null);
    const stickyHeader = useRef(null);

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

    useEffect(() => {
        window.addEventListener("scroll", (event) => {
            if(window.pageYOffset > window.innerHeight) {
                stickyHeader.current.style.opacity = '1';
                stickyHeader.current.style.zIndex = '99';
            }
            else {
                stickyHeader.current.style.opacity = '0';
                stickyHeader.current.style.zIndex = '-1';
            }
        });
    }, []);

    const handleSubmit = () => {
        if(isEmail(email)) {
            setLoader(true);
            axios.post('https://skylo.pl/send-email', {
                email
            })
                .then((res) => {
                    setLoader(false);
                    setEmail("");
                    setEmailResult(res?.data?.result);
                });
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
        else if(emailResult === 0) {
            document.querySelector(".menu__form__btn").style.opacity = "1";
        }
    }, [emailResult]);

    return <main className="hero">
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
                                   onKeyDown={(e) => { if(e.keyCode === 13) handleSubmit(); }}
                                   onChange={(e) => { setEmail(e.target.value); }}
                                   placeholder="Adres e-mail" />
                        </label>
                        {!emailResult ? (!loader ? <button className="menu__form__btn center" onClick={() => { handleSubmit(); }}>
                            Wyślij formularz
                        </button> : <div className="loader"></div>) : (!loader ? <span className="emailResult">
                            {emailResult === -1 ? "Wpisz poprawny adres e-mail" : "Dziękujemy! Skontaktujemy się z Tobą w ciągu 24h! W razie braku wiadomości, sprawdź folder spam."}
                        </span> : <div className="loader"></div>)}
                        <img className="menu__form__logo d-desktop" src={logo} alt="agencja-interaktywna-brodnica" />
                    </section>
                </section>
            </aside>
        </aside>

        <header className="stickyHeader" ref={stickyHeader}>
            <nav className="stickyHeader__main flex">
                <a className="stickyHeader__main__logo" href="/">
                    <img className="btn__img" src={smallLogo} alt="strony-internetowe-golub-dobrzyn" />
                </a>

                <button className="button--menu" onClick={() => { openMenu(); }}>
                    <img className="btn__img" src={menuBtn} alt="menu" />
                </button>
            </nav>
        </header>

        <main className="hero__content">
            <header className="hero__header flex">
                <a className="hero__header__logoWrapper" href="/">
                    <img className="btn__img hero__header__logo" src={logo} alt="agencja-interaktywna-skylo" />
                </a>

                <button className="button--menu" onClick={() => { openMenu(); }}>
                    <img className="btn__img" src={menuBtn} alt="menu" />
                </button>
            </header>

            <main className="hero__main">
                <h1 className="hero__main__header">
                    Proste rozwiązania,
                </h1>
                <h2 className="hero__main__header">
                    by osiągnąć sukces
                </h2>
                <p className="hero__main__text">
                    Jesteśmy agencją, która wspiera w osiąganiu celów. Stawiamy na profesjonalizm oraz wysoką jakość obsługi i dostosowujemy indywidualnie do każdego Klienta.
                </p>
                <a className="button button--hero center" href="/kontakt">
                    <svg>
                        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                    </svg>
                    Darmowa wycena
                </a>
                <p className="hero__main__thin">
                    Tworzymy realizacje skrojone do Twoich wymagań i budżetu. <span>Strony internetowe od 1500 zł, sklepy internetowe już od 2500 zł</span>. <span className="d-desktop">Tworzymy dedykowane aplikacje webowe, projekty graficzne i inne realizacje. Sprawdź nasze portfolio lub poproś o darmową wycenę.</span>
                </p>
            </main>

            <aside className="hero__socialMedia">
                <a className="hero__socialMedia__link" target="_blank" rel="noreferrer" href={footer.others.facebook}>
                    <img className="btn__img" src={facebookIcon} alt="skylo-facebook" />
                </a>
                <a className="hero__socialMedia__link" target="_blank" rel="noreferrer" href={footer.others.instagram}>
                    <img className="btn__img" src={instagramIcon} alt="skylo-instagram" />
                </a>
            </aside>

            <aside className="hero__bottom">
                <a className="hero__bottom__span" href="#o-nas">
                    Poznaj nas
                </a>
            </aside>
        </main>
    </main>
}

export default Hero;
