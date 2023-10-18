import Cookies from 'js-cookie'

export const setCookies = (key: string, val: string) => {
  Cookies.set(key, val)
}

export const getCookies = (key: string) => {
  return Cookies.get(key)
}

export const removeCookies = (key: string) => {
  return Cookies.remove(key)
}

export const removeAllCookies = () => {
  Object.keys(Cookies.get()).forEach(function (cookieName) {
    const neededAttributes = {}
    Cookies.remove(cookieName, neededAttributes)
  })
}
