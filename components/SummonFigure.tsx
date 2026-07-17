"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FIGURES } from "@/lib/data";
import type { HistoricalFigure } from "@/lib/types";

export function SummonFigure() {
  const [active, setActive] = useState<HistoricalFigure | null>(null);

  return (
    <section className="space-y-4">
      <div>
        <h2 className="font-serif text-2xl font-bold tracking-wide">召唤历史人物</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          点选一位人物，听 TA 的开场白。完整版可接角色卡、语音与多轮对话。
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {FIGURES.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setActive(f)}
            className="text-left transition-transform active:translate-x-px active:translate-y-px"
          >
            <Card className="h-full border-2 border-foreground shadow-md hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-foreground">
                    {f.dynasty}
                  </Badge>
                  <span className="text-lg" aria-hidden>
                    👤
                  </span>
                </div>
                <CardTitle className="font-serif text-xl">{f.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm italic text-muted-foreground">
                  「{f.tagline}」
                </p>
              </CardContent>
            </Card>
          </button>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="border-2 border-foreground shadow-xl sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">
              {active?.name}
              <span className="ml-2 text-sm font-sans font-normal text-muted-foreground">
                {active?.dynasty}
              </span>
            </DialogTitle>
            <DialogDescription className="italic">
              「{active?.tagline}」
            </DialogDescription>
          </DialogHeader>
          <div className="border-2 border-foreground bg-secondary/30 p-4 font-serif text-sm leading-relaxed shadow-sm">
            {active?.greeting}
          </div>
          <p className="text-xs text-muted-foreground">
            Demo 为固定开场白。接入真实 Agent 后，可结合用户记忆与世界线上下文生成。
          </p>
        </DialogContent>
      </Dialog>
    </section>
  );
}
