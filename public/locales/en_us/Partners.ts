export const partners = {
  H: "Marple Partner",

  // finish page
  finish_Title: "Registration Complete Page - Partner | MARPPLE",
  finish_Meta_description: "MARPPLE partners apply complete page",
  finish_H: "Marple partner application completed",
  finish_P:
    "Your application for entry has been successfully received.\n<br/>The eligibility for entry will be reviewed and you will be notified of the result within 3-5 business days\n<br/> through the e-mail address and contact number you entered\n.",
  finish_Button: '<a href="/">to main</a>',

  // privacy page
  privacy_Title:
    "Privacy Collection and Terms of Use - Marple Partners | MARPPLE",
  privacy_Meta_description: "MARPPLE partners privacy term page",
  privacy_H: "Consent to Collection and Use of Personal Information",
  privacy_data: {
    "Name of collection/use agency": "Marple Corporation",
    "Collection items": "(required items) name, contact number, email",
    "Purpose of collection and use":
      "Marple partner application and service provision",
    "Retention and use period":
      "1 year from the date of partner application inquiry",
  },
  privacy_notice_list: [
    "Personal information provider has the right to refuse consent to the collection and use of personal information, and in such case\nSeller registration information is not possible.",
  ],
};

export const partnersApply = {
  Title: "Apply - Marple Partners | MARPPLE",
  Meta_description: "Business Growth Partner, Marple Partner",
  Meta_og_title: "Marple Partner",
  H: "Apply for Marple Partner",

  //
  Section_sec1_Hgroup_H: "Be sure to read\n<br/>before applying for a partner!",
  Section_sec1_Hgroup_P: "This is a required field <span data-icon=required>",
  Section_sec1_P:
    "Applications for entry can be reviewed together with Marple Corporation (Marple, Marple Shop,\nMarple Shop Plus).\n<br>For the protection of the applicant's rights,\ntechnology or design that has not been applied for a patent\n Please write a detailed explanation\nexcept<br>.",
  Section_sec1_Detail_Summary: "View Details",
  Section_sec1_Detail: "detail...",
  Section_sec1_modal_button: "OK",

  //
  Form_H: "Please fill out the partner application form",
  Fieldset_partner_Legend: "Which partner would you like to\n<br/>apply for?",
  Input_partner_type: {
    label: "partner type",
    // options: partnerType,
    error_required: "Please select a partner type",
    error_data: "You entered an invalid partner type.",
  },

  //
  Fieldset_application_Legend: "Please fill out the entry request\n<br/>.",
  Input_application_title: {
    label: "Title of entry application",
    placeholder: "Please enter a title",
    error_required: "Please enter the application title",
  },
  Input_application_content: {
    label: "Contents of entry application",
    placeholder:
      "Please enter details.\n1. Background of application for entry \n2. Details \n3. Expected effects of entry, etc.",
    error_required: "Please enter the input request.",
    error_type: "Please enter the application information in text.",
  },

  //
  Fieldset_proposal_Legend: "Please attach your proposal file\n<br/>",
  Input_proposal: {
    label: "Location Proposal",
    placeholder:
      "Attached files must be in PDF, DOC, DOCX, PPT, PPTX,\nHWP, GUL, GIF, JPG, PNG, ZIP, TXT format/\n100MB or less",
    error_required: "Please select a store proposal.",
    error_type: "Please enter the store proposal as a file.",
  },

  //
  Fieldset_corporation_Legend:
    "Introduce your company<br/>.\n<br/>The more detailed the better!",
  Input_corporation_type: {
    label: "enterprise type",
    // options: corporationType,
    error_required: "Please enter a company type.",
    error_type: "Please enter the company type in letters.",
  },
  Input_corporation_name: {
    label: "Company Name",
    placeholder: "Please enter a company name",
    error_required: "Please enter a company name.",
    error_type: "Please enter the company name in letters",
  },
  Input_applicant_name: {
    label: "Applicant Name",
    placeholder: "Please enter the applicant's name.",
    error_required: "Please enter the applicant's name",
    error_type: "Please enter the applicant's name in letters",
  },
  Input_applicant_rank: {
    label: "rank of applicant",
    // options: rank,
    placeholder: "Please select the applicant's royal grade.",
    error_required: "Please select the applicant's position.",
    error_type: "Wrong applicant rank entered.",
  },
  Input_applicant_email: {
    label: "Applicant Email",
    placeholder: "Please enter your company email",
    error_required: "Please enter the applicant's email.",
    error_type: "An invalid email was entered.",
  },
  Input_applicant_phone: {
    label: "Applicant Contact",
    placeholder:
      "Please enter an accurate\nnumber to receive when contacting you.",
    error_required: "Please enter the contact information of the applicant.",
    error_type: "Invalid phone number entered.",
  },
  Input_corporationIntro_profile: {
    label: "company profile",
    placeholder:
      "Attached files must be in PDF, DOC, DOCX, PPT, PPTX,\nHWP, GUL, GIF, JPG, PNG, ZIP, TXT format/\n100MB or less",
    error_required: "Please select a company profile.",
    error_type: "Invalid company profile file entered.",
  },
  Input_corporation_domain: {
    label: "Homepage address",
    placeholder: "sample.com",
    error_required: "Please enter the website address.",
    error_type: "Invalid homepage address entered.",
  },

  //
  Fieldset_privacy_term_Legend:
    "Please consent\n<br/>to the collection and use of personal information<br/>.",
  Input_privacy_term: {
    label_check_all: "I agree to all items.",
    options: {
      check_agree:
        '<a style="border-bottom:1px solid black;" href="/marpple-partners/apply/privacy-term">I agree to the collection and use of personal information</a>.<span data-icon="required" />',
    } as const,
    error:
      "Please agree to the collection and use of personal information for application",
  },
  privacy_term_Section_sec1_detail_summary: "View Details",
  privacy_term_Section_sec1_H:
    "Marple Corporation collects the following personal information from companies and individuals wishing to partner\n.",
  privacy_term_Section_sec1_list: [
    "Collected personal information items: [Required] Company name, proposer name,\nE-mail address, phone number / [Optional] Website address,\nFax number",
    "Purpose of collection and use of personal information: Confirmation of identity and securing smooth communication path according to affiliate application",
    "Period of retention and use of personal information: End of partnership offer\nIt is destroyed after being stored for 1 month from the time of processing.",
    "Addition of information on the right to refuse consent: You can refuse to consent to the collection of personal information as above. However, if you\nreject the consent, your application for partnership proposal<br/> may be restricted\n",
  ],
  privacy_term_Section_sec1_p:
    "Other matters are subject to each company's personal information processing policy\n.",
  privacy_term_Button_dialog_close: "OK",

  //
  Fieldset_apply_notice_Legend:
    "Read the instructions\n<br/>If you agree<br/> your application is complete!",
  Input_apply_notice: {
    label_check_all: "I agree to all items.",
    options: {
      check_agree: 'I checked the precautions.<span data-icon="required" />',
    } as const,
    error: "Please agree to the terms and conditions to apply",
  },
  apply_notice_Section_sec1_detail_summary: "View Details",
  apply_notice_Section_sec1_H:
    "Marple Corporation will review the information you sent\nand will contact you once the project process is decided\nso that we can proceed together\n<br/>",
  apply_notice_Section_sec1_list: [
    "The proposer's affiliation and proposal contents are already\nsimilar or identical to the business that is in progress\nwith Marple Corporation, <br/> or the proposal was first received from a third party\n, or at the time of review It can be rejected\nfor various reasons, such as\nnot matching the business direction or partnership conditions\n.",
    "Therefore, taking this into consideration, we ask that you only provide\n information that can be disclosed to us, and understand that we do not bear any obligations\nsuch as compensation or reply to the proposer<br/> for the refusal of the partnership proposal\n Please.",
    "In the partnership proposal, please write excluding trade secrets or confidential information of the proposer,\nbusiness ideas that you think need protection<br/>.",
    "However, only the proposal registration number is kept for 1 month as personal information\nso that the proposer can check the progress of the partnership proposal\nand<br/> used for statistics\n'affiliation desired site' and 'affiliation' Except for 'category',\nthe information will be destroyed immediately after the storage period has elapsed. Also,<br/>\nYou requested re-registration of the partnership proposal, but within 30 days\nif the proposer does not revise or supplement the contents and re-submit it nIf not, the affiliate<br/> offer will be terminated.",
    "In addition, in the case of a partnership\nrequest that requires the disclosure or sharing of various\nintellectual property rights such as patents, designs, and copyrights, you must complete the necessary measures to protect the rights\nof the proposer, such as an application, etc. \nPlease make a partnership proposal request. The registered\n<br/>affiliation proposal and related data will be used only for the purpose of affiliation review\nand will be destroyed immediately if the affiliation proposal is not accepted\n.",
  ],
  apply_notice_Button_dialog_close: "OK",
  //
  Form_Button_ok: "Complete Application",
  Form_Button_cancel: "Cancel",
};
