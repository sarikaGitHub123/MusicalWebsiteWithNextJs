import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <div className="min-h-screen  bg-black/[0.96] antialiased bg-grid-white/[0.02]">
     {/* <h1 className="text-2xl text-center">Default Page</h1> */}
     <HeroSection/>
     <FeaturedCourses/>
     <WhyUs/>
    </div>
  );
}
