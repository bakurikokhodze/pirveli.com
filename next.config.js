/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode:true,
	swcMinify:true,
	i18n:{
		locales:['eng'],
		defaultLocale:'eng',
	},
	images:{
		domains:['www.google.com','http://s3.pirveli.com',"https://s3.pirveli.com"],
		remotePatterns:[
			{
				protocol:'http',
				hostname:'s3.pirveli.com',
				pathname:'/v1/api/**',
			},
		],
		formats:['image/avif','image/webp'],
	},
	env:{
		baseUrl:"https://pirveli.com",
		baseApi:"https://pirveli.com/api",
		regLink:'https://auth.pirveli.com/realms/xracoon-demo/protocol/openid-connect/registrations?client_id=demo-client&response_type=code&scope=email&redirect_uri=https://pirveli.com/main/page',
		profileLink:'https://profile.pirveli.com',
	}
}

module.exports = nextConfig