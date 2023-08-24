export const partners = {
  H: "마플 파트너",

  // finish page
  finish_Title: "신청 완료 페이지 - 파트너 | MARPPLE",
  finish_Meta_description: "MARPPLE partners apply complete page",
  finish_H: "마플 파트너 입점 신청 완료",
  finish_P:
    "입점 신청이 정상적으로 접수되었습니다.\n<br/>입점 가능 여부를 검토하여 영업일 기준\n3~5일 내로<br/> 입력하신 메일 주소와 연락처를\n통해 결과를 알려드립니다.",
  finish_Button: '<a href="/">메인으로</a>',

  // privacy page
  privacy_Title: "개인 정보 수집 및 이용 약관 - 마플 파트너 | MARPPLE",
  privacy_Meta_description: "MARPPLE partners privacy term page",
  privacy_H: "개인정보 수집 및 이용에 관한 동의 ",
  privacy_data: {
    "수집 · 이용기관명": "(주)마플코퍼레이션",
    수집항목: "(필수항목) 성명, 연락처, 이메일",
    "수집 · 이용목적": "마플 파트너 신청 및 서비스 제공",
    "보유 및 이용기간": "파트너 신청 문의 일로부터 1년",
  },
  privacy_notice_list: [
    "개인정보 제공자는 개인정보의 수집 및 이용에\n관한 동의를 거부할 권리가 있으며, 그러한 경우\n셀러접수 안내가 불가능 합니다.",
  ],
};

