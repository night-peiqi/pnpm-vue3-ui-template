module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base'
    // 'plugin:prettier/recommended' // 添加 prettier 插件 以解决冲突
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    semi: 'off',
    'max-len': ['error', 120],
    'vue/no-multiple-template-root': 'off', // 关闭多根节点的校验
    'import/prefer-default-export': 'off', // 允许单个文件只有一个 export
    'comma-dangle': 'off'
  }
}
