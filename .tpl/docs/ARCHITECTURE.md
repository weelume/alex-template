# 架构

Next.js App Router + React + TypeScript + 既有 framer-motion。src/app/[[...slug]]/page.tsx 仅选择元数据中登记的页面。src/features/site-templates/catalog/alex/config/brand.ts 管品牌，content/data.ts 管双语文案和集合，theme.css 管视觉令牌与断点。组件按首屏、关于、服务、案例、指标、评价、报价、文章与联系职责组织。Shell 提供导航、页脚、语言与可选的集成配置，host.tsx 定义可选 React Context。Modal 管焦点、滚动锁、Escape 与恢复焦点。

没有数据库、后端、网络表单或持久化。合法状态以 React state 表达。所有内容演示，不提供真实法律服务。
