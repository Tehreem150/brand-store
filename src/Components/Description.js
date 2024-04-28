import React from "react";
import des_sofa from "../images/des_sofa.png";
import des_sofa1 from "../images/des_sofa1.png";
const Description = () => {
  return (
    <div>
      <p className="prod_1 text-left md:text-center  mx-4 sm:mx-16 lg:mx-28  mt-4">
        Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable
        active stereo speaker takes the unmistakable look and sound of Marshall,
        unplugs the chords, and takes the show on the road. Weighing in under 7
        pounds, the Kilburn is a lightweight piece of vintage styled
        engineering. Setting the bar as one of the loudest speakers in its
        class, the Kilburn is a compact, stout-hearted hero with a well-balanced
        audio which boasts a clear midrange and extended highs for a sound that
        is both articulate and pronounced. The analogue knobs allow you to fine
        tune the controls to your personal preferences while the
        guitar-influenced leather strap enables easy and stylish travel.
      </p>{" "}
      <div className="grid grid-cols-1 lg:grid-cols-2 space-y-10 lg:space-y-0 space-x-0 lg:space-x-10 my-10 mx-10 lg:mx-28">
        <div className="flex justify-center bg-[#F9F1E7] rounded-lg">
          <img src={des_sofa} alt="des sofa" />
        </div>
        <div className="flex justify-center bg-[#F9F1E7] rounded-lg">
          <img src={des_sofa1} alt="des sofa" />
        </div>
      </div>
    </div>
  );
};

export default Description;
