import type { StoryRecord } from "./types";

const KEY = "history-home-stories";

export function loadStories(): StoryRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as StoryRecord[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveStory(record: StoryRecord): StoryRecord[] {
  const list = loadStories();
  const next = [record, ...list].slice(0, 50);
  localStorage.setItem(KEY, JSON.stringify(next));
  return next;
}

export function clearStories(): void {
  localStorage.removeItem(KEY);
}

export function createId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}
