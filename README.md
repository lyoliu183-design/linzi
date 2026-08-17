# 林子 LIN — 双语个人网站

杂志编辑风格的响应式个人网站，支持中英文切换、移动端菜单和微信二维码联系弹窗。

## 本地运行

```bash
pnpm install
pnpm dev
```

浏览器打开终端中显示的本地地址。

## 生产构建

```bash
pnpm build
```

构建结果位于 `dist/`。

## 内容修改

- 页面结构与图片：`index.html`
- 中英文文案与交互：`src/main.js`
- 视觉样式和响应式布局：`src/styles.css`
- 微信二维码：`assets/lin-wechat.jpg`

当前展示图片来自 Unsplash 在线图片服务；正式上线前可将其替换为个人作品图片。
