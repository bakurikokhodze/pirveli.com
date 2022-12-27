import React, {useEffect, useState} from "react"
// @ts-ignore
import {ICONS, IMAGES} from "public/images";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
// @ts-ignore
import Lari from "/public/images/icons/lari";
import {Dropdown} from "antd";
import axios from "axios";

const Header: React.FC = () => {
  const baseApi = process.env.baseApi;
  const Router = useRouter();
  const [isLogged, setIsLogged] = useState<any>("");
  const [IsLoading, setIsLoading] = useState<boolean>(false);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<any>({});
  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);

  // axios.interceptors.request.use((config) => {
  //   config.headers = {
  //     ...config.headers,
  //     'Access-Control-Allow-Origin': '*',
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzRUNseXdhVnNxOURBMU1oMElNLTVFTUNsRU5WM1FMTnhuNlh1bDJoOVBnIn0.eyJleHAiOjE2NzIxNzg2OTksImlhdCI6MTY3MjE0MjcxNSwiYXV0aF90aW1lIjoxNjcyMTQyNjk5LCJqdGkiOiJkMjdhODUwYy02NTgzLTQwMWEtYjlhZi03MGRiNGQ2YTdjNzEiLCJpc3MiOiJodHRwczovL2F1dGgucGlydmVsaS5jb20vcmVhbG1zL3hyYWNvb24tZGVtbyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJiODRjNTI0NC0yMWZlLTQ5OWItYWIyYy1jMjBiM2Y4ZjUxOTQiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJjcy1jYXJ0Iiwic2Vzc2lvbl9zdGF0ZSI6IjVlNzc5ZDdlLTJlMTctNDczNy05ZWNjLTNmN2EzNzRlYzBkZSIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy14cmFjb29uLWRlbW8iLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwic2lkIjoiNWU3NzlkN2UtMmUxNy00NzM3LTllY2MtM2Y3YTM3NGVjMGRlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInVzZXJfaWQiOiJiODRjNTI0NC0yMWZlLTQ5OWItYWIyYy1jMjBiM2Y4ZjUxOTQiLCJuYW1lIjoiTmFtZUdFTyBOYW1lR0VPIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiay5wdXJ0c2VsYWR6ZTFAb3B0aW1vZ3JvdXAuaW8iLCJnaXZlbl9uYW1lIjoiTmFtZUdFTyIsImZhbWlseV9uYW1lIjoiTmFtZUdFTyIsImVtYWlsIjoiay5wdXJ0c2VsYWR6ZTFAb3B0aW1vZ3JvdXAuaW8ifQ.BrQ7kHxX3TBqYVrLmMlKGhBbk2NMM-hotwJQ6XO-aZHiSyhsZ6rJ_6JsaX__yNbtyAOjckP2o_oFdi_qjNjVhKfVF_k46-Ntbm3Cr8rOfQF26ziBHd5phXroK-Dj7ImkjDGNHYeLUM49a2HpZrCLfYgAb9PYRTR1TUDfHrm5FFZml6gn5xyzWxFTWo7acSaaU2hpqzN7jfOz4QD6tr9slMgFA-7hL2m_hbrwydH4_39Kv0_r23Mwu_M3vlfFZdpWs_GjIgnJPMaBtrKSB9Ghy6riPzaACFDP40Ri1fIfayVmELdCLWz7gFFaBi6O9afl7OrE5CsXysuBQQwoihNRuQ`
  //   };
  //   return config;
  // });

  const getChosenAvatar = () => {

    switch (parseInt(userInfo?.avatar?.path)) {
      case 1:
        return IMAGES.avatar1.src
      case 2:
        return IMAGES.avatar2.src
      case 3:
        return IMAGES.avatar3.src
      case 4:
        return IMAGES.avatar4.src
      case 5:
        return IMAGES.avatar5.src
      case 6:
        return IMAGES.avatar6.src
      default :
        return IMAGES.avatar1.src
    }

  }

  const dropdownJsx = () => {
    return <div
        className={"flex rounded-xl flex-col w-[258px] min-h-[250px] bg-[white] px-6  py-5"}>
      <p className={"text-[#383838] text-[18px] leading-[18px]"}>{userInfo?.details?.firstName} {userInfo?.details?.lastName}</p>
      <span
          className={"text-[#00000066] text-[14px] leading-[14px] mt-1"}>12 ქულა</span>
      <div className={"w-full h-[1px] bg-[#D9D9D94D] my-4"}/>
      <div className={"flex cursor-pointer"} onClick={() => Router.push('https://profile.pirveli.com')}>
        <Image src={ICONS.liderboard} alt={"tickets"}/>
        <p className={"text-[#383838] text-base ml-2"}>პროფილი</p>
      </div>

      <div className={"flex mt-3 cursor-pointer"}
           onClick={() => Router.push("https://profile.pirveli.com/tickets")}>
        <Image src={ICONS.tickets} alt={"tickets"}/>
        <p className={"text-[#383838] text-base ml-2"}>ბილეთები</p>
      </div>
      <div className={"w-full h-[1px] bg-[#D9D9D94D] my-4"}/>

      <div className={"flex cursor-pointer"}
           onClick={() => Router.push("https://profile.pirveli.com/orders")}>
        <Image src={ICONS.order} alt={"order"}/>
        <p className={"text-[#383838] text-base ml-2"}>შეკვეთების ისტორია</p>
      </div>

      <div className={"flex mt-3 cursor-pointer"}>
        <Image src={ICONS.logout} alt={"logout"}/>
        <form className={"ml-2"} action="https://vouchers.pirveli.com/logout" method="post">
          <button className={"text-[#E35A43] text-base "} type={"submit"}>გასვლა</button>
        </form>
      </div>

    </div>
  }


  useEffect(() => {

    axios
        .get(`${baseApi}/user`)
        .then((res) => {
          setIsLogged(res.data)
        });

  }, [])

  useEffect(() => {

    axios.get('https://vouchers.pirveli.com/api/user/user/detail-info').then((res) => {
      setUserInfo(res.data)
    }).catch((e) => {
      console.log(e)
    })


  }, [])

  return (
      <>
        <div className={"flex w-full h-[80px] min-h-[80px] bg-[white] items-center "}>
          <div className={"w-full h-full items-center container m-auto flex md:justify-between justify-end"}>
            <div onClick={() => Router.push('/')} className={"max-h-[48px]"}>
              <div className={"flex items-center min-w-[240px]  max-h-[48px]"}>
                <Image
                    src={IMAGES.logo}
                    quality={50}
                    blurDataURL={IMAGES.placeholder.src}
                    loading={"lazy"}
                    width={233}
                    height={43}
                    alt={"logo"}
                    className={"cursor-pointer"}
                />
              </div>
            </div>
            <div className={"flex items-center h-full space-x-[40px]"}>
              <div className={"h-full flex items-center relative"}>
                <p className={"text-purple"}>ვაუჩერები</p>
                <div className={"absolute bg-purple w-full h-[4px] rounded-t-[5px] -bottom-[0px]"}/>
              </div>
              <div className={"h-full flex items-center relative"}>
                <p className={"h-full flex items-center text-gray"}>კონტრაქტები</p>
              </div>
            </div>
            <div className={"min-w-[240px] flex justify-end"}>
              {
                isLogged ?
                    <Dropdown
                        trigger={['click']}
                        onOpenChange={() => setIsOpenDropdown(!isOpenDropdown)}
                        open={isOpenDropdown}
                        arrow={true}
                        className={"cursor-pointer dropdownMenuJsx "}
                        dropdownRender={() => dropdownJsx()}
                    >
                      <div className={"flex items-center h-[46px] "}>
                        {/*onClick={() => navToProfile()}*/}
                        <div
                            className={"group min-w-[46px] h-[46px] relative flex  items-center justify-center rounded-[50%] pb-[5px] cursor-pointer"}
                            style={{
                              transition: "0.5s",
                              backgroundColor: "#" + userInfo?.avatar?.code ? "#ffd791" : "transparent"
                            }}>

                          <img src={getChosenAvatar()}
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
                    : <Link
                        href={"https://auth.pirveli.com/realms/xracoon-demo/protocol/openid-connect/auth?response_type=code&client_id=demo-client&scope=email%20profile%20roles%20openid&state=ozej6dlmtIpneeVt7QoGPy2zXJ9e6BNPdGltyKyn3X4%3D&redirect_uri=https://vouchers.pirveli.com&nonce=KAmXCp0jHrPiUph9D2p5yVwdpT5g3qWO0iCxqJFbiv0"}
                        style={{}}
                        className={`text-[white] !text-[14px] md:!text-[16px] font-normal whitespace-nowrap aveSofRegular`}
                    >
                      <div
                          className={`h-[40px] lg:h-[48px] bg-[#383838] rounded-[8px] lg:rounded-xl px-[23px] lg:px-10 flex justify-center items-center cursor-pointer`}>
                        <p
                            className={"text-[white] !text-[14px] md:!text-[16px] font-normal whitespace-nowrap aveSofRegular"}>
                          შესვლა</p>
                      </div>
                    </Link>
              }
            </div>
          </div>
        </div>
      </>
  )
}

export default Header;
