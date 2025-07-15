
import React from "react";
import { formatDate, formatPhoneNumberDisplay } from "@/lib/utils";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ResidentForm } from "@/types";
import { FormTableActions } from "./FormTableActions";

interface FormsTableProps {
  forms: ResidentForm[];
  onDelete: (id: string) => void;
}

export const FormsTable = ({ forms, onDelete }: FormsTableProps) => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Resident Name</TableHead>
            <TableHead>Submission Date</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Responsible Person</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {forms.map((form) => (
            <TableRow key={form.id}>
              <TableCell className="font-medium">{form.residentName}</TableCell>
              <TableCell>{form.submittedAt ? formatDate(form.submittedAt) : "N/A"}</TableCell>
              <TableCell>{form.age}</TableCell>
              <TableCell>{form.responsiblePerson.name}</TableCell>
              <TableCell>{formatPhoneNumberDisplay(form.responsiblePerson.phone)}</TableCell>
              <TableCell>
                <FormTableActions 
                  formId={form.id!} 
                  residentName={form.residentName}
                  onDelete={onDelete} 
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

