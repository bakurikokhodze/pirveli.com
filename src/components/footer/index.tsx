import React from "react"
// @ts-ignore
import {ICONS} from "public/images";
import Image from "next/image"
// @ts-ignore
import {footer} from "/public/images/images";
// @ts-ignore
import {IMAGES} from "/public/images";
import Link from "next/link";
// @ts-ignore
import Fb from "../../../public/images/icons/fb";
// @ts-ignore
import Insta from "../../../public/images/icons/insta";
// @ts-ignore
import Youtube from "../../../public/images/icons/youtube";
// @ts-ignore
import Linkd from "../../../public/images/icons/Linkd";
import {useRouter} from "next/router";
import FooterCollapse from "../UI/footerCollapse";

const Footer: React.FC = () => {

  return (
      <>
        <footer className={"w-full w-full relative pt-[40px]"}>
          <div className={"hidden md:block container m-auto relative"}>
            <div className={"pr-[40%]"}>
              {/*navigation*/}
              {/*<div className={" mt-[100px] mb-8 bg-[#D9D9D94D] h-0.5"}></div>*/}
              <div className={"flex justify-between gap-2 mt-[40px]"}>
                <div className={"space-y-4"}>
                  <h6 className={"text-[#383838b3] text-[16px] cursor-pointer avenirBold"}>პირველი</h6>
                  <div>
                    <Link href={"/#"} legacyBehavior={true}>
                      <a className={"text-[#383838] hover:text-brand text-[14px] text-base cursor-pointer avenirMedium"} rel="noreferrer" >ჩვენს
                        შესახებ</a>
                    </Link>
                  </div>
                  <div>
                    <Link href={"/#"} legacyBehavior={true}>
                      <a rel="noreferrer"  className={"text-[#383838] hover:text-brand text-[14px] cursor-pointer avenirMedium"}>მიმდინარე
                        ვაკანსიები</a>
                    </Link>
                  </div>
                  <div>
                    <Link href={"/#"} legacyBehavior={true}>
                      <a rel="noreferrer" className={"text-[#383838] hover:text-brand text-sm  cursor-pointer avenirMedium"}>ბლოგი</a>
                    </Link>
                  </div>
                </div>

                <div className={"space-y-4 basis-[277px]"}>
                  <h6 className={"text-[#383838b3] text-base cursor-pointer avenirBold"}>წესები და პირობები</h6>

                  <div>
                    <a rel="noreferrer" className={"h-full"} href={"https://s3.pirveli.com/v1/api/getFile?id=7129"} target={"_blank"}
                       >
                    <span
                        className={"text-[#383838] hover:text-brand text-sm cursor-pointer avenirMedium"}>Sale.pirveli-ის წესები</span>
                    </a>
                  </div>

                  <div>
                    <Link href={"http://s3.pirveli.com/v1/api/getFile?id=7300"} target={"_blank"} legacyBehavior={true}>
                      <a rel="noreferrer" className={"text-[#383838] hover:text-brand text-sm  cursor-pointer avenirMedium"}>კონფიდენციალურობის
                        პოლიტიკა</a>
                    </Link>
                  </div>
                  <div>
                    <Link href={"/#"} legacyBehavior={true}>
                      <a rel="noreferrer" className={"text-[#383838] hover:text-brand text-sm cursor-pointer avenirMedium"}>ხშირად
                        დასმული კითხვები</a>
                    </Link>
                  </div>
                </div>

                <div className={"space-y-4 "}>
                  <h6 className={"text-[#383838b3] text-base cursor-pointer avenirBold"}>კონტაქტი</h6>
                  <div>
                    <a rel="noreferrer" className={"h-full flex items-center"} href="tel:+9950322185577" target={'_blank'}>
                      <Image src={ICONS.footerPhone} quality={70}
                             blurDataURL={IMAGES.placeholder.src}
                             loading={"lazy"} alt={"facebook icon"}/>
                      <span
                          className={"text-[#383838] ml-[15px] hover:text-brand text-sm  cursor-pointer avenirMedium"}>+995 032 2 18 55 77</span>
                    </a>
                  </div>

                  <div>
                    <a rel="noreferrer" className={"h-full flex items-center"} href="mailto:Info@pirveli.com" target={'_blank'}>
                      <Image src={ICONS.footerMail} quality={70}
                             blurDataURL={IMAGES.placeholder.src}
                             loading={"lazy"} alt={"facebook icon"}/>
                      <span
                          className={"text-[#383838] ml-[15px] hover:text-brand text-sm  cursor-pointer avenirMedium"}>info@pirveli.com</span>
                    </a>
                  </div>
                  <div>
                    <a rel="noreferrer" className={"h-full flex items-center"}
                       target={'_blank'}
                       href={'https://www.google.com/maps/place/1+%E1%83%96%E1%83%9D%E1%83%95%E1%83%A0%E1%83%94%E1%83%97%E1%83%98%E1%83%A1+%E1%83%A5%E1%83%A3%E1%83%A9%E1%83%90,+T\'bilisi/@41.7329351,44.7618329,17z/data=!3m1!4b1!4m5!3m4!1s0x404472e433073823:0x980df233b8e06c33!8m2!3d41.7329351!4d44.7640216?coh=164777&entry=tt&shorturl=1'}>
                      <Image src={ICONS.footerLocation} quality={70}
                             blurDataURL={IMAGES.placeholder.src}
                             className={"min-w-[24px]"}
                             loading={"lazy"} alt={"facebook icon"}/>
                      <span
                          className={"text-[#383838] ml-[15px] hover:text-brand text-sm cursor-pointer avenirMedium"}>თბილისი, ზოვრეთის ქ.#1</span>
                    </a>
                  </div>
                  <div className={"flex items-center space-x-[20px] pl-[3px]"}>
                    <Link href={"/#"}
                          legacyBehavior={true}
                          passHref={true}
                    >
                      <a rel="noreferrer" target={"_blank"}>
                        <div className={"cursor-pointer"}>
                          <div className={"group"}>
                            <Fb classes={"group-hover:stroke-brand stroke-[#383838]"}/>
                          </div>
                        </div>
                      </a>
                    </Link>

                    <Link href={"/#"}
                          legacyBehavior={true}
                          target={"_blank"}>
                      <a rel="noreferrer" target={"_blank"}>
                        <div className={"cursor-pointer"}>
                          <div className={"group"}>
                            <Insta classes={"group-hover:stroke-brand stroke-[#383838]"}/>
                          </div>
                        </div>
                      </a>
                    </Link>

                    <Link href={"/#"}
                          legacyBehavior={true}
                          target={"_blank"}>
                      <a rel="noreferrer" target={"_blank"}>
                        <div className={"cursor-pointer"}>
                          <div className={"group"}>
                            <Youtube classes={"group-hover:stroke-brand stroke-[#383838]"}/>
                          </div>
                        </div>
                      </a>
                    </Link>

                    <Link href={"/#"}
                          legacyBehavior={true}
                          target={"_blank"}>
                      <a rel="noreferrer" target={"_blank"}>
                        <div className={"cursor-pointer"}>
                          <div className={"group"}>
                            <Linkd classes={"group-hover:stroke-brand stroke-[#383838]"}/>
                          </div>
                        </div>
                      </a>
                    </Link>

                  </div>
                </div>

              </div>
              <div className={"flex flex-col mb-[10px] mt-[12px]"}>

                <p className={"text-[#38383880] avenirMedium"}>
                  {new Date().getFullYear()} © ყველა უფლება დაცულია.Pirveli.com
                </p>
              </div>
              {/*navigation*/}
            </div>

          </div>
          <div className={"hidden md:block absolute right-0 bottom-0 max-w-[722px] w-[40%] flex items-end justify-end"}>
            {/*width={750} height={650}*/}
            <img src={IMAGES.footer.src}
                 placeholder="blur"
                 className={"max-h-[506px] w-auto"}
                 loading={"lazy"}
                 alt={"footer.image"}/>
          </div>

          <div className={"container flex flex-col md:hidden w-full"}>

            <FooterCollapse/>
            <div className={"flex items-center space-x-[20px] pl-[3px] justify-center mt-[40px]"}>
              <Link href={"/#"}
                    legacyBehavior={true}
                    passHref={true}
              >
                <a rel="noreferrer" target={"_blank"}>
                  <div className={"cursor-pointer"}>
                    <div className={"group"}>
                      <Fb classes={"group-hover:stroke-[#8338ec] stroke-[#383838]"}/>
                    </div>
                  </div>
                </a>
              </Link>

              <Link href={"/#"}
                    legacyBehavior={true}

                    target={"_blank"}>
                <a rel="noreferrer" target={"_blank"}>
                  <div className={"cursor-pointer"}>
                    <div className={"group"}>
                      <Insta classes={"group-hover:stroke-[#8338ec] stroke-[#383838]"}/>
                    </div>
                  </div>
                </a>
              </Link>

              <Link href={"/#"}
                    legacyBehavior={true}

                    target={"_blank"}>
                <a rel="noreferrer" target={"_blank"}>
                  <div className={"cursor-pointer"}>
                    <div className={"group"}>
                      <Youtube classes={"group-hover:stroke-[#8338ec] stroke-[#383838]"}/>
                    </div>
                  </div>
                </a>
              </Link>

              <Link href={"/#"}
                    legacyBehavior={true}
                    target={"_blank"}>
                <a rel="noreferrer" target={"_blank"}>
                  <div className={"cursor-pointer"}>
                    <div className={"group"}>
                      <Linkd classes={"group-hover:stroke-[#8338ec] stroke-[#383838]"}/>
                    </div>
                  </div>
                </a>
              </Link>

            </div>

            <div className={"flex flex-col mb-[10px] mt-6"}>
              <p className={"text-[#38383880] avenirMedium text-center"}>
                {new Date().getFullYear()} © ყველა უფლება დაცულია.Pirveli.com
              </p>
            </div>
          </div>
        </footer>
      </>
  )
}

export default Footer;
