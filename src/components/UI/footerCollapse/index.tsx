import React, {useState} from "react"
// @ts-ignore
import {ICONS, IMAGES} from "public/images";
import Image from "next/image"
import {Collapse} from "antd";
import Link from "next/link";

const {Panel} = Collapse;


const FooterCollapse = () => {
  const baseApi = process.env.baseApi;

  const [activeCollapse, setActiveCollapse] = useState<string>("");

  const onChangeCollapse = (e: any) => {
    setActiveCollapse(e)
  }

  return (

      <Collapse
          bordered={false}
          accordion={true}
          destroyInactivePanel={true}
          className={"clearCollapse bg-[#edeeef] mt-6 w-full"}
          onChange={(e) => onChangeCollapse(e)}
      >
        <div className={"w-full bg-[#3838381A] h-[1px] mb-[50px]"}/>

        <Panel header={
          <div className={"flex justify-between"}>
            <h4 className={"text-[#383838B2] text-[16px] avenirMedium"}>პირველი</h4>
            <div
                style={{
                  rotate: activeCollapse === "1" ? "180deg" : "0deg",
                  transition: "0.2s linear all"
                }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M11.6649 16L12.228 15.4426L18.3315 9.4968L17.2053 8.00001L11.6649 13.3987L6.12446 8.00001L4.99821 9.4968L11.1018 15.4426L11.6649 16Z"
                      fill="#383838"/>
              </svg>
            </div>
          </div>
        } key="1" showArrow={false}>
          <div className={"flex mt-4 flex-col space-y-4"}>
            <Link href={"/"} passHref={true} legacyBehavior>
              <a className={"text-[#383838] avenirMedium text-[14px]"}  rel="noreferrer">
                ჩვენ შესახებ
              </a>
            </Link>

            <Link href={"/"} passHref={true} legacyBehavior>
              <a className={"text-[#383838] avenirMedium text-[14px]"}  rel="noreferrer">
                გახდი ჩვენი პარტნიორი
              </a>
            </Link>

            <Link href={"/"} passHref={true} legacyBehavior>
              <a className={"text-[#383838] avenirMedium text-[14px]"}  rel="noreferrer">
                მიმდინარე ვაკანსიები
              </a>
            </Link>

            <Link href={"/"} passHref={true} legacyBehavior>
              <a className={"text-[#383838] avenirMedium text-[14px]"}  rel="noreferrer">
                ბლოგი
              </a>
            </Link>
          </div>

        </Panel>

        <div className={"w-full bg-[#3838381A] h-[1px] my-4"}/>

        <Panel header={
          <div className={"flex justify-between"}>
            <h4 className={"text-[#383838B2] text-[16px] avenirMedium"}>წესები და პირობები</h4>
            <div
                style={{
                  rotate: activeCollapse === "2" ? "180deg" : "0deg",
                  transition: "0.2s linear all"
                }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M11.6649 16L12.228 15.4426L18.3315 9.4968L17.2053 8.00001L11.6649 13.3987L6.12446 8.00001L4.99821 9.4968L11.1018 15.4426L11.6649 16Z"
                      fill="#383838"/>
              </svg>
            </div>
          </div>
        } key="2" showArrow={false}>
          <div className={"flex mt-4 flex-col space-y-4"}>

            <Link href={"/"} passHref={true} legacyBehavior>
              <a>
                ზოგადი წესები
              </a>
            </Link>

            <Link href={"/"} passHref={true} legacyBehavior>
              <a>
                კონფიდენციალურობის პოლიტიკა
              </a>
            </Link>

            <Link href={"/"} passHref={true} legacyBehavior>
              <a>
                ხშირად დასმული კითხვები
              </a>
            </Link>
          </div>
        </Panel>

        <div className={"w-full bg-[#3838381A] h-[1px] my-4"}/>

        <Panel header={
          <div className={"flex justify-between"}>
            <h4 className={"text-[#383838B2] text-[16px] avenirMedium"}>კონტაქტი</h4>
            <div
                style={{
                  rotate: activeCollapse === "3" ? "180deg" : "0deg",
                  transition: "0.2s linear all"
                }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M11.6649 16L12.228 15.4426L18.3315 9.4968L17.2053 8.00001L11.6649 13.3987L6.12446 8.00001L4.99821 9.4968L11.1018 15.4426L11.6649 16Z"
                      fill="#383838"/>
              </svg>
            </div>
          </div>
        } key="3" showArrow={false}>
          <div className={"flex mt-4 flex-col space-y-4"}>
            <Link href={"/"} passHref={true} legacyBehavior>
              <a className={"h-full flex items-center"} href="tel:+9950322185577" target={'_blank'}  rel="noreferrer">
                <Image src={ICONS.footerPhone} quality={70}
                       blurDataURL={IMAGES.placeholder.src}
                       loading={"lazy"} alt={"facebook icon"}/>
                <span
                    className={"text-[#383838] ml-[15px] hover:text-purple text-sm text-base cursor-pointer avenirMedium"}>+995 032 2 18 55 77</span>
              </a>
            </Link>

            <Link href={"/"} passHref={true} legacyBehavior>
              <a className={"h-full flex items-center"} href="mailto:Info@pirveli.com" target={'_blank'}  rel="noreferrer">
                <Image src={ICONS.footerMail} quality={70}
                       blurDataURL={IMAGES.placeholder.src}
                       loading={"lazy"} alt={"facebook icon"}/>
                <span
                    className={"text-[#383838] ml-[15px] hover:text-purple text-sm text-base cursor-pointer avenirMedium"}>info@pirveli.com</span>
              </a>
            </Link>

            <Link href={"/"} passHref={true} legacyBehavior>
              <a className={"h-full flex items-center"}
                 rel="noreferrer"
                 target={'_blank'}
                 href={'https://www.google.com/maps/place/1+%E1%83%96%E1%83%9D%E1%83%95%E1%83%A0%E1%83%94%E1%83%97%E1%83%98%E1%83%A1+%E1%83%A5%E1%83%A3%E1%83%A9%E1%83%90,+T\'bilisi/@41.7329351,44.7618329,17z/data=!3m1!4b1!4m5!3m4!1s0x404472e433073823:0x980df233b8e06c33!8m2!3d41.7329351!4d44.7640216?coh=164777&entry=tt&shorturl=1'}>
                <Image src={ICONS.footerLocation} quality={70}
                       blurDataURL={IMAGES.placeholder.src}
                       loading={"lazy"} alt={"facebook icon"}/>
                <span
                    className={"text-[#383838] ml-[15px] hover:text-purple text-sm text-base cursor-pointer avenirMedium"}>თბილისი, ზოვრეთის ქ.#1</span>
              </a>
            </Link>
          </div>
        </Panel>
      </Collapse>

  )
}

export default FooterCollapse;
