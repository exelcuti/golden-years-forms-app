
import React from "react";
import { Button } from "@/components/ui/button";
import { FileEdit, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DeleteResidentFormDialog } from "./DeleteResidentFormDialog";

interface ResidentFormActionsProps {
  formId: string;
  residentName: string;
  onExport: () => void;
  onDelete: () => void;
  isMobile?: boolean;
}

export const ResidentFormActions = ({
  formId,
  residentName,
  onExport,
  onDelete,
  isMobile = false,
}: ResidentFormActionsProps) => {
  const navigate = useNavigate();

  if (isMobile) {
    return (
      <div className="flex flex-col space-y-2">
        <Button
          className="justify-start"
          variant="outline"
          onClick={() => navigate(`/admin/forms/${formId}/edit`)}
        >
          <FileEdit className="h-4 w-4 mr-2" />
          Edit Form
        </Button>
        <Button
          className="justify-start"
          variant="outline"
          onClick={onExport}
        >
          <Download className="h-4 w-4 mr-2" />
          Export Document
        </Button>
        <DeleteResidentFormDialog
          residentName={residentName}
          onDelete={onDelete}
          variant="mobile"
        />
      </div>
    );
  }

  return (
    <div className="flex space-x-2">
      <Button
        variant="outline"
        onClick={() => navigate(`/admin/forms/${formId}/edit`)}
      >
        <FileEdit className="h-4 w-4 mr-2" />
        Edit
      </Button>
      <Button
        variant="outline"
        onClick={onExport}
      >
        <Download className="h-4 w-4 mr-2" />
        Export
      </Button>
      <DeleteResidentFormDialog
        residentName={residentName}
        onDelete={onDelete}
      />
    </div>
  );
};
