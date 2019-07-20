import Mock from 'mockjs'

import {
  login, getUserInfo
} from './response/user'

import { getNav } from "./response/nav";

Mock.mock(/\/user\/login/, 'post', login)
Mock.mock(/\/user\/info/, 'get', getUserInfo)
//----------------
Mock.mock(/\/sys\/nav/, 'get', getNav)

Mock.setup({
  
})

export default Mock