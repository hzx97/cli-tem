import Mock from 'mockjs'

const Random = Mock.Random
export const getNav = (options) => {
  const template = {
    main:true,
    studio:true,
    map:false,
    mining:true,
    more:true,
    errer_404:true

  }
  return Mock.mock(template)
}