import { Category } from "../types/global";

export const homeCategories: Category[] = [
  {
    id: 1,
    title: "FAITH-BASED ORGANIZATION COCNTRIBUTIONS TO EDUCATION",
    description: `This award category will recognise and celebrate NGO's making remarkable cocntributions in the educational sector`,
  },
  {
    id: 2,
    title: "NGO CONTRIBUTION TO EDUCTION",
    description: `This award category will recognise and celebrate NGO's making remarkable cocntributions in the educational sector`,
  },
  {
    id: 3,
    title: "CORPORATE SOCIAL RESPONSIBILITY (CSR) IN EDUCATION",
    description: `This award category will recognise and celebrate NGO's making remarkable cocntributions in the educational sector`,
  },
];

export const leftCategories: Category[] = [
  {
    id: 1,
    title: "NGO Educational Champion of the Decade",
    description: `This award recognizes the pivotal role of Nigerian indigenous NGOs and civil society organizations in championing the cause of EDUCATION FOR ALL`,
  },
  {
    id: 2,
    title: "Corporate SOCIAL RESPONSIBILITY Educational Champion of the Decade",
    description: `This award category recognizes the cumulative efforts of corporate entities across various sectors ...`,
  },
  {
    id: 3,
    title: "Faith-Based Educational Champion of the Decade",
    description: `This award category recognizes the substantial contributions of both Christian and Islamic organizations to education in Nigeria over the past ten years`,
  },
  {
    id: 4,
    title: "Government Educational Champion of the Decade",
    description: `This award category recognizes the outstanding contributions of Nigerian state ministries of education towards enhancing the educational sector`,
  },
  {
    id: 5,
    title: "Public School Champion of the Decade",
    description: `This award category recognizes public secondary schools that have shown outstanding achievements  in overall educational standards which includes student performan...`,
  },
  {
    id: 6,
    title: "Private School Champion of the Decade",
    description: `This award category recognizes private secondary school that have excelled in providing high quality education, pioneering educational practices and fostering a conduct...`,
  },
  {
    id: 7,
    title: "Global Partnership in Education Champion of the Decade",
    description: `This award category recognizes organizations, embassies, NGOs and educational institutions in Nigeria that have made significant strides...`,
  },
  {
    id: 8,
    title: "Diaspora Educational Impact Champion of the Decade",
    description: `This award category will recognise and celebrate NGO’s making remarkable contributions in the educational Sector`,
  },
];

export const rightCategories: Category[] = [
  {
    id: 9,
    title: "Political Leadership in Education Champion of the Decade",
    description: `This award category recognizes political figures in Nigeria for their exemplary contributions to education over the past ten years.`,
  },
  {
    id: 10,
    title: "TERTIARY Education Champion of the Decade",
    description: `This award category recognizes and celebrates the excellence and innovations of Higher Institutes (HEIs) in Nigeria `,
  },
  {
    id: 11,
    title: "Educational Research Champion of the Decade",
    description: `This award category recognizes  and celebrates outstanding research achievements by Nigeria Educational Research institutes`,
  },
  {
    id: 12,
    title: "STEM EDUCATION CHAMPION OF THE DECADE AWARD",
    description: `This award category recognizes exceptional contributions in the field of Science, Technology, Engineering, and Mathematics (STEM) education in Nigeria.`,
  },
  {
    id: 13,
    title: "CREATIVE ARTS IN EDUCATION CHAMPION OF THE DECADE",
    description: `This award category recognizes the significant contributions made by individuals and organizations in the creative arts sector to education in Nigeria.`,
  },
  {
    id: 14,
    title: "SPECIAL RECOGNITION AWARDS",
    description: `This award category recognizes individuals and groups making substantial contributions  to education  with a focus on traditional rulers from Nigeria’s six ...`,
  },
  {
    id: 15,
    title: "INNOVATIVE EDUCATIVE INFRASTRUCTURE AND TECHNOLOGY AWARD",
    description: `This award category recognises outstanding contributions in the realm of educational infrastructure and technology in Nigeria.`,
  },
  {
    id: 16,
    title: "MEDIA AND EDUCATION CHAMPION OF THE DECADE AWARD",
    description: `This award category recognizes media houses in Nigeria that have significantly contributed to the educational Landscape.`,
  },
];

export const allCategories = [...leftCategories, ...rightCategories];

// DETAILS DATA

type CategoryDetailOption = {};

type CategoryDetail = CategoryDetailOption & Category;

const categoryDetails: CategoryDetail[] = [];
