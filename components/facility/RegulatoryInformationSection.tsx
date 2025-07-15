
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FormSection from "@/components/FormSection";

interface RegulatoryInformationSectionProps {
  communityCareLicensingNumber: string;
  ombudsmanNumber: string;
  licenseeName: string;
  licenseeAddress: string;
  dssPhoneNumber?: string;
  onInputChange: (field: string, value: string) => void;
}

const RegulatoryInformationSection = ({
  communityCareLicensingNumber,
  ombudsmanNumber,
  licenseeName,
  licenseeAddress,
  dssPhoneNumber,
  onInputChange,
}: RegulatoryInformationSectionProps) => {
  return (
    <FormSection title="Regulatory Information">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="communityCareLicensingNumber">Community Care Licensing Number</Label>
          <Input
            id="communityCareLicensingNumber"
            value={communityCareLicensingNumber}
            onChange={(e) => onInputChange("communityCareLicensingNumber", e.target.value)}
            placeholder="Licensing Number"
            required
          />
        </div>
        <div>
          <Label htmlFor="ombudsmanNumber">Ombudsman Number</Label>
          <Input
            id="ombudsmanNumber"
            value={ombudsmanNumber}
            onChange={(e) => onInputChange("ombudsmanNumber", e.target.value)}
            placeholder="Ombudsman Number"
            required
          />
        </div>
        <div>
          <Label htmlFor="licenseeName">Licensee Name</Label>
          <Input
            id="licenseeName"
            value={licenseeName}
            onChange={(e) => onInputChange("licenseeName", e.target.value)}
            placeholder="Licensee Name"
            required
          />
        </div>
        <div>
          <Label htmlFor="dssPhoneNumber">DSS Phone Number</Label>
          <Input
            id="dssPhoneNumber"
            value={dssPhoneNumber || ''}
            onChange={(e) => onInputChange("dssPhoneNumber", e.target.value)}
            placeholder="DSS Phone Number"
          />
        </div>
        <div className="md:col-span-2">
          <Label htmlFor="licenseeAddress">Licensee Address</Label>
          <Input
            id="licenseeAddress"
            value={licenseeAddress}
            onChange={(e) => onInputChange("licenseeAddress", e.target.value)}
            placeholder="Licensee Address"
            required
          />
        </div>
      </div>
    </FormSection>
  );
};

export default RegulatoryInformationSection;
