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

import magazia1 from "/public/images/images/navPirveli/magazia1.png"
import magazia2 from "/public/images/images/navPirveli/magazia2.png"

import jandacva1 from "/public/images/images/navPirveli/jandacva1.png"
import jandacva2 from "/public/images/images/navPirveli/jandacva2.png"

import vaucherebi1 from "/public/images/images/navPirveli/vaucherebi1.png"
import vaucherebi2 from "/public/images/images/navPirveli/vaucherebi2.png"

import gatamasheba1 from "/public/images/images/navPirveli/gatamasheba1.png"
import gatamasheba2 from "/public/images/images/navPirveli/gatamasheba2.png"

import gartoba1 from "/public/images/images/navPirveli/gartoba1.png"
import gartoba2 from "/public/images/images/navPirveli/gartoba2.png"


interface IITem {
  link: string,
  name: string,
  img1: string,
  img2: string,
  bg: string,
  border: string,
  color: string,
}

import Link from "next/link";
import Item from "./Item";


const NavPirveli: React.FC = () => {
  const baseApi = process.env.baseApi;

  let arr: Array<IITem> = [
    {
      link: "https://shop.pirveli.com/",
      name: "მაღაზია",
      img1: magazia1.src,
      img2: magazia2.src,
      bg: "bg-[#E8F2E8] group-hover:bg-[#5DB039]",
      border: "border-[#5DB039]",
      color: "text-[#5DB039]",
    },
    {
      link: "https://medical.pirveli.com/",
      name: "მაღაზია",
      img1: jandacva1.src,
      img2: jandacva2.src,
      bg: "bg-[#F8F3F4] group-hover:bg-[#FFBBB6]",
      border: "border-[#FFBBB6]",
      color: "text-[#FFBBB6]",
    },
    {
      link: "https://vouchers.pirveli.com/",
      name: "ვაუჩერები",
      img1: vaucherebi1.src,
      img2: vaucherebi2.src,
      bg: "bg-[#EDEAFA] group-hover:bg-[#9766F0]",
      border: "border-[#9766F0]",
      color: "text-[#9766F0]",
    },
    {
      link: "https://s3.pirveli.com/v1/api/getFile?id=6555",
      name: "გათამაშება",
      img1: gatamasheba1.src,
      img2: gatamasheba2.src,
      bg: "bg-[#F4E0EB] group-hover:bg-[#DB0060]",
      border: "border-[#DB0060]",
      color: "text-[#DB0060]",
    },

    {
      link: "https://s3.pirveli.com/v1/api/getFile?id=6556",
      name: "გართობა",
      img1: gartoba1.src,
      img2: gartoba2.src,
      bg: "bg-[#F6F4E5] group-hover:bg-[#EDC520]",
      border: "border-[#EDC520]",
      color: "text-[#EDC520]",
    }

  ]

  return (
      <div className={"container !mt-[145px] m-auto"}>
        <div className={"w-full grid grid-cols-1 ph5:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:h-[88px] gap-4 xl:gap-[26px] items-center"}>
          {arr?.map((e: IITem, index: number) => {
            return <Item data={e} key={index}/>
          })}
        </div>
      </div>
  )
}

export default NavPirveli;
