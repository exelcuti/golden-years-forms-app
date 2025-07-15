
import React from "react";

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
  description?: string;
}

const FormSection = ({ title, children, description }: FormSectionProps) => {
  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow-sm border">
      <h2 className="text-lg font-medium mb-3 text-healthcare-600 border-b pb-2">{title}</h2>
      {description && <p className="text-sm text-muted-foreground mb-3">{description}</p>}
      <div className="space-y-4">{children}</div>
    </div>
  );
};

export default FormSection;
