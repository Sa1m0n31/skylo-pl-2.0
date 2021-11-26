import React from 'react'
import SingleStrength from "./SingleStrength";
import icon1 from '../static/img/famous.svg'
import icon2 from '../static/img/skill.svg'
import icon3 from '../static/img/speedometer.svg'
import icon4 from '../static/img/PLN.svg'
import icon5 from '../static/img/speedometer.svg'
import icon6 from '../static/img/security.svg'

const Strengths = () => {
    const strengths = [
        { title: 'Indywidualne podejście', icon: icon1, text: 'Każdy nowy projekt to zupełnie czysta karta. Tworzymy od zera, a każdej realizacji nadajemy unikalny charakter.' },
        { title: 'Umiejętności', icon: icon2, text: 'Znamy się na swojej robocie. Wybierając naszą agencję stawiasz na zespół z wiedzą oraz umiejętnościami.' },
        { title: 'Wydajność', icon: icon3, text: 'Czas jest na wagę złota, dlatego zawsze tworzymy w oparciu o rozwiązania, które gwarantują maksymalną wydajność.' },
        { title: 'Cena', icon: icon4, text: 'Oferujemy bardzo konkurencyjne ceny, ponieważ zależy nam na maksymalnym dostosowaniu oferty do Twoich możliwości.' },
        { title: 'Czas realizacji', icon: icon5, text: 'Sprawnie i szybko realizujemy zlecone nam projekty. Czas realizacji zleceń to zdecydowanie nasz duży atut.' },
        { title: 'Bezpieczeństwo', icon: icon6, text: 'W obliczu wielu zagrożeń, jakie czekają na nas w Internecie, maksymalnie stawiamy na odpowiedni poziom zabezpieczeń.' },
    ]

    return <section className="section section--strengths">
        <h3 className="whiteHeader">
            To teraz kilka naszych zalet.
        </h3>
        <main className="strengths flex">
            {strengths.map((item, index) => {
                return <SingleStrength title={item.title} icon={item.icon} text={item.text} key={index} />
            })}
        </main>
    </section>
}

export default Strengths;
