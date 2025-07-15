
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FacilityTemplate } from "@/types";

interface FacilityTemplateSelectorProps {
  templates: FacilityTemplate[];
  onLoadTemplate: (template: FacilityTemplate) => void;
  selectedTemplate?: FacilityTemplate;
}

const FacilityTemplateSelector = ({
  templates,
  onLoadTemplate,
  selectedTemplate,
}: FacilityTemplateSelectorProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Select 
        value={selectedTemplate?.id}
        onValueChange={(value) => {
          const selectedTemplate = templates.find(t => t.id === value);
          if (selectedTemplate) onLoadTemplate(selectedTemplate);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Load Template" />
        </SelectTrigger>
        <SelectContent>
          {templates.map((template) => (
            <SelectItem 
              key={template.id} 
              value={template.id || ""}
            >
              {template.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FacilityTemplateSelector;

