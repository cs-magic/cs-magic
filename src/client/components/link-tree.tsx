import Link from 'next/link'

export interface ILink {
	href: string
	title: string
}


export const LinkTree = (props: {
	title: string
	items: ILink[]
}) => {
	return (
		<div className={'flex flex-col gap-2 text-muted-foreground text-md font-light'}>
			<p className={'text-accent-foreground'}>{props.title}</p>
			{props.items.map((item, index) => (
				<Link href={item.href} key={index} className={'hocus:text-accent-foreground cursor-pointer transition-all'}>{item.title}</Link>
			))}
		</div>
	)
}
