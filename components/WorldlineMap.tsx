"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { WORLDLINES } from "@/lib/data";
import type { Worldline } from "@/lib/types";

export function WorldlineMap() {
  const [active, setActive] = useState<Worldline | null>(null);

  return (
    <section className="space-y-4">
      <div>
        <h2 className="font-serif text-2xl font-bold tracking-wide">世界线地图</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          共创形成的平行宇宙支线。点击查看片段——真实产品里这里会接向量检索与时间轴。
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {WORLDLINES.map((wl, i) => (
          <button
            key={wl.id}
            type="button"
            onClick={() => setActive(wl)}
            className="text-left transition-transform active:translate-x-px active:translate-y-px"
          >
            <Card
              className={`h-full border-2 border-foreground shadow-md hover:shadow-lg ${wl.color}`}
            >
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <Badge className="border border-foreground bg-background text-foreground">
                    线 {i + 1}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{wl.era}</span>
                </div>
                <CardTitle className="font-serif text-xl">{wl.title}</CardTitle>
                <CardDescription className="text-foreground/80">
                  {wl.summary}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {wl.characters.map((c) => (
                    <Badge
                      key={c}
                      variant="outline"
                      className="border-foreground bg-background/80"
                    >
                      {c}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </button>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="border-2 border-foreground shadow-xl sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl">{active?.title}</DialogTitle>
            <DialogDescription>
              {active?.era} · 点击片段可在完整版中继续共创
            </DialogDescription>
          </DialogHeader>
          <ul className="space-y-3">
            {active?.fragments.map((f, idx) => (
              <li
                key={idx}
                className="border-2 border-foreground bg-muted/30 p-3 font-serif text-sm leading-relaxed shadow-sm"
              >
                <span className="mb-1 block text-xs font-sans font-medium text-primary">
                  片段 {idx + 1}
                </span>
                {f}
              </li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>
    </section>
  );
}
