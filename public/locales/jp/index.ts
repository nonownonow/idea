export const common = {
  companyName: "株式会社マープル株式会社",
  ceo: "代表: パク・ヘユン",
  cs: "「顧客センター：<strong> 1566-5496 </strong>（平日10:00〜19:00）」",
  businessNO: "「事業者登録番号：105-88-13322」",
  tongsin: "通信販売業申告番号：015-ソウル区路-0211",
  addr: "「住所：ソウル江南区テヘランロ332 HJタワー16階」",
  email: "Eメール: cs@marppleshop.com",
  privacyMNG: "「個人情報保護責任者：ユ・インドン」",
  relativeSites: "関連サイト",
};

export const site = {
  business: "ビジネスサイト",
  corp: "コーポレーションサイト",
};

export const button = {
  save: "保存",
};

export const main = {
  sec1_title: "MARPPLE LIVE",
  sec2_title: "MARPPLE INSIDE",
  sec3_title: "MARPPLE RECRUIT",
  sec4_title: "MARPPLE INTERVIEW",
  sec5_title: "MARPPLE SERVICE",

  svc1_title: "私の手の中に印刷する",
  svc2_title: "クリエイターグッズショップ",
  svc3_title: "コンテンツコマースプラットフォーム",
  svc4_title: "ブランドの成長のための",

  svc5_title: "オールインワンNFT\t制作プラットフォーム",
  svc6_title: "Web3.0 コミュニケーションツール",

  pride:
    "{{- marpple}}は<br/>誰よりも{{- alien}}速く{{bboong}}試行し、<br/>{{professional}}を{{star}}追求します。",
};

export const menus = {
  group1_title: "会社紹介",
  group1_item1: "会社概要",
  group1_item2: "ビジョン",
  group1_item3: "文化",
  group1_item4: "履歴",

  group2_title: "マープルサービス",
  group2_item1: "マープル",
  group2_item2: "マープルショップ",
  group2_item3: "マープルショッププラス",

  group3_title: "マープルライブ",
  group3_item1: "プレスリリース",
  group3_item2: "ブランドビデオ",

  group4_title: "マープルインサイド",
  group4_item1: "戦略計画チーム",
  group4_item2: "開発チーム",
  group4_item3: "マーケティングチーム",

  group5_title: "採用",
  group5_item1: "マープル文化",
  group5_item2: "マープルインタビュー",
  group5_item3: "採用手順",
  group5_item4: "採用発表",

  creative_center: "クリエイティブセンター",
};

export const login = {
  title: "SIGN IN",
  sub_title: "マーフル社/マーフルビジネスサイト統合管理者サイトです。",
  id_label: "ID",
  id_holder: "「IDを入力してください」",
  pw_label: "パスワード",
  pw_holder: "「パスワードを入力してください」",
  btn_submit: "LOGIN",
};

export const business = {
  index: "ビジネス管理",
  request: "アプリケーション管理",
  creative_center: "クリエイティブセンターの管理",
  support: "顧客サポート",
};

export const corp = {
  index: "コーポレーション管理",
  main: "メイン管理",
  history: "履歴管理",
  inside: "インサイドマープル管理",
  live: "マープルライブ管理",
  recruit: "採用管理",
  now: "マープル NOW 管理",
  テレビ: "「マープルテレビ管理」",
};

export const setting = {
  index: "統合管理",
  faq: "FAQ カテゴリ管理",
  menu: "メニュー管理",
};

export const path = {
  home: "ホーム",
  business: "ビジネス管理",
  request: "アプリケーション管理",
};

export const label = {
  menuForm: "メニューの作成",
  site: "サイト",
  menuName: "メニューの場所/メニュー名",
  menuList: "メニューリスト",
  faqCateList: "FAQ カテゴリリスト ({{- count}})",
  adminMemo: "管理者メモ",
  publicYN: "公開するかどうか",
  public: "公開",
  private: "プライベート",
};

export const isPublic = {
  true: "公開",
  false: "プライベート",
};

export const teams = {
  DEVELOP: "開発チーム",
  MARKETING: "マーケティングチーム",
  SALES: "「セールスチーム」",
  POD: "PODチーム",
  COMM: "「コミュニケーションチーム」",
  CONTENTS: "コンテンツマーケティングチーム",
  ECOMMERCE: "イコマースチーム",
  MANUFACTURE: "制作チーム",
  DESIGN: "デザインチーム",
};

export const corporationType = {
  MCN: "「MCN",
  PRIVATE_ENTERPRISE: "「個人企業」",
  CORPORATION: "法人企業",
  PUBLIC_ENTERPRISE: "公企業/公共機関",
  SOCIAL_ENTERPRISE: "「社会的企業」",
  ETC: "その他",
};

export const rank = {
  CEO: "「代表取締役」",
  GENERAL_MANAGER: "部長",
  MANAGER: "誇張",
  ASSISTANT_MANAGER: "「代理」",
  STAFF: "寺院",
  ETC: "その他",
};

export const partnerType = {
  SUPPLY: "供給パートナー",
  PRODUCE: "制作パートナー",
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
