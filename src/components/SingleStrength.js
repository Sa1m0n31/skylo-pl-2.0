import React from 'react'

const SingleStrength = ({icon, title, text, key}) => {
    return <section className="strength flex" key={key}>
        <figure className="strength__imgWrapper">
            <img className="strength__img" src={icon} alt={title} />
        </figure>
        <article className="strength__content">
            <h4 className="strength__header">
                {title}
            </h4>
            <p className="strength__text">
                {text}
            </p>
        </article>
    </section>
}

export default SingleStrength;
