
import { ResidentForm, FacilityInfo } from "@/types"

export const downloadDoc = (
  residentForm: ResidentForm,
  filename: string,
  facilityInfo: FacilityInfo,
  isReservationContract: boolean = false,
  isTemplate: boolean = false
) => {
  // Create a simple text-based document for now
  const content = isTemplate 
    ? "Template document - to be filled with actual data"
    : `${isReservationContract ? 'Reservation Contract' : 'Resident Form'}
    
Resident Name: ${residentForm.residentName || '[Resident Name]'}
Facility: ${facilityInfo.facilityName || '[Facility Name]'}
Date: ${new Date().toLocaleDateString()}
    
This is a placeholder document. In a full implementation, this would generate a proper PDF document.`

  const blob = new Blob([content], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
