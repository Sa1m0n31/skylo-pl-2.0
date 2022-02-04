import React, {useEffect, useRef, useState} from 'react';
import logo from '../static/img/skylopl-logo.png'
import redArrow from '../static/img/red-arrow.svg'
import rating from '../static/img/rating.svg'
import axios from "axios";
import arrowDown from "../static/img/arrow-down.svg";

const GoogleAds = () => {
    const typesOfProjects = ['strona www', 'sklep internetowy', 'aplikacja webowa', 'projekt graficzny', 'projekt UX/UI', 'inny temat'];

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [agree, setAgree] = useState(false);
    const [error, setError] = useState("");
    const [result, setResult] = useState(0);
    const [loader, setLoader] = useState(false);

    const [allProjects, setAllProjects] = useState([true, false, false, false, false, false]);

    const modal = useRef(null);

    const isEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const isPhoneNumber = (phoneNumber) => {
        const re = /\d+/g;
        return re.test(phoneNumber);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name) {
            setError("Wpisz swoję imię lub nazwę firmy");
            errorAnimation();
            return 0;
        }
        if(!isEmail(email) && !isPhoneNumber(phone)) {
            setError("Podaj poprawny adres e-mail lub numer telefonu");
            errorAnimation();
            return 0;
        }
        if(!agree) {
            setError("Zaakceptuj politykę prywatności");
            errorAnimation();
            return 0;
        }

        setLoader(true);
        const categories = allProjects.map((item, index) => {
            if(item) return typesOfProjects[index];
            else return '';
        }).toString();

        axios.post('https://skylo.pl/send-form', {
            name, email, phoneNumber: phone, msg: 'Kontakt z Google Ads', category: categories
        })
            .then((res) => {
                setLoader(false);
                setResult(res?.data?.result);
            });
    }

    const errorAnimation = () => {
        document.querySelector(".contact__form").classList.add("animation");
        setTimeout(() => {
            document.querySelector(".contact__form").classList.remove("animation");
        }, 2000);
    }

    useEffect(() => {
        if(result === 1) {
            setError("");
            setName("");
            setEmail("");
            setPhone("");
        }
    }, [result]);

    useEffect(() => {
        if(error) {
            setResult(0);
        }
    }, [error]);

    const openCategoriesPopup = () => {
        modal.current.style.display = 'block';
        modal.current.style.zIndex = '100';
        modal.current.style.opacity = '1';
    }

    const closeCategoriesPopup = () => {
        modal.current.style.display = 'none';
        modal.current.style.opacity = '0';
        setTimeout(() => {
            modal.current.style.zIndex = '-1';
        }, 400);
    }

    const toggleProject = (i, mobile = false) => {
        if(mobile) {
            setAllProjects(allProjects.map((item, index) => {
                return index === i;
            }));
        }
        else {
            setAllProjects(allProjects.map((item, index) => {
                if(index === i) return !item;
                else return item;
            }));
        }
    }

    const getCurrentProject = () => {
        if(allProjects?.length) {
            const index = allProjects.findIndex((item) => {
                return item;
            });
            if(index !== -1) return typesOfProjects[index];
            else return typesOfProjects[0];
        }
        else return '';
    }

    return <div className="google">
        <header className="google__header page flex">
            <a className="google__header__imgWrapper" href="/">
                <img className="btn__img" src={logo} alt="agencja-interaktywna-skylo" />
            </a>
            <h3 className="google__header__right d-desktop">
                Agencja Interaktywna
            </h3>
        </header>
        <main className="google__main page flex">
            <section className="google__left">
                <h2 className="google__h d-desktop">
                    Stworzymy dla Ciebie witrynę!<br/>
                    Zamów darmową wycenę.
                </h2>
                <h3 className="google__h__white d-desktop">
                    Nasza oferta obejmuje szeroki zakres projektowania i wdrażania kreacji internetowych.
                </h3>
                <h3 className="google__h__white d-mobile">
                    Zakres naszych usług:
                </h3>
                <ul className="google__list">
                    <li>
                        responsywne strony www
                    </li>
                    <li>
                        sklepy internetowe
                    </li>
                    <li>
                        aplikacje webowe
                    </li>
                    <li>
                        projekty graficzne, np. wizytówki, ulotki
                    </li>
                    <li>
                        projekty UX/UI przygotowane do programowania
                    </li>
                </ul>
                <h4 className="google__h4">
                    Przekonaj się, co potrafimy
                </h4>
                <h4 className="google__h4">
                    Sprawdź nasze <a target="_blank" href="/portfolio">portfolio
                    <img className="redArrow" src={redArrow} alt="portfolio" />
                </a>
                </h4>
                <section className="google__testimonials flex">
                    <section className="google__testimonials__item">
                        <h5 className="google__testimonials__item__header">
                            Krzysztof, Hotic Polska
                        </h5>
                        <img className="google__testimonials__item__stars" src={rating} alt="najwyzsza-jakosc" />
                        <p className="google__testimonials__item__text">
                            "Jestem bardzo zadowolony. Strona w 100% spełniła moje oczekiwania. Kontakt idealny, pełne zrozumienie tematu, wysoka kreatywność! Czas i cena wykonania projektu to dodatkowo bardzo duży plus. Z czystym sumieniem polecam."
                        </p>
                    </section>
                    <section className="google__testimonials__item">
                        <h5 className="google__testimonials__item__header">
                            Celina, Caloe.pl
                        </h5>
                        <img className="google__testimonials__item__stars" src={rating} alt="najwyzsza-jakosc" />
                        <p className="google__testimonials__item__text">
                            "Profesjonalna realizacja sklepu internetowego. Kompleksowa obsługa, szybkie odpowiedzi na wiadomości i wprowadzanie dodatkowych elementów. Polecam, lepiej trafić nie można!"
                        </p>
                    </section>
                </section>
                <aside className="google__more flex">
                    <h6>Więcej opinii</h6>
                    <a href="https://www.oferteo.pl/agencja-interaktywna-skylo/firma/4859962" target="_blank">
                        Oferteo
                    </a>
                    <a href="https://www.google.com/search?q=agencja+interaktywna+skylo&sxsrf=AOaemvIXTOxVirqKxQJzG1PizX6jJE9zxg%3A1642175746028&source=hp&ei=AZ3hYaXeO9mGjLsPhriR-AE&iflsig=ALs-wAMAAAAAYeGrEnWTHX0BovWRnu61VE2jVgK8bDOc&ved=0ahUKEwjl4v2vzbH1AhVZA2MBHQZcBB8Q4dUDCAc&uact=5&oq=agencja+interaktywna+skylo&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECc6BQgAEIAEOgsILhCABBDHARCvAToGCAAQFhAeUABY6xVgkRdoAHAAeAGAAfQCiAGfCpIBBzEuNS4xLjGYAQCgAQE&sclient=gws-wiz#lrd=0x471cdb52a9ea6221:0x2c2fa9a86aa3f03,1" target="_blank">
                        Google
                    </a>
                </aside>
            </section>
            <span className="google__divider">

            </span>
            <section className="google__right">
                <h2 className="google__h">
                    Zostaw kontakt do siebie!
                </h2>
                <p>
                    Zostaw swoje dane kontaktowe. My odezwiemy się do Ciebie najszybciej jak to możliwe. Konsultacja jak i wycena są darmowe i nie zobowiązują Cię do niczego. ;)
                </p>
                <form className="contact__form"
                      data-aos="fade-in"
                      onSubmit={(e) => { handleSubmit(e); }}>
                    <label className="label">
                        <input className="input"
                               name="name"
                               value={name}
                               onChange={(e) => { setName(e.target.value); }}
                               placeholder="Imię/Nazwa firmy" />
                    </label>
                    <label className="label">
                        <input className="input"
                               name="email"
                               value={email}
                               onChange={(e) => { setEmail(e.target.value); }}
                               placeholder="Adres e-mail" />
                    </label>
                    <label className="label">
                        <input className="input"
                               name="phone"
                               value={phone}
                               onChange={(e) => { setPhone(e.target.value); }}
                               placeholder="Numer telefonu" />
                    </label>
                    <label className="label">
                    </label>
                    <label className="label--agreement">
                        <button type="button" className={agree ? "contact__left__button contact__left__button--agree" : "contact__left__button"} onClick={() => { setAgree(!agree); }}>

                        </button>
                        <span>
                    Zapoznałem się i akceptuję postanowienia <a href="/polityka-prywatnosci" className="label--agreement__link">Polityki prywatności</a>.
                </span>
                    </label>

                    <h3 className="google__h__white google__h__white--form d-desktop">
                        Możesz zaznaczyć, czego dotyczy Twoja sprawa:
                    </h3>
                    <section className="contact__left__buttons d-desktop">
                        {typesOfProjects.map((item, index) => {
                            return <label className={allProjects[index] ? "contact__left__label contact__left__label--selected" : "contact__left__label"} key={index}>
                                <button type="button" className="contact__left__button center" onClick={() => { toggleProject(index); }}></button>
                                {item}
                            </label>
                        })}
                    </section>

                    {!loader && !result ? <button className="contact__submitBtn">
                        Wyślij formularz
                    </button> : (loader ? <div className="loader"></div> : "")}
                    {!loader ? <>
                        {error ? <span className="error">
                {error}
            </span> : ""}
                        {result ? <span className="result">
                Formularz został wysłany. Skontaktujemy się z Tobą w ciągu 24 godzin. W razie braku wiadomości w skrzynce pocztowej, prosimy sprawdzić folder "spam".
            </span> : ""}
                    </> : ""}
                </form>
            </section>
        </main>
    </div>
};

export default GoogleAds;