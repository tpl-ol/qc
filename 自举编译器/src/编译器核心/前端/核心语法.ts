// 编译器前端核心语法元素定义

// 关键字

// 一般关键字
export const 关键字的 = "的";
export const 关键字了 = "了";
export const 关键字是 = "是";
export const 关键字不是 = "不是";

export const 一般关键字 = [关键字的, 关键字了, 关键字是, 关键字不是];

// 行首关键字
export const 关键字定义 = "定义";
export const 关键字标记 = "标记";
export const 关键字调用 = "调用";
export const 关键字导入 = "导入";
export const 关键字导出 = "导出";
export const 关键字循环 = "循环";
export const 关键字若 = "若";
export const 关键字另 = "另";

export const 行首关键字 = [
  关键字定义,
  关键字标记,
  关键字调用,
  关键字导入,
  关键字导出,
  关键字循环,
  关键字若,
  关键字另,
];

// 条件关键字 (句首)
export const 关键字变量 = "变量";
export const 关键字常量 = "常量";
export const 关键字类型 = "类型";
export const 关键字枚举 = "枚举";
export const 关键字外部 = "外部";
export const 关键字参数 = "参数";
export const 关键字泛型 = "泛型";
export const 关键字条件编译 = "条件编译";
export const 关键字内置 = "内置";
export const 关键字异步 = "异步";
export const 关键字单位 = "单位";
export const 关键字全部 = "全部";
export const 关键字默认 = "默认";
export const 关键字次 = "次";
export const 关键字至 = "至";
export const 关键字到 = "到";
export const 关键字步长 = "步长";
export const 关键字直到 = "直到";

export const 关键字后端ts = "后端ts";
export const 关键字后端wasm = "后端wasm";
export const 关键字后端py = "后端py";
export const 关键字后端java = "后端java";

export const 条件关键字 = {
  [关键字定义]: [
    关键字变量,
    关键字常量,
    关键字类型,
    关键字枚举,
    关键字标记,
    关键字外部,
    关键字参数,
    关键字泛型,
  ],
  [关键字标记]: [关键字条件编译, 关键字内置, 关键字异步, 关键字单位],
  [关键字调用]: [关键字外部],
  [关键字导入]: [关键字全部],
  [关键字导出]: [关键字默认, 关键字全部],
  [关键字循环]: [
    关键字次,
    关键字至,
    关键字到,
    关键字步长,
    关键字直到,
    关键字变量,
    关键字若,
  ],
  [关键字若]: [],
  [关键字另]: [关键字若],
};

export const 条件编译列表 = [
  关键字后端ts,
  关键字后端wasm,
  关键字后端py,
  关键字后端java,
];

// 语法字符
export const 语法字符换行 = ["\n"];
export const 语法字符注释 = ["#"];
export const 语法字符空格 = [" "];
export const 语法字符转义 = ["\\"];
export const 语法字符引号 = ['"'];
export const 语法字符引号反 = ["`"];
export const 语法字符引号左 = ["“"];
export const 语法字符引号右 = ["”"];
export const 语法字符括号小左 = ["(", "（"];
export const 语法字符括号小右 = [")", "）"];
export const 语法字符括号中左 = ["["];
export const 语法字符括号中右 = ["]"];
export const 语法字符括号大左 = ["{"];
export const 语法字符括号大右 = ["}"];

export const 语法字符句号 = ["。"];
export const 语法字符逗号 = [",", "，"];
export const 语法字符顿号 = ["、"];
export const 语法字符冒号 = [":", "："];
export const 语法字符分号 = [";", "；"];
export const 语法字符问号 = ["?", "？"];
export const 语法字符叹号 = ["!", "！"];

export const 语法字符等号 = ["="];
export const 语法字符减 = ["-"];
export const 语法字符加 = ["+"];
export const 语法字符乘 = ["*"];
export const 语法字符除 = ["/"];
export const 语法字符余 = ["%"];
export const 语法字符非 = ["~"];
export const 语法字符异或 = ["^"];
export const 语法字符与 = ["&"];
export const 语法字符或 = ["|"];
export const 语法字符小于 = ["<"];
export const 语法字符大于 = [">"];

export const 语法字符 = [
  语法字符换行,
  语法字符注释,
  语法字符空格,
  语法字符转义,
  语法字符引号,
  语法字符引号反,
  语法字符引号左,
  语法字符引号右,
  语法字符括号小左,
  语法字符括号小右,
  语法字符括号中左,
  语法字符括号中右,
  语法字符括号大左,
  语法字符括号大右,

  语法字符句号,
  语法字符逗号,
  语法字符顿号,
  语法字符冒号,
  语法字符分号,
  语法字符问号,
  语法字符叹号,

  语法字符等号,
  语法字符减,
  语法字符加,
  语法字符乘,
  语法字符除,
  语法字符余,
  语法字符非,
  语法字符异或,
  语法字符与,
  语法字符或,
  语法字符小于,
  语法字符大于,
];

export const 字符集数字起始 = "0123456789";
export const 字符集数字 = "0123456789._xabcdef-ABCDEFo";
export const 数字进制16 = "0x";
export const 数字进制8 = "0o";
export const 数字进制2 = "0b";
export const 数字指数 = "e";

export const 数字进制前缀 = [数字进制16, 数字进制8, 数字进制2];
// TODO
export const 数字格式检查正则 =
  /^([0-9][0-9]*(\.[0-9]*)?(e\-?[0-9]*)?)|(0x[0-9a-fA-F]+)|(0o[0-7]+)|(0b[01]+)$/;

// TODO
