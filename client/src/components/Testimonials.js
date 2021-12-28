import React, {useEffect, useState} from 'react'
import testimonials from "../data/testimonials";
import quote from '../static/img/quote.svg'
import arrowWhite from '../static/img/arrow-white.svg'
import ReactSiema from 'react-siema'

const Testimonials = () => {
    const [page, setPage] = useState(0);
    const [allTestimonials, setAllTestimonials] = useState([]);

    const startInterval = () => {
        setInterval(() => {
            setPage(prevState => {
                if(prevState === 1) return 0;
                else return prevState+1;
            });
        }, 10000);
    }

    useEffect(() => {
        setAllTestimonials(Array.from(document.querySelectorAll('.testimonials__two')));

        if(window.innerWidth > 768) startInterval();
    }, []);

    useEffect(() => {
        allTestimonials.forEach((item, index) => {
            item.style.opacity = '0';
            if(index === page) {
                item.style.opacity = '1';
            }
        })
    }, [page]);

    let slider;

    return <section className="section section--testimonials">
        <span className="beforeMainHeader">
                Referencje
        </span>
        <h2 className="mainHeader">
            A tak o nas mówią...
        </h2>
        <main className="testimonials d-mobile" data-aos="fade-in">
            <button className="companies__arrow arrow--prev" onClick={() => { slider.prev(); }}>
                <img className="btn__img" src={arrowWhite} alt="poprzedni" />
            </button>
            <ReactSiema loop={true} ref={siema => slider = siema}>
                {testimonials.flat().map((item, index) => {
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
            </ReactSiema>
            <button className="companies__arrow arrow--next" onClick={() => { slider.next(); }}>
                <img className="btn__img" src={arrowWhite} alt="poprzedni" />
            </button>
        </main>
        <main className="testimonials flex d-desktop" data-aos="fade-in">
            {testimonials.map((item, index) => {
                return <div className="testimonials__two" key={index}>
                    {item.map((item, index) => {
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
                </div>
            })}
        </main>
        <aside className="testimonials__bottom center d-desktop" data-aos="fade-in">
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
