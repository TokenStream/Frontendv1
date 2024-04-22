import About from "../components/home/About";
import HeroSection from "../components/home/HeroSection";
import MaxWrapper from "../components/shared/MaxWrapper";


const Home = () => {
    return (
        <MaxWrapper className="w-full min-h-screen flex flex-col">
            <HeroSection />
            <About />
        </MaxWrapper>
    )
}

export default Home