import React from 'react'
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

function App() {
  return <Router>
          <Switch>
              <Route path="/" element={<Homepage />} />
              <Route path="/oferta" element={<Offer />} />
              <Route path="/strony-internetowe" element={<Websites />} />
              <Route path="/sklepy-internetowe" element={<ECommerce />} />
              <Route path="/projekty-ux-i-ui" element={<UxUiProjects />} />
              <Route path="/projekty-graficzne" element={<GraphicalProjects />} />
              <Route path="/aplikacje-webowe" element={<WebApps />} />
              <Route path="/obsluga-it" element={<ItHelp />} />
              <Route path="/o-nas" element={<AboutUs />} />
              <Route path="/kontakt" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/portfolio" element={<Portfolio />} />
          </Switch>
      </Router>
}

export default App;
