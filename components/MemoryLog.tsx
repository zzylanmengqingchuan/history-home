"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { clearStories } from "@/lib/storage";
import type { StoryRecord } from "@/lib/types";

interface MemoryLogProps {
  stories: StoryRecord[];
  onChange: (stories: StoryRecord[]) => void;
}

export function MemoryLog({ stories, onChange }: MemoryLogProps) {
  function handleClear() {
    clearStories();
    onChange([]);
  }

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-serif text-2xl font-bold tracking-wide">记忆模拟</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            本地 localStorage 保存你的历史输入与生成结果（最多 50 条）。演示 Agent「记得住」。
          </p>
        </div>
        {stories.length > 0 && (
          <Button
            variant="outline"
            size="sm"
            className="border-2 border-foreground shadow-sm"
            onClick={handleClear}
          >
            清空记忆
          </Button>
        )}
      </div>

      {stories.length === 0 ? (
        <Card className="border-2 border-dashed border-foreground/40 shadow-none">
          <CardContent className="py-10 text-center text-sm text-muted-foreground">
            还没有记录。去「开始创作」写一篇故事，记忆会出现在这里。
          </CardContent>
        </Card>
      ) : (
        <ScrollArea className="h-[420px] rounded-none border-2 border-foreground">
          <div className="space-y-3 p-3">
            {stories.map((s) => (
              <Card key={s.id} className="border-2 border-foreground shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className="border border-foreground">{s.templateTitle}</Badge>
                    <span className="text-xs text-muted-foreground">
                      {new Date(s.createdAt).toLocaleString("zh-CN")}
                    </span>
                  </div>
                  <CardTitle className="font-serif text-base font-semibold">
                    输入摘要
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <ul className="space-y-1 text-muted-foreground">
                    {Object.entries(s.inputs).map(([k, v]) =>
                      v ? (
                        <li key={k}>
                          <span className="font-medium text-foreground">{k}</span>
                          ：{v}
                        </li>
                      ) : null
                    )}
                  </ul>
                  <p className="line-clamp-3 border-t-2 border-foreground/10 pt-2 font-serif leading-relaxed">
                    {s.story}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      )}
    </section>
  );
}
