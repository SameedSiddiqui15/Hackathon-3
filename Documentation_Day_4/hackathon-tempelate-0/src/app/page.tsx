import BlogSection from "./components/BlogSection";
import HomeHero from "./components/HomeHero";
import HomeHero2 from "./components/HomeHero2";
import Navbar from "./components/Navbar";
import NewArrival from "./components/NewArrivals";
import TopPicks from "./components/TopPicks";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div style={{ backgroundColor: "#FBEBB5" }}>
        <Navbar />
        <HomeHero />
      </div>
      <div style={{ backgroundColor: "#FAF4F4" }}>
        <HomeHero2 />
      </div>
      <TopPicks />
      <div style={{ backgroundColor: "#FFF9E5" }}>
        <NewArrival />
      </div>
      <BlogSection />
        <div className="bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: "url('../images/Group 43.png')" }}>
          <div className="text-center py-32 max-w-[1440px]">
            <h2 className="text-5xl font-extrabold mb-2">Our Instagram</h2>
            <p className="text-gray-600 mb-4">Follow our store on Instagram</p>
            <button className=" text-black font-bold py-2 px-14 rounded-full" style={{ backgroundColor: "#FAF4F4", boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }}>
            <Link href={'https://www.instagram.com/maybe_sameed/?igsh=MWRrcWRpZ3Fwbm15bQ%3D%3D'} target="blank">
              Follow us
            </Link>
            </button>
          </div>
        </div>
    </>
  );
}
