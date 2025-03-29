import About from "./landing/About";
import CaseStudies from "./landing/CaseStudies";
import Testimonials from "./landing/Testimonials";
import RecentWork from "./landing/RecentWork";
import GetInTouch from "./landing/GetInTouch";

export default function Home() {
  return (
    <div>
      <About/>
      <CaseStudies/>
      <Testimonials/>
      <RecentWork/>
      <GetInTouch/>
    </div>
  );
}
