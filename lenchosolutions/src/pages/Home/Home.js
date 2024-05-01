
// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
// // import Banner from "../../components/Banner/Banner";
// // import BannerBottom from "../../components/Banner/BannerBottom";
// // import BestSellers from "../../components/home/BestSellers/BestSellers";
// // import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
// // import Sale from "../../components/home/Sale/Sale";
// // import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
// // import YearProduct from "../../components/home/YearProduct/YearProduct";

// const Home = () => {
//   const location = useLocation();
//   const [prevLocation, setPrevLocation] = useState("");
//   useEffect(() => {
//     setPrevLocation(location.state.data);
//   }, [location]); 
//   return (
//     <div className="max-w-container mx-auto px-4">
//             <Breadcrumbs title="Home" prevLocation={prevLocation} />
//       <div className="pb-10">
//         <h1 className="max-w-[600px] text-base text-lightText mb-2">
//           <span className="text-primeColor font-semibold text-lg">Lencho Solutions</span>{" "}
//           provide all the services that are required in educational institutes. Be it from id cards, id cards, photos to online exam and results 
//         </h1>
//         <Link to="/">
//           <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
//             Continue Shopping
//           </button>
//         </Link>
//       </div>
//     </div>
//     // <div className="w-full mx-auto">
//     //   {/* <Banner /> */}
//     //   <BannerBottom />
//     //   <div className="max-w-container mx-auto px-4">
//     //     <Sale />
//     //     <NewArrivals />
//     //     <BestSellers />
//     //     <YearProduct />
//     //     <SpecialOffers />
//     //   </div>
//     // </div>
//   );
// };

// export default Home;

import React from "react";
import { Link } from "react-router-dom";
// import Banner from "../../components/Banner/Banner";
// import BannerBottom from "../../components/Banner/BannerBottom";
// import BestSellers from "../../components/home/BestSellers/BestSellers";
// import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
// import Sale from "../../components/home/Sale/Sale";
// import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
// import YearProduct from "../../components/home/YearProduct/YearProduct";

const Home = () => {
  return (
    <div className=" p-10 bg-gray-300">
      <div className="mt-20 mb-20">
         <h1 className="max-w-[600px] text-base text-lightText mb-2">
           <span className="text-primeColor font-semibold text-lg">Lencho Solutions</span>{" "}
           provide all the services that are required in educational institutes. Be it from id cards, id cards, photos to online exam and results 
         </h1>
         <Link to="/">
           <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
             Continue Shopping
           </button>
         </Link>
      </div>
    </div>
  );
};

export default Home;