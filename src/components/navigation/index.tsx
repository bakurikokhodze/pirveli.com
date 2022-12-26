import React from "react"
// @ts-ignore
import {ICONS, IMAGES} from "public/images";
import Link from "next/link";
import {useRouter} from "next/router";
// @ts-ignore
import Lari from "/public/images/icons/lari";
// @ts-ignore
import Dashboard from "/public/images/icons/nav/navDashboard";
// @ts-ignore
import Points from "/public/images/icons/nav/navPoints";

const Navigation: React.FC = () => {
  const baseApi = process.env.baseApi;
  const basePath = process.env.basePath;
  const Router = useRouter();

  return (
      <>
        <div
            className={"md:flex hidden sticky top-[100px] flex-col bg-[white] h-min rounded-xl xl:min-w-[312px] min-w-[250px] pt-[44px] pb-[32px] xl:pr-[32px] pr-2 space-y-5"}>
          <Link href={"/"}>
            <div className={"group w-full flex items-center h-[24px] xl:pl-[35px] pl-4"}
                 style={{
                   borderLeft: Router.pathname === "/" ? "2px solid #DB0060" : "2px solid transparent"
                 }}
            >
              <Dashboard
                  color={Router.pathname === "/" ? "#DB0060" : "#383838"}/>
              <p className={"ml-[14px] text-sm group-hover:!text-red"}
                 style={{
                   transition: "0.2s",
                   color: Router.pathname === "/" ? "#DB0060" : "#383838"
                 }}
              >დეშბორდიss</p>
            </div>
          </Link>

          <Link href={"/points"}>
            <div className={"group w-full flex justify-between items-center h-[24px] xl:pl-[35px] pl-4"}
                 style={{
                   borderLeft: Router.pathname === "/points" ? "2px solid #DB0060" : "2px solid transparent"
                 }}
            >
              <div className={"flex items-center"}>
                <Points
                    color={Router.pathname === "/points" ? "#DB0060" : "#383838"}/>
                <p className={"ml-[14px] text-sm group-hover:!text-red"}
                   style={{
                     transition: "0.2s",
                     color: Router.pathname === "/points" ? "#DB0060" : "#383838"
                   }}
                >ჩემი ქულები</p>
              </div>
              <div className={"h-full flex justify-center px-2 bg-[#38383833] rounded-[20px] items-center"}>
                <p className={"text-[12px] text-dark"}>{111}</p>
              </div>
            </div>
          </Link>

        </div>
      </>
  )
}

export default Navigation;
