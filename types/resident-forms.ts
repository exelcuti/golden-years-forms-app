export * from '@/types'

export interface ResidentFormsContextValue {
  forms: any[];
  loading: boolean;
  refetch: () => Promise<void>;
}