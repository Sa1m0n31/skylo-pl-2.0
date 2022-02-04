import React from 'react';
import bigImage from '../static/blog/zdjecie001.png'
import img1 from '../static/blog/2-cover.png'
import img from "../static/blog/article1.png";

const Article2 = () => {
    return <article className="page article">
        <figure className="article__mainImg">
            <img className="btn__img" src={img1} alt="jak-tworzyc-profesjonalne-strony-internetowe" />
        </figure>
        <main className="article__content">
            <h1 className="page__title">
                Część 2: tworzenie planu, wizualizacje dla nas i Klientów
            </h1>
            <p>
                W pierwszej części tej serii wpisów powiedzieliśmy sobie o organizacji pracy i źródeł czerpania pomysłów, inspiracji. W dzisiejszej publikacji przejdziemydo nieco bardziej konkretnychdziałań. Poruszymy kwestie związane już nieco bardziej bezpośrednio ze współpracą z Klientem. Zagadnienia omawianew poprzedniej części były, powiedzmy sobie, backgroundem, „podwalinami” pod cały proces zwany tworzeniem. Tutaj natomiast możemy sobie przyjąć, że już zaczynamy projektować. Nie przedłużając, przejdziemy od razu do dalszego ciągu.
            </p>
            <p>
                Przy tworzeniu naszych realizacji, np. stron WWW czy sklepów online, dzielimy naszą pracę przede
                wszystkim na dwa etapy – mowa tu o tworzeniu prototypu (makiety, projektu) oraz programowaniu.
            </p>
            <p>
                <b>
                    Plan, rozpiski
                </b>
            </p>
            <p>
                Jeśli czytaliście poprzednią część, to ten etap też może Wam wydać się zbędny i czasochłonny. Po co mam pisać i marnować czas na jakieś planowanie, skoro mogę od razu próbować kleić coś w programie do projektowania? No właśnie –tworzenie planu ma sens. Przede wszystkim, po raz kolejny użyję tego wyrażenia, ułatwia pracę. Dodatkowo też mocno minimalizuje ryzyko, że coś pominiemy. Mapę strony, bo tak też pozwolę sobie nazwać plan, możemy przygotować w oparciu o brief i wytyczne od Klienta. Gotową mapę warto podesłać Klientowi, aby ten zapoznał się z nią i dał zielone światło do przejścia do dalszych etapów. Jak widzicie, wiele argumentów sprowadzam do ułatwiania sobie roboty. Chodzi przede wszystkim o cenny czas, a także o to, że powinniśmy w pierwszej kolejności starać się pracować mądrze, a nie ciężko. Próbujmy podejmować jak najwięcej kroków, które pozwolą nam usprawnić swoją pracę, dzięki czemu zaoszczędzimy czas, który będziemy mogli przeznaczyć na inne projekty czy zadania.Na początku będziemy musieli trochę się temu poświęcić, ale pozwoli nam to zdecydowanie oszczędzić czas w późniejszych etapach tworzenia.
            </p>
            <p>
                Nie potrzebujemy specjalnych narzędzi czy platform do tworzenia takich planów. Tak naprawdę wystarczy zwykła kartka i ołówek czy długopis, ale ja preferuję używanie Windowsowego notatnika. W komputerze wygląda to trochę bardziej czytelnie. Do zaawansowanych map, gdzie skupiamy się mocno na warstwie UX, która jest kluczowa (np. tworząc aplikację czy rozbudowaną platformę) możemy używać narzędzi, które pozwalają nam w profesjonalny sposób tworzyć takie plany, ale w tym wpisie nie jesteśmy na tym etapie. Dlatego pozostaniemy przy notatniku, ewentualnie kartce i ołówku.
            </p>

            <p>
                Mapa (plan) strony to dla mnie nic innego, jak wypisanie i opisanie każdej sekcji. U mnie wygląda to tak, że po prostu zaczynam od góry, czyli od strony głównej. Rozpisuję sobie wszystkie elementy, które będę chciał tu umieścić. W zależności od typu, przeznaczenia czy poziomu rozbudowania witryny, tych elementów może być mniej lub więcej i mogą one być mniej lub bardziej szczegółowe. Prosta strona wizytówkowa typu single page będzie zawierała kilka najważniejszych elementów z nieco bardziej szczegółowymi opisami, ale rozbudowana strona (np. nasze Skylo.pl) może zawierać na stronie głównej więcej elementów, ale w formie wprowadzeń czy odnośników do rozwinięcia treści i informacji na podstronach. To wszystko zależy od tego, co w danym momencie tworzymy, a także od tego, czego sobie życzy Klient i jakie są jego wytyczne. W innych wpisach na pewno spróbuję przybliżyć temat briefu, który powinien rozpoczynać każdą współpracę. Tutajnatomiast przyjmijmy, że ten brief już mamy i możemy zacząć planować.
            </p>
            <figure className="article__img">
                <img className="btn__img" src={bigImage} alt="tworzenie-stron-internetowych" />
            </figure>
            <p>
                <b>
                    Jak wygląda przykładowy plan (mapa) strony?
                </b>
            </p>
            <p>
                Nie będę wymyślał Klienta oraz jego potrzeb na potrzeby tego wpisu, bo nie ma to za bardzo sensu w tym przypadku. Po prostu pokażę jak może wyglądać przykładowa mapa bardzo prostej strony z kilkoma podstronami.
            </p>
            <p>
                <ul>
                    <li>
                        Strona główna –zawiera elementy wymienione w briefie przez Klienta, w określonej przez niego kolejności:
                    </li>
                    <li>
                        O nas –zdjęcie przedstawiające siedzibę firmy oraz jeden akapit opisu, pod spodem button kierujący do podstrony =>
                        <ul>
                            <li>
                                Szczegółowy opis firmy ze zdjęciami i tekstami otrzymanymi od Klienta
                            </li>
                        </ul>
                    </li>
                    <li>
                        Oferta - wyszczególnione pozycje z oferty w kafelkach, same nagłówki oraz ikonki, po kliknięciu w button przekserowanie na podstronę ze szczegółowym opisem oferty
                        <ul>
                            <li>
                                Oferta #1
                            </li>
                            <li>
                                Oferta #2
                            </li>
                            <li>
                                Oferta #3
                            </li>
                        </ul>
                    </li>
                    <li>
                        Kontakt
                        <ul>
                            <li>
                                Po lewo mapka z Google
                            </li>
                            <li>
                                Prawa strona:
                                <ul>
                                    <li>
                                        Nazwa firmy oraz dane (NIP, REGON)
                                    </li>
                                    <li>
                                        Adres siedziby
                                    </li>
                                    <li>
                                        Numer telefonu
                                    </li>
                                    <li>
                                        Adres e-mail
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        Stopka: tylko informacja o copyright, pod spodem creditsy wykonawcy witryny
                    </li>
                </ul>
            </p>
            <p>
                Czy jest to mega profesjonalna rozpiska, która jest szanowana w branży? Nie wiem, znajdzie się na pewno ktoś, kto powie, że on tak nie robi i jest to nieprofesjonalne. Czy mi, projektantowi, to pomaga? Tak. Czy w ten sposób stworzyliśmy już w Skylo.pl kilkanaście realizacji? Tak! Przyjrzyjcie się jeszcze raz tej mapie strony. Informacje, które umieściłem wyżej, są oczywiście bardzo uproszczone, opisane na potrzeby tego, można to nazwać, poradnika. Wyobraźmy sobie jednak sytuację, gdzie do dyspozycji mamy prawdziwą rozpiskę elementów, którą stworzyliśmy na podstawie briefu od Klienta, który także przy okazji wysłał swoje teksty i zdjęcia. Możemy sobie wydrukować taką rozpiskę, umieścić gdzieś z boku, lub też mieć ją otwartą na ekranie i na jej podstawie możemy w pełnizająć się designem, nie martwiąc się o to, gdzie umieścić dany element, myśląc cały czas„co ja tutaj mogę dać...”.
            </p>
            <p>
                <b>
                    Makiety
                </b>
            </p>
            <p>
                Pewnie gdzieś kiedyś udało Wam się usłyszeć to pojęcie. Makieta... Kojarzyć się może ze szkołą, gdzie niektórzy z Was mogli tworzyć makiety np. parków. Ale to pojęcie funkcjonuje również w świecie projektowania interfejsów. I jest cholernie przydatne.
            </p>
            <p>
                Makiet możemy wyróżnić kilka. Na przykład istnieje coś takiego jak makieta UX –tego pojęcia używa się chyba najczęściej. Ale słowo „makieta” można użyć również po prostu w odniesieniu do wizualizacji zwykłej strony WWW, która jest nieco mniej rozbudowana od projektów, gdzie zaczyna się od stworzenia wspomnianej makiety UX. Żeby było prościej, to przyjmijmy sobie, że makieta to po prostu wizualizacja tworzonego przez nas interfejsu. To ukazanie Klientowi tworzonego projektu, który jeszcze nie jest w pełni działającą stroną, ale przedstawia design.
            </p>
            <p>
                Tworzenie makiet to bardzo ważny element projektowania. Chodzi przede wszystkim o oszczędność czasu (tak, znowu) i wygodne przedstawienie Klientowi tego, co dla niego realizujemy. W makietach każda zmiana jest bardzo szybka (nie musimy zmieniać linijek kodu, możemy po prostu przesunąć dany element jednym ruchem myszki). Taka wizualizacja pomaga nam znaleźć porozumienie z Klientem, aby tworzony dla niego projekt w pełni go satysfakcjonował. Jeśli jesteśmy w zespole, gdzie jedna osoba projektuje, a druga programuje, to za pomocą makiet zdecydowanie ułatwiamy robotę programiście. Jeśli Klient zaakceptuje projekt, to programistadostaje gotowy wzór, który za pomocą kodu wciela w życie.Makiety UX mogą być również mniej lub bardziej rozbudowane. Zależy to oczywiście, po raz kolejny, od stopnia zaawansowania i przeznaczenia projektu. Makiety pozwalają nie tylko wizualizować tworzone dla Klienta interfejsy, ale szczególnie przy bardziej zaawansowanych realizacjach, umożliwiają nam na dokładne zaplanowanie sposobu poruszania się po takim interfejsie przez potencjalnego użytkownika. Każdy interfejs powinien być przede wszystkim do bóluprosty w obsłudze i intuicyjny. Przygotowanie makiety, którą później możemy przetestować na niezależnych testerach, pozwala nam na spisanie doświadczeń i zachowań, na podstawie których możemy wysnuć wnioski –czy nasz interfejs jest właśnie prosty, czy jednak musimy go w jakiś sposób usprawnić. Stosowanie się do tych zasad sprawdza się to zarówno przy tworzeniu bardzo rozbudowanych i zaawansowanych aplikacji, jak i przy tworzeniu zwykłych stron.Każdorazowo tworzę makiety i każdorazowo zbieram od potencjalnych użytkowników feedback, na podstawie którego ustalam, czy mój projekt spełnia dwie role –czyli czy jest prosty w obsłudze i intuicyjny.
            </p>
            <p>
                c.d.n.
            </p>
            <p>
                Bartek Jasiński
            </p>
        </main>
    </article>
};

export default Article2;
