import React, {useEffect, useRef, useState} from "react"
// @ts-ignore
import {ICONS} from "public/images";
import Image from "next/image";
import {Badge, Button as AntButton, Dropdown, Form, Input} from 'antd';
import getChosenAvatar from "../../utils/getChosenAvatar";
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
import Link from "next/link";
import {useRouter} from "next/router";
import axios from "axios";
import _ from "lodash";
// @ts-ignore
import Lari from "/public/images/icons/lari";
import Liderboard from "../../../public/images/icons/dropdown/Liderboard";
import Tickets from "../../../public/images/icons/dropdown/Tickets";
import Settings from "../../../public/images/icons/dropdown/Settings";
import Logout from "../../../public/images/icons/dropdown/Logout";


const Header = (userId: any) => {
  const baseApi = process.env.baseApi;
  var timer1: any;

  console.log("dd", userId)

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  const [userInfo,setUserInfo ] = useState<any>(null);
  const [avatar, setAvatar] = useState<any>(null);

  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);

  const wrapperRef = useRef(null);
  const Router = useRouter();
  const [searchForm] = Form.useForm();

  // axios.interceptors.request.use((config) => {
  //   config.headers = {
  //     ...config.headers,
  //     mode: 'no-cors',
  //     'Access-Control-Allow-Origin': '*',
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzRUNseXdhVnNxOURBMU1oMElNLTVFTUNsRU5WM1FMTnhuNlh1bDJoOVBnIn0.eyJleHAiOjE2NzY2NjAxMjcsImlhdCI6MTY3NjYyNDEyNywianRpIjoiYmVhNWY0YjItNTRlNC00ODI4LTgyYjMtMmI1ZTgzZTlkZjhkIiwiaXNzIjoiaHR0cHM6Ly9hdXRoLnBpcnZlbGkuY29tL3JlYWxtcy94cmFjb29uLWRlbW8iLCJzdWIiOiJmNDM2NmJiZS03YjBhLTQwMGQtOGRlNi00ZDVmM2E3OWNhNjAiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJwYXNzd29yZC1jbGllbnQiLCJzZXNzaW9uX3N0YXRlIjoiNGFhM2E2NzYtMGQ3OS00MjkzLTk0ZGMtMWE1MzhmZDg1NjNkIiwiYWNyIjoiMSIsInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsInNpZCI6IjRhYTNhNjc2LTBkNzktNDI5My05NGRjLTFhNTM4ZmQ4NTYzZCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwidXNlcl9pZCI6ImY0MzY2YmJlLTdiMGEtNDAwZC04ZGU2LTRkNWYzYTc5Y2E2MCIsIm5hbWUiOiLhg5jhg6Dhg5Dhg5nhg5rhg5gg4YOW4YOQ4YOc4YOX4YOQ4YOg4YOQ4YOY4YOQIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiNTE0NTU1MjU1IiwiZ2l2ZW5fbmFtZSI6IuGDmOGDoOGDkOGDmeGDmuGDmCIsImZhbWlseV9uYW1lIjoi4YOW4YOQ4YOc4YOX4YOQ4YOg4YOQ4YOY4YOQIn0.R2jHI1-lbsFu6adtNS39P-lMeObD8XBnj48fuTY4ss7k1tlKhj_VDlO1wW8h1yM73sVcxXH-HxmkMC62t4hijbSaY8vrP8uK2uK4YJj2oT9oiu4EdOT9UXjClTN0viwdE0TbRrqwxRjm0aniePTazx0p6pTB3yoqUb4QLbzSLROkrAtO8-TngbX3mcxpRbWH_kP117xxNol6ijZNHqtq_zEp3g80fMMMY3suSOc2wdDEwaR3HMhaxCzBvYQG97eULxxV3YYgxOPdulQu9tjvdHLchue20dRNNFN-B7yqZ9EcXoKoHuU_ardiAezyXLoSg2EXhP8DRHtY2crvOcAckw`
  //   };
  //
  //   return config;
  // });

  useEffect(() => {

    axios.get(`${baseApi}/user/user/get-auth-user-avatar`).then((res) => {
      setAvatar(res.data)
    })

    axios.get(`${baseApi}/user/user/detail-info`).then((res) => {
      setUserInfo(res.data)
    })

  }, [])


  useOutsideAlerter(wrapperRef);

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          // resetFields();
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const dropdownJsx = () => {
    return <div
        className={"flex rounded-xl flex-col w-[258px] min-h-[250px] bg-[white] px-6 py-5"}>
      <p className={"text-[#383838] text-base text-center leading-[18px] avenirBold"}>{userInfo?.details?.firstName} {userInfo?.details?.lastName}</p>

      <div className={"w-full flex items-center justify-between h-8 bg-[#F7F9FB] rounded-[100px] px-5 mt-5"}>
        <p className={"text-[12px] text-[#383838] avenirMedium"}>ბალანსი</p>
        <div className={"flex items-center"}>
          <p className={"text-[14px] text-[#383838]"}>{userInfo?.accountDetail?.amountOfGel?.amountOfGel}</p>
          <Lari color={"#383838"} classes={"ml-1"}/>
        </div>
      </div>

      <Link href={"https://profile.pirveli.com/profile-edit/"} passHref={true} legacyBehavior={true}>
        <a className={"mt-5 "}>
          <div className={"group flex cursor-pointer"}
          >
            {/*<Image src={ICONS.settings} alt={"settings"}/>*/}
            <Settings classes={"group-hover:stroke-brand stroke-[#383838]"}/>
            <p className={"text-[#383838] group-hover:text-brand text-[14px] ml-2 avenirMedium"}>პროფაილი</p>
          </div>
        </a>
      </Link>

      <Link href={"https://profile.pirveli.com/"} passHref={true} legacyBehavior={true}>
        <a className={"mt-5"}>
          <div className={"group flex cursor-pointer items-center"}
          >
            <Liderboard classes={"group-hover:stroke-brand stroke-[#383838]"}/>
            <p className={"text-[#383838] group-hover:text-brand text-[14px] ml-2 avenirMedium"}>ლიდერბორდი</p>
          </div>
        </a>
      </Link>

      <Link href={"https://profile.pirveli.com/tickets/"} passHref={true} legacyBehavior={true}>
        <a className={"mt-5 mb-[17px]"}>
          <div className={"group flex cursor-pointer"}
          >
            <Tickets classes={"group-hover:stroke-brand stroke-[#383838]"}/>
            <p className={"text-[#383838] group-hover:text-brand text-[14px] ml-2 avenirMedium"}>ჩემი ბილეთები</p>
          </div>
        </a>
      </Link>

      <div className={"w-full h-[1px] bg-[#D9D9D94D]"}/>



      <div className={"group flex mt-5 cursor-pointer"}>
        {/*<Image src={ICONS.logout2} alt={"logout"}/>*/}
        <Logout classes={"group-hover:stroke-brand stroke-[#383838]"}/>

        <form className={"ml-2"} action="https://pirveli.com/logout" method="post">
          <button className={"text-[#383838] group-hover:text-brand text-[14px]"} type={"submit"}>გასვლა</button>
        </form>
      </div>

    </div>
  }

  return (
      <>
        {/*<div className={"h-[40px] w-full flex items-center justify-center bg-[white]"}>*/}
        {/*  <p className={"avenirMedium"}>საიტი მუშაობს სატესტო რეჟიმში</p>*/}
        {/*</div>*/}
        <div
            className={"hidden md:flex w-full sticky top-[0px] h-[44px] min-h-[44px] bg-[#1d1d1e] items-center z-[60]"}>
          <div className={"w-full h-full container m-auto flex justify-between"}>
            <div className={"flex space-x-8 items-center"}>
              <Link href={"https://pirveli.com/"} passHref={true} legacyBehavior>
                <a className={"h-full"}>
                  <div className={"relative h-full flex items-center group"}>
                <span
                    className={"text-sm text-brand cursor-pointer avenirMedium "}>მთავარი</span>
                    <div className={"absolute bottom-[0px] h-[3px] w-full rounded-t-[3px] bg-[#db0060]"}/>
                  </div>
                </a>
              </Link>
              <Link href={"https://shop.pirveli.com/"} passHref={true} legacyBehavior>
                <a className={"h-full"}>
                  <div className={"relative h-full flex items-center group"}>
                  <span
                      className={"text-sm text-[#ffffffb3] cursor-pointer avenirMedium "}>მაღაზია</span>
                    <div className={"absolute bottom-[0px] h-[3px] w-full rounded-t-[3px] group-hover:bg-[#5db039]"}/>
                  </div>
                </a>
              </Link>
              <Link href={"https://medical.pirveli.com/"} passHref={true} legacyBehavior>
                <a className={"h-full"}>
                  <div className={"relative h-full flex items-center group"}>
                    <span className={"text-sm text-[#ffffffb3] cursor-pointer avenirMedium"}>ჯანდაცვა</span>
                    <div className={"absolute bottom-[0px] h-[3px] w-full rounded-t-[3px] group-hover:bg-[#ffbbb6]"}/>
                  </div>
                </a>
              </Link>
              <Link href={"https://vouchers.pirveli.com/"} passHref={true} legacyBehavior>
                <a className={"h-full"}>
                  <div className={"relative h-full flex items-center group"}>
                    <span className={"text-sm text-[#ffffffb3] cursor-pointer avenirMedium"}>ვაუჩერები</span>
                    <div className={"absolute bottom-[0px] h-[3px] w-full rounded-t-[3px] group-hover:bg-[#8338EC]"}/>
                  </div>
                </a>
              </Link>

              <a className={"h-full"} href={"http://s3.pirveli.com/v1/api/getFile?id=6555"} target={"_blank"}
                 rel="noopener noreferrer">
                <div className={"relative h-full flex items-center group"}>
                  <span className={"text-sm text-[#ffffffb3] cursor-pointer avenirMedium"}>გათამაშება</span>
                  <div className={"absolute bottom-[0px] h-[3px] w-full rounded-t-[3px] group-hover:bg-[#db0060]"}/>
                </div>
              </a>

              <a className={"h-full"} href={"http://s3.pirveli.com/v1/api/getFile?id=6556"} target={"_blank"}
                 rel="noopener noreferrer">
                <div className={"relative h-full flex items-center group"}>
                  <span className={"text-sm text-[#ffffffb3] cursor-pointer avenirMedium"}>გართობა</span>
                  <div className={"absolute bottom-[0px] h-[3px] w-full rounded-t-[3px] group-hover:bg-[#edc520]"}/>
                </div>
              </a>
            </div>

            <div className={"flex py-[12px]"}>
              {userId?.userId &&
									<p className={"text-sm text-[white] mr-[7px] capitalize avenirMedium"}>
                    {userInfo?.accountDetail?.amountOfPoint?.amountOfPoints}
                  </p>}

              {userId?.userId && <Image
									src={IMAGES.coin}
									quality={100}
									blurDataURL={IMAGES.placeholder.src}
									loading={"lazy"}
									width={20}
									height={20}
									alt={"coin icon"}
							/>}
            </div>
          </div>
        </div>
        <header className={"w-full m-auto sticky md:top-[44px] top-[0px] z-[100]"}>

          <div className={"bg-[#edeeef] w-full relative"}
               style={{
                 boxShadow: " 0 0 24px -1px rgb(56 56 56 / 12%)"
               }}
          >
            <div className={"max-h-[80px] py-4 container m-auto flex justify-between"}>
              <div onClick={() => Router.push("/")} className={"min-w-[220px] sm:min-w-[380px] max-h-[48px]"}>
                <div className={"flex items-center min-w-[220px] sm:min-w-[380px] max-h-[48px]"}>
                  <Image
                      src={IMAGES.logo.src}
                      quality={100}
                      blurDataURL={IMAGES.placeholder.src}
                      loading={"lazy"}
                      width={175} height={50}
                      alt={"logo"}
                      className={"cursor-pointer"}
                  />
                </div>
              </div>

              {
                userId?.userId ?
                    <div id={'dropdownPosition'} className={"flex justify-end"}>
                      <Dropdown
                          placement="bottomLeft"
                          trigger={['click']}
                          onOpenChange={() => setIsOpenDropdown(!isOpenDropdown)}
                          open={isOpenDropdown}
                          arrow={true}
                          className={"cursor-pointer dropdownMenuJsx "}
                          dropdownRender={() => dropdownJsx()}
                          getPopupContainer={() => document.getElementById('dropdownPosition') as HTMLElement}
                      >
                        <div className={"flex items-center h-[46px] "}>
                          {/*onClick={() => navToProfile()}*/}
                          <div
                              className={"group min-w-[46px] h-[46px] relative flex  items-center justify-center rounded-xl py-[5px] cursor-pointer"}
                              style={{
                                transition: "0.5s",
                                backgroundColor: "#" + avatar?.code
                              }}>

                            <img src={getChosenAvatar(avatar?.path)}
                                 alt={"avatar"}
                                 style={{objectFit: "cover", height: "100%", width: "auto"}}/>
                          </div>

                          <div className={"h-full flex items-center relative  pl-3"}
                          >
                            <svg style={{
                              transition: '0.5s',
                              transform: isOpenDropdown ? 'rotate(0deg)' : 'rotate(180deg)'
                            }}
                                 width="8" height="5" viewBox="0 0 8 5" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.7" d="M0.75 4.25L4 0.75L7.25 4.25" stroke="#383838" strokeWidth="1.5"
                                    strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                      </Dropdown>
                    </div>

                    : <div
                        className={`text-[white] !text-[14px] md:!text-[16px] font-normal whitespace-nowrap avenirMedium`}
                    >
                      <div
                          className={`h-[40px] bg-brand hover:bg-brandHover rounded-[8px] lg:rounded-xl px-4 flex justify-center items-center cursor-pointer transition2`}
                      >
                        <a
                            href={"/main/page"}
                            className={"text-[white] !text-[14px] md:!text-[16px] font-normal whitespace-nowrap avenirMedium"}>
                          შესვლა</a>
                      </div>
                    </div>
              }

            </div>

          </div>

        </header>

      </>
  )
}

export default Header;
