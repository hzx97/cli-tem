import http from '@/lib/http'

export function login(data) {
  return http({
    url: '/user/login',
    method: 'post',
    data
  })
}