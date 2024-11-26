import Brands from "./homepage/brands/page";
import Hero from "./homepage/hero/page";
import Products from "./homepage/products/page";

export default function Home(){
  return(
    <div>
     <Hero/>
     <Brands/>
     <Products/>
    </div>
  )
}