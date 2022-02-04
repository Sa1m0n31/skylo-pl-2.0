import React, {useEffect, useState} from 'react'
import img from '../static/img/short-form.svg'
import axios from "axios";

const ShortContactForm = ({header}) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [agree, setAgree] = useState(false);
    const [error, setError] = useState("");
    const [result, setResult] = useState(0);
    const [loader, setLoader] = useState(false);

    const errorAnimation = () => {
        document.querySelector(".shortForm").classList.add("animation");
        setTimeout(() => {
            document.querySelector(".shortForm").classList.remove("animation");
        }, 2000);
    }

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
        axios.post('https://skylo.pl/send-form', {
            name, email, phoneNumber: phone, msg: null, category: null
        })
            .then((res) => {
                setResult(res?.data?.result);
                setLoader(false);
            });
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

    return <section className="section section--shortContactForm">
        <h2 className="offer__heading">
            {header ? header : "Darmowa wycena w 24h"}
        </h2>
        <section className="flex">
            <form className="shortForm">
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
                <label className="label--agreement">
                    <button type="button" className={agree ? "contact__left__button contact__left__button--agree" : "contact__left__button"} onClick={(e) => { e.preventDefault(); setAgree(!agree); }}>

                    </button>
                    <span>
                        Zapoznałem się i akceptuję postanowienia <a href="/polityka-prywatnosci" className="label--agreement__link">Polityki prywatności</a>.
                    </span>
                </label>
                <button className="contact__submitBtn" onClick={(e) => { handleSubmit(e); }}>
                    Wyślij formularz
                </button>
                {error && !loader ? <span className="error">
                {error}
            </span> : ""}
                {result ? <span className="result">
                Formularz został wysłany. Skontaktujemy się z Tobą w ciągu 24 godzin. W razie braku wiadomości w skrzynce pocztowej, prosimy sprawdzić folder "spam".
            </span> : ""}
            {loader ? <div className="loader"></div> : ""}
            </form>
            <figure className="section--shortContactForm__imgWrapper">
                <img className="btn__img" src={img} alt="sklepy-internetowe-brodnica" />
            </figure>
        </section>
    </section>
}

export default ShortContactForm;
