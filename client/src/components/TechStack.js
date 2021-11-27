import React from 'react'
import icon1 from "../static/img/famous.svg";
import icon2 from "../static/img/skill.svg";
import icon3 from "../static/img/speedometer.svg";
import icon4 from "../static/img/PLN.svg";
import icon5 from "../static/img/speedometer.svg";
import icon6 from "../static/img/security.svg";
import vector from '../static/img/vector-3.png'
import SingleStrength from "./SingleStrength";

const TechStack = () => {
    const stack = [
        { title: 'Indywidualne podejście', icon: icon1, text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna' },
        { title: 'Umiejętności', icon: icon2, text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna' },
        { title: 'Wydajność', icon: icon3, text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna' },
        { title: 'Cena', icon: icon4, text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna' },
        { title: 'Czas realizacji', icon: icon5, text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna' },
        { title: 'Bezpieczeństwo', icon: icon6, text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna' },
    ]

    return <section className="section section--strengths">
        <h3 className="whiteHeader">
            W czym pracujemy?<span className="d-mobile"><br/></span> Poznaj nasze zaplecze
        </h3>
        <main className="strengths flex">
            {stack.map((item, index) => {
                return <SingleStrength title={item.title} icon={item.icon} text={item.text} key={index} />
            })}
        </main>
    </section>
}

export default TechStack;
