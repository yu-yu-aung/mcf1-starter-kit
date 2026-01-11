
import Features from "./components/features";
import HeroSection from "./components/herosection";
import Testimonial from "./components/testimonial";


const Page = () => {
  return (
    <section className="w-[90%] mx-auto">
      <HeroSection />
      <Testimonial />
      <Features />
    </section>
  )
}

export default Page;