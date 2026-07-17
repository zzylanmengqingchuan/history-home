"use client";

import { useEffect, useState } from "react";
import {
  BookOpen,
  Compass,
  Feather,
  Home,
  ScrollText,
  Sparkles,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DailyHall } from "@/components/DailyHall";
import { MemoryLog } from "@/components/MemoryLog";
import { StoryGenerator } from "@/components/StoryGenerator";
import { SummonFigure } from "@/components/SummonFigure";
import { TemplateSelector } from "@/components/TemplateSelector";
import { WorldlineMap } from "@/components/WorldlineMap";
import { loadStories } from "@/lib/storage";
import type { StoryRecord, StoryTemplate, ViewId } from "@/lib/types";

const NAV: {
  id: ViewId;
  label: string;
  desc: string;
  icon: React.ReactNode;
  primary?: boolean;
}[] = [
  {
    id: "create",
    label: "开始创作",
    desc: "选模板 · 引导提问 · 生成故事",
    icon: <Feather className="size-5" />,
    primary: true,
  },
  {
    id: "worldlines",
    label: "浏览世界线",
    desc: "平行宇宙支线地图",
    icon: <Compass className="size-5" />,
  },
  {
    id: "daily",
    label: "今日人物堂",
    desc: "共创日报与热点",
    icon: <ScrollText className="size-5" />,
  },
  {
    id: "summon",
    label: "召唤历史人物",
    desc: "点选角色 · 听开场白",
    icon: <Users className="size-5" />,
  },
];

export function HallApp() {
  const [view, setView] = useState<ViewId>("home");
  const [template, setTemplate] = useState<StoryTemplate | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [stories, setStories] = useState<StoryRecord[]>([]);

  useEffect(() => {
    setStories(loadStories());
  }, []);

  function openTemplate(t: StoryTemplate) {
    setTemplate(t);
    setDialogOpen(true);
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 py-8 sm:px-6 sm:py-12">
      {/* 顶栏 */}
      <header className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setView("home")}
          className="group flex items-center gap-2 text-left"
        >
          <span className="flex size-9 items-center justify-center border-2 border-foreground bg-primary text-primary-foreground shadow-sm">
            <BookOpen className="size-4" />
          </span>
          <div>
            <div className="font-serif text-lg font-bold leading-none tracking-wide group-hover:underline">
              古今人物堂
            </div>
            <div className="mt-0.5 text-[11px] text-muted-foreground">
              History Home · Agent Demo
            </div>
          </div>
        </button>
        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant={view === "memory" ? "default" : "outline"}
            size="sm"
            className="border-2 border-foreground shadow-sm"
            onClick={() => setView("memory")}
          >
            <Sparkles className="size-3.5" />
            记忆
            {stories.length > 0 && (
              <Badge
                variant="secondary"
                className="ml-0.5 h-5 min-w-5 border border-foreground px-1"
              >
                {stories.length}
              </Badge>
            )}
          </Button>
          {view !== "home" && (
            <Button
              variant="outline"
              size="sm"
              className="border-2 border-foreground shadow-sm"
              onClick={() => setView("home")}
            >
              <Home className="size-3.5" />
              首页
            </Button>
          )}
        </div>
      </header>

      {/* 主内容 */}
      <main className="flex-1">
        {view === "home" && (
          <div className="space-y-10">
            <section className="relative border-2 border-foreground bg-card p-6 shadow-lg sm:p-10">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, currentColor, currentColor 1px, transparent 1px, transparent 28px)",
                }}
              />
              <div className="relative space-y-4">
                <Badge className="border-2 border-foreground bg-secondary text-secondary-foreground shadow-sm">
                  Agent 集训 Demo
                </Badge>
                <h1 className="font-serif text-4xl font-bold tracking-wide sm:text-5xl">
                  古今人物堂
                </h1>
                <p className="text-lg text-muted-foreground sm:text-xl">
                  40 人共创 · 历史人物平行宇宙
                </p>
                <Separator className="my-2 max-w-xs bg-foreground" />
                <p className="max-w-2xl text-sm leading-7 text-foreground/85 sm:text-base">
                  欢迎来到人物堂。这里不是博物馆的静物展，而是一条可共创的世界线：
                  你可以让古人活到今天、替他们写日记、安排跨时空相遇，或续写别人开了头的故事。
                  Agent 记住你的偏好与输入，把零散灵感织成平行宇宙。
                  <span className="mt-2 block font-medium text-foreground">
                    30 秒上手：点下方任一入口，体验完整玩法闭环。
                  </span>
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold">快捷入口</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {NAV.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setView(item.id)}
                    className="text-left transition-transform active:translate-x-px active:translate-y-px"
                  >
                    <Card
                      className={`h-full border-2 border-foreground shadow-md hover:shadow-lg ${
                        item.primary ? "bg-primary text-primary-foreground" : ""
                      }`}
                    >
                      <CardContent className="flex items-start gap-3 p-5">
                        <span
                          className={`flex size-10 shrink-0 items-center justify-center border-2 border-foreground shadow-sm ${
                            item.primary
                              ? "bg-background text-foreground"
                              : "bg-secondary"
                          }`}
                        >
                          {item.icon}
                        </span>
                        <div>
                          <div className="font-serif text-lg font-bold">
                            {item.label}
                          </div>
                          <div
                            className={`mt-0.5 text-sm ${
                              item.primary
                                ? "text-primary-foreground/85"
                                : "text-muted-foreground"
                            }`}
                          >
                            {item.desc}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </button>
                ))}
              </div>
            </section>

            <section className="grid gap-3 border-2 border-foreground bg-muted/40 p-4 shadow-sm sm:grid-cols-3">
              {[
                { t: "模板创作", d: "4 种结构，降低共创门槛" },
                { t: "世界线", d: "故事可被续写、被分叉" },
                { t: "本地记忆", d: "localStorage 模拟 Agent 记忆" },
              ].map((x) => (
                <div key={x.t} className="text-center sm:text-left">
                  <div className="font-serif font-bold">{x.t}</div>
                  <div className="text-xs text-muted-foreground">{x.d}</div>
                </div>
              ))}
            </section>
          </div>
        )}

        {view === "create" && (
          <TemplateSelector onSelect={openTemplate} />
        )}
        {view === "worldlines" && <WorldlineMap />}
        {view === "daily" && <DailyHall />}
        {view === "summon" && <SummonFigure />}
        {view === "memory" && (
          <MemoryLog stories={stories} onChange={setStories} />
        )}
      </main>

      <footer className="mt-12 border-t-2 border-foreground pt-4 text-center text-xs text-muted-foreground">
        古今人物堂 · Next.js App Router Demo · Neo-Brutalism × 书卷气 · 无真实后端
      </footer>

      <StoryGenerator
        template={template}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onGenerated={(record) => setStories((prev) => [record, ...prev].slice(0, 50))}
      />
    </div>
  );
}
