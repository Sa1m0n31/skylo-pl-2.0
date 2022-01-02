import React from 'react';
import img from '../static/blog/article1.png'
import bigImage from '../static/blog/big-image.png'
import img1 from '../static/blog/img1.png'

const Article1 = () => {
    return <article className="page article">
        <figure className="article__mainImg">
            <img className="btn__img" src={bigImage} alt="jak-tworzyc-profesjonalne-strony-internetowe" />
        </figure>
        <main className="article__content">
            <h1 className="page__title">
                Jak projektować strony? Tworzenie prototypów, makiet, wizualizacji. Cz. 1: etapy, inspiracje, pomysły
            </h1>
            <p>
                Zaplanowana i podzielona na etapy praca pomaga nam zaoszczędzić sporo czasu, a także
                zdecydowania ją usprawnia.
            </p>
            <p>
                Przy tworzeniu naszych realizacji, np. stron WWW czy sklepów online, dzielimy naszą pracę przede
                wszystkim na dwa etapy – mowa tu o tworzeniu prototypu (makiety, projektu) oraz programowaniu.
            </p>
            <p>
                W tej serii wpisów rozważaniach pochylimy się nad tym pierwszym etapem.
                Poniższe opisy, rady etc. to sposoby i metody pracy, z których korzystam, i którymi chcę się podzielić.
            </p>
            <p>
                <b>
                    Po co te etapy? Nie lepiej zrobić wszystko od razu?
                </b>
            </p>
            <p>
                To z pozoru dobre pytanie, na które, również pozornie, możemy podać od razu odpowiedź. Dlaczego
                mamy tracić czas na podzielenie pracy na dwa etapy, skoro teoretycznie można robić to na bieżąco –
                „kawałek po kawałku”. Sprawa nie jest jednak taka prosta. Klienci mają różne wymagania i ich wizja
                nierzadko mija się z wizją autora projektu. Dlatego proces realizacji, np. witryny, warto rozbić sobie
                właśnie na te dwa etapy. Prototyp czy makietę można łatwo i szybko edytować, wprowadzając na
                bieżąco zmiany zaproponowane i ustalone z klientem. To główna zaleta, a także główny powód, dla
                którego można zdecydować się na taki podział. Przedstawiona wizualizacja w pełni oddaje finalny
                wygląd projektu, a dzięki możliwościom tworzenia zaawansowanych prototypów, np. w programie
                Adobe XD, można również zaprezentować przejścia, animacje czy interakcje. Programista, który
                później sprawia, by projekt „ożył”, ma nieco ułatwione zadanie, bo dostaje gotowy prototyp, który
                został wcześniej zatwierdzony przez Klienta. Dlatego odpowiadając na pytanie z nagłówka – nie, nie
                warto. Warto natomiast poświęcić trochę czasu przed przystąpieniem do realizacji, aby ułożyć sobie
                plan i podzielić prace.
            </p>
            <p>
                <b>
                    Jak projektować (w skrócie)? Od pustej „kartki” do stworzenia witryny
                </b>
            </p>
            <p>
                To trochę złożone pytanie, na które na pewno nie dam rady odpowiedzieć całościowo w tym wpisie.
                Postaram w lekkim skrócie przybliżyć swój pogląd na temat projektowania interfejsów witryn (czyli
                np. stron, sklepów, paneli etc.).
            </p>
            <p>
                Cytując klasyka - w podręczniku od matmy na początku były 42 pierogi. W mitologii greckiej – na
                początku był Chaos, a w Biblii – Słowo lub Bóg. U nas na początku był (a nawet jest) pusty arkusz.
                Biała kartka, od której zaczynamy tworzenie naszego projektu. To z takiej białej kartki zrodziły się
                nasze rozbudowane projekty, np. BrunchBox.pl czy nasza witryna Skylo.pl. To, co widzimy na tych
                stronach, to efekt wielu procesów, np. myślowych, szukania inspiracji czy planowania.
            </p>
            <p>
                Przed rozpoczęciem prac trzeba jednak dokładnie wiedzieć, co chcemy projektować. Trochę inaczej
                będą wyglądać kolejne etapy w przypadku zwykłej strony WWW dla klienta, np. przedstawiającej
                jego ofertę, niż np. sklepu internetowego z dedykowanymi opcjami wyboru dla Klienta czy w panelu
                administracyjnym. Dlatego zanim otworzymy tę słynną pustą kartkę w programie, np. w Adobe XD, to
                warto sobie otworzyć pusty arkusz w notatniku, gdzie wszystko sobie rozpiszemy. Poświęcimy na to
                trochę czasu na początku, ale później będziemy mogli postępować według zaplanowanych sekcji i
                elementów, co pozwoli zaoszczędzić czas i zdecydowanie usprawni nam prace nad projektem.
            </p>
            <figure className="article__img">
                <img className="btn__img" src={img1} alt="tworzenie-stron-internetowych" />
                <caption>
                    Widok przed rozpoczęciem prac w programie Adobe XD
                </caption>
            </figure>
            <p>
                <b>
                    Inspiracje i pomysły
                </b>
            </p>
            <p>
                Uważam, że nie ma tworzenia bez inspiracji czy pomysłu. Musimy zawsze mieć jakiś plan, wizję,
                wyobrażenie, żeby przystąpić do budowania projektu. Praca „na aferę”, czyli wrzucanie na stronę
                randomowych figur czy tekstów, bez ułożenia planu, może i przyniesie jakiś efekt, ale poświęcimy na
                to zdecydowanie więcej czasu. Nie mówię, że absolutnie każdy element musi być zaplanowany.
                Tworzenie i projektowanie to po części sztuka. Tworzymy coś z niczego. W zależności od tego jak
                podchodzimy do tego tematu, można porównać to zajęcie do chociażby malowania obrazów.
                Spontaniczność jest jak najbardziej dopuszczalna, ale bez stworzenia wcześniej odpowiednich
                fundamentów pod projekt, ta spontaniczność może po prostu bez odpowiedniej podstawy runąć. No
                dobra, to mamy już pomysł. A co z inspiracją? Czy warto szukać inspiracji? Zdecydowanie tak. Czy
                inspiracja to plagiat? No właśnie. Skrajna interpretacja nie jest tutaj wskazana. Nie można wejść na
                jakąś stronę, żywcem ukraść pomysł na konkretny układ elementów i nazywać to inspiracją
                (konkretny = takie same/praktycznie takie same zdjęcia, ta sama tematyka tekstów, kształty,
                rozmieszczenie elementów). Czy istnieje definicja inspiracji? Na pewno, ale ważniejsza od definicji
                jest jej interpretacja. Sami musimy potrafić zauważyć granicę pomiędzy inspiracją a plagiatem. Nikt za
                nas tak naprawdę tego nie zrobi.
            </p>
            <p className="m-left">
                &bull; Co możemy nazwać inspiracją?
            </p>
            <p className="m-left">
                Inspiracją może być dla nas nie tylko strona podobna do tej, którą robimy, ale także inne
                elementy graficzne czy nawet, załóżmy, dzieła sztuki, miejsca, muzyka, osoby. Inspiracja ma
                pobudzić i popchnąć nas do działania, a w przypadku projektowania - wymyślenia czegoś
                wyjątkowego dla nas czy dla Klienta. Jeśli jednak nie chcemy sprowadzać tematu
                projektowania do tworzenia sztuki, to prostym przykładem inspiracji może być podejrzenie
                jakie sekcje (np. zakładki, elementy menu) mają inne strony – podobne do tej, którą aktualnie
                projektujemy.
            </p>
            <p className="m-left">
                &bull; Czego <b>nie</b> możemy nazwać inspiracją?
            </p>
            <p className="m-left">
                Różnica, jak widać, jest paradoksalnie z jednej strony jasna (da się ją wskazać), ale z drugiej strony
                ciężko to opisać samymi słowami. Dlatego, tak jak wyżej wspomniałem, zabierając się za
                projektowanie musimy sami potrafić dostrzec różnicę między inspiracją a plagiatem i wyznaczyć sobie
                wyraźną granicę, której pod żadnym pozorem nie możemy przekraczać.
            </p>
            <p>
                „Dobry projektant nie korzysta z inspiracji!” – bzdura. Serio. Jeśli ktoś Wam próbuje wmówić, że on
                jest super bo nie inspiruje się nikim ani niczym, to nie wierzcie mu. Na tym po prostu polega
                tworzenie. Potrzebujemy źródła impulsu, który sprawi, że wymyślimy coś wyjątkowego. Przeglądanie
                podobnych stron, interfejsów itd. To nie plagiat. Po prostu takie działania pomagają nam wymyślić
                coś wyjątkowego, własnego. To jest cecha pracy w tej branży i nie ma w tym nic złego.
            </p>
            <p>
                Spróbowaliśmy wskazać sobie różnice między inspiracją i plagiatem i omówiliśmy z grubsza po co tak
                naprawdę musimy mieć pomysł i po co mamy się inspirować. Serio, bez tych dwóch rzeczy
                projektowanie jest bardzo trudne, a nawet bym powiedział, że niemożliwe. Oczywiście cały czas
                mówimy o tworzeniu autorskich projektów, które przyciągają Klientów, spełniają swoje funkcje i są
                po prostu ładne. Sztuką dobrego tworzenia jest zaprojektowanie strony, która nie tylko dobrze działa,
                ale równie dobrze wygląda. Na tym opieramy chociażby swoją pracę w Skylo.pl.
            </p>
            <p>
                Ciąg dalszy w kolejnych częściach. Przed nami sporo etapów do omówienia, a przybliżenie każdego z
                nich pomoże Wam zrozumieć na czym polega całokształt tworzenia stron i dlaczego my robimy to w
                odpowiedni sposób…. :D
            </p>
            <p>
                Bartek Jasiński
            </p>
        </main>
    </article>
};

export default Article1;
