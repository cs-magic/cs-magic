import localFont from "next/font/local";
import {HTMLProps} from "react";
import Logo from "~/images/logo/m/1280.svg";
import {clsx} from "clsx";
import {LOGO_SIZE_LG} from "@/config";

// -----------------------------------------------------------------------------
// fonts, should using literal string
// -----------------------------------------------------------------------------

export const aboutUsFont = localFont({src: '../../../public/fonts/VonwaonBitmap-16px.ttf'})
export const bitFont = localFont({src: '../../../public/fonts/VonwaonBitmap-16px.ttf'})

// -----------------------------------------------------------------------------
// images
// -----------------------------------------------------------------------------

export const CompanyLogo = ({className, ...props}: HTMLProps<SVGSVGElement>) => (
    <Logo className={clsx('', className)}
          width={LOGO_SIZE_LG}
          height={LOGO_SIZE_LG}
          {...
              props
          }
    />
)