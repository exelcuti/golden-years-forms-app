
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FacilityInfo } from "@/types";
import { useNavigate } from "react-router-dom";

interface FacilityInfoCardProps {
  facilityInfo: FacilityInfo;
  templates: any[];
  updateFacilityInfo: (info: FacilityInfo) => void;
}

const FacilityInfoCard = ({ facilityInfo, templates, updateFacilityInfo }: FacilityInfoCardProps) => {
  const navigate = useNavigate();
  
  return (
    <Card className="hover:bg-muted/50 transition-colors">
      <CardHeader>
        <CardTitle>Facility Information</CardTitle>
        <CardDescription>Key details about your facility</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-xl font-bold mb-2">Facility Name</h3>
          <Select
            value={templates.find(t => t.facilityName === facilityInfo.facilityName)?.id || ""}
            onValueChange={(value) => {
              const selectedTemplate = templates.find(t => t.id === value);
              if (selectedTemplate) {
                updateFacilityInfo({
                  facilityName: selectedTemplate.facilityName,
                  facilityLicenseNumber: selectedTemplate.facilityLicenseNumber,
                  facilityAddress: selectedTemplate.facilityAddress,
                  monthlyRate: selectedTemplate.monthlyRate,
                  dailyRespiteRate: selectedTemplate.dailyRespiteRate,
                  weeklyProratedRate: selectedTemplate.weeklyProratedRate,
                  weeklyProratedFee: selectedTemplate.weeklyProratedFee,
                  communityCareLicensingNumber: selectedTemplate.communityCareLicensingNumber,
                  ombudsmanNumber: selectedTemplate.ombudsmanNumber,
                  licenseeName: selectedTemplate.licenseeName,
                  licenseeAddress: selectedTemplate.licenseeAddress,
                  dssPhoneNumber: selectedTemplate.dssPhoneNumber || "",
                  administratorName: selectedTemplate.administratorName || "",
                  facilityPhoneNumber: selectedTemplate.facilityPhoneNumber || "",
                });
              }
            }}
          >
            <SelectTrigger className="w-full text-xl">
              <SelectValue placeholder={facilityInfo.facilityName || "Select a facility"} />
            </SelectTrigger>
            <SelectContent>
              {templates.map((template) => (
                <SelectItem key={template.id} value={template.id} className="text-lg">
                  {template.facilityName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <h3 className="text-sm font-medium">License Number</h3>
          <p className="text-sm text-muted-foreground">{facilityInfo.facilityLicenseNumber || "Not set"}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium">Facility Address</h3>
          <p className="text-sm text-muted-foreground">{facilityInfo.facilityAddress || "Not set"}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium">Licensee</h3>
          <p className="text-sm text-muted-foreground">{facilityInfo.licenseeName || "Not set"}</p>
        </div>
        <div className="pt-2">
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => navigate("/admin/settings")}
          >
            Manage All Settings
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FacilityInfoCard;
