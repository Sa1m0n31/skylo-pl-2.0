import React, {useEffect, useRef, useState} from 'react'
import image from '../static/img/kontakt.svg'
import arrowDown from '../static/img/arrow-down.svg'
import axios from "axios";

const Contact = () => {
    const typesOfProjects = ['strona www', 'sklep internetowy', 'aplikacja webowa', 'projekt graficzny', 'projekt UX/UI', 'inny temat'];

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [msg, setMsg] = useState("");
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
            name, email, phoneNumber: phone, msg, category: categories
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
            setMsg("");
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

    return <section className="section section--contact">

        <div className="modal modal--form" ref={modal} onClick={() => { closeCategoriesPopup(); }}>
            <div className="modal--form__inner">
                {typesOfProjects.map((item, index) => {
                    return <label className={allProjects[index] ? "contact__left__label contact__left__label--selected" : "contact__left__label"} onClick={() => { toggleProject(index, true); closeCategoriesPopup(); }}>
                        <button className="contact__left__button center"></button>
                        {item}
                    </label>
                })}
            </div>
        </div>

        <span className="beforeMainHeader">
                Skontaktuj się z nami
            </span>
            <h2 className="mainHeader">
                Przekonaliśmy Cię?<span className="d-mobile"><br/></span> Napisz do nas!
            </h2>
           <main className="contact__main flex" data-aos="fade-in">
               <section className="contact__left">
                   <p className="contact__p">
                       Wypełnij poniższy formularz i zostaw do siebie kontakt - my oddzwonimy, lub odpiszemy w przeciągu maksymalnie 24 godzin. Zaznacz usługę, którą jesteś zainteresowany. Możesz też opisać swoją sprawę lub zadać nam pytanie.
                   </p>
                   <h3 className="contact__header">
                       Najpierw zaznacz, czego potrzebujesz
                   </h3>
                   <section className="contact__left__buttons d-desktop">
                       {typesOfProjects.map((item, index) => {
                           return <label className={allProjects[index] ? "contact__left__label contact__left__label--selected" : "contact__left__label"} key={index}>
                               <button className="contact__left__button center" onClick={() => { toggleProject(index); }}></button>
                               {item}
                           </label>
                       })}
                   </section>
                   <section className="contact__left__buttons d-mobile" onClick={() => { openCategoriesPopup(); }}>
                       <label className="contact__left__label contact__left__label--selected">
                           <button className="contact__left__button center"></button>
                           {getCurrentProject()}
                       </label>
                       <img className="contact__left__label__arrow" src={arrowDown} alt="rozwin" />
                   </section>
               </section>
               <figure className="contact__right d-1200">
                   <img className="contact__img" src={image} alt="agencja-interaktywna-brodnica" />
               </figure>
           </main>
        <h3 className="contact__header">
            Wypełnij poniższy formularz - odezwiemy się do Ciebie
        </h3>
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
                <textarea className="input textarea"
                          name="msg"
                          value={msg}
                          onChange={(e) => { setMsg(e.target.value); }}
                          placeholder="Dodatkowe pytania, sugestie, uwagi (opcjonalnie)" />
            </label>
            <label className="label--agreement">
                <button type="button" className={agree ? "contact__left__button contact__left__button--agree" : "contact__left__button"} onClick={() => { setAgree(!agree); }}>

                </button>
                <span>
                    Zapoznałem się i akceptuję postanowienia <a href="/polityka-prywatnosci" className="label--agreement__link">Polityki prywatności</a>.
                </span>
            </label>
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
}

export default Contact;
