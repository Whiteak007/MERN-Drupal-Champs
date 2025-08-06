import React from 'react'
import HeroCarousel from '../components/HeroCarousel'
import Experience from '../components/Experience'
import Promotion from '../components/Promotion'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import Trial from '../components/Trial'
import LatestBlogs from '../components/LatestBlogs'
import Clients from '../components/Clients'
import WhyChooseUs from '../components/WhyChooseUs'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <HeroCarousel />
            <Experience/>
            <Promotion/>
            <Projects/>
            <Testimonials/>
            <Trial/>
            <LatestBlogs/>
            <Clients/>/
            <WhyChooseUs/>
        </>
    )
}

export default Home