
import Mock from 'mockjs'

const Random = Mock.Random
export const getUserInfo = (options) =>{
  const template = {
    'str|2-7':'admin',
    'age|10-100':0,
    email: Random.email(),
    name:Mock.mock('@name'),
    range:Random.range(2,100,2),
    date:Random.datetime(),
    now:Random.now('yyyy-MM-dd a hh:mm'),
    img:Random.image('200x100','#ccc','listen'),
    text:Random.ctitle(),
    cname:Random.cname()
    
  }
  return Mock.mock(template)
}