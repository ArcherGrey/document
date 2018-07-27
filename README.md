# 文档合集

[地址](https://archergrey.github.io/document/)



技术栈：
- vue
- element (配合vue的ui框架)
- marked.js (解析markdown文件)

~~难点（和问题差不多以后都写在问题中）：~~
- markdown文件读取（通过xhr来读取文件）
- 菜单树形结果存储（对象数组）
- 缓存xhr导致修改md没效果
- 缓存js导致js修改没效果(未发现影响)

## markdown 文件命名规则

按照时间+第几篇:

`xxxx-xx-xx-n`


## 问题
- **待添加代码规范文档内容（首要）**
- 首页考虑添加一个动画（无限剑制）
- 网页top功能添加
- ~~点击新页面没有返回top（已解决）~~
- 带有目录的文档现在无法跳转（中文锚点无法跳转：修改为英文）
- 目录字体样式待调整
- 下拉菜单功能待调整
- 搜索功能待调整
- javascript 高性能显示不全（待修复：~~应该是缓存xhr造成~~ | 还是有问题猜测是xhr返回长度限制）

## 待学习的内容

- 循环引用（a.parent=b b.child=a）
- 浅拷贝深拷贝
