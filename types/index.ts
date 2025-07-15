export interface ResponsiblePerson {
  name: string;
  relationship: string;
  address: string;
  phoneNumber: string;
  phone: string; // Legacy compatibility
  email?: string;
}

export interface NotifyPerson {
  name: string;
  relationship: string;
  phoneNumber: string;
  phone: string; // Legacy compatibility
  address?: string;
}

export interface ResidentForm {
  id: string;
  residentName: string;
  age: number;
  sex: string;
  birthDate: string;
  address?: string;
  pronoun?: string;
  responsiblePerson: ResponsiblePerson;
  notifyPersons?: NotifyPerson[];
  healthInsurance?: any;
  targetDateOfAdmission?: string;
  submittedAt?: string;
  updatedAt?: string;
  assignedFacilityId?: string;
  medicationList?: any;
  otherInformation?: any;
}

export interface FacilityInfo {
  id?: string;
  facilityName: string;
  facilityLicenseNumber: string;
  facilityAddress: string;
  facilityPhoneNumber?: string;
  administratorName?: string;
  communityCareLicensingNumber: string;
  ombudsmanNumber: string;
  licenseeName: string;
  licenseeAddress: string;
  dssPhoneNumber?: string;
  monthlyRate: number;
  weeklyProratedRate: number;
  weeklyProratedFee: number;
  dailyRespiteRate: number;
  updatedAt?: string;
}

export interface FacilityTemplate {
  id?: string;
  name: string;
  facilityName: string;
  facilityLicenseNumber: string;
  facilityAddress: string;
  facilityPhoneNumber?: string;
  administratorName?: string;
  communityCareLicensingNumber: string;
  ombudsmanNumber: string;
  licenseeName: string;
  licenseeAddress: string;
  dssPhoneNumber?: string;
  monthlyRate: number;
  weeklyProratedRate: number;
  weeklyProratedFee: number;
  dailyRespiteRate: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface DeathReport {
  id: string;
  residentName: string;
  residentDateOfBirth: string;
  sex?: string;
  dateAndTimeOfDeath: string;
  placeOfDeath: string;
  causeOfDeath: string;
  attendingDoctorName?: string;
  immediateActionTaken?: string;
  conditionsPriorToDeath?: string;
  conservator?: string;
  conservatorName?: string;
  mortuary?: string;
  licensing?: string;
  facilityFileNumber?: string;
  dateOfAdmission?: string;
  reportSubmittedBy: string;
  reportReviewedApprovedBy?: string;
  submittedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  email?: string;
  fullName?: string;
  avatarUrl?: string;
}

export interface Admin {
  id?: string;
  email?: string;
  fullName?: string;
  username: string;
  password: string;
}

export type NotifyPersons = NotifyPerson[];

export interface AdminSharedFile {
  id: string;
  fileName: string;
  fileUrl: string;
  fileType?: string;
  fileSize?: number;
  description?: string;
  uploadedBy: string;
  uploadDate: string;
}