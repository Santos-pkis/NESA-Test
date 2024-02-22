type Sponsor = {
  title: string;
  description: string;
};

type Benefit = Sponsor;

export const sponsors: Sponsor[] = [
  {
    title: "Blue Garnet Sponsorship (50 Million Naira): ",
    description: `Gain premier visibility as the title sponsor, with your branding featured prominently across all event communications, two premium tables at the dinner, and special recognition during the ceremony.`,
  },
  {
    title: "Diamond Sponsorship (25 Million Naira): ",
    description: `Sponsor a major award category, enjoy prominent branding, and receive one premium table, along with verbal recognition at the event.`,
  },
  {
    title: "Platinum Sponsorship (10 Million Naira): ",
    description: `Support an award sub-category, benefit from eventbranding, acknowledgment during the ceremony, and 8 preferred seats.`,
  },
  {
    title: "Gold Sponsorship (5 Million Naira): ",
    description: `Feature your branding within the event venue and on our website, with 6 seats reserved for your guests.`,
  },
  {
    title: "Silver Sponsorship (1.5 Million Naira): ",
    description: `Enjoy website branding and 4 seats at this prestigious event.`,
  },
];

export const additionalOpportunities: Sponsor[] = [
  {
    title: "Table Sponsorship:",
    description: `Host a table for your organization or guests, offering a unique opportunity for networking in an inspiring environment. Includes table branding and mention in the event program.`,
  },
  {
    title: "Custom Branding:",
    description: `Tailor your branding across various event materials, from brochures to digital displays, ensuring your brand stands out.`,
  },
];

export const benefits: Benefit[] = [
  {
    title: "Brand Visibility",
    description:
      "Your brand will be prominently displayed to a distinguished audience, aligning with a cause that impacts the nation.",
  },
  {
    title: "Make Impact",
    description:
      "Directly support educational initiatives and the NESA mission, making a tangible difference in the educational landscape of Nigeria.",
  },
  {
    title: "Networking Opportunities",
    description:
      "Connect with key figures from the government, educational sector, corporate Nigeria, and international organizations in an exclusive setting.",
  },
];

// BECOME A MEMBER
type Tier = {
  title: string;
  options: string[];
};

type UnderTier = Tier;

export const tiers: Tier[] = [
  {
    title: "Silver Membership",
    options: [
      "Access to SCEF newsletters and updates.",
      "Invitations to select SCEF events and webinars.",
      "SCEF membership certificate.",
    ],
  },
  {
    title: "Platinum Membership",
    options: [
      "All benefits of Silver Membership.",
      "Early access to new SCEF programs and initiatives.",
      "Opportunities to participate in policy discussion forums.",
    ],
  },
  {
    title: "Gold Membership",
    options: [
      "All benefits of Platinum Membership.",
      "Exclusive invitations to SCEF's high-profile events and galas.",
      "Recognition in SCEF publications and on the website.",
    ],
  },
  {
    title: "Blue Garnet Membership (Corporate)",
    options: [
      "All benefits of Gold Membership.",
      "Corporate logo featured on SCEF's partner page.",
      "Opportunities for joint initiatives and co-branding with SCEF.",
    ],
  },
];

export const moreUnderTiers: UnderTier[] = [
  {
    title: "Features and Functionalities:",
    options: [
      "Financial contributions from members, allocated to SCEF operations and projects.",
      "A transparent system for the distribution of funds, with set percentages allocated to operations, project support, and educational grants.",
      "Regular financial statements and impact reports for members.",
    ],
  },
  {
    title: "Goals and Objectives:",
    options: [
      "	To establish a sustainable financial base for SCEF's operations and projects.",
      "To create a transparent and accountable system for financial contributions.",
      "	To enable SCEF to extend more educational grants to deserving candidates and projects.",
    ],
  },
  {
    title: "Allocation of Funds:",
    options: [
      "A specified percentage of each membership contribution allocatedto operational costs.",
      "Remaining funds distributed among various SCEF projects, including direct support and educational grants",
    ],
  },
  {
    title: "Performance Metrics:",
    options: [
      "Total funds raised through memberships.",
      "Distribution efficiency of funds to various projects and operational needs.",
      "Impact assessment of funded projects and educational grants.",
    ],
  },
];