export const partnersApply = {
  Title: "신청하기 - 마플 파트너 | MARPPLE",
  Meta_description: "비즈니스 성장 파트너, 마플 파트너",
  Meta_og_title: "마플 파트너",
  H: "마플 파트너 신청하기",

  //
  Section_sec1_Hgroup_H: "파트너 신청 전에\n<br/>꼭 읽어주세요!",
  Section_sec1_Hgroup_P: "필수 입력 항목입니다 <span data-icon=required>",
  Section_sec1_P:
    "입점 신청은 (주)마플코퍼레이션(마플,마플샵,\n마플샵 플러스)에서 함께 검토할 수 있습니다.\n<br>신청자의 권리 보호를 위해 특허출원되지 않은\n기술 또는 디자인은 그에 대한 상세한 설명을\n제외하고<br> 작성해주세요.",
  Section_sec1_Detail_Summary: "자세히보기",
  Section_sec1_Detail: "detail...",
  Section_sec1_modal_button: "확인",

  //
  Form_H: "파트너 신청 폼을 작성해 주세요",
  Fieldset_partner_Legend: "어떤 파트너로 입점\n<br/>신청하시겠어요?",
  Input_partner_type: {
    label: "파트너 형태",
    // options: partnerType,
    partners_type_label: {
      supply: "공급파트너",
      produce: "제작파트너",
    },
    error_required: "파트너 형태를 선택해주세요",
    error_data: "잘못된 파트너 형태를 입력하였습니다.",
  },

  //
  Fieldset_application_Legend: "입점 신청 내용을\n<br/>작성해주세요.",
  Input_application_title: {
    label: "입점 신청 제목",
    placeholder: "제목을 입력해주세요",
    error_required: "입점 신청 제목을 입력해주세요",
  },
  Input_application_content: {
    label: "입점 신청 내용",
    placeholder:
      "내용을 구체적으로 입력해주세요.\n1.입점 신청 배경 \n2.세부 내용 \n3.입점 기대 효과 등",
    error_required: "입력 신청 내용을 입력해주세요.",
    error_type: "입점 신청 내용은 문자로 입력해주세요.",
  },

  //
  Fieldset_proposal_Legend: "제안서 파일을\n<br/>첨부해주세요",
  Input_proposal: {
    label: "입점 제안서",
    placeholder:
      "첨부파일은 PDF, DOC, DOCX, PPT, PPTX,\nHWP, GUL, GIF, JPG, PNG, ZIP, TXT 형식/\n100MB이하",
    error_required: "입점 제안서를 선택해주세요.",
    error_type: "입점 제안서는 파일로 입력해주세요.",
  },

  //
  Fieldset_corporation_Legend:
    "회사를<br/> 소개해주세요.\n<br/>자세할수록 좋아요!",
  Input_corporation_type: {
    label: "기업형태",
    // options: corporationType,
    error_required: "기업형태를 입력해주세요.",
    error_type: "기업형태는 문자로 입력해주세요.",
  },
  Input_corporation_name: {
    label: "회사 이름",
    placeholder: "회사 이름을 입력해주세요",
    error_required: "회사 이름을 입력해주세요.",
    error_type: "회사 이름은 문자로 입력해주세요",
  },
  Input_applicant_name: {
    label: "신청자 이름",
    placeholder: "신청자 이름을 입력해주세요.",
    error_required: "신청자 이름을 입력해주세요",
    error_type: "신청자 이름은 문자로 입력해주세요",
  },
  Input_applicant_rank: {
    label: "신청자 직급",
    // options: rank,
    placeholder: "신청자 칙급을 선택해주세요.",
    error_required: "신청자 직급을 선택해주세요.",
    error_type: "잘못된 신청자 직급이 입력되었습니다.",
  },
  Input_applicant_email: {
    label: "신청자 이메일",
    placeholder: "회사 이메일을 입력해주세요",
    error_required: "신청자 이메일을 입력해주세요.",
    error_type: "잘못된 이메일이 입력되었습니다.",
  },
  Input_applicant_phone: {
    label: "신청자 연락처",
    placeholder: "연락 시 받을 수 있는 번호를 정확하게\n입력해주세요.",
    error_required: "신청자 연락처를 입력해주세요.",
    error_type: "잘못된 전화번호가 입력되었습니다.",
  },
  Input_corporationIntro_profile: {
    label: "회사소개서",
    placeholder:
      "첨부파일은 PDF, DOC, DOCX, PPT, PPTX,\nHWP, GUL, GIF, JPG, PNG, ZIP, TXT 형식/\n100MB이하",
    error_required: "회사소개서를 선택해주세요.",
    error_type: "잘못된 회사소개서 파일이 입력되었습니다.",
  },
  Input_corporation_domain: {
    label: "홈페이지 주소",
    placeholder: "sample.com",
    error_required: "홈페이지 주소를 입력해주세요.",
    error_type: "잘못된 홈페이지 주소가 입력되었습니다.",
  },

  //
  Fieldset_privacy_term_Legend:
    "개인정보 수집<br/> 및 이용에\n<br/>동의해주세요.",
  Input_privacy_term: {
    label_check_all: "전체 항목에 동의 합니다.",
    options: {
      check_agree:
        '<a style="border-bottom:1px solid black;" href="/marpple-partners/apply/privacy-term">개인정보 수집 및 이용</a>에 관하여 동의합니다.<span data-icon="required" />',
    } as const,
    error: "신청을 위해서 개인정보 수집 및 이용에 관하여 동의해주세요",
  },
  privacy_term_Section_sec1_detail_summary: "자세히보기",
  privacy_term_Section_sec1_H:
    "(주)마플코퍼레이션은 제휴를 희망하는 기업 및 개인을 대상으로 아래와 같이 개인정보를 수집하고\n있습니다.",
  privacy_term_Section_sec1_list: [
    "수집 개인정보 항목 : [필수] 회사명, 제안자명,\n메일 주소, 전화번호 / [선택] 홈페이지 주소,\n팩스번호",
    "개인정보의 수집 및 이용목적 : 제휴신청에 따른\n본인확인 및 원활한 의사소통 경로 확보",
    "개인정보의 보유 및 이용기간 : 제휴 제안 종료\n처리 시점으로부터 1개월간 보관 후 파기합니다.",
    "동의 거부 권리 안내 추가 : 위와 같은 개인정보\n수집 동의를 거부할 수 있습니다. 다만 동의를\n거부하는 경우 제휴 제안<br/> 신청이 제한될 수\n있습니다.",
  ],
  privacy_term_Section_sec1_p:
    "그 밖의 사항은 각 사별 개인정보처리방침을\n준수합니다.",
  privacy_term_Button_dialog_close: "확인",

  //
  Fieldset_apply_notice_Legend:
    "유의사항을 읽고\n<br/>동의하면<br/> 신청 완료!",
  Input_apply_notice: {
    label_check_all: "전체 항목에 동의 합니다.",
    options: {
      check_agree:
        '유의 사항 내용을 확인하였습니다.<span data-icon="required" />',
    } as const,
    error: "신청을 위해서 유의사항에 동의해주세요",
  },
  apply_notice_Section_sec1_detail_summary: "자세히보기",
  apply_notice_Section_sec1_H:
    "(주)마플코퍼레이션은 보내 주신 내용을 검토한 후\n사업 진행이 결정되면 꼭 연락을 드려 함께 진행할\n수<br/> 있도록 하겠습니다.",
  apply_notice_Section_sec1_list: [
    "제안자의 제휴 및 제안 내용은 이미\n(주)마플코퍼레이션 내부적으로 진행 중인 사업과\n유사하거나 동일하거나,<br/> 제3자로부터 먼저 제안이\n들어온 내용이거나, 또는 검토 당시의 사업적\n방향이나 제휴 조건이 맞지 않는 등의 여러<br/> 이유로\n거절될 수 있습니다.",
    "따라서, 이 점 감안하시어 당사에 공개 가능한\n정보만 기재하여 주시기 바라며, 당사는 제휴 제안\n거절에 대해 제안자에<br/> 대한 보상, 회신 등 어떠한\n의무도 부담하지 않는다는 점 양해 부탁드립니다.",
    "제휴제안서에는 제안자의 영업비밀이나 기밀사항,\n보호가 필요하다고 생각하는 사업적 아이디어 등을 제외하고<br/> 기재하여 주시기 바랍니다.",
    "다만, 제안자가 제휴 제안 진행사항을 확인할 수\n있도록 제안 등록 번호에 한해 개인정보와\n동일하게 1개월간 보관되고,<br/> 통계에 사용되는\n'제휴 희망 사이트'와 '제휴 구분'을 제외한 나머지\n정보는 보관 기간 경과 후 즉시 파기됩니다. 또한,<br/>\n제휴 제안 재등록을 요청하였으나 30일 이내에\n제안자가 내용을 수정, 보완하여 재접수를 하지\n않는 경우 해당 제휴<br/> 제안은 파기됩니다.",
    "아울러, 특허 및 디자인, 저작권 등 각종\n지식재산권의 공개 내지 공유가 필요한 제휴\n요청의 경우, 반드시 출원 등<br/> 제안자의 권리\n보호를 위해 필요한 조치를 마치신 후에 당사로\n제휴 제안 요청을 하여 주시기 바랍니다. 등록하신\n<br/>제휴 제안 내용 및 관련 자료는 제휴 검토\n목적으로만 이용되며, 제휴 제안이 받아들여지지\n않을 경우 즉시 파기됩니다.",
  ],
  apply_notice_Button_dialog_close: "확인",
  //
  Form_Button_ok: "신청 완료하기",
  Form_Button_cancel: "취소",
};

export type PartnersPrivacyTermCheck =
  typeof partnersApply.Input_privacy_term.options;
export type PartnersPrivacyTermCheckKeys = keyof PartnersPrivacyTermCheck;

export type PartnersApplyNoticeTermCheck =
  typeof partnersApply.Input_apply_notice.options;
export type PartnersApplyNoticeTermCheckKeys =
  keyof PartnersApplyNoticeTermCheck;
