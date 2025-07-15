
export interface FacilityInfo {
  facilityName: string;
  facilityLicenseNumber: string;
  facilityAddress: string;
  monthlyRate: number;
  dailyRespiteRate: number;
  weeklyProratedFee: number;
  communityCareLicensingNumber: string;
  ombudsmanNumber: string;
  licenseeName: string;
  licenseeAddress: string;
  dssPhoneNumber?: string;
  administratorName?: string;
  facilityPhoneNumber?: string;
}

export interface FacilityTemplate extends FacilityInfo {
  id?: string;
  name: string;
}

export interface ResponsiblePerson {
  name: string;
  relationship?: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
}

export interface NotifyPerson {
  name: string;
  relationship?: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
}

export interface ResidentForm {
  id?: string;
  residentName: string;
  birthDate: string;
  age: number;
  sex: string;
  pronoun?: string;
  address?: string;
  targetDateOfAdmission?: string;
  healthInsurance?: string;
  responsiblePerson: ResponsiblePerson;
  notifyPersons: {
    personA?: NotifyPerson;
    personB?: NotifyPerson;
    personC?: NotifyPerson;
  };
  assignedFacilityId?: string;
  submittedAt?: string;
  updatedAt?: string;
}

export interface DeathReport {
  id?: string;
  residentName: string;
  residentDateOfBirth: string;
  sex?: string;
  dateOfAdmission?: string;
  facilityFileNumber?: string;
  dateAndTimeOfDeath: string;
  placeOfDeath: string;
  causeOfDeath: string;
  attendingDoctorName?: string;
  conditionsPriorToDeath?: string;
  immediateActionTaken?: string;
  conservator?: string;
  conservatorName?: string;
  mortuary?: string;
  licensing?: string;
  reportSubmittedBy: string;
  reportReviewedApprovedBy?: string;
  submittedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}
