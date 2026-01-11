
import Faq from "./components/faq";
import Features from "./components/features";
import GetStarted from "./components/getstarted";
import HeroSection from "./components/herosection";
import Testimonial from "./components/testimonial";


const Page = () => {
  return (
    <section className="w-[90%] mx-auto bg-white">
      <HeroSection />
      <Testimonial />
      <Features />
      <Faq />
      <GetStarted />
    </section>
  )
}

export default Page;