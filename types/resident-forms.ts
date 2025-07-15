export * from '@/types'

export interface ResidentFormsContextValue {
  residentForms: any[];
  setResidentForms: (forms: any[]) => void;
  saveResidentForm: (form: any) => Promise<void>;
  updateResidentForm: (form: any) => Promise<boolean>;
  deleteResidentForm: (id: string) => Promise<boolean>;
  updateAssignedFacility: (formId: string, facilityId: string | null) => Promise<boolean>;
}