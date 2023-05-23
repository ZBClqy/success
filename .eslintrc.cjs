module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended'
    ],
    'overrides': [
    ],
    'parser': 'vue-eslint-parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
        'parser': '@typescript-eslint/parser',
    },
    'plugins': [
        'vue',
        '@typescript-eslint'
    ],
    'rules': {
        'no-console': 'off',
        semi: ['error', 'never'], // 禁止分号
        quotes: ['error', 'single'], // 使用单引号
        indent: ['error', 4], // 4格缩进-js
        // "vue/no-parsing-error": ["error", {
        //     "invalid-first-character-of-tag-name": false
        // }],
        'vue/no-parsing-error': 'off',
        'vue/html-indent': ['error', 4], // 4格缩进-html
        'vue/no-reserved-keys': ['error'], // 禁止使用保留字段
        'vue/max-attributes-per-line': 'off', // 标签不强制换换行
        'vue/singleline-html-element-content-newline': 'off', // 标签内容不强制换行
        'vue/html-closing-bracket-spacing': 'off', // 标签结束不强制空格
        'vue/no-use-v-if-with-v-for': 'off',
        'no-control-regex': 0,
        //  "vue/component-definition-name-casing": ["error", "PascalCase"] // 组件名称
        //  "vue/script-indent": [2, "tab", { baseIndent: 1 }],
        //  "vue/html-indent": [2, "tab", { baseIndent: 1 }],
        //  "no-undef": 2, //不可以有未声明的变量
        //  "no-redeclare": 2, //禁止重复声明变量
        //  semi: [2, "always"], //语句强制分号结尾
        //  "no-func-assign": 2, //禁止重复的函数声明
        //  // "spaced-comment": 2, //注释前要有空格
        //  "arrow-spacing": [2, { before: true, after: true }], //箭头前后括号
        'block-spacing': [2, 'always'], // 块级作用域缩进
        //  "brace-style": [2, "1tbs", { allowSingleLine: true }], // 大括号风格，允许写在一行
        //  "comma-spacing": [2, { before: false, after: true }], // 逗号前后的空格
        //  "comma-style": [2, "last"], // 逗号风格，换行时在行首还是行尾
        //  "eol-last": 2, // 文件以单一的换行符结束
        //  eqeqeq: [2, "allow-null"], // 必须使用全等
        //  "generator-star-spacing": [2, { before: true, after: true }], // generate函数的前后空格
        //  indent: [2, 2, { SwitchCase: 1 }], // 缩进风格，switch缩进风格
        //  "jsx-quotes": [2, "prefer-single"], // jsx使用单引号
        //  "key-spacing": [2, { beforeColon: false, afterColon: true }], // 对象字面量中冒号添加后空格
        'keyword-spacing': [2, { before: true, after: true }], // 关键字前后空格
        //  "new-parens": 2, // new时必须加小括号
        //  "no-cond-assign": 2, // 禁止在条件表达式中使用赋值语句
        //  "no-dupe-args": 2, //函数参数不能重复
        //  "no-dupe-class-members": 2, //对象成员不能重复
        //  "no-duplicate-case": 2, //switch中的case标签不能重复
        //  "no-empty-pattern": 2, // 禁止空解构
        //  "no-eval": 2, //禁止使用eval
        //  "no-extra-parens": [2, "functions"], //禁止非必要的括号
        //  "no-func-assign": 2, //禁止重复的函数声明
        //  "no-invalid-regexp": 2, //禁止无效的正则表达式
        //  "no-irregular-whitespace": 2, //不能有不规则的空格
        //  "no-mixed-spaces-and-tabs": 2, //禁止混用tab和空格
        //  "no-multi-spaces": [2, { ignoreEOLComments: true }], //不能用多余的空格
        'no-multiple-empty-lines': [2, { max: 1 }], // 空行最多不能超过2行
        //  "no-redeclare": 2, //禁止重复声明变量
        //  "no-regex-spaces": 2, //禁止在正则表达式字面量中使用多个空格
        //  "no-trailing-spaces": 2, //一行结束后面不要有空格
        //  "no-undef": 2, //不能有未定义的变量
        //  "no-whitespace-before-property": 2, // 对象键之前无空格
        //  "operator-linebreak": [2, "after", { overrides: { "?": "before", ":": "before" } }], //换行时运算符在行尾还是行首
        //  "padded-blocks": [2, "never"], //块语句内行首行尾不能空行
        //  "semi-spacing": [2, { before: false, after: true }], //分号前后空格
        'space-before-blocks': [2, 'always'], // 不以新行开始的块{前面需要有空格
        'space-before-function-paren': [2, 'always'], // 函数定义时括号前面需要有空格
        //  "space-in-parens": [2, "never"], //小括号里面不需要有空格
        'space-infix-ops': 2,// 中缀操作符周围需要有空格
        'vue/multi-word-component-names': 0,
        //  "space-unary-ops": [2, { words: true, nonwords: false }], //一元运算符的前/后要不要加空格
        //  "spaced-comment": [
        //      2,
        //      "always",
        //      { markers: ["global", "globals", "eslint", "eslint-disable", "*package", "!", ","] },
        //  ], //注释风格需要有空格
        //  "template-curly-spacing": [2, "never"], //模板中{}包裹的变量不需要空格
        //  "wrap-iife": [2, "any"], //立即执行函数表达式的小括号风格任意一种都可以
        //  "yield-star-spacing": [2, "both"], // generate 函数 yeild风格
        //  // "prefer-const": 2, //优先使用const
        //  "object-curly-spacing": [2, "always", { objectsInObjects: false }], //大括号内是否允许不必要的空格

    }
}
