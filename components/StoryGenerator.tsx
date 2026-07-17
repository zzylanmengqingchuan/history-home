"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { generateStory } from "@/lib/data";
import { createId, saveStory } from "@/lib/storage";
import type { StoryRecord, StoryTemplate } from "@/lib/types";

interface StoryGeneratorProps {
  template: StoryTemplate | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onGenerated: (record: StoryRecord) => void;
}

export function StoryGenerator({
  template,
  open,
  onOpenChange,
  onGenerated,
}: StoryGeneratorProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const fields = template?.fields ?? [];

  const canSubmit = useMemo(() => {
    if (!template) return false;
    return fields
      .filter((f) => !f.label.includes("可选"))
      .every((f) => (values[f.key] || "").trim().length > 0);
  }, [fields, template, values]);

  function reset() {
    setValues({});
    setResult(null);
    setLoading(false);
  }

  function handleOpenChange(next: boolean) {
    if (!next) reset();
    onOpenChange(next);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!template || !canSubmit) return;

    setLoading(true);
    setResult(null);

    // 模拟 LLM 思考延迟
    await new Promise((r) => setTimeout(r, 900 + Math.random() * 600));

    const story = generateStory(template.id, values);
    const record: StoryRecord = {
      id: createId(),
      templateId: template.id,
      templateTitle: template.title,
      inputs: { ...values },
      story,
      createdAt: new Date().toISOString(),
    };

    saveStory(record);
    setResult(story);
    setLoading(false);
    onGenerated(record);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto border-2 border-foreground shadow-xl sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl">
            {template ? (
              <>
                <span className="mr-2">{template.icon}</span>
                {template.title}
              </>
            ) : (
              "创作"
            )}
          </DialogTitle>
          <DialogDescription>
            {result
              ? "故事已生成并写入本地记忆（localStorage）。"
              : "回答几个引导问题，Agent 会据此模拟生成一段故事。"}
          </DialogDescription>
        </DialogHeader>

        {!result ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            {fields.map((field) => (
              <div key={field.key} className="space-y-1.5">
                <Label htmlFor={field.key}>{field.label}</Label>
                {field.multiline ? (
                  <Textarea
                    id={field.key}
                    placeholder={field.placeholder}
                    value={values[field.key] || ""}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, [field.key]: e.target.value }))
                    }
                    className="min-h-24 border-2 border-foreground"
                    disabled={loading}
                  />
                ) : (
                  <Input
                    id={field.key}
                    placeholder={field.placeholder}
                    value={values[field.key] || ""}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, [field.key]: e.target.value }))
                    }
                    className="border-2 border-foreground"
                    disabled={loading}
                  />
                )}
              </div>
            ))}
            <DialogFooter className="gap-2 sm:gap-0">
              <Button
                type="button"
                variant="outline"
                className="border-2 border-foreground shadow-sm"
                onClick={() => handleOpenChange(false)}
                disabled={loading}
              >
                取消
              </Button>
              <Button
                type="submit"
                disabled={!canSubmit || loading}
                className="border-2 border-foreground shadow-sm"
              >
                {loading ? "人物堂书写中…" : "生成故事"}
              </Button>
            </DialogFooter>
          </form>
        ) : (
          <div className="space-y-4">
            <Badge variant="secondary" className="border border-foreground">
              模拟 LLM 输出
            </Badge>
            <div className="whitespace-pre-wrap rounded-none border-2 border-foreground bg-muted/40 p-4 font-serif text-sm leading-relaxed shadow-sm">
              {result}
            </div>
            <DialogFooter className="gap-2 sm:gap-0">
              <Button
                type="button"
                variant="outline"
                className="border-2 border-foreground shadow-sm"
                onClick={() => {
                  setResult(null);
                  setValues({});
                }}
              >
                再写一篇
              </Button>
              <Button
                type="button"
                className="border-2 border-foreground shadow-sm"
                onClick={() => handleOpenChange(false)}
              >
                完成
              </Button>
            </DialogFooter>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
