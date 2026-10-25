# 修改指南

品牌：config/brand.ts 与 .tpl/template.json；内容：content/data.ts，同时维护 zh/en。颜色、间距与排版：theme.css 顶部 --ax-* 令牌。素材：public/templates/alex/media，同时维护 ASSETS.json；字体在 fonts。动效入口：components/Motion.tsx 与各对应区块，参数依据 MOTION.md。新增页面在 pages 与 meta.ts 注册，同时更新 template.json 的 surfaces。

只复用既有依赖。修改后运行相关类型、lint、测试与构建。涉及路由和交互时运行实际页面，核对键盘、手机与减少动态效果。不要添加装饰箭头或把动态效果替换成统一淡入。
