import type { ReactNode } from "react";

export type SectionId = "home" | "about" | "skills" | "project" | "documents" | "contacts";

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface SkillTab {
  id: "competencies" | "tools" | "methodologies" | "ai";
  title: string;
  description: string;
  items: string[];
}

export type FileCategory = "Документы" | "Сертификаты" | "Презентации" | "Таблицы" | "Изображения";
export type FileType = "pdf" | "doc" | "docx" | "ppt" | "pptx" | "xls" | "xlsx" | "png" | "jpg" | "jpeg" | "webp";

export interface PortfolioFile {
  id: string;
  title: string;
  description: string;
  type: FileType;
  category: FileCategory;
  fileUrl?: string;
  previewUrl?: string;
  status?: "available" | "planned";
}

export interface ProjectDetail {
  title: string;
  content: string;
  items: string[];
}

export interface ProjectData {
  title: string;
  duration: string;
  intro: string;
  goals: string[];
  tasks: string[];
  outcomes: string[];
  role: string[];
  artifacts: string[];
  metrics: Metric[];
  process: string[];
  details: ProjectDetail[];
}

export interface ContactAction {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
}
