export const shopApply = {
	Title: '応募 - マープルショップ | MARPPLE',
	Meta_description: 'Marpple Shop Apply Page',
	H: '「マープルショップセラーを申請する」',
	Fieldset_shop_info_Legend: '私のショップを\n<br>作りましょうか？',
	Fieldset_shop_info_P: '必須入力項目です <span data-icon=required>',
	Input_brandName: {
		label: 'ブランド名',
		placeholder: '英語/韓国語/数字を組み合わせて2文字以上20文字以内',
		error_required: 'ブランド名を作成してください。',
		error_type: 'ブランド名は3文字以上で作成してください',
	},
	Input_brandDomain: {
		label: 'ドメイン',
		placeholder:
			'英語/数字の組み合わせで 2 文字以上 20 文字以内、https://\nmarpple.shop/my_domain',
		error: 'ブランドドメインを作成してください',
	},
	Fieldset_portfolio_Legend:
		'運用中のSNSまたは\nデザインのポートフォリオをお持ちですか？',
	Fieldset_portfolio_P: '1 つ以上の必須入力 <span data-icon=required>',
	Input_portfolio_sns: {
		label: '運用中の SNS',
		placeholder: 'youtube.com/ID',
		error: '正しい sns アドレスを入力してください',
	},
	Input_portfolio_file: {
		label: 'ポートフォリオ',
		error: '正しいファイルをアップロードしてください',
		placeholder:
			'添付ファイルはjpg、png、ppt、keynote、pdf形式/50MB以下/最大3個アップロード可能',
	},
	Input_portfolio_web: {
		label: '参考サイト',
		placeholder: '審査で参考にするサイト URL を入力してください。',
		error: '正しいサイト URL を入力してください。',
	},
	Fieldset_contact_Legend: 'セラーに選ばれたら\n<br>どこに連絡しますか？',
	Input_contact_email: {
		label: 'メール',
		placeholder: 'メールを入力',
		error: '誤ったメールです。確認してもう一度入力してください。',
	},
	Input_contact_phone: {
		label: '携帯電話番号',
		placeholder: '携帯電話番号 (- なしの数字のみを入力)',
		error: '間違った電話番号です。確認してもう一度入力してください。',
	},
	Fieldset_profile_Legend: 'ソゴンソゴン、\n<br>私の話を聞いてください',
	Input_applicantProfile: {
		label: '自己紹介またはブランドストーリー',
		error: '自己紹介は200文字以下で作成してください',
	},
	Fieldset_privacy_term_Legend:
		'案内事項を読んで\n<br>同意すれば、<br>申し込み完了!',
	Input_privacy_term: {
		label_check_all: '全項目に同意します。',
		options: {
			check_agree:
				'<a style="border-bottom:1px solid black" href="/marpple-shop/apply/privacy-term">個人情報の収集と使用</a>について同意します.',
			check_age: '14歳以上です。',
		},
		error: '全項目に同意する必要があります。',
	},
	privacy_term_Section_sec1_H: '必ずお読みください。',
	privacy_term_Section_sec1_list: [
		'販売するコンテンツの著作権は販売主体である\nセラーにあり、事前受付申請時に著作権所有者\n確認を認証したものであります。',
		'著作権など他人の権利を侵害したり、名誉を\n毀損するイメージ、デザインなどの掲示に対する責任は\nセラーにあります。',
		'「提供された個人情報は、個人情報提供者が同意した\n内容以外の他の目的に活用せず、\n保有期間内に提供された<br/>個人情報の利用を\n拒否しようとするときに自由に個人情報管理\n責任者(partner@marppleshop.com),<br/> カスタマーセンター\n(1566-5496)を通じて閲覧、訂正、削除を要求する\nできます。',
	],
	privacy_term_Button_dialog_close: 'OK',
	Form_Button_ok: '申請完了！',
};

export type ShopPrivacyTermCheck = typeof shopApply.Input_privacy_term.options;
export type ShopPrivacyTermCheckKeys = keyof ShopPrivacyTermCheck;
