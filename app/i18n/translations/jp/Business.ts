export const businessLayout = {
	H: 'MARPPLE Business',
	Nav_options: {
		'/shop': 'マープルショップ',
		'/shop/about': 'マープルショップとは？',
		'/shop/guid': 'セラーガイド',
		'/shop/apply': 'マープルショップセラーを申請する',
		'/plus': 'マープルショッププラス',
		'/partner': 'マープルパートナー',
		'/creative': 'クリエイティブセンター',
		'service': 'カスタマーサポート',
	} as const,
	Footer_about_marpple_data: {
		代表: 'パク・ヘユン',
		事業者登録番号: '105-88-13322',
		住所: 'ソウル江南区ノンヒョン路85ギル70駅三823ビル5階',
		カスタマーセンター: '「1566-5496（平日10:00〜19:00）」',
		Eメール: 'partner@marppleshop.com',
		個人情報保護責任者: 'ユ・インドン',
	} as const,
	Footer_Nav_related_site_H: '関連サイト',
	Footer_Nav_related_site_list: [
		'<a href="#"/>',
		'<a href="#"/>',
		'<a href="#"/>',
	],
	Footer_Nav_term_list: ['個人情報処理方針', '利用規約'],
	shop_H: 'マープルショップ',
	shop_Nav_H: 'マープルショップメニュー',
	shop_Nav_options: {
		'/shop/main': 'マープルショップとは？',
		'/shop/guide': 'セラーガイド',
		'/shop/apply': 'マープルショップセラーを申請する',
	} as const,
	shopGuide_Tag_options: {
		how_to_enter:
			'<span data-icon="smiling-face-with-sunglasses"></span>販売店に入店する',
		management_tip:
			'<span data-icon="sparkles"></span>ショップ運営ハニーチップ',
		goods: '<span data-icon="shopping-bags"></span>販売商品を学ぶ',
		integration_youtube:
			'<span data-icon="youtube-logo"></span>YouTubeを連携する',
		global_shipping: '<span data-icon="airplane"></span>グローバル配送',
		selling_pb: '<span data-icon="waving-hand"></span> PB商品を販売する',
	} as const,
	partners_H: 'マープルパートナー',
	partners_Nav_H: 'マープルパートナーメニュー',
	partners_Nav_options: {
		'/': 'マープルパートナーとは？',
		'/apply': 'マープルパートナーを申請する',
	},
	plus_H: 'マープルショッププラス',
	plus_Nav_H: '',
	plus_Nav_options: {
		'/plus/main': 'マープルショッププラスとは？',
		'/plus/apply': 'マープルショッププラス申請',
	} as const,
	creative_H: 'クリエイターセンター',
	creative_Nav_H: 'クリエイティブセンターメニュー',
	creative_Nav_options: {
		'/creative-center/seller-tip': 'セラーチップ',
		'fulfillment': 'フルフィルメント',
		'creator_center': 'クリエイターセンター',
		'story': 'ストーリー',
	} as const,
	creative_Nav_tag_H: 'クリエイティブセンタータグメニュー',
	creative_Nav_tag_options: {
		all: 'フル',
		create_goods: '商品を作る',
		sns: 'SNSを宣伝する',
		youtube: 'YouTube連動',
		ハンドメイド: 'ハンドメイド商品販売',
	} as const,
	support_H: 'カスタマーサポート',
};
export type ShopNavOptions = typeof businessLayout.shop_Nav_options;
export type ShopGuideTagOptions = typeof businessLayout.shopGuide_Tag_options;
export type PartnersNavOptions = typeof businessLayout.partners_Nav_options;
export type PlusNavOptions = typeof businessLayout.plus_Nav_options;
export type CreativeCenterNavOptions =
	typeof businessLayout.creative_Nav_options;
export type CreativeCenterTagOptions =
	typeof businessLayout.creative_Nav_tag_options;

export const businessMain = {
	Meta: 'MARPPLEメインページ',
	Title: 'MARPPLE - main',
	Header_main_Heading: '集まる\n世界すべて\nクリエ\nイーター',
	Header_main_P: 'クリエイティブだけなら\n誰でも',
	Section_seller_Heading:
		'クリエイティブのみ\nあれば誰でもセラー\nクリエイターグッズショップ\nマープルショップ',
	Section_seller_P: 'あなたのクリエイティブに\n翼をつけてください。',
	Section_seller_A_apply: '<img data-icon-marpple-char1/>セラーを申請する',
	Section_seller_A_intro: '<img data-icon-marpple-char2/>詳細',
	Section_seller_ir_Heading:
		'すでに1万7千人余り\nクリエイターが<img data-icon-rainbow/>マープルショップで\n活動しています。',
	Section_seller_ir_Li_youtuber: 'YouTube',
	Section_seller_ir_Li_ticktocker: 'ティックトッカー',
	Section_seller_ir_Li_Character: 'キャラクター',
	Section_seller_ir_Li_Musician: 'ミュージシャン',
	Section_seller_ir_P_live:
		'YouTubeの連動\nライブコマース <img data-icon-youtube/>',
	Section_seller_ir_P_Overseas:
		'海外決済と配送まで<img data-icon-american-flag/>',
	Section_plus_Heading:
		'ウェブトゥーン、キャラクター、MCN、\nゲーム会社の知識財産権\n<img data-icon-ip-letter/>を持つ企業なら\nコンテンツコマースプラットフォーム\nマープルショッププラス',
	Section_plus_P:
		'時間とお金を節約\nワンストップ企業ソリューションを提供します。',
	Section_plus_A_apply: '<img data-icon-marpple-char1/>プラスを申請する',
	Section_plus_A_intro: '<img data-icon-marpple-char2/>詳細',
	Section_partners_Heading: 'あなたのビジネスに\n翼\n逃げます。',
	Section_partners_P:
		'マープルと会えば特別な商品になる魔法。\n今すぐマープルパートナーになろう！',
	Section_partners_A_apply:
		'<img data-icon-marpple-char1/>パートナーを申請する',
	Section_partners_A_intro: '<img data-icon-marpple-char2/>詳細',
};
