import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, FileEdit, File } from "lucide-react";
import { ResidentForm, FacilityInfo } from "@/types";
import { downloadDoc } from "@/lib/document-utils";
import { Link } from "react-router-dom";
import { showToast } from "@/lib/toast-utils";

interface ReservationContractProps {
  residentForm: ResidentForm;
  facilityInfo: FacilityInfo;
}

const ReservationContract: React.FC<ReservationContractProps> = ({
  residentForm,
  facilityInfo,
}) => {
  const handleDownload = () => {
    downloadDoc(
      {
        ...residentForm,
        facilityInfo,
      },
      `${residentForm.residentName.replace(/\s+/g, "_")}_reservation_contract.pdf`,
      facilityInfo,
      true // This indicates it's a reservation contract format
    );

    showToast({
      title: "Contract Downloaded",
      description: "The reservation contract has been downloaded as a PDF document.",
    });
  };

  const handleDownloadTemplate = () => {
    downloadDoc(
      {}, // Empty data
      `reservation_contract_template.pdf`,
      {}, // Empty facility info
      true, // Reservation contract format
      true // Template mode - don't populate with data
    );

    showToast({
      title: "Template Downloaded",
      description: "The empty template has been downloaded as a PDF document.",
    });
  };

  return (
    <Card className="hover:bg-muted/50 transition-colors">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Reservation Contract</span>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleDownloadTemplate}
              title="Download empty template for editing"
            >
              <File className="h-4 w-4 mr-2" />
              Empty Template
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="ml-2" 
              onClick={handleDownload}
            >
              <Download className="h-4 w-4 mr-2" />
              Print Contract
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <Link to={`/admin/forms/${residentForm.id}/contract`}>
                <FileEdit className="h-4 w-4 mr-2" />
                Edit
              </Link>
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm">
        <p className="text-muted-foreground">
          Generate a print-ready reservation contract pre-filled with resident and facility information. 
          Downloads as a PDF document with exact Times New Roman 12pt formatting.
        </p>
        <div className="mt-4 space-y-2">
          <div className="flex items-center">
            <FileText className="h-4 w-4 mr-2 text-healthcare-500" />
            <p>Contract for: {residentForm.residentName || "Select a resident"}</p>
          </div>
          <div className="flex items-center">
            <FileText className="h-4 w-4 mr-2 text-healthcare-500" />
            <p>Facility: {facilityInfo?.facilityName || "Not specified"}</p>
          </div>
          <div className="flex items-center">
            <FileText className="h-4 w-4 mr-2 text-healthcare-500" />
            <p>Contract format: Standard F20 (rev. 9/14/2024)</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReservationContract;
