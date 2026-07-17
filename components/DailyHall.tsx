"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DAILY_REPORT } from "@/lib/data";

export function DailyHall() {
  const r = DAILY_REPORT;

  return (
    <section className="space-y-4">
      <div>
        <h2 className="font-serif text-2xl font-bold tracking-wide">今日人物堂</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          模拟的 Agent 日报：汇总共创热点、人物偏好与世界线动态。
        </p>
      </div>

      <Card className="border-2 border-foreground shadow-md">
        <CardHeader className="space-y-2 border-b-2 border-foreground bg-secondary/40">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="border border-foreground bg-background text-foreground">
              {r.dateLabel}
            </Badge>
            <span className="text-xs text-muted-foreground">
              Demo 静态文案 · 可替换为真实汇总
            </span>
          </div>
          <CardTitle className="font-serif text-xl leading-snug">
            {r.headline}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {r.stats.map((s) => (
              <div
                key={s.label}
                className="border-2 border-foreground bg-muted/30 p-3 text-center shadow-sm"
              >
                <div className="font-mono text-2xl font-bold">{s.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
          <article className="whitespace-pre-wrap font-serif text-sm leading-8 text-foreground/90">
            {r.body}
          </article>
        </CardContent>
      </Card>
    </section>
  );
}
