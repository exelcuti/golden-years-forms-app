
import React from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

interface DeleteResidentFormDialogProps {
  residentName: string;
  onDelete: () => void;
  variant?: "mobile" | "desktop";
}

export const DeleteResidentFormDialog = ({
  residentName,
  onDelete,
  variant = "desktop",
}: DeleteResidentFormDialogProps) => {
  const [isDeleting, setIsDeleting] = useState(false);

  // Function to handle the delete action with proper state management
  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      console.log("Delete button clicked for:", residentName);
      await onDelete();
    } catch (error) {
      console.error("Error during deletion:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {variant === "mobile" ? (
          <Button
            variant="outline"
            size="icon"
            className="text-destructive hover:bg-destructive hover:text-destructive-foreground"
            disabled={isDeleting}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            variant="outline"
            size="sm"
            className="text-destructive hover:bg-destructive hover:text-destructive-foreground"
            disabled={isDeleting}
          >
            <Trash2 className="h-4 w-4 mr-1" />
            {isDeleting ? "Deleting..." : "Delete"}
          </Button>
        )}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Resident Form</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this form for {residentName}? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
          <AlertDialogAction 
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
