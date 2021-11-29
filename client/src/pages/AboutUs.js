import React from 'react'
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import vector from "../static/img/vector-4.png";
import earth from '../static/img/earth.png'
import unicorn from '../static/img/skylo-o-nas.svg'
import aboutUs from "../data/aboutUs";
import instagramIcon from '../static/img/instagram-white.svg'
import facebookIcon from '../static/img/facebook-white.svg'
import footer from "../data/footer";

const AboutUs = () => {
    return <div className="container container--aboutUs">
        <PageHeader currentPage={2} />
        <img className="backgroundImg backgroundImg--1" src={vector} alt="tlo" />
        <img className="backgroundImg backgroundImg--2" src={vector} alt="tlo" />
        <main className="page">
            <h1 className="heading">
                O nas
            </h1>
            <p className="text">
                Jesteśmy stosunkowo młodą agencją. Na rynku pojawiliśmy się oficjalnie w styczniu 2021 roku. Założenie Skylo.pl to efekt wspólnych pasji, celów i przekonań. Nasze hobby i sposób na spędzanie wolnego czasu chcieliśmy zamienić w misję. Stworzyliśmy agencję, aby działać, aby pracować, aby się rozwijać. Poprzez nasz rozwój, chcemy także pomagać rozwijać się Klientom, którzy nam zaufali lub dopiero zaufają. Zapraszamy wszystkich do podążania wspólną ścieżką, aby osiągnąć cele.
            </p>
            <h2 className="offer__heading offer__heading--aboutUs">
                Nasza filozofia i podejście
            </h2>
            <p className="text">
                Swoim podejściem do realizowanych projektów oraz pracy chcemy pomagać Klientom w osiąganiu biznesowych i osobistych celów. Stawiamy na unikalność. Lubimy to słowo, ale to jest nasz prawdziwy cel. Lubimy być oryginalni i niepowtarzalni. Każda marka powinna mieć swój wyjątkowy i wyrazisty charakter, a my chcemy pomagać innym w osiągnięciu tego celu. Każdy nasz projekt dostosowujemy wizualnie jak i funkcjonalnie do Twoich założeń. Chcemy dobrze poznać Ciebie i Twoją markę, aby potem stworzyć jej unikalny image.
            </p>
            <img className="aboutUs__img" src={earth} alt="strony-internetowe-brodnica" />
            <h2 className="heading aboutUs__header">
                Skylo.pl w liczbach
            </h2>
            <section className="aboutUs__frames flex">
                {aboutUs.frames.map((item, index) => {
                    return <section className="aboutUs__frame" key={index}>
                        <span className="aboutUs__frame__number">
                            {item.number}
                        </span>
                        <h3 className="aboutUs__frame__header">
                            {item.title}
                        </h3>
                        <p className="aboutUs__frame__text">
                            {item.text}
                        </p>
                    </section>
                })}
            </section>
            <h3 className="offer__heading">
                Misja
            </h3>
            <p className="text">
                Zawsze na maksa zależy nam na satysfakcji Klienta. Wiele jest skutecznych sposób promocji, a jednym z nich bez wątpienia jest tzw. marketing szeptany. To, jakie wrażenie zostawimy po sobie u Klienta, może rzutować na przyszłe współprace. Tworzymy dla Ciebie i "pod Ciebie" - dlatego zawsze chcemy połączyć jednocześnie funkcjonalność, dobry design oraz chcemy do tego dorzucić Twoją satysfakcję. Naszą misją jest kreowanie unikalnych wizerunków. Jeszcze jakiś czas temu każdy powtarzał, że Internet to przyszłość. Jesteśmy aktualnie w miejscu, gdzie ta przyszłość już nastała. Obecność w Internecie generuje mnóstwo profitów i korzyści dla marki, a my chcemy Ci pomóc w tym, abyś mógł w sieci pokazać się z jak najlepszej strony. Naszym celem jest jak największe wsparcie biznesów w postępującym procesie cyfryzacji. Wspólnie chcemy rozwijać Twoją markę i pomagać Ci osiągać Twoje cele.
            </p>
            <h3 className="offer__heading">
                Zaplecze
            </h3>
            <p className="text">
                Stawiamy na wysoką jakość obsługi, a co za tym idzie - na wykorzystywanie wysokiej jakości zaplecza, czyli oprogramowania i materiałów. Korzystamy z licencjonowanego pakietu Adobe (m.in. Adobe XD czy Adobe Photoshop), a także licencjonowanych programów do kodowania - m.in. WebStorm i PHPStorm. Do naszych realizacji wykorzystujemy również objęte licencją zdjęcia i materiały graficzne. Takie zaplecze umożliwia proponowanie klientom najlepszych rozwiązań, a także usprawnia nam pracę, co przekłada się z kolei na czas realizacji projektów.
            </p>
            <section className="aboutUs__bottom flex">
                <main className="aboutUs__bottom__content">
                    <h3 className="offer__heading">
                        Zobacz, co potrafimy
                    </h3>
                    <p className="text">
                        Zajrzyj do portfolio i sprawdź nasze realizacje.
                    </p>
                    <a className="button button--hero button--aboutUs center" href="/portfolio">
                        Odwiedź portfolio
                    </a>
                    <h3 className="offer__heading offer__heading--aboutUsLastHeading">
                        Odwiedź nasze profile w social media
                    </h3>
                    <p className="text">
                        Bądź na bieżąco z naszymi publikacjami i realizacjami na Facebooku lub Instagramie.
                    </p>
                    <section className="flex aboutUs__buttons">
                        <a className="button button--hero button--aboutUs center" href={footer.others.facebook} target="_blank">
                            <img className="aboutUs__buttons__img" src={facebookIcon} alt="facebook" />
                            Skylo.pl na Facebooku
                        </a>
                        <a className="button button--hero button--aboutUs center" href={footer.others.instagram} target="_blank">
                            <img className="aboutUs__buttons__img" src={instagramIcon} alt="instagram" />
                            @skylopl na Instagramie
                        </a>
                    </section>
                </main>
                <figure className="aboutUs__bottom__imgWrapper">
                    <img className="aboutUs__bottom__img" src={unicorn} alt="strony-internetowe-brodnica" />
                </figure>
            </section>
        </main>
        <Footer />
    </div>
}

export default AboutUs;
