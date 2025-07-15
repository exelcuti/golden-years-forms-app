
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

interface FacilityTemplateDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  templateName: string;
  onTemplateNameChange: (value: string) => void;
  onSave: () => void;
}

const FacilityTemplateDialog = ({
  isOpen,
  onOpenChange,
  templateName,
  onTemplateNameChange,
  onSave,
}: FacilityTemplateDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Save Facility Template</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="templateName" className="text-right">
              Template Name
            </Label>
            <Input
              id="templateName"
              value={templateName}
              onChange={(e) => onTemplateNameChange(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <DialogClose asChild>
            <Button type="button" variant="secondary" className="mr-2">
              Cancel
            </Button>
          </DialogClose>
          <Button type="button" onClick={onSave} disabled={!templateName.trim()}>
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FacilityTemplateDialog;
