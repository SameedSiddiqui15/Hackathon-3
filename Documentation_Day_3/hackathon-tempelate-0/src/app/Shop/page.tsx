import Navbar from "../components/Navbar";
import ShopFilter from "../components/ShopFilter";
import ShopFooterTop from "../components/ShopFooterTop";
import ShopHero from "../components/ShopHero";
import ShopTopPicks from "../components/ShopTopPicks";

export default function Shop() {
  return (
    <>
        <Navbar/>
        <ShopHero/>
        <ShopFilter/>
        <ShopTopPicks/>
        <ShopFooterTop/>
    </>
  )
}
