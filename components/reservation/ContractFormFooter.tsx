
import React from "react";
import { FileText, AlertCircle } from "lucide-react";

const ContractFormFooter: React.FC = () => {
  return (
    <div className="pt-4 space-y-3">
      <div className="flex items-center gap-2">
        <FileText className="h-5 w-5 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">
          This form will generate a contract that exactly matches the standard paper reservation contract
          format. The document uses Times New Roman 12pt font with proper spacing and formatting.
        </p>
      </div>
      <div className="flex items-center gap-2">
        <AlertCircle className="h-5 w-5 text-amber-500" />
        <p className="text-sm text-muted-foreground">
          Please review all information carefully before downloading the final document. Once downloaded,
          the contract can be printed or saved as a PDF file.
        </p>
      </div>
    </div>
  );
};

export default ContractFormFooter;
