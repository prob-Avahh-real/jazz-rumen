# 爵士入门 (jazz-rumen)

为刚开始欣赏爵士乐的爱好者准备的移动端赏析应用：

- 推荐：每天推一张入门唱片 + 一首曲子（附各平台试听链接）
- 时间线：从拉格泰姆到当代，十个时代的风格、代表人物与聆听提示
- 人物：12 位传奇乐手的小传与"从这里听起"清单
- 唱片：19 张必听唱片，按入门 / 进阶 / 挑战分级
- 指南：三步听懂即兴、标准曲结构、摇摆感、节奏组分工、术语表、新手 FAQ
- 收藏：一键收藏唱片与乐手（localStorage 本地保存）

## 开发

```bash
npm install
npm run dev      # 本地预览
npm test         # 数据完整性测试
npm run build    # 产出 dist/
npm run sync:android   # 同步到 Android 壳
```

内容改动集中在 `src/data.js`，详见 [AGENTS.md](AGENTS.md)。
