import Mock from 'mockjs'

const Random = Mock.Random
export const login = (options) => {
  const template = {
    userName: 'admin',
    token: 'admin-token'

  }
  return Mock.mock(template)
}

export const getUserInfo = (options) => {
  const template = {
    userName: 'admin',
    roles: [1, 2, 4],
    roleType: 'sysadmin',
    tId: '001'

  }
  return Mock.mock(template)
}