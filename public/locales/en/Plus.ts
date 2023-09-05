export const plus = {
	H: 'Marple Shop Plus',
	finish_Title: 'Application Complete Page - Marple Shop Plus | MARPPLE',
	finish_Meta_description: 'MARPPLE shop plus apply complete page',
	finish_H: 'Marple Shop Plus application complete',
	finish_P:
		'Thank you for signing up for Marple Shop Plus. <br/>By business days after confirmation by the manager in charge\nWe will contact you within about 2-5 days.',
	finish_Article_Button: 'to main',
	privacy_Title:
		'Personal Information Collection and Terms of Use - MarpleShop Plus | MARPPLE',
	privacy_Meta_description: 'MARPPLE shop plus privacy term page',
	privacy_H: 'Consent to Collection and Use of Personal Information',
	privacy_data: {
		'Name of collection and use organization': 'Marple Corporation',
		'Collection items': '(required items) name, contact number, email',
		'Purpose of collection and use':
			'Marple Shop seller application and service provision',
		'Retention and use period': '1 year from the date of inquiry to the seller',
	},
	privacy_notice_list: [
		'The personal information provider is responsible for the collection and use of personal information.\nYou have the right to refuse to consent to\nSeller reception guidance is not possible.',
	],
	privacy_Button_ok: 'OK',
};

export const plusApply = {
	Title: 'Apply - Marple Plus | MARPPLE',
	Meta_description: 'Marpple Shop Plus Apply Page',
	H: 'Apply for Marple Shop Plus',
	Section_sec1_Hgroup_H:
		'<span data-pc-only>Marple Shop </span>Plus<br> Before application\n<br>Please read!',
	Section_sec1_Hgroup_P_require:
		'This is a required field <span data-icon=required>',
	Section_sec1_P:
		'Application for entry into Marple Corporation (Marple,\nMarple Shop, Marple Shop Plus)\nYes.<br> To protect the rights of applicants\ntechnology or design that has not been patented\nExcept for the detailed description of <br>, please write.',
	Section_sec1_Detail_Summary: 'View Details<span data-icon="plus"/>',
	Section_sec1_Detail: 'detail...',
	Fieldset_corporation_info_Legend:
		'Nice to meet you!\n<br>Please provide the following information<br>',
	Input_corporation_type: {
		label: 'company type',
	},
	Input_corporation_name: {
		label: 'company name',
		options: 'Please enter your company name.',
	},
	Input_applicant_name: {
		label: "applicant's name",
		placeholder: 'Enter the name of the applicant.',
	},
	Input_applicant_rank: {
		label: "applicant's position",
	},
	Input_applicant_email: {
		label: 'Applicant Email',
		placeholder: 'Please enter your company email',
		error: 'Invalid email. Please check and enter again.',
	},
	Input_applicant_phone: {
		label: 'applicant contact information',
		placeholder: 'Accurate number to be reached when contacting\nplease enter',
		error: 'Invalid phone number. Please check and enter again.',
	},
	Fieldset_corporation_intro_Legend:
		'<br>The more specific the company introduction is, the better.\n<br>The pace of work is <br>fast',
	Input_corporation_profile: {
		label: 'company profile',
		placeholder:
			'Attachments are PDF, DOC, DOCX, PPT, PPTX, HWP, GUL, GIF, JPG, PNG, ZIP, TXT format/ 100MB or less',
		error: 'The file format is not supported. Please check and enter again.',
	},
	Input_corporation_domain: {
		label: 'homepage address',
		placeholder: 'sample.com',
		error: 'Invalid homepage address. Please check and enter again.',
	},
	Input_corporation_IP: {
		label:
			'Intellectual property (IP) owned by the company\nPlease introduce yourself.',
		placeholder:
			'Introduce your intellectual property (IP) in 200 characters or less.',
		error: '',
	},
	Input_corporation_crator_sns: {
		label:
			"Representative artist or representative belonging to the company\nIs there a creator's SNS?",
		Placeholder: 'Please enter in the form of url.',
		error: 'Invalid sns. Please check and enter again.',
	},
	Fieldset_corporation_ir_Legend:
		'<br>Leave it to Marple Shop Plus\n<br>tell your business story',
	Input_corporation_IR: {
		label: 'Please write freely.',
		placeholder: 'Please write freely.',
		error: '',
	},
	Fieldset_privacy_term_Legend:
		'Personal information collection and use\nPlease agree.',
	Input_privacy_term: {
		options: {
			check_agree:
				'<a style="border-bottom:1px solid black" I agree to the href="/marpple-shop-plus/apply/privacy-term">collection and use of personal information</a>.',
		},
		error:
			'You must agree to the Privacy Policy and Terms of Use to complete the application',
	},
	privacy_term_Section_H: 'Please Read',
	privacy_term_Section_term_list: [
		'The provided personal information is subject to the consent of the personal information provider.\nDo not use it for any purpose other than the content.\nUse of personal information provided within the retention period<br/>\nManage personal information freely when you want to reject it\nManager (partner@marppleshop.com),<br/> Customer Center\n(1566-5496) to request viewing, correction, or deletion.\ncan.',
		'The manager in charge will contact you within 2-5 business days after confirmation.',
	],
	privacy_term_Button_dialog_close: 'OK',
	Form_Button_ok: 'Complete application',
	Form_Button_cancel: 'Cancel',
};

export type PlusPrivacyTermCheck = typeof plusApply.Input_privacy_term.options;
export type PlusPrivacyTermCheckKeys = keyof PlusPrivacyTermCheck;
