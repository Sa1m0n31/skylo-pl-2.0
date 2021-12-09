import React, {useEffect, useRef, useState} from 'react'
import closeIcon from '../static/img/close.svg'
import arrowIcon from '../static/img/arrow-white.svg'

const ProjectGallery = ({gallery, galleryHeader, siteButtonLabel, siteLink}) => {
    const [container, setContainer] = useState(null);
    const [closeModalBtn, setCloseModalBtn] = useState(null);
    const [currentImage, setCurrentImage] = useState(0);

    const galleryModal = useRef(null);
    const modalImgWrapper = useRef(null);

    useEffect(() => {
        setContainer(document.querySelector('.container'));
        setCloseModalBtn(document.querySelector('.closeModalBtn'));
    }, []);

    const closeModal = () => {
        const galleryTop = document.querySelector('.galleryTop');

        galleryModal.current.style.opacity = '0';
        galleryTop.style.opacity = '0';
        setTimeout(() => {
            galleryModal.current.style.zIndex = '-1';
            galleryModal.current.style.visibility = 'hidden';
            galleryTop.classList.remove('galleryTop');
        }, 500);
    }

    const openModal = (n) => {
        setCurrentImage(n);

        const galleryTop = document.createElement('div');
        galleryTop.classList.add('galleryTop');

        galleryTop.appendChild(closeModalBtn);
        container.appendChild(galleryTop);

        galleryModal.current.style.opacity = '1';
        galleryModal.current.style.zIndex = '101';
        galleryModal.current.style.visibility = 'visible';
    }

    const animation = () => {
        modalImgWrapper.current.style.opacity = '0';
        setTimeout(() => {
            modalImgWrapper.current.style.opacity = '1';
        }, 300);
    }

    const nextImage = () => {
        animation();
        setTimeout(() => {
            setCurrentImage((prevState) => {
                if(prevState === gallery.length-1) return 0;
                else return prevState+1;
            });
        }, 200);
    }

    const prevImage = () => {
        animation();
        setTimeout(() => {
            setCurrentImage((prevState) => {
                if(prevState === 0) return gallery.length-1;
                else return prevState-1;
            });
        }, 200);
    }

    return <section className="section section--gallery">
        <div className="galleryModal" ref={galleryModal} onClick={() => { closeModal(); }}>
            <button className="closeModalBtn" onClick={() => { closeModal(); }}>
                <img className="btn__img" src={closeIcon} alt="wyjdz" />
            </button>

            <button className="modal__arrow modal__arrow--prev"
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}>
                <img className="btn__img" src={arrowIcon} alt="poprzedni" />
            </button>
            <figure className="modalImgWrapper"
                    ref={modalImgWrapper}
                    onClick={(e) => { e.stopPropagation(); }}>
                <img className="btn__img" src={gallery[currentImage]} alt="zdjecie" />
            </figure>
            <button className="modal__arrow modal__arrow--next"
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}>
                <img className="btn__img" src={arrowIcon} alt="poprzedni" />
            </button>
        </div>

        <h3 className="gallery__header">
            {galleryHeader}
        </h3>
        <main className="gallery__main flex">
            {gallery.map((item, index) => {
                return <figure className="gallery__item"
                               onClick={() => { openModal(index); }}
                               key={index} >
                    <img className="btn__img" src={item} alt="zdjecie-galerii" />
                </figure>
            })}
        </main>
        <a className="portfolioBtn center" href={siteLink} target="_blank">
            <span className="d-desktop gallerySpan">
                Zobacz projekt w pełnej okazałości -
            </span> Odwiedź {siteButtonLabel}
        </a>
        <aside className="gallery__bottom flex">
            <a className="button button--hero center" href="/portfolio">
                <svg>
                    <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                </svg>
                Zobacz inne realizacje
            </a>
            <a className="button button--hero center" href="/oferta">
                <svg>
                    <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                </svg>
                Zapoznaj się z ofertą
            </a>
            <a className="button button--hero center" href="/kontakt">
                <svg>
                    <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                </svg>
                Skontaktuj się z nami
            </a>
        </aside>
    </section>
}

export default ProjectGallery;
