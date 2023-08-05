'use client'

import { useEffect, useState } from 'react'

export const Timer = () => {
	const [t, setT] = useState<number>(0)
	
	useEffect(() => {
		
		const timer = setInterval(() => {
			setT(Date.now())
		}, 100)
		return () => {
			clearInterval(timer)
		}
	}, [])
	return (
		<p className={'italic text-muted-foreground'}>{t / 1e3}</p>
	)
}
