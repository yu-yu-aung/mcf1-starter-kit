
import Data from "./components/data";
import Faq from "./components/faq";
import GetStarted from "./components/getstarted";
import HeroSection from "./components/herosection";
import Problem from "./components/problem";
import Solution from "./components/solution";
import Testimonial from "./components/testimonial";


const Page = () => {
  return (
    <section className="w-[90%] mx-auto bg-white">
      <HeroSection />
      <Problem />
      <Solution />
      <Testimonial />
      <Data />
      <Faq />
      <GetStarted />
    </section>
  )
}

export default Page;