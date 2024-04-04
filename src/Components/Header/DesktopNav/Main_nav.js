import React from "react";
import logo from "../../../images/logo.png";
import compare from "../../../images/compare.png";
import bag from "../../../images/bag.png";
import worldwide from "../../../images/worldwide.png";
const Main_nav = () => {
  return (
    <div className="h-20">
      <div className="flex mt-2 mb-4  justify-around ">
        <img src={logo} className="w-32   " alt="logo" />
        <form className="hidden md:flex">
          <input
            type="text"
            placeholder="Search"
            className="search bg-no-repeat bg-left  h-10 w-[400px] pl-10 text-black bg-[#f6f6f8] border-black border-[1px] rounded-3xl my-4 flex  "
          />
        </form>
        <div className="flex  space-x-0 xl:space-x-1 my-3 ">
          <a href="" className="hover:bg-gray-300 p-2">
            <img src={worldwide} className="w-7 " />
          </a>
          <a href="" className="hover:bg-gray-300 p-2">
            <img src={compare} className="w-7" />
          </a>
          <a href="" className="hover:bg-gray-300 p-2">
            <svg
              viewBox="0 0 24 24"
              width="26"
              height="26"
              fill="currentColor"
              aria-labelledby="your-account-:Ralm5e5:"
              class="zds-icon RC794g X9n9TI DlJ4rT _5Yd-hZ HlZ_Tf I_qHp3"
              focusable="false"
              aria-hidden="false"
              role="img"
              data-testid="user-account"
            >
              <title id="your-account-:Ralm5e5:">Your account</title>
              <path d="M21.645 22.866a28.717 28.717 0 0 0-6.46-7.817c-2.322-1.892-4.048-1.892-6.37 0a28.74 28.74 0 0 0-6.46 7.817.75.75 0 0 0 1.294.76 27.264 27.264 0 0 1 6.113-7.413A3.98 3.98 0 0 1 12 15.125a3.81 3.81 0 0 1 2.236 1.088 27.252 27.252 0 0 1 6.115 7.412.75.75 0 1 0 1.294-.76zM12 12.002A6.01 6.01 0 0 0 18.003 6 6.003 6.003 0 1 0 12 12.002zm0-10.505a4.502 4.502 0 1 1 0 9.005 4.502 4.502 0 0 1 0-9.005z"></path>
            </svg>
          </a>
          <a href="" className="hover:bg-gray-300 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              class="YmZp3wm8YGLViEfVcM98 r_BwswIYHVFor8jJiQRV toaMk0GxaAG7vBOid4Vs YBF_R1myMDGoGI42vIPM wishlist-header--icon"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#000"
                  d="M17.044 2a5.93 5.93 0 0 1 4.218 1.746 5.966 5.966 0 0 1 .036 8.382l-7.366 8.977c-.52.58-1.215.895-1.932.895a2.577 2.577 0 0 1-1.906-.863L2.71 12.134l-.15-.156a5.964 5.964 0 0 1 .18-8.232A5.93 5.93 0 0 1 6.957 2c1.575 0 3.057.607 4.178 1.708l.86.73.86-.721.173-.164A5.923 5.923 0 0 1 17.044 2zm0 1.818c-1.1 0-2.137.43-2.915 1.21l-.038.034a.934.934 0 0 1-.022.019L12.67 6.253l-.055.058a.92.92 0 0 1-1.21.017l-1.477-1.25-.02-.017a4.093 4.093 0 0 0-2.95-1.243c-1.102 0-2.137.43-2.916 1.21a4.148 4.148 0 0 0 0 5.856.92.92 0 0 1 .09.104l7.357 8.97c.244.266.751.297 1.048-.032l7.363-8.975.022-.027a4.152 4.152 0 0 0 .037-5.898 4.094 4.094 0 0 0-2.915-1.208z"
                ></path>
              </g>
            </svg>
          </a>
          <a href="" className=" hover:bg-gray-300 p-2">
            <img src={bag} className="w-7" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main_nav;
