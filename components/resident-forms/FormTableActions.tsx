
import React from "react";
import { Button } from "@/components/ui/button";
import { FileText, FileEdit } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DeleteResidentFormDialog } from "./DeleteResidentFormDialog";

interface FormTableActionsProps {
  formId: string;
  residentName: string;
  onDelete: (id: string) => void;
}

export const FormTableActions = ({ formId, residentName, onDelete }: FormTableActionsProps) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      console.log("FormTableActions: Initiating delete for form ID:", formId);
      await onDelete(formId);
      console.log("FormTableActions: Delete completed for form ID:", formId);
    } catch (error) {
      console.error("Error in FormTableActions delete:", error);
    }
  };

  return (
    <div className="flex justify-end space-x-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => navigate(`/admin/forms/${formId}`)}
      >
        <FileText className="h-4 w-4 mr-1" />
        View
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => navigate(`/admin/forms/${formId}/edit`)}
      >
        <FileEdit className="h-4 w-4 mr-1" />
        Edit
      </Button>
      <DeleteResidentFormDialog
        residentName={residentName}
        onDelete={handleDelete}
      />
    </div>
  );
};
