import { NextApiRequest, NextApiResponse } from "next"
import path from "path"
import * as fs from "fs"

export const API_DIR = __dirname
export const PAGES_DIR = path.dirname(API_DIR)
export const SRC_DIR = path.dirname(PAGES_DIR)
export const PROJECT_DIR = path.dirname(SRC_DIR)
export const PUBLIC_DIR = path.join(PROJECT_DIR, "public")
export const IMAGES_DIR = path.join(PUBLIC_DIR, "images")
export const AVATAR_DIR = path.join(IMAGES_DIR, "avatar")
export const WX_AVATAR_DIR = path.join(AVATAR_DIR, "wx")

/**
 * ref: https://medium.com/@boris.poehland.business/next-js-api-routes-how-to-read-files-from-directory-compatible-with-vercel-5fb5837694b9
 * @type {string}
 */
const WX_AVATAR_URI = "images/wx-avatars"
export const wxAvatarFiles = fs
  .readdirSync(path.resolve("./public", WX_AVATAR_URI), { withFileTypes: true })
  .filter((dir) => dir.isFile())
  .map((dir) => `/${WX_AVATAR_URI}/${dir.name}`)

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string[]>,
) {
  res.status(200).json(wxAvatarFiles)
}
