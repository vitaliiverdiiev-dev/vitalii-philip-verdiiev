import { TechStackCategory } from "../tech-stack.types";

export const additionalSkills: TechStackCategory = {
  methodologies: [
    { label: "Agile", path: "", preferable: false },
    { label: "SCRUM", path: "", preferable: false },
    { label: "BEM", path: "", preferable: true },
    { label: "FSD", path: "", preferable: true },
  ],
  documentation: [
    {
      label: "Storybook",
      path: "",
      preferable: false,
    },
    {
      label: "Postman",
      path: "",
      preferable: false,
    },
    {
      label: "Swagger",
      path: "",
      preferable: false,
    },
  ],
  versionControl: [
    {
      label: "GitHub",
      path: "",
      preferable: true,
    },
    {
      label: "GitLab",
      path: "",
      preferable: false,
    },
    {
      label: "Bitbucket",
      path: "",
      preferable: false,
    },
  ],
  operatingSystems: [
    { label: "Linux", path: "", preferable: true },
    { label: "MacOS", path: "", preferable: true },
    {
      label: "Windows",
      path: "",
      preferable: false,
    },
  ],
};
