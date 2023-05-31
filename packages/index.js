import * as components from './components'

export * from './utils'
export * from './components'

export const install = (Vue) => {
  // 注册组件
  Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
  })
  console.log('@zhj/component 注册成功')
}

export default { install }
