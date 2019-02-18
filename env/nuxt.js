import { resolve } from 'path'

export const isProduction = process.env.NODE_ENV === 'production'
const dotEnvFile = isProduction ? '.env.production' : '.env'

require('dotenv').config({
  path: resolve(__dirname, `../${dotEnvFile}`)
})

export const PUBLIC_PATH = process.env.PUBLIC_PATH
export const ROUTER_BASE = process.env.PUBLIC_PATH || '/'
export const GOOGLE_ANALYTICS_TRACK_ID = process.env.GOOGLE_ANALYTICS_TRACK_ID
