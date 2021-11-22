import React, { useState } from 'react'
import testimonials from "../data/testimonials";
import quote from '../static/img/quote.svg'

const Testimonials = () => {
    const [page, setPage] = useState(0);

    return <section className="section section--testimonials">
        <span className="beforeMainHeader">
                Referencje
        </span>
        <h2 className="mainHeader">
            A tak o nas mówią...
        </h2>
        <main className="testimonials flex">
            {testimonials[page].map((item, index) => {
                return <section className="testimonials__item" key={index}>
                    <img className="testimonials__background" src={quote} alt="opinie-klientow" />
                    <img className="testimonials__logo" src={item.img} alt={item.caption} />
                    <p className="testimonials__text">
                        {item.text}
                    </p>
                    <span className="testimonials__caption">
                        {item.caption}
                    </span>
                </section>
            })}
        </main>
        <aside className="testimonials__bottom center">
            {testimonials.map((item, index) => {
                return <button className={index === page ? "testimonials__btn testimonials__btn--selected" : "testimonials__btn"}
                               key={index}
                               onClick={() => { setPage(index); }}>

                </button>
            })}
        </aside>
    </section>
}

export default Testimonials;
