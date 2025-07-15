
import React from "react";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ContractFormHeaderProps {
  onDownload: () => void;
  residentId: string;
}

const ContractFormHeader: React.FC<ContractFormHeaderProps> = ({
  onDownload,
  residentId
}) => {
  const navigate = useNavigate();

  const handleSaveAndReturn = () => {
    navigate(`/admin/forms/${residentId}`);
  };

  return (
    <CardHeader>
      <CardTitle className="flex justify-between items-center">
        <span>Reservation Contract Form</span>
        <div className="space-x-2">
          <Button onClick={onDownload} variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Download Contract
          </Button>
          <Button onClick={handleSaveAndReturn}>
            Save & Return
          </Button>
        </div>
      </CardTitle>
    </CardHeader>
  );
};

export default ContractFormHeader;
