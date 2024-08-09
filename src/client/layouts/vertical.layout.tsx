import { Toaster } from "@/client/components/ui/toaster"
import { clsx } from "clsx"
import { useTranslation } from "next-i18next"
import { NextFont } from "next/dist/compiled/@next/font"
import Head from "next/head"
import { HTMLProps, PropsWithChildren } from "react"
import { Footer } from "./comps/footer"
import { Navbar } from "./comps/navbar"

export const VerticalLayout = ({
  children,
  globalFont,
}: PropsWithChildren &
  HTMLProps<HTMLDivElement> & {
    globalFont?: NextFont
  }) => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t("manufacture:Company.FullName")}</title>
        <meta name="description" content={t("Company.Slogan")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={"/favicon.ico"} />
      </Head>

      <main
        className={clsx(
          "w-screen h-screen flex flex-col relative",
          globalFont?.className,
        )}
      >
        <Navbar />

        <div
          className={clsx(
            "mt-16",
            " w-full overflow-x-clip  grow | flex flex-col items-center",
          )}
        >
          {children}
        </div>

        <Footer />

        <Toaster />
      </main>
    </>
  )
}
