export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
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
      archived_resident_forms: {
        Row: {
          address: string | null
          age: number
          archived_at: string | null
          archived_by: string | null
          birth_date: string
          health_insurance: string | null
          id: string
          notify_persons: Json | null
          original_id: string | null
          pronoun: string | null
          reason: string | null
          resident_name: string
          responsible_person: Json
          sex: string
          submitted_at: string | null
          target_date_of_admission: string | null
        }
        Insert: {
          address?: string | null
          age: number
          archived_at?: string | null
          archived_by?: string | null
          birth_date: string
          health_insurance?: string | null
          id?: string
          notify_persons?: Json | null
          original_id?: string | null
          pronoun?: string | null
          reason?: string | null
          resident_name: string
          responsible_person: Json
          sex: string
          submitted_at?: string | null
          target_date_of_admission?: string | null
        }
        Update: {
          address?: string | null
          age?: number
          archived_at?: string | null
          archived_by?: string | null
          birth_date?: string
          health_insurance?: string | null
          id?: string
          notify_persons?: Json | null
          original_id?: string | null
          pronoun?: string | null
          reason?: string | null
          resident_name?: string
          responsible_person?: Json
          sex?: string
          submitted_at?: string | null
          target_date_of_admission?: string | null
        }
        Relationships: []
      }
      death_reports: {
        Row: {
          attending_doctor_name: string | null
          cause_of_death: string
          conditions_prior_to_death: string | null
          conservator: string | null
          conservator_name: string | null
          created_at: string
          date_and_time_of_death: string
          date_of_admission: string | null
          facility_file_number: string | null
          id: string
          immediate_action_taken: string | null
          licensing: string | null
          mortuary: string | null
          place_of_death: string
          report_reviewed_approved_by: string | null
          report_submitted_by: string
          resident_date_of_birth: string
          resident_name: string
          sex: string | null
          submitted_at: string
          updated_at: string
        }
        Insert: {
          attending_doctor_name?: string | null
          cause_of_death: string
          conditions_prior_to_death?: string | null
          conservator?: string | null
          conservator_name?: string | null
          created_at?: string
          date_and_time_of_death: string
          date_of_admission?: string | null
          facility_file_number?: string | null
          id?: string
          immediate_action_taken?: string | null
          licensing?: string | null
          mortuary?: string | null
          place_of_death: string
          report_reviewed_approved_by?: string | null
          report_submitted_by: string
          resident_date_of_birth: string
          resident_name: string
          sex?: string | null
          submitted_at?: string
          updated_at?: string
        }
        Update: {
          attending_doctor_name?: string | null
          cause_of_death?: string
          conditions_prior_to_death?: string | null
          conservator?: string | null
          conservator_name?: string | null
          created_at?: string
          date_and_time_of_death?: string
          date_of_admission?: string | null
          facility_file_number?: string | null
          id?: string
          immediate_action_taken?: string | null
          licensing?: string | null
          mortuary?: string | null
          place_of_death?: string
          report_reviewed_approved_by?: string | null
          report_submitted_by?: string
          resident_date_of_birth?: string
          resident_name?: string
          sex?: string | null
          submitted_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      facility_info: {
        Row: {
          administrator_name: string | null
          community_care_licensing_number: string
          daily_respite_rate: number
          dss_phone_number: string | null
          facility_address: string
          facility_license_number: string
          facility_name: string
          facility_phone_number: string | null
          id: string
          licensee_address: string
          licensee_name: string
          monthly_rate: number
          ombudsman_number: string
          updated_at: string | null
          weekly_prorated_fee: number
          weekly_prorated_rate: number
        }
        Insert: {
          administrator_name?: string | null
          community_care_licensing_number: string
          daily_respite_rate?: number
          dss_phone_number?: string | null
          facility_address: string
          facility_license_number: string
          facility_name: string
          facility_phone_number?: string | null
          id?: string
          licensee_address: string
          licensee_name: string
          monthly_rate?: number
          ombudsman_number: string
          updated_at?: string | null
          weekly_prorated_fee?: number
          weekly_prorated_rate?: number
        }
        Update: {
          administrator_name?: string | null
          community_care_licensing_number?: string
          daily_respite_rate?: number
          dss_phone_number?: string | null
          facility_address?: string
          facility_license_number?: string
          facility_name?: string
          facility_phone_number?: string | null
          id?: string
          licensee_address?: string
          licensee_name?: string
          monthly_rate?: number
          ombudsman_number?: string
          updated_at?: string | null
          weekly_prorated_fee?: number
          weekly_prorated_rate?: number
        }
        Relationships: []
      }
      facility_templates: {
        Row: {
          administrator_name: string | null
          community_care_licensing_number: string
          created_at: string | null
          daily_respite_rate: number
          dss_phone_number: string | null
          facility_address: string
          facility_license_number: string
          facility_name: string
          facility_phone_number: string | null
          id: string
          licensee_address: string
          licensee_name: string
          monthly_rate: number
          name: string
          ombudsman_number: string
          updated_at: string | null
          weekly_prorated_fee: number
          weekly_prorated_rate: number
        }
        Insert: {
          administrator_name?: string | null
          community_care_licensing_number: string
          created_at?: string | null
          daily_respite_rate?: number
          dss_phone_number?: string | null
          facility_address: string
          facility_license_number: string
          facility_name: string
          facility_phone_number?: string | null
          id?: string
          licensee_address: string
          licensee_name: string
          monthly_rate?: number
          name: string
          ombudsman_number: string
          updated_at?: string | null
          weekly_prorated_fee?: number
          weekly_prorated_rate?: number
        }
        Update: {
          administrator_name?: string | null
          community_care_licensing_number?: string
          created_at?: string | null
          daily_respite_rate?: number
          dss_phone_number?: string | null
          facility_address?: string
          facility_license_number?: string
          facility_name?: string
          facility_phone_number?: string | null
          id?: string
          licensee_address?: string
          licensee_name?: string
          monthly_rate?: number
          name?: string
          ombudsman_number?: string
          updated_at?: string | null
          weekly_prorated_fee?: number
          weekly_prorated_rate?: number
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          full_name: string | null
          id: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          updated_at?: string
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

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
