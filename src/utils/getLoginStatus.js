const getLoginStatus = () => {
  try {
    // 本地存储没有token时，直接返回未登录状态
    if (!localStorage.getItem('Authorization')) {
      return '2' 
    }
    const loginInfoStr = localStorage.getItem('loginInfo')
    // console.log('login info: ', loginInfoStr)
    if (loginInfoStr) {
      const loginInfo = JSON.parse(loginInfoStr)
      if (loginInfo && loginInfo.expireTimespan && loginInfo.refreshTimespan) {
        const currentTimespan = Date.parse(new Date())
        const expireTimespan = loginInfo.expireTimespan
        const refreshTimespan = loginInfo.refreshTimespan
        if (currentTimespan < expireTimespan) {
          // 正常登录状态
          return '0'
        } else if (expireTimespan < currentTimespan < refreshTimespan) {
          // 需要刷新token
          return '1'
        } else {
          // 异常/退出状态
          return '2'
        }
      }
    } else {
      return '2'
    }
  }
  catch (e) {
    return '2'
  }
}
// isLogin: true,
// expireTimespan: '', // 超时时间戳, 超过此时间但不超过刷新时间，则进行刷新token操作
// refreshTimespan: '', // 刷新时间戳, 超过此时间不再重新获取token, 退出登录
export default getLoginStatus