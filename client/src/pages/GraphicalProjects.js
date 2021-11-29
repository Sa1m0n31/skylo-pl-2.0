import React from 'react'
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import vector from "../static/img/vector-3.png";
import SingleStrength from "../components/SingleStrength";
import SmallPortfolio from "../components/SmallPortfolio";
import ShortContactForm from "../components/ShortContactForm";
import graphicalProjects from "../data/graphicalProjects";

const GraphicalProjects = () => {
    return <div className="container container--websites container--graphicalProjects">
        <PageHeader currentPage={1} />
        <img className="backgroundImg backgroundImg--1" src={vector} alt="tlo" />
        <img className="backgroundImg backgroundImg--2" src={vector} alt="tlo" />
        <main className="page">
            <h1 className="heading">
                {graphicalProjects.firstHeader}
            </h1>
            <p className="text">
                {graphicalProjects.firstParagraph}
            </p>
            <section className="flex websites__section">
                <article className="websites__section__content">
                    <h2 className="offer__heading">
                        Pokaż się z dobrej strony.<br/>
                        Nadaj firmie unikalny charakter
                    </h2>
                    <p className="text">
                        {graphicalProjects.secondParagraph}
                    </p>
                </article>
                <figure className="websites__imgWrapper">
                    <img className="websites__img btn__img" src={graphicalProjects.mainImage} alt="projekty-ux-ui-lipno" />
                </figure>
            </section>
            <h2 className="offer__heading offer__heading--100">
                {graphicalProjects.thirdHeader}
            </h2>
            <section className="flex offer__websites__frames">
                {graphicalProjects.frames.map((item, index) => {
                    return <section className="aboutUs__frame" key={index}>
                        <span className="aboutUs__frame__number">
                            <img className="abousUs__frame__img" src={item.icon} alt={item.title} />
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

            <h2 className="offer__heading offer__heading--websites2">
                Co cechuje dobry (nasz) projekt?
            </h2>
            <main className="strengths strengths--websites flex">
                {graphicalProjects.strengths.map((item, index) => {
                    return <SingleStrength title={item.title} icon={item.icon} text={item.text} key={index} />
                })}
            </main>

            <section className="flex ux__section--2">
                <figure className="ux__imgWrapper d-over-900">
                    <img className="btn__img" src={graphicalProjects.secondImage} alt={graphicalProjects.fourthHeader} />
                </figure>
                <article className="ux__content">
                    <h3 className="offer__heading">
                        {graphicalProjects.fourthHeader}
                    </h3>
                    <figure className="ux__imgWrapper d-900">
                        <img className="btn__img" src={graphicalProjects.secondImage} alt={graphicalProjects.fourthHeader} />
                    </figure>
                    <section className="text">
                        <p>
                            {graphicalProjects.fourthParagraph[0]}
                        </p>
                        <p>
                            {graphicalProjects.fourthParagraph[1]}
                        </p>
                        <p>
                            {graphicalProjects.fourthParagraph[2]}
                        </p>
                    </section>
                </article>
            </section>
            <SmallPortfolio type={1} />
            <ShortContactForm />
        </main>
        <Footer />
    </div>
}

export default GraphicalProjects;
