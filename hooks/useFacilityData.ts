import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { FacilityInfo } from '@/types';

export const useFacilityData = () => {
  const [facilityInfo, setFacilityInfo] = useState<FacilityInfo | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchFacilityInfo = async () => {
    try {
      const { data, error } = await supabase
        .from('facility_info')
        .select('*')
        .limit(1)
        .maybeSingle();

      if (error) throw error;
      
      if (data) {
        setFacilityInfo({
          id: data.id,
          facilityName: data.facility_name,
          facilityLicenseNumber: data.facility_license_number,
          facilityAddress: data.facility_address,
          facilityPhoneNumber: data.facility_phone_number,
          administratorName: data.administrator_name,
          communityCareLicensingNumber: data.community_care_licensing_number,
          ombudsmanNumber: data.ombudsman_number,
          licenseeName: data.licensee_name,
          licenseeAddress: data.licensee_address,
          dssPhoneNumber: data.dss_phone_number,
          monthlyRate: data.monthly_rate,
          weeklyProratedRate: data.weekly_prorated_rate,
          weeklyProratedFee: data.weekly_prorated_fee,
          dailyRespiteRate: data.daily_respite_rate,
          updatedAt: data.updated_at,
        });
      }
    } catch (error) {
      console.error('Error fetching facility info:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFacilityInfo();
  }, []);

  return { 
    facilityInfo, 
    setFacilityInfo,
    loading, 
    refetch: fetchFacilityInfo 
  };
};