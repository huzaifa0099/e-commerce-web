import Banner from "@/pages/Banner"
import Catogary from "@/pages/Catogary";
import Products from "@/pages/Products";
import Collections from "@/pages/Collections"
import BestSellers from "@/pages/BestSellers"
import Newsletter from "@/pages/Newsletter"
// import SingleProduct from "@/pages/SingleProduct"

export default function Home() {
  return (
   <>
   <Banner />
   <Catogary />
   <Products />
   <Collections />
   <BestSellers />
   <Newsletter />
   {/* <SingleProduct /> */}
   </>
  );
}
