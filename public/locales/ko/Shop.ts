export const shop = {
	H: '마플샵',

	//finish page
	finish_Title: '신청 완료 페이지 - 파트너 : MARPPLE',
	finish_Meta_description: 'MARPPLE partners apply complete page',
	finish_H: '셀러 신청 완료',
	finish_P:
		'입력하신 이메일 E-mail@email.co.kr으로\n마플샵 생성 링크를 전송했습니다.\n<br>링크를 클릭해 마플샵 오픈을 완료하면\n5,000원 샘플 포인트를 드립니다.\n<br>지금 바로 내 샵에서, 상품을 만들어보세요! ',
	finish_Button: '마플샵 바로가기',
	finish_Section_sec1_H: 'notice',
	finish_sec1_1_H: '메일이 오지 않았나요?',
	finish_sec1_1_P:
		'스팸함에도 없다면\n<br>cs@marppleshop.com으로<br>문의해주세요.',
	finish_sec1_2_H: '꼭 읽어주세요!',
	finish_sec1_2_P:
		'심사에 참고할 자료가 부족하거나, 부적절한 소재의\n내용이 포함되어있는 경우 신청이 거절 될 수 있는 점\n미리 양해 부탁드립니다.',

	//privacy page
	privacy_Title: '개인 정보 수집 및 이용 약관 - 마플샵 플러스 : MARPPLE',
	privacy_Meta_description: 'MARPPLE shop plus privacy term page',
	privacy_H: '개인정보 수집 및 이용에 관한 동의 ',
	privacy_data: {
		'수집•이용기관명': '(주)마플코퍼레이션',
		'수집항목': '(필수항목) 성명, 연락처, 이메일',
		'수집•이용목적': '마플샵 셀러 신청 및 서비스 제공',
		'보유 및 이용기간': '셀러 신청 문의 일로부터 1년',
	},
	privacy_notice_list: [
		'개인정보 제공자는 개인정보의 수집 및 이용에\n관한 동의를 거부할 권리가 있으며, 그러한 경우\n셀러접수 안내가 불가능 합니다.',
	],
};

export const shopApply = {
	Title: '신청하기 - 마플샵 | MARPPLE',
	Meta_description: 'Marpple Shop Apply Page',
	H: '마플샵 셀러 신청하기',

	//
	Fieldset_shop_info_Legend: '나의 샵을\n<br>만들어볼까요?',
	Fieldset_shop_info_P: '필수 입력 항목입니다',
	Input_brandName: {
		label: '브랜드명',
		placeholder: '영문/한글/숫자조합하여 2자 이상 20자이내',
		error_required: '브랜드 이름을 작성해주세요.',
		error_type: '브랜드 이름은 3글자 이상으로 작성해 주세요',
	},
	Input_brandDomain: {
		label: '도메인',
		placeholder:
			'영문/숫자 조합하여 2자 이상 20자 이내, https://\nmarpple.shop/my_domain',
		error: '브랜드 도메인을 작성해 주세요',
	},

	//
	Fieldset_portfolio_Legend: '운영중인 SNS 혹은\n디자인 포트폴리오 있으세요?\n',
	Fieldset_portfolio_P: '1개 이상 필수 입력',
	Input_portfolio_sns: {
		label: '운영중인 SNS',
		placeholder: 'youtube.com/ID',
		error: '올바른 sns주소를 입력해주세요',
	},
	Input_portfolio_file: {
		label: '포트폴리오',
		error: '올바른 File을 업로드해주세요',
		placeholder:
			'첨부파일은 jpg, png, ppt, keynote, pdf 형식/50MB이하/최대 3개 업로드 가능',
	},
	Input_portfolio_web: {
		label: '참고 사이트',
		placeholder: '심사에서 참고할 사이트 url을 입력해주세요.',
		error: '올바른 사이트 url을 입력해주세요.',
	},

	//
	Fieldset_contact_Legend: '셀러로 선정되면\n<br>어디로<br>연락드릴까요?',
	Input_contact_email: {
		label: '이메일',
		placeholder: '이메일 입력',
		error: '잘못된 email 입니다. 확인 후 다시 입력해 주세요.',
	},
	Input_contact_phone: {
		label: '휴대폰번호',
		placeholder: '휴대전화번호 (-없이 숫자만 입력)',
		error: '잘못된 전화번호 입니다. 확인 후 다시 입력해 주세요.',
	},
	Fieldset_profile_Legend: '소곤소곤,\n<br>내이야기를<br> 들려주세요',
	Input_applicantProfile: {
		label: '자기소개 혹은 브랜드 이야기',
		error: '자기소개는 200자 이하로 작성해 주세요',
	},

	//
	Fieldset_privacy_term_Legend: '안내사항을 읽고\n<br>동의하면 <br>신청 완료!',
	Input_privacy_term: {
		label_check_all: '전체 항목에 동의 합니다.',
		options: {
			check_agree:
				'<a style="border-bottom:1px solid black" href="/marpple-shop/apply/privacy-term">개인정보 수집 및 이용</a>에 관하여 동의합니다.',
			check_age: '만 14세 이상입니다.',
		} as const,
		error: '전체 항목에 동의 하여야 합니다.',
	},
	privacy_term_Section_sec1_H: '꼭 읽어주세요.',
	privacy_term_Section_sec1_list: [
		'판매하는 콘텐츠의 저작권은 판매 주체인\n셀러에게 있으며 사전 접수 신청시 저작권 소유자\n확인을 인증한 것으로<br>간주합니다.',
		'저작권 등 타인의 권리를 침해하거나 명예를\n훼손하는 이미지, 디자인등의 게시에 대한 책임은\n셀러에게 있습니다.',
		'제공된 개인정보는 개인정보 제공자가 동의한\n내용 외의 다른 목적으로 활용하지 않으며,\n보유 기간 내에 제공된<br/> 개인정보의 이용을\n거부하고자 할 때에 자유롭게 개인정보 관리\n책임자(partner@marppleshop.com),<br/> 고객센터\n(1566-5496)을 통해 열람, 정정, 삭제를 요구할\n수 있습니다.',
	],
	privacy_term_Button_dialog_close: '확인',

	//
	Form_Button_ok: '신청 완료!',
};

export type ShopPrivacyTermCheck = typeof shopApply.Input_privacy_term.options;
export type ShopPrivacyTermCheckKeys = keyof ShopPrivacyTermCheck;
