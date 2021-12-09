import React from 'react';
import ProjectHeader from "../components/ProjectHeader";
import { caloe } from "../data/projects";
import ProjectGallery from "../components/ProjectGallery";

const PortfolioCaloe = () => {
    return <main className="project">
        <ProjectHeader title={caloe.title}
                       subtitle={caloe.subtitle}
                       logo={caloe.logo} />

        <ProjectGallery gallery={caloe.gallery}
                        siteLink={caloe.siteLink}
                        siteButtonLabel={caloe.siteButtonLabel}
                        galleryHeader={caloe.galleryHeader} />
    </main>
};

export default PortfolioCaloe;
