import React, { PropsWithChildren } from 'react'
import Spinner from './Spinner'
import { Button } from './ui/button'


export const LoadingButton = (
	{
		children,
		loading = false,
	}: PropsWithChildren & { loading: boolean }) => {
	return (
		<Button
			variant={'default'}
			type="submit"
			className={`w-full py-3 font-semibold rounded-lg outline-none border-none flex justify-center ${
				loading && 'animate-pulse'
			}`}
		>
			{loading ? (
				<div className="flex items-center gap-3">
					<Spinner/>
					<span className="text-slate-500 inline-block">Loading...</span>
				</div>
			) : (
				<span>{children}</span>
			)}
		</Button>
	)
}
