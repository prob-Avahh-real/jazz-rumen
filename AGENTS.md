# jazz-rumen

爵士入门：面向爵士爱好者的入门赏析应用。时间线（十个时代）、传奇人物、必听唱片（入门/进阶/挑战分级）、聆听指南与术语表、每日推荐、本地收藏。

## 用途与 Target 判定

内容赏析类应用（爵士入门）

- 移动端：需要（主要形态）
- 智能硬件：不适用

## 目标平台

| 平台 | 方式 | 产出 |
|------|------|------|
| Android | Capacitor → Gradle | APK |
| iOS | Capacitor（若已加 ios/） | IPA |

## 技术栈信号

- 检测到：capacitor, vite, node（原生 JS，无框架）

## 命令

```bash
npm install
npm run dev
npm run build
npm test
npm run sync:android
npm run apk:debug
```

## 结构

- `index.html` — 入口
- `src/data.js` — 全部内容数据（时代/人物/唱片/术语/指南/FAQ），纯数据无 DOM
- `src/app.js` — 渲染与交互（tab 切换、唱片/人物详情弹层、收藏 localStorage）
- `src/style.css` — 移动端优先样式（底部 tabbar + safe-area）

## 助手约束

- 遵循仓库根 `AGENTS.md`：通用性/扩展性、分阶段里程碑
- 内容改动只动 `src/data.js`；新增字段须同步 `test/smoke.test.js` 的完整性检查
- 不引入框架与构建时依赖以外的运行时依赖
- 收藏 key：`jazz-rumen.favs`

## 验证环 / Done

```bash
npm install
npm test
npm run build
npx cap sync android   # 若有 android/
```

**Done 示例**：测试通过 + `dist/` 产物生成 + `cap sync` 无报错。
