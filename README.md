# Alex 法律顾问模板

黑金响应式律师作品集，默认中文，英文路径 `/en`。包含五类服务、七个演示案例、十条评价、两种服务方案、三篇法律洞察与本地预约演示。

Node 24.16.0，pnpm 9.15.4；`pnpm install --frozen-lockfile` 安装，`pnpm dev` 启动默认 http://127.0.0.1:43610；Ctrl+C 停止。生产使用 `pnpm build`、`pnpm start`。`pnpm typecheck`、`pnpm lint`、`pnpm test` 验证，`pnpm bundle` 打包运行模块。

构建在本地 Linux 文件系统完成。品牌、内容、主题、公共组件和页面分别维护；操作合同见 `.tpl/project.json`，修改入口见 `.tpl/customization.json`。演示表单仅校验，不发送、不保存；不填写真实案件隐私。所有案例、评价、报价和指标均为模板演示，不能视为真实履历或法律意见。图片商业再分发权限待确认，默认不公开上架。

Git 源码：https://github.com/weelume/alex-template。参考公开预览：https://jiro.build/templates/portfolio/lawyer-portfolio-landing-page-alex。详细规则先读 `.tpl/README.md`、`.tpl/template.json` 与 `.tpl/project.json`。
