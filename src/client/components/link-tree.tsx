import Link from 'next/link'

export interface ILink {
	href: string
	title: string
    disabled?: boolean
}


export const LinkTree = (props: {
	title: string
	items: ILink[]
}) => {
	return (
		<div className={'flex flex-col gap-2 text-muted-foreground text-md font-light'}>
			<p className={'text-accent-foreground'}>{props.title}</p>
			{props.items.map((item, index) =>

                item.disabled ?
                    <div key={index} className={'hocus:text-accent-foreground cursor-pointer transition-all'}>{item.title} （维护中）</div>
                    :(
				<Link href={item.href} key={index} className={'hocus:text-accent-foreground cursor-pointer transition-all'}>{item.title}</Link>
			))}
		</div>
	)
}
