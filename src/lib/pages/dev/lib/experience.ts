type WorkExperience = {
  id: number;
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  positionType: string;
};

export const workExperience: WorkExperience[] = [
  {
    id: 4,
    position: 'React Engineer (Contract Role)',
    company: '',
    location: 'Lviv, Ukraine',
    startDate: 'Aug 2024',
    endDate: 'Mar 2025',
    description: [
      'Contributed to the development and refinement of dashboards for two projects, identifying weaknesses and proposing strategic improvements.',
      'Built UI components and optimized workflows, ensuring scalability and maintainability.',
      'Provided technical insights to improve performance and streamline front-end architecture.'
    ],
    positionType: 'role-based'
  },
  {
    id: 3,
    position: 'React Engineer',
    company: 'Uniqit Group LLC (Nuvalt Project, Product)',
    location: 'Kyiv, Ukraine',
    startDate: 'May 2023',
    endDate: 'Jul 2024',
    description: [
      'Developed a Crypto Business Management Platform, focusing on dashboard admin & statistics applications.',
      'Engineered a self-hosted installer, ensuring seamless deployment and user experience.',
      'Helped create a custom UI library, improving component reusability across projects.',
      'Translated complex designs into pixel-perfect landing pages within tight deadlines.'
    ],
    positionType: 'full-time'
  },
  {
    id: 2,
    position: 'React Developer',
    company: 'Faster Than Light LLC (Outsource/Outstaff)',
    location: 'Kyiv, Ukraine',
    startDate: 'Oct 2021',
    endDate: 'May 2023',
    description: [
      'Delivered the MVP for Offsiter, helping the team secure investments. Identified the root cause, analyzed the issue, proposed solutions, and implemented the fixes.',
      'Developed the Accounting module for an internal CRM, collaborating closely with Design, QA, and Backend teams.',
      'Supported multiple projects, ensuring high-quality code and meeting sprint goals.'
    ],
    positionType: 'full-time'
  },
  {
    id: 1,
    position: 'HTML, CSS & JavaScript Developer (Freelance)',
    company: '',
    location: 'Kyiv, Ukraine',
    startDate: 'Sep 2019',
    endDate: 'Mar 2021',
    description: [
      'Transformed designs into fully responsive landing pages, widgets, and email templates.',
      'Maintained and further developed client applications, ensuring long-term stability and performance.'
    ],
    positionType: 'part-time'
  }
];
