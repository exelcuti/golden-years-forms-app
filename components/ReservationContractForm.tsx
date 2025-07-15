
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { downloadDoc } from "@/lib/document-utils";
import { ResidentForm, FacilityInfo } from "@/types";
import ContractFormHeader from "./reservation/ContractFormHeader";
import ContractFormFooter from "./reservation/ContractFormFooter";
import { ContractFormSection, FormField } from "./reservation/ContractFormSection";

interface ReservationContractFormProps {
  residentForm: ResidentForm;
  facilityInfo: FacilityInfo;
}

const ReservationContractForm: React.FC<ReservationContractFormProps> = ({
  residentForm: initialResidentForm,
  facilityInfo: initialFacilityInfo,
}) => {
  const [formData, setFormData] = useState({
    residentName: initialResidentForm.residentName || "",
    targetDateOfAdmission: initialResidentForm.targetDateOfAdmission || "",
    facilityName: initialFacilityInfo?.facilityName || "",
    facilityAddress: initialFacilityInfo?.facilityAddress || "",
    downPayment: initialFacilityInfo?.weeklyProratedFee || 0,
    assessmentFee: initialFacilityInfo?.weeklyProratedFee ? (initialFacilityInfo.weeklyProratedFee * 0.25) : 0,
    monthlyRate: initialFacilityInfo?.monthlyRate || 0,
    remainingBalance: initialFacilityInfo?.monthlyRate ? (initialFacilityInfo.monthlyRate - (initialFacilityInfo.weeklyProratedFee || 0)) : 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Update dependent fields
    if (name === "downPayment" || name === "monthlyRate") {
      const downPayment = name === "downPayment" ? parseFloat(value) || 0 : formData.downPayment;
      const monthlyRate = name === "monthlyRate" ? parseFloat(value) || 0 : formData.monthlyRate;
      
      setFormData((prev) => ({
        ...prev,
        assessmentFee: downPayment * 0.25,
        remainingBalance: monthlyRate - downPayment,
      }));
    }
  };

  const handleDownload = () => {
    // Create a modified version of the resident form with our updated values
    const modifiedForm = {
      ...initialResidentForm,
      residentName: formData.residentName,
      targetDateOfAdmission: formData.targetDateOfAdmission,
    };

    // Create a modified version of the facility info with our updated values
    const modifiedFacilityInfo = {
      ...initialFacilityInfo,
      facilityName: formData.facilityName,
      facilityAddress: formData.facilityAddress,
      weeklyProratedFee: parseFloat(formData.downPayment.toString()),
      monthlyRate: parseFloat(formData.monthlyRate.toString()),
    };

    downloadDoc(
      modifiedForm,
      `${formData.residentName.replace(/\s+/g, "_")}_reservation_contract.pdf`,
      modifiedFacilityInfo,
      true
    );
  };

  return (
    <Card className="mb-6">
      <ContractFormHeader 
        onDownload={handleDownload}
        residentId={initialResidentForm.id || ""}
      />
      
      <CardContent>
        <div className="space-y-4">
          <ContractFormSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                label="Resident's Name"
                id="residentName"
                name="residentName"
                value={formData.residentName}
                onChange={handleChange}
                placeholder="Resident's full name"
              />

              <FormField
                label="Target Date of Admission"
                id="targetDateOfAdmission"
                name="targetDateOfAdmission"
                value={formData.targetDateOfAdmission}
                onChange={handleChange}
                placeholder="MM/DD/YYYY"
              />
            </div>
          </ContractFormSection>

          <ContractFormSection>
            <FormField
              label="Facility's Name"
              id="facilityName"
              name="facilityName"
              value={formData.facilityName}
              onChange={handleChange}
              placeholder="Facility name"
            />

            <FormField
              label="Facility's Address"
              id="facilityAddress"
              name="facilityAddress"
              value={formData.facilityAddress}
              onChange={handleChange}
              placeholder="Complete facility address"
            />
          </ContractFormSection>

          <ContractFormSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                label="Down Payment Amount"
                id="downPayment"
                name="downPayment"
                type="number"
                value={formData.downPayment}
                onChange={handleChange}
                placeholder="0.00"
              />

              <FormField
                label="Monthly Rate"
                id="monthlyRate"
                name="monthlyRate"
                type="number"
                value={formData.monthlyRate}
                onChange={handleChange}
                placeholder="0.00"
              />
            </div>
          </ContractFormSection>

          <ContractFormSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                label="Assessment Fee (25% of down payment)"
                id="assessmentFee"
                name="assessmentFee"
                type="number"
                value={formData.assessmentFee}
                readOnly={true}
              />

              <FormField
                label="Remaining Balance"
                id="remainingBalance"
                name="remainingBalance"
                type="number"
                value={formData.remainingBalance}
                readOnly={true}
              />
            </div>
          </ContractFormSection>

          <ContractFormFooter />
        </div>
      </CardContent>
    </Card>
  );
};

export default ReservationContractForm;
