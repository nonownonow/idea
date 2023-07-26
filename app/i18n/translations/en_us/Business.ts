export const businessLayout = {
	H: 'MARPPLE Business',
	Nav_options: {
		'/shop': 'Marpleshop',
		'/shop/about': 'What is Marple Shop?',
		'/shop/guid': 'Seller Guide',
		'/shop/apply': 'Apply as a Marple Shop seller',
		'/plus': 'Marple Shop Plus',
		'/partner': 'Marple Partners',
		'/creative': 'creative center',
		'service': 'customer support',
	},
	Footer_about_marpple_data: {
		'Representative': 'Hyeyoon Park',
		'Business registration number': '105-88-13322',
		'Address':
			'5th floor, Yeoksam 823 Building, 70, Nonhyeon-ro 85-gil, Gangnam-gu, Seoul',
		'Customer Center': '1566-5496 (Weekdays 10:00 ~ 19:00)',
		'Email': 'partner@marppleshop.com',
		'Personal Information Protection Officer': 'Yoo In-dong',
	},
	Footer_Nav_related_site_H: 'Related site',
	Footer_Nav_related_site_list: [
		'<a href="#"/>',
		'<a href="#"/>',
		'<a href="#"/>',
	],
	Footer_Nav_term_list: ['privacy policy', 'Terms of service'],
	shop_H: 'Marple Shop',
	shop_Nav_H: 'Marple Shop Menu',
	shop_Nav_options: {
		'/shop/main': 'What is Marple Shop?',
		'/shop/guide': 'Seller Guide',
		'/shop/apply': 'Apply as a Marple Shop seller',
	} as const,
	shopGuide_Tag_options: {
		how_to_enter:
			'<span data-icon="smiling-face-with-sunglasses"></span>Enter as a seller',
		management_tip: '<span data-icon="sparkles"></span> Shop management tips',
		goods: '<span data-icon="shopping-bags"></span> Discover products for sale',
		integration_youtube:
			'<span data-icon="youtube-logo"></span>Integrate YouTube',
		global_shipping: '<span data-icon="airplane"></span>Shipping globally',
		selling_pb: '<span data-icon="waving-hand"></span> Selling PB products',
	} as const,
	partners_H: 'Marple Partners',
	partners_Nav_H: 'Marple Partner Menu',
	partners_Nav_options: {
		'/': 'What is a Marple Partner?',
		'/apply': 'Apply for Marple Partnership',
	} as const,
	plus_H: 'Marple Shop Plus',
	plus_Nav_H: '',
	plus_Nav_options: {
		'/plus/main': 'What is Marple Shop Plus?',
		'/plus/apply': 'Apply for Marple Shop Plus',
	} as const,
	creative_H: 'Creator Center',
	creative_Nav_H: 'Creative Center menu',
	creative_Nav_options: {
		'/creative-center/seller-tip': 'Sellertip',
		'fulfillment': 'fulfillment',
		'creator_center': 'Creator Center',
		'story': 'story',
	} as const,
	creative_Nav_tag_H: 'Creative Center tag menu',
	creative_Nav_tag_options: {
		all: 'all',
		create_goods: 'Create goods',
		SNS: 'Promote SNS',
		youtube: 'Link to YouTube',
		handmade: 'Sales of handmade products',
	} as const,
	support_H: 'customer support',
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
	Meta: 'MARPPLE main page',
	Title: 'MARPPLE - main',
	Header_main_Heading: 'gather\nall the world\ncree\nEater',
	Header_main_P: 'only if you are creative\neveryone',
	Section_seller_Heading:
		'creative only\nIf anyone is a seller\nCreator Goods Shop\nMarple Shop',
	Section_seller_P: "to your creativity\nI'll give you wings",
	Section_seller_A_apply: '<img data-icon-marpple-char1/>Apply as a seller',
	Section_seller_A_intro: '<img data-icon-marpple-char2/>Learn more',
	Section_seller_ir_Heading:
		'already over 17,000\nCreator at <img data-icon-rainbow/> Marple Shop\nare active.',
	Section_seller_ir_Li_youtuber: 'YouTuber',
	Section_seller_ir_Li_ticktocker: 'Ticktocker',
	Section_seller_ir_Li_Character: 'Character',
	Section_seller_ir_Li_Musician: 'Musician',
	Section_seller_ir_P_live:
		'YouTube linked\nLive Commerce <img data-icon-youtube/>,',
	Section_seller_ir_P_Overseas:
		'Overseas payment and delivery <img data-icon-american-flag/>',
	Section_plus_Heading:
		'Webtoon, character, MCN,\nGame company intellectual property rights\nFor companies with <img data-icon-ip-letter/>\nContent Commerce Platform\nMarple Shop Plus',
	Section_plus_P:
		'saving time and money\nWe provide one-stop business solutions.',
	Section_plus_A_apply: '<img data-icon-marpple-char1/>Apply for Plus',
	Section_plus_A_intro: '<img data-icon-marpple-char2/>Learn more',
	Section_partners_Heading: 'to your business\nwings\nI will give you',
	Section_partners_P:
		'Magic that becomes a special product when you meet Marple.\nBecome a Marple Partner today!',
	Section_partners_A_apply: '<img data-icon-marpple-char1/>Apply for Partners',
	Section_partners_A_intro: '<img data-icon-marpple-char2/>Learn more',
};
