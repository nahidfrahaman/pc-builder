
import Category from "@/Components/Products/Category";
import AllProducts from "@/Components/Products/Products";
import BannerSection from "@/Components/Ui/Banner/Banner";
import dynamic from "next/dynamic";

const RootLayout = dynamic(() => import("../Components/Layout/RootLayOut"), {
  ssr: false,
});


const HomePage = ({products , category}) => {
   

  console.log(products, category)
      
  return (
    <div>
      <BannerSection></BannerSection>
      <AllProducts products={products}></AllProducts>
      <Category category={category}></Category>
    </div>
  )
}

export default HomePage

HomePage.getLayout = function getLayout (page) {
  return (<RootLayout>{page}</RootLayout>)
};


export const getStaticProps = async () => {
  const res = await fetch(`https://pc-builder-backend-iota.vercel.app/api/v1/allproducts`);
  const products= await res.json();
  const res1 = await fetch(`https://pc-builder-backend-iota.vercel.app/api/v1/allcategories`);
  const category= await res1.json();
 
   

  return { props: { products , category } };
};





