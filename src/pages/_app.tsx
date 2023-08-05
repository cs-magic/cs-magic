import { appWithTranslation } from 'next-i18next'
import { CookiesProvider } from 'react-cookie'
import { ToastContainer } from 'react-toastify'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { trpc } from '@/client/utils/trpc'
import AuthMiddleware from '@/client/middleware/AuthMiddleware'

import '@/client/styles/globals.css'


import { AppProps } from 'next/app'


const MyApp = ({ Component, pageProps }: AppProps) => {
	
	return (
		<CookiesProvider>
			<AuthMiddleware
				requireAuth={pageProps.requireAuth}
				enableAuth={pageProps.enableAuth}
			>
				<ToastContainer/>
				<Component {...pageProps} />
				{/*<ReactQueryDevtools initialIsOpen={false}/>*/}
			</AuthMiddleware>
		</CookiesProvider>
	)
}


export default trpc.withTRPC(appWithTranslation(MyApp))

