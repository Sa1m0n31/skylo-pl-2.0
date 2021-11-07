import React from 'react'
import Hero from "../components/Hero";
import AfterHeroSection from "../components/AfterHeroSection";
import OfferSection from "../components/OfferSection";
import AboutUsSection from "../components/AboutUsSection";
import Strengths from "../components/Strengths";
import TechStack from "../components/TechStack";

const Homepage = () => {
    return <div className="container">
        <Hero />
        <AfterHeroSection />
        <OfferSection />
        <AboutUsSection />
        <Strengths />
        <TechStack />
    </div>
}

export default Homepage;
