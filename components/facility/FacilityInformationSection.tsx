
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FormSection from "@/components/FormSection";

interface FacilityInformationSectionProps {
  facilityName: string;
  setFacilityName: (value: string) => void;
  facilityAddress: string;
  setFacilityAddress: (value: string) => void;
  facilityLicenseNumber: string;
  setFacilityLicenseNumber: (value: string) => void;
  facilityPhoneNumber: string;
  setFacilityPhoneNumber: (value: string) => void;
  communityCareNumber: string;
  setCommunityCareNumber: (value: string) => void;
  licenseeName: string;
  setLicenseeName: (value: string) => void;
  licenseeAddress: string;
  setLicenseeAddress: (value: string) => void;
  ombudsmanNumber: string;
  setOmbudsmanNumber: (value: string) => void;
  dssPhoneNumber: string;
  setDssPhoneNumber: (value: string) => void;
  administratorName: string;
  setAdministratorName: (value: string) => void;
}

const FacilityInformationSection: React.FC<FacilityInformationSectionProps> = ({
  facilityName,
  setFacilityName,
  facilityAddress,
  setFacilityAddress,
  facilityLicenseNumber,
  setFacilityLicenseNumber,
  facilityPhoneNumber,
  setFacilityPhoneNumber,
  communityCareNumber,
  setCommunityCareNumber,
  licenseeName,
  setLicenseeName,
  licenseeAddress,
  setLicenseeAddress,
  ombudsmanNumber,
  setOmbudsmanNumber,
  dssPhoneNumber,
  setDssPhoneNumber,
  administratorName,
  setAdministratorName,
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
            onChange={(e) => setFacilityName(e.target.value)}
            placeholder="Enter facility name"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="facilityPhoneNumber">Facility Phone Number</Label>
          <Input
            id="facilityPhoneNumber"
            value={facilityPhoneNumber}
            onChange={(e) => setFacilityPhoneNumber(e.target.value)}
            placeholder="(XXX) XXX-XXXX"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="facilityAddress">Facility Address *</Label>
          <Input
            id="facilityAddress"
            value={facilityAddress}
            onChange={(e) => setFacilityAddress(e.target.value)}
            placeholder="Enter complete facility address"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="facilityLicenseNumber">Facility License Number *</Label>
          <Input
            id="facilityLicenseNumber"
            value={facilityLicenseNumber}
            onChange={(e) => setFacilityLicenseNumber(e.target.value)}
            placeholder="Enter license number"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="communityCareNumber">Community Care Licensing Number *</Label>
          <Input
            id="communityCareNumber"
            value={communityCareNumber}
            onChange={(e) => setCommunityCareNumber(e.target.value)}
            placeholder="Enter licensing number"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="licenseeName">Licensee Name *</Label>
          <Input
            id="licenseeName"
            value={licenseeName}
            onChange={(e) => setLicenseeName(e.target.value)}
            placeholder="Enter licensee name"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="licenseeAddress">Licensee Address *</Label>
          <Input
            id="licenseeAddress"
            value={licenseeAddress}
            onChange={(e) => setLicenseeAddress(e.target.value)}
            placeholder="Enter licensee address"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="ombudsmanNumber">Ombudsman Number *</Label>
          <Input
            id="ombudsmanNumber"
            value={ombudsmanNumber}
            onChange={(e) => setOmbudsmanNumber(e.target.value)}
            placeholder="Enter ombudsman phone number"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="dssPhoneNumber">DSS Phone Number</Label>
          <Input
            id="dssPhoneNumber"
            value={dssPhoneNumber}
            onChange={(e) => setDssPhoneNumber(e.target.value)}
            placeholder="Enter DSS phone number"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="administratorName">Administrator Name</Label>
          <Input
            id="administratorName"
            value={administratorName}
            onChange={(e) => setAdministratorName(e.target.value)}
            placeholder="Enter administrator name"
          />
        </div>
      </div>
    </FormSection>
  );
};

export default FacilityInformationSection;
