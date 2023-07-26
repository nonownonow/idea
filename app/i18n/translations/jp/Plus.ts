export const plus = {
	H: 'マープルショッププラス',
	finish_Title: '申請完了ページ - マープルショッププラス| MARPPLE',
	finish_Meta_description: 'MARPPLE shop plus apply complete page',
	finish_H: 'マープルショッププラス申請完了',
	finish_P:
		'マープルショッププラスを申請していただきありがとうございます。 <br/>担当マネージャーの確認後の営業日基準\n約2～5日以内にご連絡致します。',
	finish_Article_Button: 'メインへ',
	privacy_Title: '個人情報の収集と利用規約 - マープルショッププラス| MARPPLE',
	privacy_Meta_description: 'MARPPLE shop plus privacy term page',
	privacy_H: '「個人情報の収集と利用に関する同意」',
	privacy_data:
		'収集・利用機関名：（株）マープル株式会社 収集項目：「（必須項目）氏名、連絡先、Eメール」 収集・利用目的：マープルショップセラーの申請及びサービス提供 保有及び利用期間：セラー申請問い合わせ日から1年',
	privacy_notice_list: [
		'個人情報提供者は個人情報の収集と利用に\nに関する同意を拒否する権利があり、そのような場合\nセラー受付案内ができません。',
	],
	privacy_Button_ok: '確認',
};
export const plusApply = {
	Title: '申請 - マープルプラス| MARPPLE',
	Meta_description: 'Marpple Shop Plus Apply Page',
	H: 'マープルショッププラス申請',
	Section_sec1_Hgroup_H:
		'<span data-pc-only>マープルショップ</span>プラス<br>申請前\n<br>ぜひお読みください！',
	Section_sec1_Hgroup_P_require: '必須入力項目です <span data-icon=required>',
	Section_sec1_P:
		'入店申込は（株）マープルコーポレーション（マープル、\nマープルショップ、マープルショッププラス）で一緒にレビューすることができます\n申請者の権利を保護するため\n特許出願されていない技術またはデザインは\n詳細な説明を除いて作成してください。',
	Section_sec1_Detail_Summary: '詳細<span data-icon="plus"/>',
	Section_sec1_Detail: 'detail...',
	Fieldset_corporation_info_Legend:
		'嬉しいです！\n<br>次の情報を教えてください',
	Input_corporation_type: {
		label: '企業形態',
	},
	Input_corporation_name: {
		label: '会社名',
		options: '会社名を入力してください。',
	},
	Input_applicant_name: {
		label: '申請者名',
		placeholder: '申請者の名前を入力してください。',
	},
	Input_applicant_rank: {
		label: '申請者直給',
	},
	Input_applicant_email: {
		label: '申請者のメール',
		placeholder: '会社の電子メールを入力してください',
		error: '無効な電子メールです。 確認後再入力してください。',
	},
	Input_applicant_phone: {
		label: '申請者の連絡先',
		placeholder: '連絡時に受け取る番号を正確に\n入力してください。',
		error: '無効な電話番号です。 確認後再入力してください。',
	},
	Fieldset_corporation_intro_Legend:
		'会社紹介が <br>具体的であるほど\n仕事の進行速度は速いです。',
	Input_corporation_profile: {
		label: '会社紹介書',
		placeholder:
			'添付ファイルはPDF、DOC、DOCX、PPT、PPTX、HWP、GUL、GIF、JPG、PNG、ZIP、TXT形式/ 100MB以下',
		error: 'サポートされていないファイル形式です。 確認後再入力してください。',
	},
	Input_corporation_domain: {
		label: 'ホームページアドレス',
		placeholder: 'sample.com',
		error: '無効なホームページアドレスです。 確認後再入力してください。',
	},
	Input_corporation_IP: {
		label: '会社が保有する知的財産権（IP）\n紹介してください。',
		placeholder: '知的財産権(IP)紹介は200文字以下で作成してください。',
		error: '',
	},
	Input_corporation_crator_sns: {
		label:
			'会社に所属する代表アーティストまたは代表\nクリエイターのSNSはありますか？',
		placeholder: 'url 形式で入力してください。',
		error: '無効なsnsです。 確認後再入力してください。',
	},
	Fieldset_corporation_ir_Legend:
		'マープルショッププラスに<br>預ける\nビジネスストーリーを聞いてください',
	Input_corporation_IR: {
		label: '自由に書いてください。',
		placeholder: '自由に書いてください。',
		error: '',
	},
	Fieldset_privacy_term_Legend: '個人情報の収集と利用\n同意してください。',
	Input_privacy_term: {
		options: {
			check_agree:
				'<a style="border-bottom:1px solid black" href="/marpple-shop-plus/apply/privacy-term">個人情報の収集と利用</a>について同意します。',
		},
		error:
			'申請を完了するには、個人情報の収集と利用規約に同意する必要があります',
	},
	privacy_term_Section_H: 'ぜひお読みください',
	privacy_term_Section_term_list: [
		'提供された個人情報は、個人情報提供者が同意する\n内容以外の目的には活用せず、\n保有期間内に提供された個人情報の利用\n拒否したいときに自由に個人情報を管理する\n責任者（partner@marppleshop.com）、<br/>カスタマーセンター\n（1566-5496）を通じて閲覧、訂正、削除を要求する\nすることができます。',
		'担当マネージャーが確認後、営業日基準で約2～5日以内にご連絡いたします。',
	],
	privacy_term_Button_dialog_close: '確認',
	Form_Button_ok: '申請を完了する',
	Form_Button_cancel: 'キャンセル',
};

export type PlusPrivacyTermCheck = typeof plusApply.Input_privacy_term.options;
export type PlusPrivacyTermCheckKeys = keyof PlusPrivacyTermCheck;
