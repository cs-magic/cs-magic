/** @type {import('next-i18next').UserConfig} */
module.exports = {
  debug: false, // process.env.NODE_ENV === 'development',

  i18n: {
    defaultLocale: "zh-CN",
    locales: ["zh-CN", "en"],
    // todo: 为什么只能false？ Invalid literal value, expected false at "i18n.localeDetection"
    localeDetection: false,
  },

  defaultNS: "manufacture",

  /** To avoid issues when deploying to some paas (vercel...) */
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/locales",

  reloadOnPrerender: process.env.NODE_ENV === "development",
}
