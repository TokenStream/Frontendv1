import WhyStream from "../components/home/WhyStream";
import About from "../components/home/About";
import HeroSection from "../components/home/HeroSection";
import MaxWrapper from "../components/shared/MaxWrapper";
import HowItWorks from "../components/home/HowItWorks";
import Services from "../components/home/Services";
import Testimonial from "../components/home/Testimonial";


const Home = () => {
    return (
        <MaxWrapper className="w-full min-h-screen flex flex-col">
            <HeroSection />
            <About />
            <WhyStream />
            <HowItWorks />
            <Services />
            <Testimonial />
        </MaxWrapper>
    )
}

export default Home