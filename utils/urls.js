export const url = (path = '/') => {
  path = path.replace(/^\/+/, '')
  path = `${process.env.routerBase}/${path}`
  return path.replace(/^\/+/, '/')
}
