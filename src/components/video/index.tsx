import React from "react"
// @ts-ignore
import {ICONS, IMAGES} from "public/images";
import Image from "next/image"
// @ts-ignore
import {footer} from "/public/images/images";
import {meet} from "../../../public/images/images";

const Video = () => {

  return (
      <div className={"lg:!my-[300px] !mt-[100px] !mb-[20px] container  flex flex-col lg:grid grid-cols-2 gap-[30px]"}>
        <div className={"w-full flex flex-col lg:hidden "}>
          <h2 className={"text-[16px] ph5:text-[20px] lg:text-[28px] text-[#000000] avenirBold"}>ლოიალურობაზე დაფუძნებული
          </h2>
          <h3 className={"text-[16px] ph5:text-[20px] lg:text-[28px] text-brand  relative text-end text-brandavenirBold "}>ციფრული ეკოსისტემა</h3>
        </div>

        <div className={"order-2 lg:order-1"}>
          <div className={"w-full hidden lg:flex-col lg:flex"}>
            <h2 className={"text-[16px] ph5:text-[20px] lg:text-[28px] text-[#000000] avenirBold"}>ლოიალურობაზე დაფუძნებული
            </h2>
            <h3 className={"relative text-end text-brand text-[16px] ph5:text-[20px] lg:text-[28px] avenirBold translate-x-[120px] z-50"}>ციფრული ეკოსისტემა</h3>
          </div>
          <div className={"w-full mt-[30px] space-y-[20px]"}>
            <div className={""}>
              <h6 className={"text-base md:text-[24px] avenirBold text-brand mb-2"}>01</h6>
              <p className={"text-base avenirMedium text-[#000000] leading-[24px]"}>ადგილი სადაც ყოველ შენს აქტივობას
                მოაქვს მონეტები. ერთვები გასართობ თამაშებში და ზრდი დაგროვებული
                მონეტების რაოდენობას.
              </p>
            </div>

            <div>
              <h6 className={"text-base md:text-[24px] avenirBold text-brand mb-2"}>02</h6>
              <p className={"text-base avenirMedium text-[#000000] leading-[24px]"}>დაგროვებულ მონეტებს ცვლი
                ფასდაკლებების ვაუჩერებსა და კატალოგში მოცემულ შერჩეულ პროდუქტებში.
              </p>
            </div>

            <div>
              <h6 className={"text-base md:text-[24px] avenirBold text-brand mb-2"}>03</h6>
              <p className={"text-base avenirMedium text-[#000000] leading-[24px]"}>ყოველ 100 მონეტაზე იღებ ფულადი
                პრიზების მოგების 5 შანსს. სამ დღეში ერთხელ - დღიური საპრიზო ფონდით - 10 000ლ. დიდი გათამაშება - საწყისი
                საპრიზო ფონდით - 300 000ლ.
              </p>
            </div>
          </div>

        </div>
        <div className={"order-1 lg:order-2 pt-[40px] relative h-min"}>
          <img
              src={IMAGES.video.src}
              className={"w-full h-auto object-contain"}
              alt={"video"}
          />

          <img
              src={IMAGES.meet.src}
              className={"lg:flex hidden -left-[30px] xl:-left-[108px] -bottom-[120px] absolute w-auto h-auto object-contain"}
              alt={"video"}
          />

        </div>
      </div>
  )
}

export default Video;
