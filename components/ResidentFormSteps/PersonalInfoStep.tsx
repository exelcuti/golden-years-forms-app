
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ResidentForm } from "@/types";
import FormSection from "../FormSection";
import { Textarea } from "@/components/ui/textarea";

interface PersonalInfoStepProps {
  form: ResidentForm;
  updateForm: (updates: Partial<ResidentForm>) => void;
}

const PersonalInfoStep = ({ form, updateForm }: PersonalInfoStepProps) => {
  return (
    <FormSection title="Personal Information">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="residentName">Resident Full Name *</Label>
          <Input
            id="residentName"
            value={form.residentName}
            onChange={(e) => updateForm({ residentName: e.target.value })}
            placeholder="Full Name"
            required
          />
        </div>

        <div>
          <Label htmlFor="birthDate">Birth Date *</Label>
          <Input
            id="birthDate"
            type="date"
            value={form.birthDate}
            onChange={(e) => {
              const birthDate = e.target.value;
              if (birthDate) {
                const today = new Date();
                const birthDateObj = new Date(birthDate);
                let age = today.getFullYear() - birthDateObj.getFullYear();
                const monthDiff = today.getMonth() - birthDateObj.getMonth();
                
                if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
                  age--;
                }
                
                updateForm({ birthDate, age });
              } else {
                updateForm({ birthDate });
              }
            }}
            required
          />
        </div>

        <div>
          <Label htmlFor="age">Age</Label>
          <Input
            id="age"
            type="number"
            value={form.age || ""}
            onChange={(e) => updateForm({ age: parseInt(e.target.value) || 0 })}
            readOnly
          />
        </div>

        <div>
          <Label htmlFor="sex">Sex *</Label>
          <Select 
            value={form.sex} 
            onValueChange={(value) => updateForm({ sex: value })}
          >
            <SelectTrigger id="sex">
              <SelectValue placeholder="Select Sex" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
              <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="pronoun">Resident Pronoun</Label>
          <Select
            value={form.pronoun || ""}
            onValueChange={(value) => updateForm({ pronoun: value })}
          >
            <SelectTrigger id="pronoun">
              <SelectValue placeholder="Select Pronoun" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="he/him">He/Him</SelectItem>
              <SelectItem value="she/her">She/Her</SelectItem>
              <SelectItem value="they/them">They/Them</SelectItem>
              <SelectItem value="other">Other</SelectItem>
              <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="address">Resident Address</Label>
          <Textarea
            id="address"
            value={form.address || ""}
            onChange={(e) => updateForm({ address: e.target.value })}
            placeholder="Street address, City, State, ZIP"
            className="min-h-[80px]"
          />
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="targetDateOfAdmission">Target Date of Admission (Optional)</Label>
          <Input
            id="targetDateOfAdmission"
            type="date"
            value={form.targetDateOfAdmission || ""}
            onChange={(e) => updateForm({ targetDateOfAdmission: e.target.value })}
          />
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="healthInsurance">Health Insurance Information (Optional)</Label>
          <Input
            id="healthInsurance"
            value={form.healthInsurance || ""}
            onChange={(e) => updateForm({ healthInsurance: e.target.value })}
            placeholder="Insurance Provider, Policy Number, etc."
          />
        </div>
      </div>
    </FormSection>
  );
};

export default PersonalInfoStep;
