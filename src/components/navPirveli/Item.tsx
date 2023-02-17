import React, {useEffect, useRef, useState} from "react"
// @ts-ignore
import {ICONS} from "public/images";
// @ts-ignore
import {IMAGES} from "/public/images";
// @ts-ignore
import Home from "/public/images/icons/home";
// @ts-ignore
import Search from "/public/images/icons/search";
// @ts-ignore
import BarHeart from "/public/images/icons/barHeart";
// @ts-ignore
import Menu from "/public/images/icons/menu";
// @ts-ignore
import Basket from "/public/images/icons/orders";
// @ts-ignore
import Lari from "/public/images/icons/lari";

import Link from "next/link";

const Item = ({data}) => {
  const baseApi = process.env.baseApi;


  return (
      <Link href={data.link} passHref={true} legacyBehavior={true} >
        <a className={"relative group "}>
          <div
              className={`${data.bg} ${data.border} transition4 border-[2px] group-hover:h-[88px] group-hover:scale-x-[103%] rounded-xl h-[80px] pl-3 md:pl-1 xl:pl-5 flex justify-between  cursor-pointer`}>
            <h2
                className={`transition4 ${data.color} group-hover:text-white text-[20px] avenirBold my-[auto]`}>{data.name}</h2>
          </div>
          <img
              src={data.img1}
              className={"transition4 absolute w-[120px] h-auto group-hover:w-[140px] right-0 group-hover:-right-[3px] bottom-0 z-50 object-contain"}
          />
          <img
              src={data.img2}
              className={"transition4 absolute w-[80px] h-auto group-hover:w-[100px] right-0 group-hover:-right-[3px] bottom-0 object-contain"}

          />
        </a>
      </Link>
  )
}

export default Item;
