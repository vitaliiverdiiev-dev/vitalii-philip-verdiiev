import { TechStackCategory } from "../tech-stack.types";

export const backEnd: TechStackCategory = {
  core: [
    {
      label: "Node.js",
      path: "",
      preferable: false,
    },
  ],
  frameworks: [
    {
      label: "Express",
      path: "",
      preferable: false,
    },
    {
      label: "NestJS",
      path: "",
      preferable: true,
    },
  ],
  api: [
    { label: "REST", path: "", preferable: false },
    {
      label: "GraphQL",
      path: "",
      preferable: false,
    },
  ],
  databases: [
    {
      label: "SQLite",
      path: "",
      preferable: false,
    },
    {
      label: "MongoDB",
      path: "",
      preferable: false,
    },
    {
      label: "PostgreSQL",
      path: "",
      preferable: true,
    },
    { label: "Redis", path: "", preferable: false },
  ],
  oemSchemas: [
    {
      label: "TypeORM",
      path: "",
      preferable: true,
    },
    {
      label: "Mongoose",
      path: "",
      preferable: false,
    },
    {
      label: "Drizzle",
      path: "",
      preferable: false,
    },
    {
      label: "Prisma",
      path: "",
      preferable: false,
    },
  ],
  containerization: [
    {
      label: "Docker",
      path: "",
      preferable: false,
    },
    {
      label: "Docker Compose",
      path: "",
      preferable: true,
    },
  ],
  cloud: [
    {
      label: "Heroku",
      path: "",
      preferable: false,
    },
    {
      label: "Vercel",
      path: "",
      preferable: true,
    },
    {
      label: "Amazon ECR",
      path: "",
      preferable: false,
    },
  ],
};
