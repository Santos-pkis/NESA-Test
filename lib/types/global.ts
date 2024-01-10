export interface Category {
  title: string;
  description: string;
}

export interface Faq {
  question: string;
  answer: string;
}

// footer
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
