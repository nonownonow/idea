export const common = {
  companyName: "(주)마플코퍼레이션",
  ceo: "대표 : 박혜윤",
  cs: '전화 : <a href="telto:1566-5496">1566-5496</a>',
  businessNO: "사업자등록번호 : 105-88-13322",
  tongsin: "통신판매업신고번호 : 015-서울구로-0211",
  addr: "주소 : 서울 강남구 테헤란로 332 에이치제이타워  16층",
  email:
    '이메일 : <a href="mailto:partner@marppeshop.com">cs@marppeshop.com</a>',
  privacyMNG: "개인정보보호책임자 : 유인동",
  relativeSites: "관련사이트",
};

export const site = {
  business: "비즈니스 사이트",
  corp: "코퍼레이션 사이트",
};

export const button = {
  save: "저장",
};

export const main = {
  sec1_title: "MARPPLE LIVE",
  sec2_title: "MARPPLE INSIDE",
  sec3_title: "MARPPLE RECRUIT",
  sec4_title: "MARPPLE INTERVIEW",
  sec5_title: "MARPPLE SERVICE",

  svc1_title: "내 손안에 프린팅",
  svc2_title: "크리에이터 굿즈 샵",
  svc3_title: "콘텐츠 커머스 플랫폼",
  svc4_title: "비즈니스 성장 파트너",
  svc5_title: "올인원 NFT\t제작 플랫폼",
  svc6_title: "웹3.0 커뮤니케이션 툴",

  pride:
    "{{- marpple}}은<br/>누구보다{{- alien}}빠르게{{bboong}}시도하고<br/>{{professional}}을{{star}} 추구합니다.",
};

export const menus = {
  group1_title: "회사소개",
  group1_item1: "회사개요",
  group1_item2: "비전",
  group1_item3: "문화",
  group1_item4: "히스토리",

  group2_title: "마플 서비스",
  group2_item1: "마플",
  group2_item2: "마플샵",
  group2_item3: "마플샵 플러스",

  group3_title: "마플 라이브",
  group3_item1: "보도자료",
  group3_item2: "브랜드영상",

  group4_title: "마플 인사이드",
  group4_item1: "전략기획팀",
  group4_item2: "개발팀",
  group4_item3: "마케팅팀",

  group5_title: "채용",
  group5_item1: "마플문화",
  group5_item2: "마플인터뷰",
  group5_item3: "채용절차",
  group5_item4: "채용공고",

  creative_center: "크리에이티브 센터",
};

export const login = {
  title: "SIGN IN",
  sub_title: "마플코퍼레이션 / 마플 비즈니스 사이트 통합 관리자 사이트 입니다.",
  id_label: "아이디",
  id_holder: "아이디를 입력해주세요",
  pw_label: "비밀번호",
  pw_holder: "비밀번호를 입력해주세요",
  btn_submit: "LOGIN",
};

export const business = {
  index: "파트너 관리",
  request: "신청 관리",
  creative_center: "크리에이티브 센터 관리",
  support: "고객 지원",
  partner: "마플 파트너 신청 관리",
};

export const corp = {
  index: "코퍼레이션 관리",
  main: "메인 관리",
  history: "히스토리 관리",
  inside: "인사이드 마플 관리",
  live: "마플 라이브 관리",
  recruit: "채용 관리",
  now: "마플 NOW 관리",
  tv: "마플 TV 관리",
};

export const setting = {
  index: "통합관리",
  faq: "FAQ 카테고리 관리",
  menu: "메뉴 관리",
};

export const path = {
  home: "홈",
  business: "비즈니스 관리",
  request: "신청관리",
};

export const label = {
  menuForm: "메뉴 생성",
  site: "사이트",
  menuName: "메뉴 위치 / 메뉴명",
  menuList: "메뉴 목록",
  faqCateList: "FAQ 카테고리 목록 ({{- count}})",
  adminMemo: "관리자 메모",
  publicYN: "공개 여부",
  public: "공개",
  private: "비공개",
};

export const isPublic = {
  true: "공개",
  false: "비공개",
};

export const teams = {
  DEVELOP: "개발팀",
  MARKETING: "마케팅팀",
  SALES: "세일즈팀",
  POD: "POD팀",
  COMM: "커뮤니케이션팀",
  CONTENTS: "콘텐츠 마케팅팀",
  ECOMMERCE: "이커머스팀",
  MANUFACTURE: "제작팀",
  DESIGN: "디자인팀",
};

export const corporationType = {
  // MCN: 'MCN',
  PRIVATE_ENTERPRISE: "개인기업",
  CORPORATION: "법인기업",
  // PUBLIC_ENTERPRISE: '공기업/공공기관',
  SOCIAL_ENTERPRISE: "사회적기업",
  ETC: "기타",
};

export const rank = {
  CEO: "대표이사",
  GENERAL_MANAGER: "부장",
  MANAGER: "과장",
  ASSISTANT_MANAGER: "대리",
  STAFF: "사원",
  ETC: "기타",
};

/*export const partnerType = {
  SUPPLY: "공급파트너",
  PRODUCE: "제작파트너",
} as const;*/

export const partnerType = {
  supply: "SUPPLY",
  produce: "PRODUCE",
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
export { default as partnersApply2 } from "./partnersApply2.json";
