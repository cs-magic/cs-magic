import useSWR from "swr"
import { fetcher } from "@/client/utils/helpers"
import { Button } from "@/client/components/ui/button"
import _ from "lodash"
import { motion, useScroll, useTransform } from "framer-motion"
import { clsx } from "clsx"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/client/components/ui/avatar"
import { getShortName } from "@/client/utils/string"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/client/components/ui/popover"
import Image from "next/image"

// import qrcodeAssistant from '~/images/qrcodes/wechat-susan-3.png'
import { WechatQrcodeSusan3 } from "@cs-magic/swot-frontend/dist/assets.js"
import { useTranslation } from "next-i18next"

const AvatarGroup = ({
  avatars,
  index,
}: {
  avatars: string[]
  index: number
}) => {
  const { scrollYProgress } = useScroll()
  const translateY = useTransform(scrollYProgress, (y) => {
    const ratio = 300
    const base = 300
    return index % 2 ? -base + ratio * y : base - ratio * y
  })

  return (
    <motion.div
      className={clsx("h-full flex flex-col justify-center items-center gap-4")}
      style={{ translateY }}
    >
      {avatars.map((avatar) => (
        <Avatar key={avatar} className={"w-10 h-10 "} style={{}}>
          <AvatarImage src={avatar} />
          <AvatarFallback>{getShortName(avatar.slice(1))}</AvatarFallback>
        </Avatar>
      ))}
    </motion.div>
  )
}

export const Part4Community = () => {
  const { data: avatarsAll = [] } = useSWR<string[]>("/api/files", fetcher)
  const { t } = useTranslation()

  return (
    <div className={clsx("w-full grid grid-cols-1 md:grid-cols-2 gap-8")}>
      <div
        className={"w-full md:w-fit shrink-0 flex flex-col gap-6 px-8 md:pl-16"}
      >
        <p className={"w-fit text-lg"}>#{t("common:HomePage.part4.desc")}</p>
        <p className={"text-3xl"}>{t("common:HomePage.part4.title")}</p>

        <Popover>
          <PopoverTrigger asChild>
            <Button className={"btn-primary inline-flex items-center gap-1"}>
              {t("common:HomePage.part4.contact")}
              <span className={"text-xl"}>🦉</span>️
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <Image src={WechatQrcodeSusan3} alt={"CS Magic Assistant"} />
          </PopoverContent>
        </Popover>
      </div>

      <div
        className={
          "flex gap-2 h-full overflow-hidden grow relative mask h-[240px] md:h-[320px]"
        }
      >
        {_.chunk(avatarsAll.slice(0, 320), 8).map((avatarGroup, index) => (
          <AvatarGroup avatars={avatarGroup} index={index} key={index} />
        ))}
        {/*<div className={'absolute inset-0 w-full h-full bg-gradient-to-r to-transparent from-dark'}/>*/}
      </div>
    </div>
  )
}
