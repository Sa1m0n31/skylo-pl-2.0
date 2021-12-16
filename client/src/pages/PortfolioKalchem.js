import React from 'react';
import ProjectHeader from "../components/ProjectHeader";
import { kalchem } from "../data/projects";
import kalchemMainImg from '../static/projects/kalchem/kalchem-glowna.png'
import ProjectGallery from "../components/ProjectGallery";

const Portfoliokalchem = () => {
    return <main className="project">
        <ProjectHeader title={kalchem.title}
                       subtitle={kalchem.subtitle}
                       logo={kalchem.logo} />
        <main className="project__main">
            <img className="project__main__img" src={kalchemMainImg} alt="strona-internetowa-kalchem-premium" />
            <h2 className="project__main__header">
                Łatwe zarządzanie i wprowadzanie zmian na stronie
            </h2>
            <p className="project__main__text">
                Dzięki oparciu witryny Kalchem.com.pl na Wordpressie, edycja treści, wprowadzanie zmian i zarządzanie stroną jest bardzo łatwe. Wcześniejsza wersja strony była mniej intuicyjna i dostępna, także pod tym względem, dlatego chcieliśmy to zmienić. Na nowej witrynie, zaprojektowanej i wdrożonej przez nas, wprowadziliśmy dla Klienta łatwy system obsługi i zarządzania stroną.
            </p>
            <h2 className="project__main__header marginTop20">
                Administracja i opieka nad serwerem
            </h2>
            <p className="project__main__text">
                Nasze firmy od samego początku postawiły na współpracę. PHZ Kalchem obdarzył nas zaufaniem, czego wynikiem jest stała współpraca w zakresie administracji strony oraz opieki nad serwerem, na którym oparta jest witryna. Regularnie wprowadzamy zmiany w treści, zarządzamy stroną, a także pilnujemy bezpieczeństwa i prowadzimy prace w zakresie utrzymania strony na serwerze, aby zawsze była dostępna dla zainteresowanych klientów. Warto dodać, że Kalchem to m.in. autoryzowany dealer maszyn rolniczych CLAAS, dlatego dostępność ich oferty dla potencjalnych kupujących jest bardzo ważna i nie można sobie pozwolić na przestoje ani spowolnienia.
            </p>
        </main>
        <ProjectGallery gallery={kalchem.gallery}
                        siteLink={kalchem.siteLink}
                        siteButtonLabel={kalchem.siteButtonLabel}
                        galleryHeader={kalchem.galleryHeader} />
    </main>
};

export default Portfoliokalchem;
