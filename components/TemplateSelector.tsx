"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TEMPLATES } from "@/lib/data";
import type { StoryTemplate } from "@/lib/types";

interface TemplateSelectorProps {
  onSelect: (template: StoryTemplate) => void;
}

export function TemplateSelector({ onSelect }: TemplateSelectorProps) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="font-serif text-2xl font-bold tracking-wide">选择创作模板</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          四个入口，对应 Agent 最常见的共创玩法。点一张卡开始。
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {TEMPLATES.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => onSelect(t)}
            className="text-left transition-transform active:translate-x-px active:translate-y-px"
          >
            <Card className="h-full border-2 border-foreground shadow-md transition-shadow hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="mb-1 text-2xl" aria-hidden>
                  {t.icon}
                </div>
                <CardTitle className="font-serif text-lg leading-snug">
                  {t.title}
                </CardTitle>
                <CardDescription className="text-sm">{t.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-xs font-medium text-primary underline underline-offset-4">
                  选用此模板 →
                </span>
              </CardContent>
            </Card>
          </button>
        ))}
      </div>
    </section>
  );
}
