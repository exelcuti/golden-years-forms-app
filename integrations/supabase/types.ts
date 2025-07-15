export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      admin_shared_files: {
        Row: {
          description: string | null
          file_name: string
          file_size: number | null
          file_type: string | null
          file_url: string
          id: string
          upload_date: string
          uploaded_by: string
        }
        Insert: {
          description?: string | null
          file_name: string
          file_size?: number | null
          file_type?: string | null
          file_url: string
          id?: string
          upload_date?: string
          uploaded_by: string
        }
        Update: {
          description?: string | null
          file_name?: string
          file_size?: number | null
          file_type?: string | null
          file_url?: string
          id?: string
          upload_date?: string
          uploaded_by?: string
        }
        Relationships: []
      }
      resident_forms: {
        Row: {
          address: string | null
          age: number
          assigned_facility_id: string | null
          birth_date: string
          health_insurance: Json | null
          id: string
          medication_list: Json | null
          notify_persons: Json | null
          other_information: Json | null
          pronoun: string | null
          resident_name: string
          responsible_person: Json
          sex: string
          submitted_at: string | null
          target_date_of_admission: string | null
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          age: number
          assigned_facility_id?: string | null
          birth_date: string
          health_insurance?: Json | null
          id?: string
          medication_list?: Json | null
          notify_persons?: Json | null
          other_information?: Json | null
          pronoun?: string | null
          resident_name: string
          responsible_person: Json
          sex: string
          submitted_at?: string | null
          target_date_of_admission?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          age?: number
          assigned_facility_id?: string | null
          birth_date?: string
          health_insurance?: Json | null
          id?: string
          medication_list?: Json | null
          notify_persons?: Json | null
          other_information?: Json | null
          pronoun?: string | null
          resident_name?: string
          responsible_person?: Json
          sex?: string
          submitted_at?: string | null
          target_date_of_admission?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}