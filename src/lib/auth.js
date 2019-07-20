import Cooikies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken(){
  return Cooikies.get(TokenKey)
}

export function setToken(token) {
  return Cooikies.set(TokenKey,token)
}

export function removeToken() {
  return Cooikies.remove(TokenKey)
}