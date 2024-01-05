export const plus = {
	H: '마플샵 플러스',

	//finish page
	finish_Title: '신청 완료 페이지 - 마플샵 플러스 | MARPPLE',
	finish_Meta_description: 'MARPPLE shop plus apply complete page',
	finish_H: '마플샵 플러스 신청 완료',
	finish_P:
		'마플샵 플러스를 신청해주셔서 감사합니다. <br/>담당 매니저가 확인 후 영업일 기준\n약 2~5일 이내로 연락드립니다.',
	finish_Article_Button: '메인으로',

	//privacy page
	privacy_Title: '개인 정보 수집 및 이용 약관 - 마플샵 플러스 | MARPPLE',
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
	privacy_Button_ok: '확인',
};
export const plusApply = {
	Title: '신청하기 - 마플 플러스 | MARPPLE',
	Meta_description: 'Marpple Shop Plus Apply Page',
	H: '마플샵 플러스 신청하기',

	//
	Section_sec1_Hgroup_H:
		'<span data-pc-only>마플샵 </span>플러스<br> 신청 전에\n<br>꼭 읽어주세요!',
	Section_sec1_Hgroup_P_require:
		'필수 입력 항목입니다 <span data-icon=required>',
	Section_sec1_P:
		'입점 신청은 (주)마플코퍼레이션(마플,\n마플샵, 마플샵 플러스)에서 함께 검토할 수\n있습니다.<br> 신청자의 권리 보호를 위해\n특허출원되지 않은 기술 또는 디자인은 그에\n대한 상세한 설명을 제외하고<br> 작성해주세요.',
	Section_sec1_Detail_Summary: '자세히보기<span data-icon="plus"/>',
	Section_sec1_Detail: 'detail...',

	//
	Fieldset_corporation_info_Legend:
		'반갑습니다!\n<br>다음 정보를<br> 알려주세요',
	Input_corporation_type: {
		label: '기업형태',
		// options: corporationType,
	},
	Input_corporation_name: {
		label: '회사이름',
		options: '회사 이름을 입력해주세요.',
	},
	Input_applicant_name: {
		label: '신청자 이름',
		placeholder: '신청자의 이름을 입력해주세요.',
	},
	Input_applicant_rank: {
		label: '신청자 직급',
		// options: rank
	},
	Input_applicant_email: {
		label: '신청자 이메일',
		placeholder: '회사 이메일을 입력해주세요',
		error: '잘못된 email 입니다. 확인 후 다시 입력해 주세요.',
	},
	Input_applicant_phone: {
		label: '신청자 연락처',
		placeholder: '연락 시 받을 수 있는 번호를 정확하게\n입력해주세요.',
		error: '잘못된 전화번호 입니다. 확인 후 다시 입력해 주세요.',
	},

	//
	Fieldset_corporation_intro_Legend:
		'회사소개가 <br>구체적일수록\n<br>일의 진행 속도가 <br>빨라요',
	Input_corporation_profile: {
		label: '회사소개서',
		placeholder:
			'첨부파일은 PDF, DOC, DOCX, PPT, PPTX, HWP, GUL, GIF, JPG, PNG, ZIP, TXT 형식/ 100MB이하',
		error: '지원하지 않는 File형식 입니다. 확인 후 다시 입력해 주세요.',
	},
	Input_corporation_domain: {
		label: '홈페이지 주소',
		placeholder: 'sample.com',
		error: '잘못된 홈페이지 주소 입니다. 확인 후 다시 입력해 주세요.',
	},
	Input_corporation_IP: {
		label: '회사가 보유한 지적재산권(IP)을\n소개해주세요.',
		placeholder: '지적재산권(IP)소개는 200자 이하로 작성해 주세요.',
		error: '',
	},
	Input_corporation_crator_sns: {
		label: '회사에 소속된 대표 아티스트 또는 대표\n크리에이터의 SNS가 있나요?',
		placeholder: 'url 형태로 입력 해주세요.',
		error: '잘못된 sns입니다. 확인 후 다시 입력해 주세요.',
	},

	//
	Fieldset_corporation_ir_Legend:
		'마플샵 플러스에 <br>맡길\n사업 이야기를 <br>들려주세요',
	Input_corporation_IR: {
		label: '자유롭게 작성해주세요.',
		placeholder: '자유롭게 작성해주세요.',
		error: '',
	},

	//
	Fieldset_privacy_term_Legend: '개인정보 수집 및 이용에\n동의해주세요.',
	Input_privacy_term: {
		options: {
			check_agree:
				'<a style="border-bottom:1px solid black" href="/marpple-shop-plus/apply/privacy-term">개인정보 수집 및 이용</a>에 관하여 동의합니다.',
		} as const,
		error: '신청을 완료하시려면 개인정보 수집 및 이용약관에 동의하셔야 합니다',
	},
	privacy_term_Section_H: '꼭 읽어 주세요',
	privacy_term_Section_term_list: [
		'제공된 개인정보는 개인정보 제공자가 동의한\n내용 외의 다른 목적으로 활용하지 않으며,\n보유 기간 내에 제공된<br/> 개인정보의 이용을\n거부하고자 할 때에 자유롭게 개인정보 관리\n책임자(partner@marppleshop.com),<br/> 고객센터\n(1566-5496)을 통해 열람, 정정, 삭제를 요구할\n수 있습니다.',
		'담당매니저가 확인 후 영업일 기준 약 2~5일 이내로 연락 드립니다.',
	],
	privacy_term_Button_dialog_close: '확인',
	Form_Button_ok: '신청 완료하기',
	Form_Button_cancel: '취소',
};

export type PlusPrivacyTermCheck = typeof plusApply.Input_privacy_term.options;
export type PlusPrivacyTermCheckKeys = keyof PlusPrivacyTermCheck;
