import React, {useState} from 'react'
import image from '../static/img/kontakt.svg'
import checkIcon from '../static/img/check.png'

const Contact = () => {
    const typesOfProjects = ['strona www', 'sklep internetowy', 'aplikacja webowa', 'projekt graficzny', 'projekt UX/UI', 'inny temat'];

    const [typeOfProject, setTypeOfProject] = useState(-1);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [msg, setMsg] = useState("");
    const [agree, setAgree] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return <section className="section section--contact">
            <span className="beforeMainHeader">
                Skontaktuj się z nami
            </span>
            <h2 className="mainHeader">
                Przekonaliśmy Cię? Napisz do nas!
            </h2>
           <main className="contact__main flex">
               <section className="contact__left">
                   <p className="contact__p">
                       Wypełnij poniższy formularz i zostaw do siebie kontakt - my oddzwonimy, lub odpiszemy w przeciągu maksymalnie 24 godzin. Zaznacz usługę, którą jesteś zainteresowany. Możesz też opisać swoją sprawę lub zadań nam pytanie.
                   </p>
                   <h3 className="contact__header">
                       Najpierw zaznacz, czego potrzebujesz
                   </h3>
                   <section className="contact__left__buttons">
                       {typesOfProjects.map((item, index) => {
                           return <label className={index === typeOfProject ? "contact__left__label contact__left__label--selected" : "contact__left__label"} key={index}>
                               <button className="contact__left__button center" onClick={() => { setTypeOfProject(index); }}></button>
                               {item}
                           </label>
                       })}
                   </section>
               </section>
               <figure className="contact__right">
                   <img className="contact__img" src={image} alt="agencja-interaktywna-brodnica" />
               </figure>
           </main>
        <h3 className="contact__header">
            Wypełnij poniższy formularz - odezwiemy się do Ciebie
        </h3>
        <form className="contact__form" onSubmit={(e) => { handleSubmit(e); }}>
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
                <textarea className="input textarea"
                          name="msg"
                          value={msg}
                          onChange={(e) => { setMsg(e.target.value); }}
                          placeholder="Dodatkowe pytania, sugestie, uwagi (opcjonalnie)" />
            </label>
            <label className="label--agreement">
                <button className={agree ? "contact__left__button contact__left__button--agree" : "contact__left__button"} onClick={() => { setAgree(!agree); }}>

                </button>
                Zapoznałem się i akceptuję postanowienia <a href="" className="label--agreement__link">Polityki prywatności</a>.
            </label>
            <button className="contact__submitBtn">
                Wyślij formularz
            </button>
        </form>
    </section>
}

export default Contact;
