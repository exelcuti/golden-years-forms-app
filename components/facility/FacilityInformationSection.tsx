
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import FormSection from "../FormSection";

interface FacilityInformationSectionProps {
  facilityName: string;
  facilityLicenseNumber: string;
  facilityAddress: string;
  administratorName?: string;
  facilityPhoneNumber?: string;
  onInputChange: (field: string, value: string) => void;
}

const FacilityInformationSection = ({
  facilityName,
  facilityLicenseNumber,
  facilityAddress,
  administratorName,
  facilityPhoneNumber,
  onInputChange,
}: FacilityInformationSectionProps) => {
  return (
    <FormSection title="Facility Information">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="facilityName">Facility Name</Label>
          <Input
            id="facilityName"
            value={facilityName}
            onChange={(e) => onInputChange("facilityName", e.target.value)}
            placeholder="Facility Name"
            required
          />
        </div>
        <div>
          <Label htmlFor="facilityLicenseNumber">Facility License Number</Label>
          <Input
            id="facilityLicenseNumber"
            value={facilityLicenseNumber}
            onChange={(e) => onInputChange("facilityLicenseNumber", e.target.value)}
            placeholder="License Number"
            required
          />
        </div>
        <div>
          <Label htmlFor="administratorName">Administrator Name / Facility Representative</Label>
          <Input
            id="administratorName"
            value={administratorName || ''}
            onChange={(e) => onInputChange("administratorName", e.target.value)}
            placeholder="Administrator Name"
          />
        </div>
        <div>
          <Label htmlFor="facilityPhoneNumber">Facility Phone Number</Label>
          <Input
            id="facilityPhoneNumber"
            value={facilityPhoneNumber || ''}
            onChange={(e) => onInputChange("facilityPhoneNumber", e.target.value)}
            placeholder="Facility Phone Number"
          />
        </div>
        <div className="md:col-span-2">
          <Label htmlFor="facilityAddress">Facility Address</Label>
          <Input
            id="facilityAddress"
            value={facilityAddress}
            onChange={(e) => onInputChange("facilityAddress", e.target.value)}
            placeholder="Full Address"
            required
          />
        </div>
      </div>
    </FormSection>
  );
};

export default FacilityInformationSection;
