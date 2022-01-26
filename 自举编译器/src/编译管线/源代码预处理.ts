// 输入核心编译器之前, 对源代码文本进行预处理
//
// 预处理过程:
// 1. 特殊字符过滤 (控制字符/不可见字符等)
// 2. Unicode NFKC 标准化
// 3. 换行符标准化 (LF 为标准)
// 以上.
import 源代码字符过滤正则 from "../_生成/源代码字符过滤正则";

function 源代码预处理(文本: string): string {
  function 替换(文本: string, 源: string, 目标: string): string {
    return 文本.split(源).join(目标);
  }
  // tab 替换为空格
  文本 = 替换(文本, "\t", " ");

  // 1
  文本 = 文本.replaceAll(源代码字符过滤正则, "");

  // 2
  文本 = 文本.normalize("NFKC");

  // 3
  文本 = 替换(替换(文本, "\r\n", "\n"), "\r", "\n");

  return 文本;
}

export default 源代码预处理;
