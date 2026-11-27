import type { ElementType } from "react";

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export type ProjectType = {
  title: string;
  info?: string;
  type?: string;
  status: string;
  content: string;
  techs: TechsType;
  myThoughts: string;
  duration: string;
  keyFeatures: Array<string>;
  website?: string;
  github?: string;
  learningOutcomes?: string;
  contributions: string;
  deployment: string;
  accessibility: string;
  futurePlans: Array<string>;
  challenges: string;
};

export type SmallProjectType = {
  title: string;
  description: string;
  github: string;
};

/* ------------------------------------------------------------------ */
/* Technologies                                                        */
/* ------------------------------------------------------------------ */

export type TechsType = {
  [key: string]: Array<string>;
};

export type TechType = {
  [key: string]: ElementType;
};

/* ------------------------------------------------------------------ */
/* Education                                                           */
/* ------------------------------------------------------------------ */

export type EducationType = {
  progression: number;
  institution: string;
  type: string;
  name: string;
  teacher: string;
  skills: string[];
};

/* ------------------------------------------------------------------ */
/* Media                                                               */
/* ------------------------------------------------------------------ */

export type ImageType = {
  image: string;
  description: string;
};

/* ------------------------------------------------------------------ */
/* Modals                                                              */
/* ------------------------------------------------------------------ */

export enum ModalType {
  README = "readme",
  MORE = "more",
  MY_THOUGHTS = "my-thoughts",
}

/* ------------------------------------------------------------------ */
/* Project filtering                                                   */
/* ------------------------------------------------------------------ */

export type FilterMode = "include" | "exclude";

export type ProjectFilters = {
  techs: Record<string, FilterMode>;
  categories: Record<string, FilterMode>;
};
