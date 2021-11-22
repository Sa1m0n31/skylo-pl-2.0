import React from 'react'
import logo from '../static/img/skylopl-logo.png'

const PageHeader = ({currentPage}) => {
    return <header className="pageHeader flex">
        <a className="pageHeader__logoWrapper" href="/">
            <img className="btn__img" src={logo} alt="agencja-interaktywna-skylo" />
        </a>
        <menu className="pageHeader__menu">
            <ul className="pageHeader__menu__list flex">
                <li className={currentPage !== 0 ? "pageHeader__menu__list__item" : "pageHeader__menu__list__item pageHeader__menu__list__item--current"}>
                    <a className="pageHeader__menu__list__link" href="/">
                        Home
                    </a>
                </li>
                <li className={currentPage !== 1 ? "pageHeader__menu__list__item" : "pageHeader__menu__list__item pageHeader__menu__list__item--current"}>
                    <a className="pageHeader__menu__list__link" href="/oferta">
                        Oferta
                    </a>
                </li>
                <li className={currentPage !== 2 ? "pageHeader__menu__list__item" : "pageHeader__menu__list__item pageHeader__menu__list__item--current"}>
                    <a className="pageHeader__menu__list__link" href="/o-nas">
                        O nas
                    </a>
                </li>
                <li className={currentPage !== 3 ? "pageHeader__menu__list__item" : "pageHeader__menu__list__item pageHeader__menu__list__item--current"}>
                    <a className="pageHeader__menu__list__link" href="/portfolio">
                        Portfolio
                    </a>
                </li>
                <li className={currentPage !== 4 ? "pageHeader__menu__list__item" : "pageHeader__menu__list__item pageHeader__menu__list__item--current"}>
                    <a className="pageHeader__menu__list__link" href="/kontakt">
                        Kontakt
                    </a>
                </li>
                <li className={currentPage !== 5 ? "pageHeader__menu__list__item" : "pageHeader__menu__list__item pageHeader__menu__list__item--current"}>
                    <a className="pageHeader__menu__list__link" href="/blog">
                        Blog
                    </a>
                </li>
            </ul>
        </menu>
    </header>
}

export default PageHeader;
