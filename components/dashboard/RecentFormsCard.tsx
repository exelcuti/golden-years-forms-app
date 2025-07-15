
import React, { useMemo, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ResidentForm } from "@/types";
import { FacilityInfo } from "@/types";
import { exportXFDF } from "@/lib/documents/export-utils";
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from "@/components/ui/select";

// Correct mapping from facility IDs to names
const FACILITY_ID_TO_NAME: Record<string, string> = {
  "f56d70f2-b5a4-4d61-b91d-65df0bc72f72": "Springwell Haven",            // Springwell Haven
  "6474f6ff-735f-4362-a9cf-e4d9712fb318": "Dana Point Manor",            // Dana Point Manor (correct)
  "332be0c1-5072-4f46-9a28-1a7ea8bfe193": "Golden Breeze Manor",         // Golden Breeze Manor
};

// The facility IDs for picker should correspond to the correct names above
const FACILITY_PICK_OPTIONS = [
  { value: "all", label: "All Facilities" },
  { value: "f56d70f2-b5a4-4d61-b91d-65df0bc72f72", label: "Springwell Haven" },
  { value: "6474f6ff-735f-4362-a9cf-e4d9712fb318", label: "Dana Point Manor" },
  { value: "332be0c1-5072-4f46-9a28-1a7ea8bfe193", label: "Golden Breeze Manor" },
  { value: "unassigned", label: "Unassigned" },
];

const recentOptions = [
  { value: "5", label: "Last 5" },
  { value: "10", label: "Last 10" },
  { value: "20", label: "Last 20" },
];

interface RecentFormsCardProps {
  residentForms: ResidentForm[];
  facilityInfo: FacilityInfo;
}

const RecentFormsCard = ({ residentForms, facilityInfo }: RecentFormsCardProps) => {
  const navigate = useNavigate();

  const [facilityFilter, setFacilityFilter] = useState<string>("all");
  const [recentCount, setRecentCount] = useState<string>("5");

  // Only allow user-friendly facility choices
  const facilityOptions = FACILITY_PICK_OPTIONS;

  // Filtering logic
  const visibleForms = useMemo(() => {
    let filtered = residentForms;

    if (facilityFilter && facilityFilter !== "all") {
      if (facilityFilter === "unassigned") {
        filtered = filtered.filter(f => !f.assignedFacilityId);
      } else {
        // Support forms with typo'd Dana Point Manor id
        if (facilityFilter === "6474f6ff-735f-4362-a9cf-e4d9712fb318") {
          filtered = filtered.filter(
            f =>
              f.assignedFacilityId === "6474f6ff-735f-4362-a9cf-e4d9712fb318" ||
              f.assignedFacilityId === "6474f6ff-735f-4362-a9cf-ed49712fb318"
          );
        } else {
          filtered = filtered.filter(f => f.assignedFacilityId === facilityFilter);
        }
      }
    }

    const count = parseInt(recentCount, 10);
    return filtered.slice(0, count);
  }, [facilityFilter, residentForms, recentCount]);

  return (
    <Card className="hover:bg-muted/50 transition-colors">
      <CardHeader>
        <CardTitle>Resident's Forms</CardTitle>
        <CardDescription>Latest resident forms submitted</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-2 mb-4">
          <div className="flex-1 min-w-[180px]">
            <Select value={facilityFilter} onValueChange={setFacilityFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Facilities" />
              </SelectTrigger>
              <SelectContent>
                {facilityOptions.map(opt => (
                  <SelectItem value={opt.value} key={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1 min-w-[130px]">
            <Select value={recentCount} onValueChange={setRecentCount}>
              <SelectTrigger>
                <SelectValue placeholder="Recent" />
              </SelectTrigger>
              <SelectContent>
                {recentOptions.map(opt => (
                  <SelectItem value={opt.value} key={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {visibleForms.length > 0 ? (
          <div className="space-y-2">
            {visibleForms.map((form) => {
              // Strictly map facility assignment based on the IDs above ("Unassigned" if no id)
              let facilityName = "Unassigned";
              if (form.assignedFacilityId) {
                facilityName =
                  FACILITY_ID_TO_NAME[form.assignedFacilityId] || "Unknown Facility";
              }
              const responsibleName = form.responsiblePerson?.name || "N/A";
              const responsiblePhone = form.responsiblePerson?.phone || "N/A";
              // Birth date: Ensure it is formatted in mm/dd/yyyy
              const formattedBirthDate = form.birthDate
                ? new Date(form.birthDate).toLocaleDateString("en-US")
                : "N/A";

              return (
                <div
                  key={form.id}
                  className="flex items-center justify-between border-b pb-1 last:border-0"
                >
                  <div className="flex flex-col gap-0.5 text-sm min-w-0">
                    <span className="font-medium truncate">{form.residentName}</span>
                    <div className="flex flex-wrap items-center gap-x-2 text-xs text-muted-foreground">
                      <span>DOB: {formattedBirthDate}</span>
                      <span className="hidden sm:inline">|</span>
                      <span>
                        Attorney: {responsibleName}
                      </span>
                      {/* ALWAYS group "Phone:" and responsiblePhone together, never wrapping */}
                      {responsiblePhone && (
                        <>
                          <span className="hidden sm:inline">|</span>
                          {/* On mobile, put Phone: and value on new line but keep together */}
                          <span className="flex items-center gap-1">
                            <span>Phone:</span>
                            <span>{responsiblePhone}</span>
                          </span>
                        </>
                      )}
                      {/* Show facility in small font (never swapped) */}
                      <span className="hidden md:inline-block ml-2 text-[10px] text-muted-foreground italic">
                        {facilityName}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigate(`/admin/forms/${form.id}`)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        if (facilityInfo) {
                          exportXFDF(form, facilityInfo);
                        }
                      }}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              );
            })}
            <Button 
              variant="outline" 
              className="w-full mt-2"
              onClick={() => navigate("/admin/forms")}
            >
              View All Forms
            </Button>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">No forms submitted yet.</p>
        )}
      </CardContent>
    </Card>
  );
};

export default RecentFormsCard;
