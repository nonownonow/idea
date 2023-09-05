export const shop = {
	H: 'Marple Shop',

	//finish page
	finish_Title: 'Application completion page - Partners: MARPPLE',
	finish_Meta_description: 'MARPPLE partners apply complete page',
	finish_H: 'Seller application complete',
	finish_P:
		'A link to create the Marple Shop has been sent to the email you entered at E-mail@email.co.kr\n<br>When you click the link to complete the Marple Shop opening,\nWe will give you a sample point of 5,000 won. n<br>Make products in my shop right now! ',
	finish_Button: 'Go to Maple Shop',
	finish_Section_sec1_H: 'notice',
	finish_sec1_1_H: 'Did you receive an email?',
	finish_sec1_1_P:
		'If it is not in the spam folder, please contact us at <br>cs@marppleshop.com.',
	finish_sec1_2_H: 'Please read it!',
	finish_sec1_2_P:
		'Please understand in advance that the application may be rejected\nif there is not enough data to reference for the examination or if it contains inappropriate material\ncontent.',

	//privacy page
	privacy_Title:
		'Personal Information Collection and Terms of Use - Marple Shop Plus : MARPPLE',
	privacy_Meta_description: 'MARPPLE shop plus privacy term page',
	privacy_H: 'Consent to collection and use of personal information',
	privacy_data: {
		'Name of collecting and using organization': 'Marple Corporation',
		'Collected items': '(Required items) name, contact information, e-mail',
		'Purpose of collection and use':
			'Applying for sellers in Maple Shop and providing services',
		'Retention and use period':
			'One year from the date of inquiry to the seller',
	},
	privacy_notice_list: [
		'Personal information provider has the right to refuse consent for the collection and use of personal information\nIn such case, it is impossible to provide information on seller acceptance.',
	],
};

export const shopApply = {
	Title: 'Apply - Maple Shop | MARPPLE',
	Meta_description: 'Marpple Shop Apply Page',
	H: 'Apply as a Marple Shop seller',

	//
	Fieldset_shop_info_Legend: 'Shall I create\n<br>my shop?',
	Fieldset_shop_info_P: 'This is a required field <span data-icon=required>',
	Input_brandName: {
		label: 'brand name',
		placeholder:
			'Combination of English/Korean/numeric characters, between 2 and 20 characters',
		error_required: 'Please provide a brand name',
		error_type: 'Please write a brand name with 3 or more characters',
	},
	Input_brandDomain: {
		label: 'domain',
		placeholder:
			'A combination of English/numeric characters, between 2 and 20 characters, https://\nmarpple.shop/my_domain',
		error: 'Please enter your brand domain',
	},

	//
	Fieldset_portfolio_Legend: 'Do you have a running SNS or\ndesign portfolio?',
	Fieldset_portfolio_P: 'At least one required input <span data-icon=required>',
	Input_portfolio_sns: {
		label: 'SNS in operation',
		placeholder: 'youtube.com/ID',
		error: 'Please enter a valid SNS address',
	},
	Input_portfolio_file: {
		label: 'Portfolio',
		error: 'Please upload the correct file',
		placeholder:
			'Attachments are in jpg, png, ppt, keynote, pdf format/ less than 50MB/maximum 3 can be uploaded',
	},
	Input_portfolio_web: {
		label: 'reference site',
		placeholder:
			'Please enter the url of the site to be referenced in the review.',
		error: 'Please enter a valid site url',
	},

	//
	Fieldset_contact_Legend:
		'If I am selected as a seller,\n<br>where will I contact you?',
	Input_contact_email: {
		label: 'email',
		placeholder: 'Enter Email',
		error: 'Invalid email. Please confirm and re-enter.',
	},
	Input_contact_phone: {
		label: 'mobile phone number',
		placeholder: 'Mobile phone number (enter only numbers without -)',
		error: 'Invalid phone number. Please confirm and re-enter.',
	},
	Fieldset_profile_Legend: 'Sorry,\n<br>tell me your story<br>',
	Input_applicantProfile: {
		label: 'Introduction of self or brand story',
		error: 'Please write your self-introduction in 200 characters or less',
	},

	//
	Fieldset_privacy_term_Legend:
		'If you read the instructions\n<br>agree to it, <br>complete your application!',
	Input_privacy_term: {
		label_check_all: 'I agree to all items.',
		options: {
			check_agree:
				'I agree to <a style="border-bottom:1px solid black" href="/marpple-shop/apply/privacy-term">collection and use of personal information</a>.',
			check_age: 'You are over 14 years old.',
		} as const,
		error: 'You must agree to all items.',
	},
	privacy_term_Section_sec1_H: 'Please read.',
	privacy_term_Section_sec1_list: [
		'The copyright of the content sold belongs to the seller\nthe seller, and the copyright owner\nconfirmation is deemed to have been verified<br>when applying for pre-registration.',
		'The seller is responsible for posting images, designs, etc. that infringe on the rights of others, such as copyright, or damage the reputation of the seller.',
		'Provided personal information will not be used for any other purpose other than the \nconsent by the personal information provider,\nwhen you want to \nrefuse the use of <br/> personal information provided within the retention period\npersonal information management\nresponsible person (partner@marppleshop.com),<br/> You can request viewing, correction, or deletion through the customer center\n(1566-5496)\n.',
	],
	privacy_term_Button_dialog_close: 'OK',

	//
	Form_Button_ok: 'Application completed!',
};

export type ShopPrivacyTermCheck = typeof shopApply.Input_privacy_term.options;
export type ShopPrivacyTermCheckKeys = keyof ShopPrivacyTermCheck;
