import { appWithTranslation } from 'next-i18next'
import { CookiesProvider } from 'react-cookie'

import '@/client/styles/globals.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'


import { AppProps } from 'next/app'


const MyApp = ({ Component, pageProps }: AppProps) => {
	
	return (
		<CookiesProvider>
			
			<Component {...pageProps} />
			{/*<ReactQueryDevtools initialIsOpen={false}/>*/}
		</CookiesProvider>
	)
}


export default appWithTranslation(MyApp)

