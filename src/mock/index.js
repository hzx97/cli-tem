import Mock from 'mockjs'

import {
  getUserInfo
} from './response/user'

Mock.mock(/\/user\/login/, 'post', getUserInfo)

Mock.setup({
  
})

export default Mock