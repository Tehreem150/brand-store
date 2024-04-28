import React from "react";
import skin1 from "../../../images/skin1.jpg";
import suit from "../../../images/suit.svg";
import jacket from "../../../images/ICONS/damen mode/jacket.svg";
import glasses from "../../../images/ICONS/herren mode/glasses.svg";
import belt from "../../../images/ICONS/herren mode/belt.svg";
import hoodie from "../../../images/ICONS/herren mode/hoodie.svg";
import sakko from "../../../images/ICONS/herren mode/sakko.svg";
import shirt from "../../../images/ICONS/herren mode/shirt.svg";
import sneakers from "../../../images/ICONS/herren mode/sneakers.svg";
import watch from "../../../images/ICONS/herren mode/watch.svg";

const Brands = () => {
  return (
    <div className="grid justify center mx-0 xl:mx-16 2xl:mx-40 py-10 grid-cols-4  gap-0 xl:gap-8">
      <div className="pr-10 pl-10 xl:pl-0 xl:pr-20">
        <ul className=" text-black text-[14px] font-semibold space-y-3">
          <li className="uppercase font-semibold  w-full">
            <a>LOOKS WOMEN</a>
          </li>
          <span className="block h-[1px] w-full bg-black my-2 "></span>

          <li className="flex space-x-2">
            <img src={suit} className="w-[24px] h-[24px]" />
            <a>Saisonale Inspiration</a>
          </li>
          <li className="flex space-x-2">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              class="YmZp3wm8YGLViEfVcM98 r_BwswIYHVFor8jJiQRV toaMk0GxaAG7vBOid4Vs YBF_R1myMDGoGI42vIPM wishlist-header--icon"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#000"
                  d="M17.044 2a5.93 5.93 0 0 1 4.218 1.746 5.966 5.966 0 0 1 .036 8.382l-7.366 8.977c-.52.58-1.215.895-1.932.895a2.577 2.577 0 0 1-1.906-.863L2.71 12.134l-.15-.156a5.964 5.964 0 0 1 .18-8.232A5.93 5.93 0 0 1 6.957 2c1.575 0 3.057.607 4.178 1.708l.86.73.86-.721.173-.164A5.923 5.923 0 0 1 17.044 2zm0 1.818c-1.1 0-2.137.43-2.915 1.21l-.038.034a.934.934 0 0 1-.022.019L12.67 6.253l-.055.058a.92.92 0 0 1-1.21.017l-1.477-1.25-.02-.017a4.093 4.093 0 0 0-2.95-1.243c-1.102 0-2.137.43-2.916 1.21a4.148 4.148 0 0 0 0 5.856.92.92 0 0 1 .09.104l7.357 8.97c.244.266.751.297 1.048-.032l7.363-8.975.022-.027a4.152 4.152 0 0 0 .037-5.898 4.094 4.094 0 0 0-2.915-1.208z"
                ></path>
              </g>
            </svg> */}
            <img src={jacket} className="w-[24px] h-[24px]" />
            <a>Looks aus dem Magazin</a>
          </li>
          <li className="flex space-x-2">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              class="YmZp3wm8YGLViEfVcM98 r_BwswIYHVFor8jJiQRV toaMk0GxaAG7vBOid4Vs YBF_R1myMDGoGI42vIPM wishlist-header--icon"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#000"
                  d="M17.044 2a5.93 5.93 0 0 1 4.218 1.746 5.966 5.966 0 0 1 .036 8.382l-7.366 8.977c-.52.58-1.215.895-1.932.895a2.577 2.577 0 0 1-1.906-.863L2.71 12.134l-.15-.156a5.964 5.964 0 0 1 .18-8.232A5.93 5.93 0 0 1 6.957 2c1.575 0 3.057.607 4.178 1.708l.86.73.86-.721.173-.164A5.923 5.923 0 0 1 17.044 2zm0 1.818c-1.1 0-2.137.43-2.915 1.21l-.038.034a.934.934 0 0 1-.022.019L12.67 6.253l-.055.058a.92.92 0 0 1-1.21.017l-1.477-1.25-.02-.017a4.093 4.093 0 0 0-2.95-1.243c-1.102 0-2.137.43-2.916 1.21a4.148 4.148 0 0 0 0 5.856.92.92 0 0 1 .09.104l7.357 8.97c.244.266.751.297 1.048-.032l7.363-8.975.022-.027a4.152 4.152 0 0 0 .037-5.898 4.094 4.094 0 0 0-2.915-1.208z"
                ></path>
              </g>
            </svg> */}
            <img src={glasses} className="w-[24px] h-[24px]" />

            <a href="">Premium Looks</a>
          </li>
          <li className="flex space-x-2">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              class="YmZp3wm8YGLViEfVcM98 r_BwswIYHVFor8jJiQRV toaMk0GxaAG7vBOid4Vs YBF_R1myMDGoGI42vIPM wishlist-header--icon"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#000"
                  d="M17.044 2a5.93 5.93 0 0 1 4.218 1.746 5.966 5.966 0 0 1 .036 8.382l-7.366 8.977c-.52.58-1.215.895-1.932.895a2.577 2.577 0 0 1-1.906-.863L2.71 12.134l-.15-.156a5.964 5.964 0 0 1 .18-8.232A5.93 5.93 0 0 1 6.957 2c1.575 0 3.057.607 4.178 1.708l.86.73.86-.721.173-.164A5.923 5.923 0 0 1 17.044 2zm0 1.818c-1.1 0-2.137.43-2.915 1.21l-.038.034a.934.934 0 0 1-.022.019L12.67 6.253l-.055.058a.92.92 0 0 1-1.21.017l-1.477-1.25-.02-.017a4.093 4.093 0 0 0-2.95-1.243c-1.102 0-2.137.43-2.916 1.21a4.148 4.148 0 0 0 0 5.856.92.92 0 0 1 .09.104l7.357 8.97c.244.266.751.297 1.048-.032l7.363-8.975.022-.027a4.152 4.152 0 0 0 .037-5.898 4.094 4.094 0 0 0-2.915-1.208z"
                ></path>
              </g>
            </svg> */}
            <img src={belt} className="w-[24px] h-[24px]" />
            <a href="">Trendy Outerwear</a>
          </li>
          <li className="flex space-x-2">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              class="YmZp3wm8YGLViEfVcM98 r_BwswIYHVFor8jJiQRV toaMk0GxaAG7vBOid4Vs YBF_R1myMDGoGI42vIPM wishlist-header--icon"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#000"
                  d="M17.044 2a5.93 5.93 0 0 1 4.218 1.746 5.966 5.966 0 0 1 .036 8.382l-7.366 8.977c-.52.58-1.215.895-1.932.895a2.577 2.577 0 0 1-1.906-.863L2.71 12.134l-.15-.156a5.964 5.964 0 0 1 .18-8.232A5.93 5.93 0 0 1 6.957 2c1.575 0 3.057.607 4.178 1.708l.86.73.86-.721.173-.164A5.923 5.923 0 0 1 17.044 2zm0 1.818c-1.1 0-2.137.43-2.915 1.21l-.038.034a.934.934 0 0 1-.022.019L12.67 6.253l-.055.058a.92.92 0 0 1-1.21.017l-1.477-1.25-.02-.017a4.093 4.093 0 0 0-2.95-1.243c-1.102 0-2.137.43-2.916 1.21a4.148 4.148 0 0 0 0 5.856.92.92 0 0 1 .09.104l7.357 8.97c.244.266.751.297 1.048-.032l7.363-8.975.022-.027a4.152 4.152 0 0 0 .037-5.898 4.094 4.094 0 0 0-2.915-1.208z"
                ></path>
              </g>
            </svg> */}
            <img src={hoodie} className="w-[24px] h-[24px]" />
            <a href="">Trendy Dresses</a>
          </li>
          <li className="flex space-x-2">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              class="YmZp3wm8YGLViEfVcM98 r_BwswIYHVFor8jJiQRV toaMk0GxaAG7vBOid4Vs YBF_R1myMDGoGI42vIPM wishlist-header--icon"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#000"
                  d="M17.044 2a5.93 5.93 0 0 1 4.218 1.746 5.966 5.966 0 0 1 .036 8.382l-7.366 8.977c-.52.58-1.215.895-1.932.895a2.577 2.577 0 0 1-1.906-.863L2.71 12.134l-.15-.156a5.964 5.964 0 0 1 .18-8.232A5.93 5.93 0 0 1 6.957 2c1.575 0 3.057.607 4.178 1.708l.86.73.86-.721.173-.164A5.923 5.923 0 0 1 17.044 2zm0 1.818c-1.1 0-2.137.43-2.915 1.21l-.038.034a.934.934 0 0 1-.022.019L12.67 6.253l-.055.058a.92.92 0 0 1-1.21.017l-1.477-1.25-.02-.017a4.093 4.093 0 0 0-2.95-1.243c-1.102 0-2.137.43-2.916 1.21a4.148 4.148 0 0 0 0 5.856.92.92 0 0 1 .09.104l7.357 8.97c.244.266.751.297 1.048-.032l7.363-8.975.022-.027a4.152 4.152 0 0 0 .037-5.898 4.094 4.094 0 0 0-2.915-1.208z"
                ></path>
              </g>
            </svg> */}
            <img src={sakko} className="w-[24px] h-[24px]" />

            <a href="">City Styles</a>
          </li>
          <li className="flex space-x-2">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              class="YmZp3wm8YGLViEfVcM98 r_BwswIYHVFor8jJiQRV toaMk0GxaAG7vBOid4Vs YBF_R1myMDGoGI42vIPM wishlist-header--icon"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#000"
                  d="M17.044 2a5.93 5.93 0 0 1 4.218 1.746 5.966 5.966 0 0 1 .036 8.382l-7.366 8.977c-.52.58-1.215.895-1.932.895a2.577 2.577 0 0 1-1.906-.863L2.71 12.134l-.15-.156a5.964 5.964 0 0 1 .18-8.232A5.93 5.93 0 0 1 6.957 2c1.575 0 3.057.607 4.178 1.708l.86.73.86-.721.173-.164A5.923 5.923 0 0 1 17.044 2zm0 1.818c-1.1 0-2.137.43-2.915 1.21l-.038.034a.934.934 0 0 1-.022.019L12.67 6.253l-.055.058a.92.92 0 0 1-1.21.017l-1.477-1.25-.02-.017a4.093 4.093 0 0 0-2.95-1.243c-1.102 0-2.137.43-2.916 1.21a4.148 4.148 0 0 0 0 5.856.92.92 0 0 1 .09.104l7.357 8.97c.244.266.751.297 1.048-.032l7.363-8.975.022-.027a4.152 4.152 0 0 0 .037-5.898 4.094 4.094 0 0 0-2.915-1.208z"
                ></path>
              </g>
            </svg> */}
            <img src={shirt} className="w-[24px] h-[24px]" />
            <a href="">Elegante Outfits</a>
          </li>
          <li className="flex space-x-2">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              class="YmZp3wm8YGLViEfVcM98 r_BwswIYHVFor8jJiQRV toaMk0GxaAG7vBOid4Vs YBF_R1myMDGoGI42vIPM wishlist-header--icon"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#000"
                  d="M17.044 2a5.93 5.93 0 0 1 4.218 1.746 5.966 5.966 0 0 1 .036 8.382l-7.366 8.977c-.52.58-1.215.895-1.932.895a2.577 2.577 0 0 1-1.906-.863L2.71 12.134l-.15-.156a5.964 5.964 0 0 1 .18-8.232A5.93 5.93 0 0 1 6.957 2c1.575 0 3.057.607 4.178 1.708l.86.73.86-.721.173-.164A5.923 5.923 0 0 1 17.044 2zm0 1.818c-1.1 0-2.137.43-2.915 1.21l-.038.034a.934.934 0 0 1-.022.019L12.67 6.253l-.055.058a.92.92 0 0 1-1.21.017l-1.477-1.25-.02-.017a4.093 4.093 0 0 0-2.95-1.243c-1.102 0-2.137.43-2.916 1.21a4.148 4.148 0 0 0 0 5.856.92.92 0 0 1 .09.104l7.357 8.97c.244.266.751.297 1.048-.032l7.363-8.975.022-.027a4.152 4.152 0 0 0 .037-5.898 4.094 4.094 0 0 0-2.915-1.208z"
                ></path>
              </g>
            </svg> */}
            <img src={sneakers} className="w-[24px] h-[24px]" />
            <a href="">Festive Looks</a>
          </li>
          <li className="flex space-x-2">
            <img src={watch} className="w-[24px] h-[24px]" />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              class="YmZp3wm8YGLViEfVcM98 r_BwswIYHVFor8jJiQRV toaMk0GxaAG7vBOid4Vs YBF_R1myMDGoGI42vIPM wishlist-header--icon"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#000"
                  d="M17.044 2a5.93 5.93 0 0 1 4.218 1.746 5.966 5.966 0 0 1 .036 8.382l-7.366 8.977c-.52.58-1.215.895-1.932.895a2.577 2.577 0 0 1-1.906-.863L2.71 12.134l-.15-.156a5.964 5.964 0 0 1 .18-8.232A5.93 5.93 0 0 1 6.957 2c1.575 0 3.057.607 4.178 1.708l.86.73.86-.721.173-.164A5.923 5.923 0 0 1 17.044 2zm0 1.818c-1.1 0-2.137.43-2.915 1.21l-.038.034a.934.934 0 0 1-.022.019L12.67 6.253l-.055.058a.92.92 0 0 1-1.21.017l-1.477-1.25-.02-.017a4.093 4.093 0 0 0-2.95-1.243c-1.102 0-2.137.43-2.916 1.21a4.148 4.148 0 0 0 0 5.856.92.92 0 0 1 .09.104l7.357 8.97c.244.266.751.297 1.048-.032l7.363-8.975.022-.027a4.152 4.152 0 0 0 .037-5.898 4.094 4.094 0 0 0-2.915-1.208z"
                ></path>
              </g>
            </svg> */}
            <a href="">Business Outfits</a>
          </li>
          <li className="flex space-x-2">
            <a>
              <span>&gt; Alle Looks anzeigen</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="pr-10 pl-10 xl:pl-0 xl:pr-20">
        <ul className=" text-black text-[14px] font-semibold space-y-3">
          <li className="uppercase font-semibold  w-full">
            <a>LOOKS WOMEN</a>
          </li>
          <span className="block h-[1px] w-full bg-black my-2 "></span>

          <li className="flex space-x-2">
            <img src={suit} className="w-[24px] h-[24px]" />
            <a>Saisonale Inspiration</a>
          </li>
          <li className="flex space-x-2">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              class="YmZp3wm8YGLViEfVcM98 r_BwswIYHVFor8jJiQRV toaMk0GxaAG7vBOid4Vs YBF_R1myMDGoGI42vIPM wishlist-header--icon"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#000"
                  d="M17.044 2a5.93 5.93 0 0 1 4.218 1.746 5.966 5.966 0 0 1 .036 8.382l-7.366 8.977c-.52.58-1.215.895-1.932.895a2.577 2.577 0 0 1-1.906-.863L2.71 12.134l-.15-.156a5.964 5.964 0 0 1 .18-8.232A5.93 5.93 0 0 1 6.957 2c1.575 0 3.057.607 4.178 1.708l.86.73.86-.721.173-.164A5.923 5.923 0 0 1 17.044 2zm0 1.818c-1.1 0-2.137.43-2.915 1.21l-.038.034a.934.934 0 0 1-.022.019L12.67 6.253l-.055.058a.92.92 0 0 1-1.21.017l-1.477-1.25-.02-.017a4.093 4.093 0 0 0-2.95-1.243c-1.102 0-2.137.43-2.916 1.21a4.148 4.148 0 0 0 0 5.856.92.92 0 0 1 .09.104l7.357 8.97c.244.266.751.297 1.048-.032l7.363-8.975.022-.027a4.152 4.152 0 0 0 .037-5.898 4.094 4.094 0 0 0-2.915-1.208z"
                ></path>
              </g>
            </svg> */}
            <img src={jacket} className="w-[24px] h-[24px]" />
            <a>Looks aus dem Magazin</a>
          </li>
          <li className="flex space-x-2">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              class="YmZp3wm8YGLViEfVcM98 r_BwswIYHVFor8jJiQRV toaMk0GxaAG7vBOid4Vs YBF_R1myMDGoGI42vIPM wishlist-header--icon"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#000"
                  d="M17.044 2a5.93 5.93 0 0 1 4.218 1.746 5.966 5.966 0 0 1 .036 8.382l-7.366 8.977c-.52.58-1.215.895-1.932.895a2.577 2.577 0 0 1-1.906-.863L2.71 12.134l-.15-.156a5.964 5.964 0 0 1 .18-8.232A5.93 5.93 0 0 1 6.957 2c1.575 0 3.057.607 4.178 1.708l.86.73.86-.721.173-.164A5.923 5.923 0 0 1 17.044 2zm0 1.818c-1.1 0-2.137.43-2.915 1.21l-.038.034a.934.934 0 0 1-.022.019L12.67 6.253l-.055.058a.92.92 0 0 1-1.21.017l-1.477-1.25-.02-.017a4.093 4.093 0 0 0-2.95-1.243c-1.102 0-2.137.43-2.916 1.21a4.148 4.148 0 0 0 0 5.856.92.92 0 0 1 .09.104l7.357 8.97c.244.266.751.297 1.048-.032l7.363-8.975.022-.027a4.152 4.152 0 0 0 .037-5.898 4.094 4.094 0 0 0-2.915-1.208z"
                ></path>
              </g>
            </svg> */}
            <img src={glasses} className="w-[24px] h-[24px]" />

            <a href="">Premium Looks</a>
          </li>
          <li className="flex space-x-2">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              class="YmZp3wm8YGLViEfVcM98 r_BwswIYHVFor8jJiQRV toaMk0GxaAG7vBOid4Vs YBF_R1myMDGoGI42vIPM wishlist-header--icon"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#000"
                  d="M17.044 2a5.93 5.93 0 0 1 4.218 1.746 5.966 5.966 0 0 1 .036 8.382l-7.366 8.977c-.52.58-1.215.895-1.932.895a2.577 2.577 0 0 1-1.906-.863L2.71 12.134l-.15-.156a5.964 5.964 0 0 1 .18-8.232A5.93 5.93 0 0 1 6.957 2c1.575 0 3.057.607 4.178 1.708l.86.73.86-.721.173-.164A5.923 5.923 0 0 1 17.044 2zm0 1.818c-1.1 0-2.137.43-2.915 1.21l-.038.034a.934.934 0 0 1-.022.019L12.67 6.253l-.055.058a.92.92 0 0 1-1.21.017l-1.477-1.25-.02-.017a4.093 4.093 0 0 0-2.95-1.243c-1.102 0-2.137.43-2.916 1.21a4.148 4.148 0 0 0 0 5.856.92.92 0 0 1 .09.104l7.357 8.97c.244.266.751.297 1.048-.032l7.363-8.975.022-.027a4.152 4.152 0 0 0 .037-5.898 4.094 4.094 0 0 0-2.915-1.208z"
                ></path>
              </g>
            </svg> */}
            <img src={belt} className="w-[24px] h-[24px]" />
            <a href="">Trendy Outerwear</a>
          </li>
          <li className="flex space-x-2">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              class="YmZp3wm8YGLViEfVcM98 r_BwswIYHVFor8jJiQRV toaMk0GxaAG7vBOid4Vs YBF_R1myMDGoGI42vIPM wishlist-header--icon"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#000"
                  d="M17.044 2a5.93 5.93 0 0 1 4.218 1.746 5.966 5.966 0 0 1 .036 8.382l-7.366 8.977c-.52.58-1.215.895-1.932.895a2.577 2.577 0 0 1-1.906-.863L2.71 12.134l-.15-.156a5.964 5.964 0 0 1 .18-8.232A5.93 5.93 0 0 1 6.957 2c1.575 0 3.057.607 4.178 1.708l.86.73.86-.721.173-.164A5.923 5.923 0 0 1 17.044 2zm0 1.818c-1.1 0-2.137.43-2.915 1.21l-.038.034a.934.934 0 0 1-.022.019L12.67 6.253l-.055.058a.92.92 0 0 1-1.21.017l-1.477-1.25-.02-.017a4.093 4.093 0 0 0-2.95-1.243c-1.102 0-2.137.43-2.916 1.21a4.148 4.148 0 0 0 0 5.856.92.92 0 0 1 .09.104l7.357 8.97c.244.266.751.297 1.048-.032l7.363-8.975.022-.027a4.152 4.152 0 0 0 .037-5.898 4.094 4.094 0 0 0-2.915-1.208z"
                ></path>
              </g>
            </svg> */}
            <img src={hoodie} className="w-[24px] h-[24px]" />
            <a href="">Trendy Dresses</a>
          </li>
          <li className="flex space-x-2">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              class="YmZp3wm8YGLViEfVcM98 r_BwswIYHVFor8jJiQRV toaMk0GxaAG7vBOid4Vs YBF_R1myMDGoGI42vIPM wishlist-header--icon"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#000"
                  d="M17.044 2a5.93 5.93 0 0 1 4.218 1.746 5.966 5.966 0 0 1 .036 8.382l-7.366 8.977c-.52.58-1.215.895-1.932.895a2.577 2.577 0 0 1-1.906-.863L2.71 12.134l-.15-.156a5.964 5.964 0 0 1 .18-8.232A5.93 5.93 0 0 1 6.957 2c1.575 0 3.057.607 4.178 1.708l.86.73.86-.721.173-.164A5.923 5.923 0 0 1 17.044 2zm0 1.818c-1.1 0-2.137.43-2.915 1.21l-.038.034a.934.934 0 0 1-.022.019L12.67 6.253l-.055.058a.92.92 0 0 1-1.21.017l-1.477-1.25-.02-.017a4.093 4.093 0 0 0-2.95-1.243c-1.102 0-2.137.43-2.916 1.21a4.148 4.148 0 0 0 0 5.856.92.92 0 0 1 .09.104l7.357 8.97c.244.266.751.297 1.048-.032l7.363-8.975.022-.027a4.152 4.152 0 0 0 .037-5.898 4.094 4.094 0 0 0-2.915-1.208z"
                ></path>
              </g>
            </svg> */}
            <img src={sakko} className="w-[24px] h-[24px]" />

            <a href="">City Styles</a>
          </li>
          <li className="flex space-x-2">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              class="YmZp3wm8YGLViEfVcM98 r_BwswIYHVFor8jJiQRV toaMk0GxaAG7vBOid4Vs YBF_R1myMDGoGI42vIPM wishlist-header--icon"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#000"
                  d="M17.044 2a5.93 5.93 0 0 1 4.218 1.746 5.966 5.966 0 0 1 .036 8.382l-7.366 8.977c-.52.58-1.215.895-1.932.895a2.577 2.577 0 0 1-1.906-.863L2.71 12.134l-.15-.156a5.964 5.964 0 0 1 .18-8.232A5.93 5.93 0 0 1 6.957 2c1.575 0 3.057.607 4.178 1.708l.86.73.86-.721.173-.164A5.923 5.923 0 0 1 17.044 2zm0 1.818c-1.1 0-2.137.43-2.915 1.21l-.038.034a.934.934 0 0 1-.022.019L12.67 6.253l-.055.058a.92.92 0 0 1-1.21.017l-1.477-1.25-.02-.017a4.093 4.093 0 0 0-2.95-1.243c-1.102 0-2.137.43-2.916 1.21a4.148 4.148 0 0 0 0 5.856.92.92 0 0 1 .09.104l7.357 8.97c.244.266.751.297 1.048-.032l7.363-8.975.022-.027a4.152 4.152 0 0 0 .037-5.898 4.094 4.094 0 0 0-2.915-1.208z"
                ></path>
              </g>
            </svg> */}
            <img src={shirt} className="w-[24px] h-[24px]" />
            <a href="">Elegante Outfits</a>
          </li>
          <li className="flex space-x-2">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              class="YmZp3wm8YGLViEfVcM98 r_BwswIYHVFor8jJiQRV toaMk0GxaAG7vBOid4Vs YBF_R1myMDGoGI42vIPM wishlist-header--icon"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#000"
                  d="M17.044 2a5.93 5.93 0 0 1 4.218 1.746 5.966 5.966 0 0 1 .036 8.382l-7.366 8.977c-.52.58-1.215.895-1.932.895a2.577 2.577 0 0 1-1.906-.863L2.71 12.134l-.15-.156a5.964 5.964 0 0 1 .18-8.232A5.93 5.93 0 0 1 6.957 2c1.575 0 3.057.607 4.178 1.708l.86.73.86-.721.173-.164A5.923 5.923 0 0 1 17.044 2zm0 1.818c-1.1 0-2.137.43-2.915 1.21l-.038.034a.934.934 0 0 1-.022.019L12.67 6.253l-.055.058a.92.92 0 0 1-1.21.017l-1.477-1.25-.02-.017a4.093 4.093 0 0 0-2.95-1.243c-1.102 0-2.137.43-2.916 1.21a4.148 4.148 0 0 0 0 5.856.92.92 0 0 1 .09.104l7.357 8.97c.244.266.751.297 1.048-.032l7.363-8.975.022-.027a4.152 4.152 0 0 0 .037-5.898 4.094 4.094 0 0 0-2.915-1.208z"
                ></path>
              </g>
            </svg> */}
            <img src={sneakers} className="w-[24px] h-[24px]" />
            <a href="">Festive Looks</a>
          </li>
          <li className="flex space-x-2">
            <img src={watch} className="w-[24px] h-[24px]" />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              class="YmZp3wm8YGLViEfVcM98 r_BwswIYHVFor8jJiQRV toaMk0GxaAG7vBOid4Vs YBF_R1myMDGoGI42vIPM wishlist-header--icon"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#000"
                  d="M17.044 2a5.93 5.93 0 0 1 4.218 1.746 5.966 5.966 0 0 1 .036 8.382l-7.366 8.977c-.52.58-1.215.895-1.932.895a2.577 2.577 0 0 1-1.906-.863L2.71 12.134l-.15-.156a5.964 5.964 0 0 1 .18-8.232A5.93 5.93 0 0 1 6.957 2c1.575 0 3.057.607 4.178 1.708l.86.73.86-.721.173-.164A5.923 5.923 0 0 1 17.044 2zm0 1.818c-1.1 0-2.137.43-2.915 1.21l-.038.034a.934.934 0 0 1-.022.019L12.67 6.253l-.055.058a.92.92 0 0 1-1.21.017l-1.477-1.25-.02-.017a4.093 4.093 0 0 0-2.95-1.243c-1.102 0-2.137.43-2.916 1.21a4.148 4.148 0 0 0 0 5.856.92.92 0 0 1 .09.104l7.357 8.97c.244.266.751.297 1.048-.032l7.363-8.975.022-.027a4.152 4.152 0 0 0 .037-5.898 4.094 4.094 0 0 0-2.915-1.208z"
                ></path>
              </g>
            </svg> */}
            <a href="">Business Outfits</a>
          </li>
          <li className="flex space-x-2">
            <a>
              <span>&gt; Alle Looks anzeigen</span>
            </a>
          </li>
        </ul>
      </div>
      {/* <div>
        <img src={skin1} />
      </div> */}
      <div className="pr-10 pl-10 xl:pl-0 xl:pr-20">
        <ul className=" text-black text-[14px] font-semibold space-y-3">
          <li className="uppercase font-semibold  w-full">
            <a>LOOKS WOMEN</a>
          </li>
          <span className="block h-[1px] w-full bg-black my-2 "></span>

          <li className="flex space-x-2">
            <img src={suit} className="w-[24px] h-[24px]" />
            <a>Saisonale Inspiration</a>
          </li>
          <li className="flex space-x-2">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              class="YmZp3wm8YGLViEfVcM98 r_BwswIYHVFor8jJiQRV toaMk0GxaAG7vBOid4Vs YBF_R1myMDGoGI42vIPM wishlist-header--icon"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#000"
                  d="M17.044 2a5.93 5.93 0 0 1 4.218 1.746 5.966 5.966 0 0 1 .036 8.382l-7.366 8.977c-.52.58-1.215.895-1.932.895a2.577 2.577 0 0 1-1.906-.863L2.71 12.134l-.15-.156a5.964 5.964 0 0 1 .18-8.232A5.93 5.93 0 0 1 6.957 2c1.575 0 3.057.607 4.178 1.708l.86.73.86-.721.173-.164A5.923 5.923 0 0 1 17.044 2zm0 1.818c-1.1 0-2.137.43-2.915 1.21l-.038.034a.934.934 0 0 1-.022.019L12.67 6.253l-.055.058a.92.92 0 0 1-1.21.017l-1.477-1.25-.02-.017a4.093 4.093 0 0 0-2.95-1.243c-1.102 0-2.137.43-2.916 1.21a4.148 4.148 0 0 0 0 5.856.92.92 0 0 1 .09.104l7.357 8.97c.244.266.751.297 1.048-.032l7.363-8.975.022-.027a4.152 4.152 0 0 0 .037-5.898 4.094 4.094 0 0 0-2.915-1.208z"
                ></path>
              </g>
            </svg> */}
            <img src={jacket} className="w-[24px] h-[24px]" />
            <a>Looks aus dem Magazin</a>
          </li>
          <li className="flex space-x-2">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              class="YmZp3wm8YGLViEfVcM98 r_BwswIYHVFor8jJiQRV toaMk0GxaAG7vBOid4Vs YBF_R1myMDGoGI42vIPM wishlist-header--icon"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#000"
                  d="M17.044 2a5.93 5.93 0 0 1 4.218 1.746 5.966 5.966 0 0 1 .036 8.382l-7.366 8.977c-.52.58-1.215.895-1.932.895a2.577 2.577 0 0 1-1.906-.863L2.71 12.134l-.15-.156a5.964 5.964 0 0 1 .18-8.232A5.93 5.93 0 0 1 6.957 2c1.575 0 3.057.607 4.178 1.708l.86.73.86-.721.173-.164A5.923 5.923 0 0 1 17.044 2zm0 1.818c-1.1 0-2.137.43-2.915 1.21l-.038.034a.934.934 0 0 1-.022.019L12.67 6.253l-.055.058a.92.92 0 0 1-1.21.017l-1.477-1.25-.02-.017a4.093 4.093 0 0 0-2.95-1.243c-1.102 0-2.137.43-2.916 1.21a4.148 4.148 0 0 0 0 5.856.92.92 0 0 1 .09.104l7.357 8.97c.244.266.751.297 1.048-.032l7.363-8.975.022-.027a4.152 4.152 0 0 0 .037-5.898 4.094 4.094 0 0 0-2.915-1.208z"
                ></path>
              </g>
            </svg> */}
            <img src={glasses} className="w-[24px] h-[24px]" />

            <a href="">Premium Looks</a>
          </li>
          <li className="flex space-x-2">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              class="YmZp3wm8YGLViEfVcM98 r_BwswIYHVFor8jJiQRV toaMk0GxaAG7vBOid4Vs YBF_R1myMDGoGI42vIPM wishlist-header--icon"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#000"
                  d="M17.044 2a5.93 5.93 0 0 1 4.218 1.746 5.966 5.966 0 0 1 .036 8.382l-7.366 8.977c-.52.58-1.215.895-1.932.895a2.577 2.577 0 0 1-1.906-.863L2.71 12.134l-.15-.156a5.964 5.964 0 0 1 .18-8.232A5.93 5.93 0 0 1 6.957 2c1.575 0 3.057.607 4.178 1.708l.86.73.86-.721.173-.164A5.923 5.923 0 0 1 17.044 2zm0 1.818c-1.1 0-2.137.43-2.915 1.21l-.038.034a.934.934 0 0 1-.022.019L12.67 6.253l-.055.058a.92.92 0 0 1-1.21.017l-1.477-1.25-.02-.017a4.093 4.093 0 0 0-2.95-1.243c-1.102 0-2.137.43-2.916 1.21a4.148 4.148 0 0 0 0 5.856.92.92 0 0 1 .09.104l7.357 8.97c.244.266.751.297 1.048-.032l7.363-8.975.022-.027a4.152 4.152 0 0 0 .037-5.898 4.094 4.094 0 0 0-2.915-1.208z"
                ></path>
              </g>
            </svg> */}
            <img src={belt} className="w-[24px] h-[24px]" />
            <a href="">Trendy Outerwear</a>
          </li>
          <li className="flex space-x-2">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              class="YmZp3wm8YGLViEfVcM98 r_BwswIYHVFor8jJiQRV toaMk0GxaAG7vBOid4Vs YBF_R1myMDGoGI42vIPM wishlist-header--icon"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#000"
                  d="M17.044 2a5.93 5.93 0 0 1 4.218 1.746 5.966 5.966 0 0 1 .036 8.382l-7.366 8.977c-.52.58-1.215.895-1.932.895a2.577 2.577 0 0 1-1.906-.863L2.71 12.134l-.15-.156a5.964 5.964 0 0 1 .18-8.232A5.93 5.93 0 0 1 6.957 2c1.575 0 3.057.607 4.178 1.708l.86.73.86-.721.173-.164A5.923 5.923 0 0 1 17.044 2zm0 1.818c-1.1 0-2.137.43-2.915 1.21l-.038.034a.934.934 0 0 1-.022.019L12.67 6.253l-.055.058a.92.92 0 0 1-1.21.017l-1.477-1.25-.02-.017a4.093 4.093 0 0 0-2.95-1.243c-1.102 0-2.137.43-2.916 1.21a4.148 4.148 0 0 0 0 5.856.92.92 0 0 1 .09.104l7.357 8.97c.244.266.751.297 1.048-.032l7.363-8.975.022-.027a4.152 4.152 0 0 0 .037-5.898 4.094 4.094 0 0 0-2.915-1.208z"
                ></path>
              </g>
            </svg> */}
            <img src={hoodie} className="w-[24px] h-[24px]" />
            <a href="">Trendy Dresses</a>
          </li>
          <li className="flex space-x-2">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              class="YmZp3wm8YGLViEfVcM98 r_BwswIYHVFor8jJiQRV toaMk0GxaAG7vBOid4Vs YBF_R1myMDGoGI42vIPM wishlist-header--icon"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#000"
                  d="M17.044 2a5.93 5.93 0 0 1 4.218 1.746 5.966 5.966 0 0 1 .036 8.382l-7.366 8.977c-.52.58-1.215.895-1.932.895a2.577 2.577 0 0 1-1.906-.863L2.71 12.134l-.15-.156a5.964 5.964 0 0 1 .18-8.232A5.93 5.93 0 0 1 6.957 2c1.575 0 3.057.607 4.178 1.708l.86.73.86-.721.173-.164A5.923 5.923 0 0 1 17.044 2zm0 1.818c-1.1 0-2.137.43-2.915 1.21l-.038.034a.934.934 0 0 1-.022.019L12.67 6.253l-.055.058a.92.92 0 0 1-1.21.017l-1.477-1.25-.02-.017a4.093 4.093 0 0 0-2.95-1.243c-1.102 0-2.137.43-2.916 1.21a4.148 4.148 0 0 0 0 5.856.92.92 0 0 1 .09.104l7.357 8.97c.244.266.751.297 1.048-.032l7.363-8.975.022-.027a4.152 4.152 0 0 0 .037-5.898 4.094 4.094 0 0 0-2.915-1.208z"
                ></path>
              </g>
            </svg> */}
            <img src={sakko} className="w-[24px] h-[24px]" />

            <a href="">City Styles</a>
          </li>
          <li className="flex space-x-2">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              class="YmZp3wm8YGLViEfVcM98 r_BwswIYHVFor8jJiQRV toaMk0GxaAG7vBOid4Vs YBF_R1myMDGoGI42vIPM wishlist-header--icon"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#000"
                  d="M17.044 2a5.93 5.93 0 0 1 4.218 1.746 5.966 5.966 0 0 1 .036 8.382l-7.366 8.977c-.52.58-1.215.895-1.932.895a2.577 2.577 0 0 1-1.906-.863L2.71 12.134l-.15-.156a5.964 5.964 0 0 1 .18-8.232A5.93 5.93 0 0 1 6.957 2c1.575 0 3.057.607 4.178 1.708l.86.73.86-.721.173-.164A5.923 5.923 0 0 1 17.044 2zm0 1.818c-1.1 0-2.137.43-2.915 1.21l-.038.034a.934.934 0 0 1-.022.019L12.67 6.253l-.055.058a.92.92 0 0 1-1.21.017l-1.477-1.25-.02-.017a4.093 4.093 0 0 0-2.95-1.243c-1.102 0-2.137.43-2.916 1.21a4.148 4.148 0 0 0 0 5.856.92.92 0 0 1 .09.104l7.357 8.97c.244.266.751.297 1.048-.032l7.363-8.975.022-.027a4.152 4.152 0 0 0 .037-5.898 4.094 4.094 0 0 0-2.915-1.208z"
                ></path>
              </g>
            </svg> */}
            <img src={shirt} className="w-[24px] h-[24px]" />
            <a href="">Elegante Outfits</a>
          </li>
          <li className="flex space-x-2">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              class="YmZp3wm8YGLViEfVcM98 r_BwswIYHVFor8jJiQRV toaMk0GxaAG7vBOid4Vs YBF_R1myMDGoGI42vIPM wishlist-header--icon"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#000"
                  d="M17.044 2a5.93 5.93 0 0 1 4.218 1.746 5.966 5.966 0 0 1 .036 8.382l-7.366 8.977c-.52.58-1.215.895-1.932.895a2.577 2.577 0 0 1-1.906-.863L2.71 12.134l-.15-.156a5.964 5.964 0 0 1 .18-8.232A5.93 5.93 0 0 1 6.957 2c1.575 0 3.057.607 4.178 1.708l.86.73.86-.721.173-.164A5.923 5.923 0 0 1 17.044 2zm0 1.818c-1.1 0-2.137.43-2.915 1.21l-.038.034a.934.934 0 0 1-.022.019L12.67 6.253l-.055.058a.92.92 0 0 1-1.21.017l-1.477-1.25-.02-.017a4.093 4.093 0 0 0-2.95-1.243c-1.102 0-2.137.43-2.916 1.21a4.148 4.148 0 0 0 0 5.856.92.92 0 0 1 .09.104l7.357 8.97c.244.266.751.297 1.048-.032l7.363-8.975.022-.027a4.152 4.152 0 0 0 .037-5.898 4.094 4.094 0 0 0-2.915-1.208z"
                ></path>
              </g>
            </svg> */}
            <img src={sneakers} className="w-[24px] h-[24px]" />
            <a href="">Festive Looks</a>
          </li>
          <li className="flex space-x-2">
            <img src={watch} className="w-[24px] h-[24px]" />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              class="YmZp3wm8YGLViEfVcM98 r_BwswIYHVFor8jJiQRV toaMk0GxaAG7vBOid4Vs YBF_R1myMDGoGI42vIPM wishlist-header--icon"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#000"
                  d="M17.044 2a5.93 5.93 0 0 1 4.218 1.746 5.966 5.966 0 0 1 .036 8.382l-7.366 8.977c-.52.58-1.215.895-1.932.895a2.577 2.577 0 0 1-1.906-.863L2.71 12.134l-.15-.156a5.964 5.964 0 0 1 .18-8.232A5.93 5.93 0 0 1 6.957 2c1.575 0 3.057.607 4.178 1.708l.86.73.86-.721.173-.164A5.923 5.923 0 0 1 17.044 2zm0 1.818c-1.1 0-2.137.43-2.915 1.21l-.038.034a.934.934 0 0 1-.022.019L12.67 6.253l-.055.058a.92.92 0 0 1-1.21.017l-1.477-1.25-.02-.017a4.093 4.093 0 0 0-2.95-1.243c-1.102 0-2.137.43-2.916 1.21a4.148 4.148 0 0 0 0 5.856.92.92 0 0 1 .09.104l7.357 8.97c.244.266.751.297 1.048-.032l7.363-8.975.022-.027a4.152 4.152 0 0 0 .037-5.898 4.094 4.094 0 0 0-2.915-1.208z"
                ></path>
              </g>
            </svg> */}
            <a href="">Business Outfits</a>
          </li>
          <li className="flex space-x-2">
            <a>
              <span>&gt; Alle Looks anzeigen</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        {" "}
        <img src={skin1} />
      </div>
    </div>
  );
};

export default Brands;
