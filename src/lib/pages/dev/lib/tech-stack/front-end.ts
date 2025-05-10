import { TechStackCategory } from "../tech-stack.types";

export const frontEnd: TechStackCategory = {
  core: [
    {
      label: "HTML/HTML5",
      path: "",
      preferable: false,
    },
    { label: "CSS/CSS3", path: "", preferable: false },
    {
      label: "JavaScript/ES6+",
      path: "",
      preferable: false,
    },
    {
      label: "TypeScript",
      path: "",
      preferable: true,
    },
  ],
  frameworks: [
    { label: "React", path: "", preferable: false },
    {
      label: "Next.js",
      path: "",
      preferable: true,
    },
  ],
  stateManagement: [
    {
      label: "Context API",
      path: "",
      preferable: true,
    },
    { label: "Redux", path: "", preferable: false },
    {
      label: "Redux Toolkit",
      path: "",
      preferable: false,
    },
    {
      label: "Redux Saga",
      path: "",
      preferable: false,
    },
    {
      label: "Zustand",
      path: "",
      preferable: true,
    },
    { label: "Jotai", path: "", preferable: false },
  ],
  uiLibraries: [
    { label: "MUI", path: "", preferable: false },
    {
      label: "NextUI",
      path: "",
      preferable: false,
    },
    {
      label: "shadcn/ui",
      path: "",
      preferable: true,
    },
    {
      label: "Chakra UI",
      path: "",
      preferable: true,
    },
    {
      label: "Ant Design",
      path: "",
      preferable: false,
    },
  ],
  cssTools: [
    { label: "SCSS", path: "", preferable: true },
    { label: "Less", path: "", preferable: false },
    {
      label: "TailwindCSS",
      path: "",
      preferable: true,
    },
    {
      label: "Styled Components",
      path: "",
      preferable: false,
    },
  ],
  routing: [
    {
      label: "React Router Dom",
      path: "",
      preferable: true,
    },
    {
      label: "TanStack Router",
      path: "",
      preferable: false,
    },
    {
      label: "Next.js App Router",
      path: "",
      preferable: true,
    },
    {
      label: "Next.js App Pages Router",
      path: "",
      preferable: false,
    },
  ],
  auth: [
    {
      label: "NextAuth/Auth.js",
      path: "",
      preferable: true,
    },
    {
      label: "Clerk",
      path: "",
      preferable: true,
    },
    { label: "OAuth", path: "", preferable: false },
  ],
  forms: [
    {
      label: "React Hook Form",
      path: "",
      preferable: true,
    },
    {
      label: "TanStack Form",
      path: "",
      preferable: false,
    },
    {
      label: "Formik",
      path: "",
      preferable: false,
    },
    {
      label: "JSON Forms (JSON Schema)",
      path: "",
      preferable: false,
    },
  ],
  validation: [
    { label: "Zod", path: "", preferable: true },
    { label: "Yup", path: "", preferable: false },
  ],
  internalization: [
    {
      label: "i18Next",
      path: "",
      preferable: false,
    },
    {
      label: "Next-Intl",
      path: "",
      preferable: true,
    },
  ],
  api: [
    {
      label: "GraphQL (Apollo Client)",
      path: "",
      preferable: false,
    },
    {
      label: "REST (Axios, TanStack Query)",
      path: "",
      preferable: false,
    },
  ],
  tables: [
    {
      label: "TanStack Table",
      path: "",
      preferable: false,
    },
  ],
  charts: [
    {
      label: "Recharts",
      path: "",
      preferable: true,
    },
    {
      label: "React Charts 2",
      path: "",
      preferable: false,
    },
    {
      label: "Chart.js",
      path: "",
      preferable: false,
    },
    {
      label: "React-Flow",
      path: "",
      preferable: false,
    },
  ],
  testing: [
    { label: "Jest", path: "", preferable: false },
    {
      label: "Vitest",
      path: "",
      preferable: false,
    },
    {
      label: "React Testing Library",
      path: "",
      preferable: false,
    },
    {
      label: "Cypress",
      path: "",
      preferable: false,
    },
  ],
  ciCd: [
    {
      label: "GitHub Actions",
      path: "",
      preferable: true,
    },
    {
      label: "GitLab CI/CD",
      path: "",
      preferable: false,
    },
  ],
  communication: [
    {
      label: "WebSocket/Socket.IO",
      path: "",
      preferable: false,
    },
  ],
  projectBuilders: [
    {
      label: "Webpack",
      path: "",
      preferable: false,
    },
    { label: "Babel", path: "", preferable: false },
    { label: "Gulp", path: "", preferable: false },
  ],
};
