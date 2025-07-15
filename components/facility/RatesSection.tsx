
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FormSection from "@/components/FormSection";

interface RatesSectionProps {
  monthlyRate: number;
  dailyRespiteRate: number;
  weeklyProratedFee: number;
  onNumberChange: (field: string, value: string) => void;
}

const RatesSection = ({
  monthlyRate,
  dailyRespiteRate,
  weeklyProratedFee,
  onNumberChange,
}: RatesSectionProps) => {
  return (
    <FormSection title="Rates & Fees">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="monthlyRate">Monthly Rate ($)</Label>
          <Input
            id="monthlyRate"
            type="number"
            step="0.01"
            value={monthlyRate}
            onChange={(e) => onNumberChange("monthlyRate", e.target.value)}
            placeholder="0.00"
            required
          />
        </div>
        <div>
          <Label htmlFor="dailyRespiteRate">Daily Respite Rate ($)</Label>
          <Input
            id="dailyRespiteRate"
            type="number"
            step="0.01"
            value={dailyRespiteRate}
            onChange={(e) => onNumberChange("dailyRespiteRate", e.target.value)}
            placeholder="0.00"
            required
          />
        </div>
        <div>
          <Label htmlFor="weeklyProratedFee">Weekly Prorated Fee ($)</Label>
          <Input
            id="weeklyProratedFee"
            type="number"
            step="0.01"
            value={weeklyProratedFee}
            onChange={(e) => onNumberChange("weeklyProratedFee", e.target.value)}
            placeholder="0.00"
            required
          />
        </div>
      </div>
    </FormSection>
  );
};

export default RatesSection;
