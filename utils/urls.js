export const url = (path = '/') => {
  path = path.replace(/^\/+/, '')
  path = `${process.env.ROUTER_BASE}/${path}`
  return path.replace(/^\/+/, '/')
}
