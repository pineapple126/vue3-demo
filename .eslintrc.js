module.exports = {
  root: true, // 当前项目使用这个配置文件，不会往父级目录找.eslintrc.js文件
  env: {
    // 指定eslint启动环境(vuecli底层是node支持)，browser：true也可以在浏览器设置
    browser: true, // browser global variables
    es2021: true, // adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12.
  },
  extends: [
    // 扩展配置
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    // 对新语法使用eslint
    ecmaVersion: 12,
  },
  plugins: ['prettier'],
  rules: {
    // 自定义规则 - 其实上面集成后有很多内置的规则，这里可以进行规则的一些修改
    // key: 规则代号
    // value: 具体的限定方式
    //  "off" or 0 - 关闭规则
    //  "warn" or 1 - 将规则视为一个警告(不会影响退出码)，只警告，不会退出程序
    //  "error" or 2 - 将规则视为一个错误(退出码为1)，报错并退出程序
    'prettier/prettier': 'error',
  },
};
