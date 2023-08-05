import { clsx } from 'clsx'
import { HTMLProps, PropsWithChildren } from 'react'
import { Toaster } from '@/client/components/ui/toaster'
import { Footer } from '@/client/layouts/comps/footer'
import { Navbar } from '@/client/layouts/comps/navbar'
import { NextFont } from 'next/dist/compiled/@next/font'
import { CompanyHeader } from '@/client/layouts/comps/header'


export const VerticalLayout = ({ children, globalFont }: PropsWithChildren & HTMLProps<HTMLDivElement> & {
	globalFont?: NextFont
}) => {
	
	return (
		<>
			<CompanyHeader/>
			
			<main className={clsx(
				'w-screen h-screen flex flex-col relative',
				globalFont?.className,
			)}
			>
				<Navbar/>
				
				<div className={clsx(
					'mt-16',
					' w-full overflow-x-clip  grow | flex flex-col items-center',
				)}
				>
					{children}
				</div>
				
				<Footer/>
				
				<Toaster/>
			</main>
		</>
	)
}

