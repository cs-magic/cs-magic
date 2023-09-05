import Logo from '../../../public/images/logo/m/1280.svg'
import {LOGO_SIZE_LG} from '@/config'
import {HTMLProps} from 'react'
import {clsx} from 'clsx'

export const CompanyLogo = ({className, ...props}: HTMLProps<SVGSVGElement>) => (
    <Logo className={clsx('', className)}
          width={LOGO_SIZE_LG}
          height={LOGO_SIZE_LG}
          {...props}
    />
)
