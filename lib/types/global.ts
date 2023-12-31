export interface Award {
  image: string;
  title: string;
  description: string;
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
