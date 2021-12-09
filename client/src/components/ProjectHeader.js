import React from 'react';

const ProjectHeader = ({title, logo, subtitle}) => {
    return <header className="project__header flex">
        <h1 className="project__header__h">
            {title}
        </h1>
        <p className="project__header__text">
            {subtitle}
        </p>
        <img className="project__header__logo" src={logo} alt={title} />
    </header>
};

export default ProjectHeader;
