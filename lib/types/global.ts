export interface Category {
  heading: string;
  children: CategoryChild[];
}

export interface CategoryChild {
  id: number | string;
  title: string;
  description: string;
  detailsDescription?: string;
}

export interface Faq {
  question: string;
  answer: string;
}

// CONTENT
export interface ImgTitleDesc {
  image: string;
  title: string;
  description: string;
}

export interface ListWithOption {
  title: string;
  options: string[];
}

// FOOTER
export interface FooterData {
  heading: string;
  children: {
    path: string;
    label: string;
  }[];
}

export interface Social {
  icon: JSX.Element;
  label: string;
  path: string;
}

export interface NavLink {
  label: string;
  path: string;
  external?: boolean;
  children?: NavLink[];
}

export interface Panel {
  image: string;
  name: string;
  position: string;
}

type Option = {
  text: string;
  value: string;
};

type CategoryDetailOption = {
  label: string;
  placeholder?: string;
  options: Option[];
};

export type CategoryDetails = {
  id: number;
  data: CategoryDetailOption[];
};
