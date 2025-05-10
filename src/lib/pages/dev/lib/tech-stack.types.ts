export interface TechItem {
  label: string;
  path: string;
  preferable: boolean;
}

export interface TechStackCategory {
  [key: string]: TechItem[];
}

export interface TechStack {
  frontEnd: TechStackCategory;
  backEnd: TechStackCategory;
  additionalSkills: TechStackCategory;
}

