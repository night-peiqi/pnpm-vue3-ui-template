# 适用范围

## 该模板不做组件库打包，仅适用于 vue3 + ant-design-vue 的项目使用

- [node 16.14.0+](http://nodejs.org/)
- [Vue@3.2.0](https://cn.vuejs.org/guide/introduction.html)
- [Es6+](https://es6.ruanyifeng.com/)
- [Ant-Design-Vue@3.2.0](https://2x.antdv.com/docs/vue/introduce-cn/)

# 使用方法

## **组件库** 全局注册

```javascript
// main.js
import CQComs from '@zhj/component'

...

app.use(CQComs)
```

## **组件库** 按需引入

```javascript
import { CQButton } from '@zhj/component'

...

app.use(CQButton)
```

## **工具方法** 引入

```javascript
import { testFn } from '@zhj/components'
```

# 组件库开发

## 本地开发

- 创建本地依赖包

```javascript
// 进入组件库项目根目录，执行 npm link
npm link
```

- 使用本地依赖包

```javascript
// 进入业务代码仓根目录，执行 npm link @zhj/component
npm link @zhj/component
```

- 删除本地依赖包

```javascript
npm uninstall --global @zhj/component
```

- 这时候修改组件库代码，业务代码仓中的引用会自动更新

## 代码提交步骤

```javascript
git add .

// 安装提示 选择正确的commit类型，填写commit-msg
pnpm commit

git push
```

## 发包步骤

### **更新版本号、同时会创建 tag、创建 changelog**

```javascript
// 大版本更新（较大版本更新）
pnpm release-major

// 小版本更新（较小版本更新）
pnpm release-minor

// 更新补丁（修改bug）
pnpm release-patch
```

### **发布**

```javascript
npm publish
```

## 常用命令

**使用 prettier 格式化所有文件**

```
pnpm run prettier
```
