import time from '../static/img/time.svg'
import money from '../static/img/save-money.svg'
import desc from '../static/img/product-description.svg'

const ecommerce = {
    frames: [
        {
            icon: time,
            title: 'Zawsze dostępny dla Klienta',
            text: 'Klient może dokonać zakupu w Twoim sklepie o każdej porze, z każdego miejsca na świecie.'
        },
        {
            icon: money,
            title: 'Oszczędność kosztów',
            text: 'Sklep online nie wymaga personelu czy wynajmu lokalu, dzięki czemu możemy zainwestować więcej w np. reklamę.'
        },
        {
            icon: desc,
            title: 'Przejrzysta oferta',
            text: 'W swoim sklepie internetowym możesz dodać szczegółowe opisy produktów lub prezentacje dot. Twojej oferty.'
        }
    ]
}

export default ecommerce;
