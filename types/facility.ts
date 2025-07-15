export * from '@/types'

export interface FacilityContextValue {
  facilityInfo: any;
  setFacilityInfo: (info: any) => void;
  updateFacilityInfo: (info: any) => Promise<void>;
  saveFacilityTemplate: (template: any) => Promise<void>;
  getFacilityTemplates: () => Promise<any[]>;
  deleteFacilityTemplate: (id: string) => Promise<void>;
}