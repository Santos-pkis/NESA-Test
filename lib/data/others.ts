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
