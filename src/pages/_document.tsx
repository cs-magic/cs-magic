import { Toaster } from '@/client/components/ui/toaster'
import { Head, Html, Main, NextScript } from 'next/document'
import { DEFAULT_LOCALE_TYPE } from '@/ds/locales'

export default function Document() {
	return (
		<Html lang={DEFAULT_LOCALE_TYPE}>
			<Head/>
			<body className={'dark'}>
			<Main/>
			<NextScript/>
			
			
			</body>
		
		</Html>
	)
}
