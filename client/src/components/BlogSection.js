import React from 'react'
import blog from '../data/blog'

const BlogSection = () => {
    return <section className="section section--blog d-desktop">
        <span className="beforeMainHeader">
            Blog
        </span>
        <h2 className="mainHeader">
            Zobacz nasze ostatnie wpisy
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
    </section>
}

export default BlogSection;
