import MarkshawnWechat_ from '../../../public/images/qrcodes/wechat-mark-2-white.png'

import Logo from '../../../public/icons/logo/m/logo_1280.svg'
import { LOGO_SIZE_LG } from '../../config'
import { HTMLProps } from 'react'
import { clsx } from 'clsx'

export const CompanyLogo = ({ className, ...props }: HTMLProps<SVGSVGElement>) => (
	<Logo className={clsx('', className)}
	      width={LOGO_SIZE_LG}
	      height={LOGO_SIZE_LG}
	      {...props}
	/>
)
export const ProductLogo = CompanyLogo
export const MarkshawnWechat = MarkshawnWechat_
