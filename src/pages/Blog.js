import React, {useEffect, useRef, useState} from 'react'
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import blog from '../data/blog'
import vector from '../static/img/vector-4.png'
import caretDown from '../static/img/caret-down.svg'

const Blog = () => {
    const [all, setAll] = useState(false);

    const blogWrapper = useRef(null);

    useEffect(() => {
        if(all) {
            blogWrapper.current.style.height = "auto";
            setTimeout(() => {
                blogWrapper.current.style.opacity = "1";
            }, 300);
        }
        else {
            blogWrapper.current.style.opacity = "0";
            setTimeout(() => {
                blogWrapper.current.style.height = "0";
            }, 300);
        }
    }, [all]);

    return <div className="container container--page container--blog">
        <img className="backgroundImg backgroundImg--1" src={vector} alt="tlo" />
        <PageHeader currentPage={5} />
        <main className="page">
            <h1 className="heading">
                Blog
            </h1>
            <p className="text">
                Zapraszamy do śledzenia naszych cyklicznych wpisów o tematyce rozwojowej, publicystycznej, informacyjnej.
            </p>
            <h2 className="offer__heading">
                Ostatnie wpisy
            </h2>
            <main className="blog flex">
                {blog.map((item, index) => {
                    if(index < 3) {
                        return <a className="blog__item" key={index} href={item.title}>
                            <figure className="blog__item__imgWrapper">
                                <img className="btn__img" src={item.img} alt={item.title} />
                            </figure>
                            <h3 className='blog__item__title'>
                                {item.title}
                            </h3>
                            <p className="blog__item__excerpt">
                                {item.excerpt}
                            </p>
                            <a className="blog__item__btn center" href={item.title}>
                                Czytaj dalej
                            </a>
                        </a>
                    }
                })}
            </main>
            <main className="section blog section--blogPage" ref={blogWrapper}>
                {blog.map((item, index) => {
                    if(index >= 3) {
                        return <a className="blog__item" key={index} href={item.title}>
                            <figure className="blog__item__imgWrapper">
                                <img className="btn__img" src={item.img} alt={item.title} />
                            </figure>
                            <h3 className='blog__item__title'>
                                {item.title}
                            </h3>
                            <p className="blog__item__excerpt">
                                {item.excerpt}
                            </p>
                            <a className="blog__item__btn center" href={item.title}>
                                Czytaj dalej
                            </a>
                        </a>
                    }
                })}
            </main>
            <section className="section section--blogMore center">
                <h4 className="blogMore__header">
                    Wszystkie wpisy
                </h4>
                <button className="blogMore__btn" onClick={() => { setAll(!all); }}>
                    {all ? "Zwiń" : "Rozwiń"}
                    <img className={all ? "blogMore__btn__img rotate" : "blogMore__btn__img"} src={caretDown} alt="rozwin" />
                </button>
            </section>
        </main>
        <Footer />
    </div>
}

export default Blog;
