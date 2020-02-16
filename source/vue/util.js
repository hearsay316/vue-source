// ?: 匹配不捕获  不捕获当前分组
// + 至少一个
// ? 尽可能少匹配
const defaultRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
const util = {
  getValue(vm, expr) {
    let keys = expr.split(".");
    return keys.reduce((memo, current) => {
      memo = memo[current];
      return memo;
    }, vm);
  },
  compilerText(node, vm) {
    // 编译文本  替换大括号{{}}
    node.textContent = node.textContent.replace(defaultRE, function(...args) {
      console.log(args, 66666);
      return util.getValue(vm, args[1]);
    });
  }
};
/**
 *
 * @param node 就是文档碎片
 * @param vm 是当前实例
 */

export function compiler(node, vm) {
  console.log(node);
  let childNodes = node.childNodes;
  // 将类数组转化为数组
  [...childNodes].forEach(child => {
    // child 一种是文本节点 一种是文字节点
    if (child.nodeType == 1) {
      //1是元素 3是文本
      compiler(child, vm);
    } else if (child.nodeType == 3) {
      util.compilerText(child, vm);
    }
  });
}
