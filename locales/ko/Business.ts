export const businessLayout = {
	//business
	H: 'MARPPLE Business',
	Nav_options: {
		'/shop': '마플샵',
		'/shop/about': '마플샵이란?',
		'/shop/guid': '셀러 가이드',
		'/shop/apply': '마플샵 셀러 신청하기',
		'/plus': '마플샵 플러스',
		'/partner': '마플 파트너',
		'/creative': '크리에이티브 센터',
		'service': '고객지원',
	},
	Footer_about_marpple_data: {
		대표: '박혜윤',
		사업자등록번호: '105-88-13322',
		주소: '서울 강남구 논현로85길 70 역삼823빌딩 5층',
		고객센터: '1566-5496 (평일 10:00 ~ 19:00)',
		이메일: 'partner@marppleshop.com',
		개인정보보호책임자: '유인동',
	},
	Footer_Nav_related_site_H: '관련사이트',
	Footer_Nav_related_site_list: [
		'<a href="#"/>',
		'<a href="#"/>',
		'<a href="#"/>',
	],
	Footer_Nav_term_list: ['개인정보처리방침', '이용약관'],

	//shop
	shop_H: '마플샵',
	shop_Nav_H: '마플샵 메뉴',
	shop_Nav_options: {
		'/shop/main': '마플샵이란?',
		'/shop/guide': '셀러가이드',
		'/shop/apply': '마플샵 셀러 신청하기',
	} as const,

	//shopGuide
	shopGuide_Tag_options: {
		how_to_enter:
			'<span data-icon="smiling-face-with-sunglasses"></span>셀러로 입점하기',
		management_tip: '<span data-icon="sparkles"></span>샵 운영 꿀팁',
		goods: '<span data-icon="shopping-bags"></span>판매 상품 알아보기',
		integration_youtube:
			'<span data-icon="youtube-logo"></span>유튜브 연동하기',
		global_shipping: '<span data-icon="airplane"></span>글로벌 배송하기',
		selling_pb: '<span data-icon="waving-hand"></span>PB상품 판매하기',
	} as const,

	partners_H: '마플 파트너',
	partners_Nav_H: '마플 파트너 메뉴',
	partners_Nav_options: {
		'/': '마플 파트너란?',
		'/apply': '마플 파트너 신청하기',
	} as const,
	plus_H: '마플샵 플러스',
	plus_Nav_H: '',
	plus_Nav_options: {
		'/plus/main': '마플샵 플러스란?',
		'/plus/apply': '마플샵 플러스 신청하기',
	} as const,
	creative_H: '크리에이터 센터',
	creative_Nav_H: '크리에이티브 센터 메뉴',
	creative_Nav_options: {
		'/creative-center/seller-tip': '셀러팁',
		'fulfillment': '풀필먼트',
		'creator_center': '크리에이터 센터',
		'story': '스토리',
	} as const,
	creative_Nav_tag_H: '크리에이티브 센터 태그 메뉴',
	creative_Nav_tag_options: {
		all: '전체',
		create_goods: '상품만들기',
		sns: 'SNS홍보하기',
		youtube: '유튜브연동',
		handmade: '핸드메이드상품판매',
	} as const,
	support_H: '고객지원',
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
	Header_main_Heading: '모여라\n세상모든\n크리에\n이터',
	Header_main_P: '크리에이티브만 있다면\n누구나',
	Section_seller_Heading:
		'크리에이티브만\n있다면 누구나 셀러\n크리에이터 굿즈샵\n마플샵',
	Section_seller_P: '당신의 크리에이티브에\n날개를 달아드려요.',
	Section_seller_A_apply: '<img data-icon-marpple-char1/>셀러 신청하기',
	Section_seller_A_intro: '<img data-icon-marpple-char2/>더 알아보기',
	Section_seller_ir_Heading:
		'이미 1만 7천 여명의\n크리에이터가 <img data-icon-rainbow/>마플샵에서\n활동하고 있습니다.',
	Section_seller_ir_Li_youtuber: '유튜버',
	Section_seller_ir_Li_ticktocker: '틱톡커',
	Section_seller_ir_Li_Character: '캐릭터',
	Section_seller_ir_Li_Musician: '뮤지션',
	Section_seller_ir_P_live:
		'유튜브 연동\n라이브 커머스 <img data-icon-youtube/>',
	Section_seller_ir_P_Overseas:
		'해외 결제와 배송까지 <img data-icon-american-flag/>',
	Section_plus_Heading:
		'웹툰, 캐릭터, MCN,\n게임사 지식 재산권\n<img data-icon-ip-letter/>을 가진 기업이라면\n콘텐츠 커머스 플랫폼\n마플샵 플러스',
	Section_plus_P: '시간과 비용을 아껴 드리는\n원스톱 기업 솔루션을 제공합니다.',
	Section_plus_A_apply: '<img data-icon-marpple-char1/>플러스 신청하기',
	Section_plus_A_intro: '<img data-icon-marpple-char2/>더 알아보기',
	Section_partners_Heading: '당신의 사업에\n날개를\n달아드립니다.',
	Section_partners_P:
		'마플과 만나면 특별한 상품이 되는 마법.\n지금 바로 마플 파트너가 되어보세요!',
	Section_partners_A_apply: '<img data-icon-marpple-char1/>파트너 신청하기',
	Section_partners_A_intro: '<img data-icon-marpple-char2/>더 알아보기',
};
