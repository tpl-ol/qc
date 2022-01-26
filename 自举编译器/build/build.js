// 自动化构建脚本
const path = require("path");
const fs = require("fs");

// 配置
const 生成目录 = "src/_生成";

// 基础工具
function 准备生成代码(文件名) {
  const 路径 = path.join(生成目录, 文件名);
  console.log(`=> ${路径}`);

  return function (文本) {
    fs.writeFileSync(路径, Buffer.from(文本, "utf-8"));
  };
}

function 正则代码模板(正则) {
  return `\
// 警告 !  这是自动生成的代码, 请勿直接修改
const 正则 = /${正则}/gim;
export default 正则;
`;
}

// 具体生成

// src/_生成/源代码字符过滤正则.ts
function 生成源代码字符过滤正则() {
  const 写 = 准备生成代码("源代码字符过滤正则.ts");

  const regenerate = require("regenerate");
  // 不允许在源代码中出现的字符
  const 控制字符 = require("@unicode/unicode-14.0.0/General_Category/Control/code-points.js");
  const 未定义 = require("@unicode/unicode-14.0.0/General_Category/Unassigned/code-points.js");
  const 私有 = require("@unicode/unicode-14.0.0/General_Category/Private_Use/code-points.js");
  const 格式化 = require("@unicode/unicode-14.0.0/General_Category/Format/code-points.js");
  const 特殊 = require("@unicode/unicode-14.0.0/Block/Specials/code-points.js");

  const 集 = regenerate()
    .add(控制字符)
    .add(未定义)
    .add(私有)
    .add(格式化)
    .add(特殊);
  const 正则 = 集.toString();
  console.log(正则);

  写(正则代码模板(正则));
}

// 开始生成
生成源代码字符过滤正则();
