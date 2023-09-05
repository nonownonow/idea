export const common = {
  companyName: "Marple Corporation",
  ceo: "Representative: Park Hye-yoon",
  cs: "Customer Center: <strong>1566-5496</strong> (Weekdays 10:00 ~ 19:00)",
  businessNO: "business registration number: 105-88-13322",
  tongsin: "Mail order business report number: 015-Seoulguro-0211",
  addr: "Address: 16th floor, HJ Tower, 332 Teheran-ro, Gangnam-gu, Seoul",
  email: "Email: cs@marppleshop.com",
  privacyMNG: "Personal Information Protection Officer: Yoo In-dong",
  relativeSites: "Related sites",
};

export const site = {
  business: "business site",
  corp: "corporation site",
};

export const button = {
  save: "save",
};

export const main = {
  sec1_title: "MARPPLE LIVE",
  sec2_title: "MARPPLE INSIDE",
  sec3_title: "MARPPLE RECRUIT",
  sec4_title: "MARPPLE INTERVIEW",
  sec5_title: "MARPPLE SERVICE",

  svc1_title: "Printing in my hand",
  svc2_title: "Creator Goods Shop",
  svc3_title: "Contents Commerce Platform",
  svc4_title: "For brand growth",

  svc5_title: "All-in-One NFT\tCreation Platform",
  svc6_title: "Web 3.0 Communication Tool",

  pride:
    "{{- marpple}}<br/>try {{- alien}}faster than anyone else{{bboong}}and<br/>pursue {{professional}}{{star}}.",
};

export const menus = {
  group1_title: "About Us",
  group1_item1: "Company Overview",
  group1_item2: "Vision",
  group1_item3: "Culture",
  group1_item4: "History",

  group2_title: "Marple Service",
  group2_item1: "Marple",
  group2_item2: "Marple Shop",
  group2_item3: "Marple Shop Plus",

  group3_title: "Marple Live",
  group3_item1: "press release",
  group3_item2: "Brand Video",

  group4_title: "Marple Inside",
  group4_item1: "Strategic Planning Team",
  group4_item2: "Development Team",
  group4_item3: "Marketing Team",

  group5_title: "Recruitment",
  group5_item1: "Marple Culture",
  group5_item2: "Marple Interview",
  group5_item3: "Recruitment process",
  group5_item4: "Recruitment",

  creative_center: "Creative Center",
};
export const login = {
  title: "SIGN IN",
  sub_title:
    "Marple Corporation / Marple Business site integrated manager site.",
  id_label: "ID",
  id_holder: "Please enter your ID",
  pw_label: "password",
  pw_holder: "Please enter your password",
  btn_submit: "LOGIN",
};

export const business = {
  index: "Business Management",
  request: "manage application",
  creative_center: "Creative Center Management",
  support: "customer support",
};

export const corp = {
  index: "Corporation Management",
  main: "main management",
  history: "history management",
  inside: "Manage Inside Marple",
  live: "Manage Marple Live",
  recruit: "Recruitment management",
  now: "Manage Marple NOW",
  tv: "Manage Marple TV",
};

export const setting = {
  index: "integrated management",
  faq: "Manage FAQ categories",
  menu: "menu management",
};

export const path = {
  home: "home",
  business: "business management",
  request: "manage application",
};

export const label = {
  menuForm: "create menu",
  site: "site",
  menuName: "menu location / menu name",
  menuList: "menu list",
  faqCateList: "List of FAQ categories ({{- count}})",
  adminMemo: "admin memo",
  publicYN: "public or not",
  public: "public",
  private: "private",
};

export const isPublic = {
  true: "public",
  false: "private",
};

export const teams = {
  DEVELOP: "development team",
  MARKETING: "Marketing Team",
  SALES: "sales team",
  POD: "POD Team",
  COMM: "Communication Team",
  CONTENTS: "Content Marketing Team",
  ECOMMERCE: "E-Commerce Team",
  MANUFACTURE: "production team",
  DESIGN: "Design Team",
};

export const corporationType = {
  MCN: "MCN",
  PRIVATE_ENTERPRISE: "private enterprise",
  CORPORATION: "corporate company",
  PUBLIC_ENTERPRISE: "Public Enterprise/Public Organization",
  SOCIAL_ENTERPRISE: "Social Enterprise",
  ETC: "other",
};

export const rank = {
  CEO: "CEO",
  GENERAL_MANAGER: "Manager",
  MANAGER: "Manager",
  ASSISTANT_MANAGER: "Assistant",
  STAFF: "temple",
  ETC: "other",
};

export const partnerType = {
  SUPPLY: "supply partner",
  PRODUCE: "Production Partner",
} as const;

export type Rank = typeof rank;
export type RankKeys = keyof Rank;
export type CorporationType = typeof corporationType;
export type CorporationTypeKeys = keyof CorporationType;
export type PartnerType = typeof partnerType;
export type PartnerTypeKeys = keyof PartnerType;

export * from "./App";
export * from "./App-Button";
export * from "./Shop";
export * from "./ShopGuide";
export * from "./Plus";
export * from "./Partners";
export * from "./Support";
export * from "./Business";
export * from "./PartnersApplyProcess";
