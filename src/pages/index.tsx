import React, {useEffect, useState} from "react"
// @ts-ignore
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import NavPirveli from "../components/navPirveli";
import axios from "axios";
import Video from "../components/video";

const Home = () => {
  const baseApi = process.env.baseApi;
  const regLink = process.env.regLink;
  const profileLink = process.env.profileLink;
  const [userId, setUserId] = useState<any>(null);


  useEffect(() => {
    axios.get(`${baseApi}/racoon-transactions/user`).then((res) => {
      setUserId(res.data)
    })
  }, [])

  return (
      <>
        <Header userId={userId}/>
        <div className={"container"}>
          <h1 className={"mt-[64px] text-gray text-[26px] md:text-[44px] lg:text-[55px] text-center avenirBold"}>
            დააგროვე და <br/>
            გადაცვალე <span className={"text-brand avenirBold"}>მონეტები</span>
          </h1>
          <p className={"mt-[50px] avenirMedium text-gray text-[18px] text-center"}>აღმოაჩინე ახალი რეალობა, სადაც
            ყოველთვის მოგებული დარჩები!</p>

          <div className={"flex justify-center"}>
            <Link href={`${userId ? profileLink : regLink}`} className={""} legacyBehavior={true} passHref={true}>
              <a>
                <button
                    className={"mt-[50px] pulse px-[57px] py-[16px] rounded-xl cursor-pointer bg-brand hover:bg-brandHover transition2"}>
                  <p className={"text-white"}>დაწყება</p>
                </button>
              </a>
            </Link>
          </div>
        </div>
        <NavPirveli/>
        <Video/>

        <Footer/>
      </>
  )
}

export default Home;
