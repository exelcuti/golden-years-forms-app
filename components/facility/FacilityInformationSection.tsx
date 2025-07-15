
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FormSection from "@/components/FormSection";

interface FacilityInformationSectionProps {
  facilityName: string;
  facilityLicenseNumber: string;
  facilityAddress: string;
  administratorName?: string;
  facilityPhoneNumber?: string;
  onInputChange: (field: string, value: string) => void;
}

const FacilityInformationSection: React.FC<FacilityInformationSectionProps> = ({
  facilityName,
  facilityLicenseNumber,
  facilityAddress,
  administratorName,
  facilityPhoneNumber,
  onInputChange,
}) => {
  return (
    <FormSection
      title="Facility Information"
      description="Basic facility details and contact information"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="facilityName">Facility Name *</Label>
          <Input
            id="facilityName"
            value={facilityName}
            onChange={(e) => onInputChange('facilityName', e.target.value)}
            placeholder="Enter facility name"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="facilityPhoneNumber">Facility Phone Number</Label>
          <Input
            id="facilityPhoneNumber"
            value={facilityPhoneNumber || ''}
            onChange={(e) => onInputChange('facilityPhoneNumber', e.target.value)}
            placeholder="(XXX) XXX-XXXX"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="facilityAddress">Facility Address *</Label>
          <Input
            id="facilityAddress"
            value={facilityAddress}
            onChange={(e) => onInputChange('facilityAddress', e.target.value)}
            placeholder="Enter complete facility address"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="facilityLicenseNumber">Facility License Number *</Label>
          <Input
            id="facilityLicenseNumber"
            value={facilityLicenseNumber}
            onChange={(e) => onInputChange('facilityLicenseNumber', e.target.value)}
            placeholder="Enter license number"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="administratorName">Administrator Name</Label>
          <Input
            id="administratorName"
            value={administratorName || ''}
            onChange={(e) => onInputChange('administratorName', e.target.value)}
            placeholder="Enter administrator name"
          />
        </div>
      </div>
    </FormSection>
  );
};

export default FacilityInformationSection;
