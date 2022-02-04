import React, {useEffect} from 'react'
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route
} from "react-router-dom";
import './static/style/style.css'
import './static/style/mobile.css'
import Homepage from "./pages/Homepage";
import Offer from "./pages/Offer";
import Websites from "./pages/Websites";
import ECommerce from "./pages/ECommerce";
import UxUiProjects from "./pages/UxUiProjects";
import GraphicalProjects from "./pages/GraphicalProjects";
import WebApps from "./pages/WebApps";
import ItHelp from "./pages/ItHelp";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import PortfolioWrapper from "./components/PortfolioWrapper";
import AOS from 'aos';
import "aos/dist/aos.css";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PageLocal from "./pages/PageLocal";
import BlogPost from "./pages/BlogPost";
import GoogleAds from "./pages/GoogleAds";

function App() {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);

  return <Router>
          <Switch>
              <Route path="/" element={<Homepage />} />
              <Route path="/oferta" element={<Offer />} />
              <Route path="/strony-internetowe" element={<Websites />} />
              <Route path="/sklepy-internetowe" element={<ECommerce />} />
              <Route path="/projekty-ux-i-ui" element={<UxUiProjects />} />
              <Route path="/projektowanie-graficzne" element={<GraphicalProjects />} />
              <Route path="/aplikacje-webowe" element={<WebApps />} />
              <Route path="/obsluga-it" element={<ItHelp />} />
              <Route path="/o-nas" element={<AboutUs />} />
              <Route path="/kontakt" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route exact path="/portfolio" element={<Portfolio />} />
              <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />

              <Route path="/darmowa-wycena" element={<GoogleAds />} />

              <Route path="/strony-internetowe-golub-dobrzyn" element={<PageLocal city="Golub-Dobrzyń" where="Golubiu-Dobrzyniu" />} />
              <Route path="/strony-internetowe-brodnica" element={<PageLocal city="Brodnica" where="Brodnicy" />} />
              <Route path="/sklepy-internetowe-rypin" element={<PageLocal city="Rypin" where="Rypinie" />} />
              <Route path="/sklepy-internetowe-lipno" element={<PageLocal city="Lipno" where="Lipnie" />} />

              <Route path="/portfolio/caloe" element={<PortfolioWrapper page={1} />} />
              <Route path="/portfolio/czp-premium" element={<PortfolioWrapper page={2} />} />
              <Route path="/portfolio/kalchem" element={<PortfolioWrapper page={3} />} />
              <Route path="/portfolio/brunchbox" element={<PortfolioWrapper page={4} />} />
              <Route path="/portfolio/flightmedia" element={<PortfolioWrapper page={5} />} />
              <Route path="/portfolio/liderenergia" element={<PortfolioWrapper page={6} />} />
              <Route path="/portfolio/hotic-polska" element={<PortfolioWrapper page={7} />} />
              <Route path="/portfolio/tabularii" element={<PortfolioWrapper page={8} />} />
              <Route path="/portfolio/drokam" element={<PortfolioWrapper page={9} />} />
              <Route path="/portfolio/procentowo" element={<PortfolioWrapper page={10} />} />
              <Route path="/portfolio/hideisland" element={<PortfolioWrapper page={11} />} />
              <Route path="/portfolio/bednarscy" element={<PortfolioWrapper page={12} />} />
              <Route path="/portfolio/benmar-pompy" element={<PortfolioWrapper page={13} />} />
              <Route path="/portfolio/benmar" element={<PortfolioWrapper page={14} />} />
              <Route path="/portfolio/draft" element={<PortfolioWrapper page={15} />} />

              <Route path="/blog/jak-projektowac-strony-tworzenie-prototypow-makiet-wizualizacji-cz-1" element={<BlogPost article={1} />} />
              <Route path="/blog/jak-projektowac-strony-tworzenie-prototypow-makiet-wizualizacji-cz-2" element={<BlogPost article={2} />} />
          </Switch>
      </Router>
}

export default App;
