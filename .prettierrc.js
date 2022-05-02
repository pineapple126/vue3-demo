module.exports = {
  parser: 'babel', // 指定使用哪种解析器
  arrowParens: 'always', // 给箭头函数的参数加括号
  bracketSpacing: true, // 在对象字面量的括号前面输入空格
  insertPragma: false, // 是否在文件顶部插入一个format注释
  jsxBracketSameLine: false, // 在多行JSX中最后一行的>是否不另起一行
  jsxSingleQuote: false, // JSX中是否使用单引号替代双引号
  printWidth: 160, // 单行代码的最大长度
  proseWrap: 'never', // 指定文件的折行形式(always=>当超出printWidth换行 never：不折行 preserve：按照文件原样折行)
  requirePragma: false, // 文件顶部是否需要注释说明
  semi: true, // 在末尾是否加分好
  singleQuote: true, // 是否使用单引号
  tabWidth: 2, // 指定缩进的长度
  trailingComma: 'none', // 是否在肯能的多行中输入尾逗号
  useTabs: false, // 缩进不适用tab，使用空格
  overrides: [
    {
      files: '*.json', // JSON文件特殊处理
      options: {
        parser: 'json', // 解析器为json解析器
      },
    },
    {
      files: '*.vue', // vue文件特殊处理
      options: {
        parser: 'vue', // vue文件解析器
      },
    },
    {
      files: '*.{css,scss,less}', // css文件处理
      options: {
        parser: 'css', // css解析器
        singleQuote: false, // 是否使用单引号
      },
    },
    {
      files: '*.md', // markdown文件处理
      options: {
        parser: 'markdown', // markdown解析器
      },
    },
    {
      files: '*.{yml,yaml}', // yml文件处理
      options: {
        parser: 'yaml', // yml文件解析器
      },
    },
  ],
};
