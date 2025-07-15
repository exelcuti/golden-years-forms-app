
import React, { createContext, useContext } from "react";
import { FacilityInfo, FacilityTemplate } from "@/types";
import { FacilityContextValue } from "@/types/facility";
import { useFacilityData } from "@/hooks/useFacilityData";
import { useFacilityTemplates } from "@/hooks/useFacilityTemplates";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const FacilityContext = createContext<FacilityContextValue | null>(null);

export const FacilityProvider = ({ children }: { children: React.ReactNode }) => {
  const { facilityInfo, setFacilityInfo } = useFacilityData();
  const { saveFacilityTemplate, getFacilityTemplates, deleteFacilityTemplate } = useFacilityTemplates();
  const { toast } = useToast();

  const updateFacilityInfo = async (info: FacilityInfo) => {
    try {
      const mappedInfo = {
        facility_name: info.facilityName,
        facility_license_number: info.facilityLicenseNumber,
        facility_address: info.facilityAddress,
        monthly_rate: info.monthlyRate,
        daily_respite_rate: info.dailyRespiteRate,
        weekly_prorated_fee: info.weeklyProratedFee,
        community_care_licensing_number: info.communityCareLicensingNumber,
        ombudsman_number: info.ombudsmanNumber,
        licensee_name: info.licenseeName,
        licensee_address: info.licenseeAddress,
        dss_phone_number: info.dssPhoneNumber,
        administrator_name: info.administratorName,
        facility_phone_number: info.facilityPhoneNumber,
        updated_at: new Date().toISOString(),
      };

      const { data: existingData } = await supabase
        .from("facility_info")
        .select("id")
        .limit(1);

      let error;

      if (existingData && existingData.length > 0) {
        const result = await supabase
          .from("facility_info")
          .update(mappedInfo)
          .eq("id", existingData[0].id);
        
        error = result.error;
      } else {
        const result = await supabase
          .from("facility_info")
          .insert(mappedInfo);
        
        error = result.error;
      }

      if (error) {
        throw error;
      }

      setFacilityInfo(info);

      toast({
        title: "Facility info updated",
        description: "Facility information has been updated successfully",
      });
    } catch (error) {
      console.error("Error updating facility info:", error);
      toast({
        title: "Error",
        description: "Failed to update facility information",
        variant: "destructive",
      });
    }
  };

  // Set up real-time subscription for facility info updates
  const facilityChannel = supabase
    .channel('public:facility_info')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'facility_info' },
      async () => {
        const { data } = await supabase
          .from("facility_info")
          .select("*")
          .limit(1)
          .single();

        if (data) {
          const updatedFacilityInfo = {
            facilityName: data.facility_name,
            facilityLicenseNumber: data.facility_license_number,
            facilityAddress: data.facility_address,
            monthlyRate: data.monthly_rate,
            dailyRespiteRate: data.daily_respite_rate,
            weeklyProratedFee: data.weekly_prorated_fee,
            communityCareLicensingNumber: data.community_care_licensing_number,
            ombudsmanNumber: data.ombudsman_number,
            licenseeName: data.licensee_name,
            licenseeAddress: data.licensee_address,
            dssPhoneNumber: data.dss_phone_number || "",
            administratorName: data.administrator_name || "",
            facilityPhoneNumber: data.facility_phone_number || "",
          };
          
          setFacilityInfo(updatedFacilityInfo);
          
          toast({
            title: "Facility Info Updated",
            description: "Facility information has been updated",
          });
        }
      }
    )
    .subscribe();

  return (
    <FacilityContext.Provider
      value={{
        facilityInfo,
        updateFacilityInfo,
        saveFacilityTemplate,
        getFacilityTemplates,
        deleteFacilityTemplate,
      }}
    >
      {children}
    </FacilityContext.Provider>
  );
};

export const useFacility = () => {
  const context = useContext(FacilityContext);
  if (!context) {
    throw new Error("useFacility must be used within a FacilityProvider");
  }
  return context;
};
