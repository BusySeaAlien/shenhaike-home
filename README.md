# 深海客 Home

独立的 Astro 静态门户，正式站点元数据为 https://shenhaike.com/。当前仅本地开发，不包含部署流程、旧链接跳转或文章接口。

## 本地运行

使用 Node.js 22 和 pnpm 9.14.4，在本目录执行：

```powershell
pnpm install --frozen-lockfile
pnpm dev
```

按终端显示的本地地址访问。停止服务使用 Ctrl+C。

## 检查和生产预览

```powershell
pnpm check
pnpm build
pnpm preview
```

构建结果位于 dist/。所有路径相对于项目目录；移动目录后应重新安装依赖，以重建 Windows pnpm 链接。

## 编辑内容

src/config.ts 集中保存品牌文案、站点状态与链接。上线站点使用 live 状态和 href/action，筹备站点使用 planned 状态和 notice。首页、样式分别位于 src/pages/index.astro、src/styles/global.css。favicon 复用 Ink 原有素材。

固定浅色，使用系统字体，无客户端脚本、RSS、后端或数据库。无 GitHub 仓库创建、推送、Cloudflare 发布操作。

