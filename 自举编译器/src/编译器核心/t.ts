// 主要类型

// 编译器核心 API
// file:/// URL 对应的实际根目录由外部代码决定
// 目前仅支持 file:// 类型的 URL
// TODO 类似 deno 支持 https:// 的 URL 加载代码 (导入)

export interface 编译配置 {
  // 源代码文件 -> 编译后生成文件 (URL)
  编译入口文件: Map<string, string>;

  // 使用指定的编译器后端 (目前仅支持 ts)
  后端: "ts";

  // 编译时指定的编译标志 (比如用于条件编译)
  // TODO 目前暂不支持
  编译标志?: Map<string, string>;

  // 调试选项
  // TODO 具体选项
  调试?: number;
}

// 文件列表: URL -> 文件内容
export type 文件列表 = Map<string, string>;

export interface 文件加载结果 {
  // 还需要加载的文件 URL 列表
  需要列表: Array<string>;

  // 对每个加载的文件 URL 返回若干条错误信息
  错误信息?: Map<string, Array<string>>;
}

export interface 编译结果 {
  // 若编译成功则此项不存在
  错误信息?: Map<string, Array<string>>;

  警告信息?: Map<string, Array<string>>;

  // [可选] 开启调试后返回相应调试信息
  调试信息?: Array<string>;
}

// 单个生成的目标代码文件
export interface 目标代码结果 {
  路径: string;
  内容: string;
}

// 编译器核心是纯计算无 IO 的, IO 由外部代码驱动
export interface 编译器核心接口 {
  // 喂给所需加载的文件内容, 返回还需要加载的文件及错误信息
  // 需要调用多次, 直到没有新的文件需要加载 (递归)
  加载文件(列表: 文件列表 | undefined): 文件加载结果;

  // 主要编译过程 (前端)
  编译(): 编译结果;

  // (后端) 需要调用多次, 直到没有新的文件需要生成 (拉取)
  生成目标代码(): Array<目标代码结果>;
}
