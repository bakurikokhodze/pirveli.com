import Head from 'next/head'
import Header from "../../header";
import React from "react";
import {useRouter} from "next/router";
import Navigation from "../../navigation";

export default function Layout({children}){
	const baseApi = process.env.baseApi;
	const Router = useRouter();

	return (
			<>
				<Head>
					<title>Layouts Example</title>
				</Head>
				<Header/>

				<main>
						{children}
				</main>
			</>
	)
}