export interface Partner {
  accepted_pending_terms: boolean;
  accepted_terms: boolean;
  birth_date: string;
  confirmation_code: string;
  cpf_cnpj: string;
  created_at: string;
  email: string;
  id: number;
  name: string;
  new_password_code: string;
  paid_register: boolean;
  partner_address: PartnerAddress;
  partner_bank_information: PartnerBankInformation;
  period_availabilities: PeriodAvailability[];
  personal_document: PersonalDocument;
  phone: string;
  privacy_policy_id: number;
  rating: number;
  services: Service[];
  status: string;
  terms_of_use_id: number;
  updated_at: string;
  user_type: string;
}

export interface PartnerAddress {
  city: string;
  complement: string;
  created_at: string;
  district: string;
  id: number;
  partner_id: number;
  state: string;
  street: string;
  street_number: number;
  updated_at: string;
  zip_code: string;
}

export interface PartnerBankInformation {
  account_number: string;
  account_type: string;
  agency: string;
  bank: string;
  created_at: string;
  id: number;
  partner_id: number;
  updated_at: string;
}

export interface PeriodAvailability {
  created_at: string;
  id: number;
  partner_id: number;
  period: string;
  updated_at: string;
  weekday: string;
}

export interface PersonalDocument {
  bank_card_front: BankCardFront;
  client_id: any;
  created_at: string;
  document_front: DocumentFront;
  document_verse: DocumentVerse;
  id: number;
  partner_id: number;
  profile_photo: ProfilePhoto;
  proof_residence: ProofResidence;
  updated_at: string;
}

export interface BankCardFront {
  url: string;
}

export interface DocumentFront {
  url: string;
}

export interface DocumentVerse {
  url: string;
}

export interface ProfilePhoto {
  url: string;
}

export interface ProofResidence {
  url: string;
}

export interface Service {
  billing_type: string;
  created_at: string;
  deleted_at: any;
  description: string;
  id: number;
  lowest_value: number;
  status: string;
  title: string;
  updated_at: string;
}
