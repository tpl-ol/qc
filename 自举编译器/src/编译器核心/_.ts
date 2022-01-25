import {
  编译配置,
  编译器核心接口,
  文件加载结果,
  编译结果,
  目标代码结果,
} from "./t";

class 编译器核心 implements 编译器核心接口 {
  // TODO

  加载文件(列表: Map<string, string> | undefined): 文件加载结果 {
    // TODO
    return {
      需要列表: [],
    };
  }

  编译(): 编译结果 {
    // TODO
    return {};
  }

  生成目标代码(): Array<目标代码结果> {
    // TODO
    return [];
  }
}

export function 创建编译器核心(配置: 编译配置): 编译器核心接口 {
  // TODO
  return new 编译器核心();
}
