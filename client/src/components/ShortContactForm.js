import React, {useState} from 'react'
import img from '../static/img/short-form.svg'

const ShortContactForm = ({header}) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [agree, setAgree] = useState(false);

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
                    <button className={agree ? "contact__left__button contact__left__button--agree" : "contact__left__button"} onClick={(e) => { e.preventDefault(); setAgree(!agree); }}>

                    </button>
                    Zapoznałem się i akceptuję postanowienia <a href="" className="label--agreement__link">Polityki prywatności</a>.
                </label>
                <button className="contact__submitBtn">
                    Wyślij formularz
                </button>
            </form>
            <figure className="section--shortContactForm__imgWrapper">
                <img className="btn__img" src={img} alt="sklepy-internetowe-brodnica" />
            </figure>
        </section>
    </section>
}

export default ShortContactForm;
