import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { FacilityTemplate } from '@/types';

export const useFacilityTemplates = () => {
  const [templates, setTemplates] = useState<FacilityTemplate[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTemplates = async () => {
    try {
      const { data, error } = await supabase
        .from('facility_templates')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      if (data) {
        const mappedTemplates = data.map(item => ({
          id: item.id,
          name: item.name,
          facilityName: item.facility_name,
          facilityLicenseNumber: item.facility_license_number,
          facilityAddress: item.facility_address,
          facilityPhoneNumber: item.facility_phone_number,
          administratorName: item.administrator_name,
          communityCareLicensingNumber: item.community_care_licensing_number,
          ombudsmanNumber: item.ombudsman_number,
          licenseeName: item.licensee_name,
          licenseeAddress: item.licensee_address,
          dssPhoneNumber: item.dss_phone_number,
          monthlyRate: item.monthly_rate,
          weeklyProratedRate: item.weekly_prorated_rate,
          weeklyProratedFee: item.weekly_prorated_fee,
          dailyRespiteRate: item.daily_respite_rate,
          createdAt: item.created_at,
          updatedAt: item.updated_at,
        }));
        setTemplates(mappedTemplates);
      }
    } catch (error) {
      console.error('Error fetching templates:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTemplates();
  }, []);

  return { templates, loading, refetch: fetchTemplates };
};