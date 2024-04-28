// import React from "react";
// function MainSlider() {
//   return (
//     <div>

//      <div className=" hidden lg:flex my-image bg-contain xl:bg-cover  bg-no-repeat   mx-auto ">
//         <div className=" flex  mt-64 ml-64 h-96 rounded-md   ">
//          <div className=" hidden lg:block ml-24 mr-8 md:ml-12 md:mr-12">
//             <p className=" pt-5 text-xl ">New Arrival</p>
//             <p className="text-4xl font-extrabold text-black mt-3 italic">
//               Taking you beyond <br />
//               the guidebook
//             </p>
//             <p className="text-3xl font-thin text-black mt-4">
//               To inspire you to live your best <br></br> life through Shopping
//             </p>
//             <button className="bg-[#ff0911] text-white text-xl w-48 p-3 mt-6 mb-16">
//               SHOP WITH ME!
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="  hidden  bg-pink-100  h-96    ">
//         <div className="  ml-24 mr-8 md:ml-32 md:mr-12">
//           <p className=" pt-8 text-xl">New Arrival</p>
//           <p className="text-5xl font-extrabold text-black mt-4 italic">
//             Taking you beyond <br />
//             the guidebook
//           </p>
//           <p className="text-3xl font-thin text-black mt-6">
//             To inspire you to live your best <br></br> life through travel
//           </p>
//           <button className="bg-pink-500 text-white text-xl w-48 p-3 mt-8 mb-16">
//             SHOP WITH US!
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MainSlider;
import React from "react";
const MainSlider = () => {
  return (
    <section className="container justify-center mx-auto mt-12  md:mt-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-0 md:mx-12  lg:mx-16 xl:mx-32 ">
        <div className="mt-3">
          <div
            className="deal wow fadeIn animated mb-4 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://demo2.swissbraintec.ch/next-backend/storage/media/1711866411-menu-banner-7.jpg)",
            }}
          >
            <div className="deal-top">
              <h2 className="text-2xl">Men Clothing</h2>
              <h5 className="text-gray-700">Shirt & Bag</h5>
              <h4>Summer Collection New Modern Design</h4>
              <p className="text-red-600 text-lg">Up to 20% Off</p>
            </div>

            <div className="deal-bottom">
              <p>Offer Ends In:</p>
              <div className="deals-countdown flex">
                <div className="countdown-section">
                  <span className="countdown-amount hover-up">27</span>
                  <span className="countdown-period">days</span>
                </div>
                <div className="countdown-section">
                  <span className="countdown-amount hover-up">11</span>
                  <span className="countdown-period">hours</span>
                </div>
                <div className="countdown-section">
                  <span className="countdown-amount hover-up">37</span>
                  <span className="countdown-period">mins</span>
                </div>
                <div className="countdown-section">
                  <span className="countdown-amount hover-up">34</span>
                  <span className="countdown-period">sec</span>
                </div>
              </div>
              <a href="/shop" className="btn hover-up inline-block mt-4">
                Shop Now<i className="fi-rs-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <div
            className="deal wow fadeIn animated mb-4 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://demo2.swissbraintec.ch/next-backend/storage/media/1711866411-menu-banner-8.jpg)",
            }}
          >
            <div className="deal-top">
              <h2 className="text-2xl">Men Clothing</h2>
              <h5 className="text-gray-700">Shirt & Bag</h5>
              <h4>Summer Collection New Modern Design</h4>
              <p className="text-red-600 text-lg">Up to 20% Off</p>
            </div>

            <div className="deal-bottom">
              <p>Offer Ends In:</p>
              <div className="deals-countdown flex">
                <div className="countdown-section">
                  <span className="countdown-amount hover-up">27</span>
                  <span className="countdown-period">days</span>
                </div>
                <div className="countdown-section">
                  <span className="countdown-amount hover-up">11</span>
                  <span className="countdown-period">hours</span>
                </div>
                <div className="countdown-section">
                  <span className="countdown-amount hover-up">37</span>
                  <span className="countdown-period">mins</span>
                </div>
                <div className="countdown-section">
                  <span className="countdown-amount hover-up">34</span>
                  <span className="countdown-period">sec</span>
                </div>
              </div>
              <a href="/shop" className="btn hover-up inline-block mt-4">
                Shop Now<i className="fi-rs-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSlider;
