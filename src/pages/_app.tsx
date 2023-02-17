import "../../styles/globals.css"
import "../../styles/font.css"
import "../../styles/countdown.css"


import type {ReactElement, ReactNode} from 'react'
import type {NextPage} from 'next'
import type {AppProps} from 'next/app'
import Head from "next/head";
import Script from "next/script";
import fav from "/public/images/fav.png";
import axios from "axios";
import {useState} from "react";
import CountDown from "../components/countdown";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({Component, pageProps}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
  const [status, setStatus] = useState(null);


  // async function check() {
  // 	const response = await axios.post(`https://pirveli.com/api/racoon-transactions/secured-ip`);
  // 	return response
  // }
  //
  // check().then((res) => console.log(res)).catch((error) => {
  // 	// console.log('resposne status', error.response.status);
  // 	setStatus(error.response.status)
  // })


  return getLayout(
      <>
        <Head>

          <title>pirveli.com</title>

          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
          <meta key="robots" name="robots" content="noindex,follow"/>
          <meta key="googlebot" name="googlebot" content="noindex,follow"/>
          <link rel="icon"
                type="image/png"
                href={fav.src}/>

          <link rel="apple-touch-icon" sizes="180x180" href={fav.src}/>
          <link rel="icon" type="image/png" sizes="32x32" href={fav.src}/>
          <link rel="icon" type="image/png" sizes="16x16" href={fav.src}/>

        </Head>

        <Script id="my-script" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html:`(function(d, w, s) {
      var widgetHash = '6RbjV9Nq9riHUTrKPbFJ', bch = d.createElement(s); bch.type = 'text/javascript'; bch.async = true;
      bch.src = '//widgets.binotel.com/chat/widgets/' + widgetHash + '.js';
      var sn = d.getElementsByTagName(s)[0]; sn.parentNode.insertBefore(bch, sn);
    })(document, window, 'script');`
        }}/>

        <Component {...pageProps} />

      </>
  )
}





