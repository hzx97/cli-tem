import http from '@/lib/http'



export function getNav(params) {
  return http({
    url: '/sys/nav',
    method: 'get',
    params
  })
}