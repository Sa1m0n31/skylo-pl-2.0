import React, {useEffect, useState} from 'react';
import PageHeader from "./PageHeader";
import Footer from "./Footer";
import PortfolioCaloe from "../pages/PortfolioCaloe";
import PortfolioCZP from "../pages/PortfolioCZP";
import Portfoliokalchem from "../pages/PortfolioKalchem";
import PortfolioBrunchbox from "../pages/PortfolioBrunchbox";
import PortfolioFlightmedia from "../pages/PortfolioFlightmedia";
import PortfolioDrokam from "../pages/PortfolioDrokam";

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
            case 3:
                setRenderSwitch(<Portfoliokalchem />);
                break;
            case 4:
                setRenderSwitch(<PortfolioBrunchbox />);
                break;
            case 5:
                setRenderSwitch(<PortfolioFlightmedia />);
                break;
            case 9:
                setRenderSwitch(<PortfolioDrokam />);
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
