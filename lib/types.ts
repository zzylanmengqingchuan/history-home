export type ViewId =
  | "home"
  | "create"
  | "worldlines"
  | "daily"
  | "summon"
  | "memory";

export type TemplateId =
  | "if-alive"
  | "diary"
  | "encounter"
  | "continue";

export interface TemplateField {
  key: string;
  label: string;
  placeholder: string;
  multiline?: boolean;
}

export interface StoryTemplate {
  id: TemplateId;
  title: string;
  desc: string;
  icon: string;
  fields: TemplateField[];
}

export interface StoryRecord {
  id: string;
  templateId: TemplateId;
  templateTitle: string;
  inputs: Record<string, string>;
  story: string;
  createdAt: string;
}

export interface Worldline {
  id: string;
  title: string;
  era: string;
  characters: string[];
  summary: string;
  fragments: string[];
  color: string;
}

export interface HistoricalFigure {
  id: string;
  name: string;
  dynasty: string;
  tagline: string;
  greeting: string;
}
