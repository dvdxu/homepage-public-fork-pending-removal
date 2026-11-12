# Wenhao Xu — Personal homepage

基于 Wenhao_Xu_Resume.pdf 整理的英文科研主页，参考 Yanheng Mai 的学术主页双栏结构，优化字体、导航、研究条目、留白和手机布局。纯 HTML / CSS / JavaScript，无构建依赖、外部字体或统计脚本；可直接打开 index.html。

## 本地预览

在本目录运行：

```powershell
python -m http.server 8000
```

浏览器访问 http://localhost:8000 。也可双击 index.html 离线浏览。邮件复制在本地文件模式可能被浏览器限制，此时会自动选中地址供手动复制。

## 发布到 GitHub Pages

1. 在自己的 GitHub 账号下创建仓库，或通过 https://github.com/MRonaldo-gif/mronaldo.github.io/fork 创建正式 fork。
2. 上传本目录当前文件（不是 reference-site；不要上传父目录的个人材料）。如使用已有的正式 fork，可先将其克隆，再用本目录文件替换网站文件，并删除原模板的 `.github/workflows` 构建流程。
3. 仓库 Settings → Pages → Build and deployment：选择 **Deploy from a branch**，分支为 `main`，目录为 `/ (root)`。
4. 普通仓库网址为 `https://你的用户名.github.io/仓库名/`；若仓库名为 `你的用户名.github.io`，则网址为 `https://你的用户名.github.io/`。

本站资源和锚点均使用相对路径，兼容项目子路径。`.nojekyll` 禁用不需要的 Jekyll 构建。

此目录保留了参考仓库的 Git 历史，远程名为 `upstream`。尚未创建 GitHub 平台上的 fork、配置个人 origin 或发布网站。可在将本地更改提交后设置个人 origin 并推送；不要向 upstream 推送。

## 编辑内容

- `index.html`：个人资料、研究、经历、教育、荣誉、邮箱。
- `styles.css`：颜色、排版、手机布局和打印样式。
- `script.js`：研究筛选、导航、邮件复制。
- `assets/Wenhao_Xu_Resume.pdf`：简历下载源文件。
- `assets/favicon.svg`：姓名缩写标识。

没有简历可确认的头像、GitHub / Scholar 账号，因此未虚构这些资料。头像位置使用 WX 字母标识；如需换成照片，可替换 `.monogram` 元素并调整样式。没有推断论文录用状态、作者名单或学位类型。履历结束时间遵循简历。机器人马拉松奖项年份在简历中未提供，页面以破折号显示。研究指标来自简历，外部论文链接按简历原样保留。

## 来源与许可

- 参考网站：https://mronaldo-gif.github.io/mronaldo.github.io/
- 参考仓库：https://github.com/MRonaldo-gif/mronaldo.github.io
- 基准提交：`2cee753`（实际完整 SHA 可通过 `git log` 查看）。
- 保留原仓库 MIT LICENSE（Copyright 2022 Yi Ren）。
- ParkourFormer 图来自参考仓库 `images/parkourformer.jpg`；仅展示与简历中共同一作研究相关的该图。其他研究卡片为原创 SVG 概念插图，并非实验图或结果图。

原模板的个人照片、其他作者资料、无关论文、统计脚本、Scholar 占位链接和旧构建流程均未用于当前页面。
