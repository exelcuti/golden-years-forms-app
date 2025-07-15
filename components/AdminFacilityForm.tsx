import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useApp } from "@/contexts/AppContext";
import { FacilityInfo, FacilityTemplate } from "@/types";
import { Trash2, Edit } from "lucide-react";
import FacilityTemplateDialog from "./facility/FacilityTemplateDialog";
import FacilityTemplateSelector from "./facility/FacilityTemplateSelector";
import FacilityInformationSection from "./facility/FacilityInformationSection";
import RatesSection from "./facility/RatesSection";
import RegulatoryInformationSection from "./facility/RegulatoryInformationSection";
import { useToast } from "@/hooks/use-toast";

const AdminFacilityForm = () => {
  const { 
    facilityInfo, 
    updateFacilityInfo, 
    saveFacilityTemplate,
    getFacilityTemplates,
    deleteFacilityTemplate 
  } = useApp();
  
  const { toast } = useToast();
  const [formData, setFormData] = useState<FacilityInfo>(facilityInfo);
  const [templates, setTemplates] = useState<FacilityTemplate[]>([]);
  const [isTemplateDialogOpen, setIsTemplateDialogOpen] = useState(false);
  const [newTemplateName, setNewTemplateName] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState<FacilityTemplate | undefined>();

  useEffect(() => {
    const loadTemplates = async () => {
      const loadedTemplates = await getFacilityTemplates();
      setTemplates(loadedTemplates);
    };
    loadTemplates();
  }, [getFacilityTemplates]);

  const handleInputChange = (field: keyof FacilityInfo, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNumberChange = (field: keyof FacilityInfo, value: string) => {
    const parsedValue = value === "" ? 0 : parseFloat(value);
    setFormData(prev => ({ ...prev, [field]: parsedValue }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateFacilityInfo(formData);
  };

  const handleSaveTemplate = async () => {
    if (!newTemplateName.trim()) return;

    const templateToSave: FacilityTemplate = {
      ...formData,
      name: newTemplateName,
    };

    await saveFacilityTemplate(templateToSave);
    const updatedTemplates = await getFacilityTemplates();
    setTemplates(updatedTemplates);
    setIsTemplateDialogOpen(false);
    setNewTemplateName("");
  };

  const handleDeleteTemplate = async (id: string) => {
    try {
      await deleteFacilityTemplate(id);
      const updatedTemplates = await getFacilityTemplates();
      setTemplates(updatedTemplates);
    } catch (error) {
      console.error('Error deleting template:', error);
    }
  };

  const handleUpdateTemplate = (template: FacilityTemplate) => {
    setFormData({
      facilityName: template.facilityName,
      facilityLicenseNumber: template.facilityLicenseNumber,
      facilityAddress: template.facilityAddress,
      monthlyRate: template.monthlyRate,
      dailyRespiteRate: template.dailyRespiteRate,
      weeklyProratedFee: template.weeklyProratedFee,
      communityCareLicensingNumber: template.communityCareLicensingNumber,
      ombudsmanNumber: template.ombudsmanNumber,
      licenseeName: template.licenseeName,
      licenseeAddress: template.licenseeAddress,
      dssPhoneNumber: template.dssPhoneNumber || "",
      administratorName: template.administratorName || "",
      facilityPhoneNumber: template.facilityPhoneNumber || "",
    });
    toast({
      title: "Template Loaded",
      description: "Template values have been loaded into the form",
    });
  };

  const handleTemplateLoad = (template: FacilityTemplate) => {
    setSelectedTemplate(template);
    handleUpdateTemplate(template);
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-end mb-4">
          <FacilityTemplateSelector
            templates={templates}
            onLoadTemplate={handleTemplateLoad}
            selectedTemplate={selectedTemplate}
          />
        </div>

        <FacilityInformationSection
          facilityName={formData.facilityName}
          facilityLicenseNumber={formData.facilityLicenseNumber}
          facilityAddress={formData.facilityAddress}
          administratorName={formData.administratorName}
          facilityPhoneNumber={formData.facilityPhoneNumber}
          onInputChange={handleInputChange}
        />

        <RatesSection
          monthlyRate={formData.monthlyRate}
          dailyRespiteRate={formData.dailyRespiteRate}
          weeklyProratedFee={formData.weeklyProratedFee}
          onNumberChange={handleNumberChange}
        />

        <RegulatoryInformationSection
          communityCareLicensingNumber={formData.communityCareLicensingNumber}
          ombudsmanNumber={formData.ombudsmanNumber}
          licenseeName={formData.licenseeName}
          licenseeAddress={formData.licenseeAddress}
          dssPhoneNumber={formData.dssPhoneNumber}
          onInputChange={handleInputChange}
        />

        <div className="mt-6 flex flex-wrap justify-end items-center gap-2">
          {selectedTemplate && (
            <>
              <Button
                type="button"
                variant="outline"
                onClick={() => handleUpdateTemplate(selectedTemplate)}
                className="w-full sm:w-auto"
              >
                <Edit className="h-4 w-4 mr-2" />
                Update Template
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={async () => {
                  if (selectedTemplate.id) {
                    await handleDeleteTemplate(selectedTemplate.id);
                    setSelectedTemplate(undefined);
                  }
                }}
                className="w-full sm:w-auto"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Template
              </Button>
            </>
          )}
          <Button 
            variant="outline" 
            type="button"
            onClick={() => setIsTemplateDialogOpen(true)}
            className="w-full sm:w-auto"
          >
            Save as Template
          </Button>
          <Button 
            type="submit" 
            className="w-full sm:w-auto bg-healthcare-600 hover:bg-healthcare-700"
          >
            Save Facility Information
          </Button>
        </div>

        <FacilityTemplateDialog
          isOpen={isTemplateDialogOpen}
          onOpenChange={setIsTemplateDialogOpen}
          templateName={newTemplateName}
          onTemplateNameChange={setNewTemplateName}
          onSave={handleSaveTemplate}
        />
      </form>
    </Card>
  );
};

export default AdminFacilityForm;
