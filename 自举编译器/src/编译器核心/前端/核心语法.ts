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

// TODO
