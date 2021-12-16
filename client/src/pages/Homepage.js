import React from 'react'
import Hero from "../components/Hero";
import AfterHeroSection from "../components/AfterHeroSection";
import OfferSection from "../components/OfferSection";
import AboutUsSection from "../components/AboutUsSection";
import Strengths from "../components/Strengths";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";
import PortfolioSection from "../components/PortfolioSection";
import CompaniesSection from "../components/CompaniesSection";
import Testimonials from "../components/Testimonials";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";
import vector1 from "../static/img/vector-3.png";
import vector2 from "../static/img/vector-4.png";
import vector3 from "../static/img/vector-5.png";

const Homepage = () => {
    return <div className="container">
        <img className="backgroundImg backgroundImg--3" src={vector1} alt="tlo" />
        <img className="backgroundImg backgroundImg--4" src={vector2} alt="tlo" />
        <img className="backgroundImg backgroundImg--5" src={vector3} alt="tlo" />
        <Hero />
        <AfterHeroSection />
        <OfferSection />
        <AboutUsSection />
        <Strengths />
        <TechStack />
        <Contact />
        <PortfolioSection />
        <CompaniesSection />
        <Testimonials />
        {/*<BlogSection />*/}
        <Footer />
    </div>
}

export default Homepage;
