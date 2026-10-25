# Alex 使用与修改规则

先读 template.json 和 project.json。根 README 提供工具链、安装、启动、停止与构建命令。应用保持 feature-based：config 管理品牌，content 管理所有双语数据，theme.css 集中管理主题，components 维护共享交互，pages 组合页面。

支持 PC、平板、手机及 320px 窄屏。默认中文，英文 /en；语言切换应保留当前页、查询和锚点。所有运行图片和字体本地托管。演示表单禁止外部发送和持久化，不新增后端。动效清单见 docs/MOTION.md，素材见 docs/ASSETS.json。

新依赖需用户批准，不删除已有修改。不应将任意集成方的私有配置写入模板。许可分开看源码、素材与工具，不能以协议工具许可替代素材授权。
