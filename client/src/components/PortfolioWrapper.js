import React, {useEffect, useState} from 'react';
import PageHeader from "./PageHeader";
import Footer from "./Footer";
import PortfolioCaloe from "../pages/PortfolioCaloe";
import PortfolioCZP from "../pages/PortfolioCZP";

const PortfolioWrapper = ({page}) => {
    const [renderSwitch, setRenderSwitch] = useState(null);

    useEffect(() => {
        switch(page) {
            case 1:
                setRenderSwitch(<PortfolioCaloe />);
                break;
            case 2:
                setRenderSwitch(<PortfolioCZP />);
                break;
            default:
                window.location = '';
                break;
        }
    }, []);

    return <div className="container container--project">
        <PageHeader currentPage={3} />
            {renderSwitch}
        <Footer />
    </div>
};

export default PortfolioWrapper;
