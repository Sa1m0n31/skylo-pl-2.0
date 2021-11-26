import React from 'react'

const OfferItem = ({item, key}) => {
    return <section className="offer__item center" key={key}>
        <img className="offer__item__img" src={item.icon} alt={item.header} />
        <h3 className="offer__item__header">
            {item.header}
        </h3>
        <p className="text text--offerItem">
            {item.text}
        </p>
        <a className="offer__item__link center" href={item.link}>
            Informacje o ofercie
        </a>
    </section>
}

export default OfferItem;
