import React, {useEffect, useState} from 'react';
import PageHeader from "./PageHeader";
import Footer from "./Footer";
import PortfolioCaloe from "../pages/PortfolioCaloe";
import PortfolioCZP from "../pages/PortfolioCZP";
import Portfoliokalchem from "../pages/PortfolioKalchem";
import PortfolioBrunchbox from "../pages/PortfolioBrunchbox";
import PortfolioFlightmedia from "../pages/PortfolioFlightmedia";
import PortfolioDrokam from "../pages/PortfolioDrokam";
import PortfolioHideisland from "../pages/PortfolioHideisland";
import PortfolioTabularii from "../pages/PortfolioTabularii";
import PortfolioProcentowo from "../pages/PortfolioProcentowo";
import PortfolioHotic from "../pages/PortfolioHotic";
import PortfolioBednarscy from "../pages/PortfolioBednarscy";
import PortfolioBenmarpompy from "../pages/PortfolioBenmarpompy";
import PortfolioLiderenergia from "../pages/PortfolioLiderenergia";
import PortfolioBenmar from "../pages/PortfolioBenmar";

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
            case 6:
                setRenderSwitch(<PortfolioLiderenergia />);
                break;
            case 7:
                setRenderSwitch(<PortfolioHotic />);
                break;
            case 8:
                setRenderSwitch(<PortfolioTabularii />);
                break;
            case 9:
                setRenderSwitch(<PortfolioDrokam />);
                break;
            case 10:
                setRenderSwitch(<PortfolioProcentowo />);
                break;
            case 11:
                setRenderSwitch(<PortfolioHideisland />);
                break;
            case 12:
                setRenderSwitch(<PortfolioBednarscy />);
                break;
            case 13:
                setRenderSwitch(<PortfolioBenmarpompy />);
                break;
            case 14:
                setRenderSwitch(<PortfolioBenmar />);
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
