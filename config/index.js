export const isServer = typeof window === 'undefined'
export const IS_DEV = process.env.NODE_ENV !== 'production'
export const API_ROOT = isDev ? "api/" : "http://x64.im/api/"

