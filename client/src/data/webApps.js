import mainImg from "../static/img/aplikacje-webowe-brodnica.svg";
import secondImg from '../static/img/aplikacje-webowe-torun.png'
import icon1 from '../static/img/click.svg'
import icon2 from '../static/img/int.svg'
import icon3 from '../static/img/safe.svg'

const webApps = {
    firstHeader: 'Aplikacje webowe',
    firstParagraph: 'W zakres naszych usług wchodzi także tworzenie dedykowanych aplikacji webowych. Jesteśmy w stanie zaprojektować cały interfejs, a także wdrożyć go i uruchomić z wykorzystaniem nowoczesnych technologii. W tworzeniu aplikacji internetowych wykorzystujemy swoją wiedzę z zakresu projektowania, aby aplikacja cechowała się dobrym designem i była przyjemna w odbiorze, oraz wiedzę i umiejętności z zakresu programowania, dzięki czemu wdrażane aplikacje działają bez szwanku. To połączenie gwarantuje duże wsparcie w realizacji założonych przez Ciebie celów oraz przeznaczenia, jakie ma spełniać Twoja aplikacja webowa.',
    secondHeader: 'Czym jest aplikacja www? Wyjaśniamy!',
    secondParagraph: 'Aplikacja internetowa jest z definicji programem, który działa na bardzo podobnej zasadzie jak zwykła strona www. Jednak to nie jest to samo. Aplikacja webowa stwarza wiele więcej możliwości interakcji użytkownika oraz oferuje wiele funkcjonalności, których nie zobaczymy na zwykłej witrynie. Przykładem aplikacji webowej jest np. popularna platforma Netflix. Warto też dodać, że do uruchomienia aplikacji www wystarczy jedynie przeglądarka internetowa.',
    mainImage: mainImg,
    thirdHeader: 'Cechy aplikacji internetowych',
    strengths: [
        {
            title: 'Dobry design',
            icon: icon1,
            text: 'Aplikacje webowe są bezpośrednio uruchamiane w przeglądarkach, internetowych (np. Mozilla, Chrome) dlatego użytkownik nie musi ich pobierać, instalować czy aktualizować.'
        },
        {
            title: 'Intuicyjność i wygoda',
            icon: icon2,
            text: 'Aplikacje www są tworzone w trosce o wygodę dla użytkownika, dlatego cechuje je wysoki poziom intuicyjności i prostoty obsługi, aby uniknąć problemów z poruszaniem się po interfejsie.'
        },
        {
            title: 'Bezpieczeństwo',
            icon: icon3,
            text: 'Przy wdrażaniu aplikacji webowych stosuje się zabezpieczenia wysokiej jakości zarówno po stronie użytkownika, jak i administratora. Przechowywane dane są maksymalnie bezpieczne.'
        },
    ],
    secondImage: secondImg,
    fourthHeader: 'Czym różni się aplikacja web od strony www?',
    fourthParagraph: [
        'Istnieje kilka istotnych różnic pomiędzy aplikacją webową a stroną www. Ich dostrzeżenie i zrozumienie ułatwi nam zadanie w podjęciu decyzji, która z wyżej wymienionych realizacji jest lepsza i bardziej korzystna dla założonych przez Ciebie celów.',
        'Strona internetowa służy z założenia tylko do przekazywania informacji. Nie oferuje użytkownikowi żadnych możliwości interakcji - w przeciwieństwie do aplikacji internetowej. Możliwość zakładania kont, kupowania, rezerwowania, dodawania etc. - te funkcjonalności składają się na cechy aplikacji www. Istnieją również różnice po stronie technologicznej, takie jak wykorzystywane technologie przy tworzeniu czy utrzymywaniu aplikacji www, która jest zdecydowanie bardziej rozbudowana pod tym kątem od zwykłej witryny.',
        'Warto jednak zaznaczyć, że w tym przypadku nie ma z góry narzuconego lepszego wyboru. Decyzja pomiędzy aplikacją webową a stroną www zależy przede wszystkim od tego, jaki cel ma spełniać nasza witryna. Jeśli chcemy dać użytkownikowi możliwość interakcji, które doprowadzą go do wykonania konkretnego działania (np. dokonanie zakupu czy rezerwacja) to wybierzemy aplikację www. Jeśli natomiast chcemy dać użytkownikowi tylko informacje, należy wówczas wybrać stronę internetową.'
    ]
}

export default webApps;
