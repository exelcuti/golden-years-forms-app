
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface ContractFormSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const ContractFormSection: React.FC<ContractFormSectionProps> = ({ 
  title, 
  children,
  className = ""
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {title && <h3 className="text-lg font-medium">{title}</h3>}
      {children}
    </div>
  );
};

interface FormFieldProps {
  label: string;
  id: string;
  name: string;
  value: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  readOnly?: boolean;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  name,
  value,
  onChange,
  placeholder = "",
  type = "text",
  readOnly = false,
  className = ""
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange || (() => {})}
        placeholder={placeholder}
        readOnly={readOnly}
        className={readOnly ? "bg-gray-50" : ""}
      />
    </div>
  );
};
