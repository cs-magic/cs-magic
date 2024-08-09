import { LOGO_SIZE_LG } from "@/config"
import {
  CsMagicBlackLogoSvg,
  VonwaonBitmap16Font,
} from "@cs-magic/swot-frontend/dist/assets.js"
import { clsx } from "clsx"
import localFont from "next/font/local"
import { HTMLProps } from "react"

// -----------------------------------------------------------------------------
// fonts, should using literal string
// -----------------------------------------------------------------------------

const vonwaonBitmap16Font = localFont({
  src: VonwaonBitmap16Font.src,
})
export const aboutUsFont = vonwaonBitmap16Font
export const bitFont = vonwaonBitmap16Font

// -----------------------------------------------------------------------------
// images
// -----------------------------------------------------------------------------

export const CompanyLogo = ({
  className,
  ...props
}: HTMLProps<SVGSVGElement>) => (
  <CsMagicBlackLogoSvg
    className={clsx("", className)}
    width={LOGO_SIZE_LG}
    height={LOGO_SIZE_LG}
    {...props}
  />
)
