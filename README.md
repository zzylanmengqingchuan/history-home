# 古今人物堂 · History Home

Agent 集训 Demo：40 人共创 · 历史人物平行宇宙。

用 **Next.js App Router + shadcn/ui（Neo-Brutalism 主题）** 做的单页展示站，重点是 30 秒讲清玩法：模板创作 → 模拟故事 → 世界线 / 人物 / 日报 / 本地记忆。

## 在线演示（交给老师看这个）

**公网链接（无需安装依赖）：**

👉 **https://zzylanmengqingchuan.github.io/history-home/**

| 项 | 地址 |
|---|---|
| 在线 Demo | https://zzylanmengqingchuan.github.io/history-home/ |
| 源码仓库 | https://github.com/zzylanmengqingchuan/history-home |

推送到 `main` 后，GitHub Actions 会自动重新构建并发布到 Pages。

本地也可手动发布：

```bash
pnpm deploy   # 静态导出并推到 gh-pages（备用通道）
```

## 快速启动（本地开发）

```bash
pnpm install
pnpm dev
```

浏览器打开 [http://localhost:3000](http://localhost:3000)。

```bash
pnpm build         # 普通构建
pnpm build:pages   # GitHub Pages 静态导出（带 basePath）
pnpm start         # 启动生产服务（非静态模式）
```

## 项目结构

```
history-home/
├── app/
│   ├── layout.tsx          # 全局布局、字体、metadata
│   ├── page.tsx            # 首页入口 → HallApp
│   └── globals.css         # Neo-Brutalism 主题 + 书卷纸底
├── components/
│   ├── HallApp.tsx         # 单页路由状态机（视图切换）
│   ├── TemplateSelector.tsx
│   ├── StoryGenerator.tsx  # 引导表单 + 模拟 LLM + 写 localStorage
│   ├── WorldlineMap.tsx
│   ├── DailyHall.tsx
│   ├── SummonFigure.tsx
│   ├── MemoryLog.tsx
│   └── ui/                 # shadcn 组件
├── lib/
│   ├── types.ts
│   ├── data.ts             # 模板 / 世界线 / 人物 / 日报 / generateStory
│   ├── storage.ts          # localStorage 读写
│   └── utils.ts
└── components.json         # shadcn 配置
```

## 功能对照

| 入口 | 说明 |
|------|------|
| 开始创作 | 4 模板 → 2–4 引导问题 → 假 LLM 故事 → 存记忆 |
| 浏览世界线 | 4 条模拟支线，可点开片段 |
| 今日人物堂 | 静态日报汇总区 |
| 召唤历史人物 | 6 位角色 + 开场白 |
| 记忆 | 展示 / 清空 localStorage 历史 |

## 主题

已应用：

```bash
pnpm dlx shadcn@latest add https://tweakcn.com/r/themes/neo-brutalism.json
```

硬边框、硬阴影、高对比，叠一层米白纸纹做轻书卷气。

## 后续可改进

1. **接真 LLM**：`lib/data.ts` 的 `generateStory` 换成 API Route + OpenAI/兼容接口流式输出。
2. **真记忆**：localStorage → 向量库 / 用户画像，按人物偏好续写。
3. **世界线共创**：片段可被 fork、点赞、多人接力。
4. **角色对话**：召唤页接多轮 Chat + 角色 system prompt。
5. **日报自动化**：定时汇总当日故事热点。
6. **登录与 40 人协作**：账户、贡献榜、权限。
