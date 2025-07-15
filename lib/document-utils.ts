import { ResidentForm, FacilityInfo } from '@/types'

export const downloadDoc = (residentForm: ResidentForm, facilityInfo: FacilityInfo) => {
  // Mock implementation for PDF generation
  console.log('Downloading contract for:', residentForm.residentName)
  console.log('Facility:', facilityInfo.facilityName)
  
  // This would typically generate a PDF using a library like jsPDF or call an API
  // For now, this is a placeholder
  const content = `
Reservation Contract

Resident: ${residentForm.residentName}
Age: ${residentForm.age}
Date of Birth: ${residentForm.birthDate}

Facility: ${facilityInfo.facilityName}
Address: ${facilityInfo.facilityAddress}
License: ${facilityInfo.facilityLicenseNumber}

Monthly Rate: $${facilityInfo.monthlyRate}
  `
  
  const blob = new Blob([content], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `reservation-contract-${residentForm.residentName}.txt`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export const downloadTemplate = () => {
  const content = `
Reservation Contract Template

Resident: [Name]
Age: [Age]
Date of Birth: [Date]

Facility: [Facility Name]
Address: [Address]
License: [License Number]

Monthly Rate: $[Amount]
  `
  
  const blob = new Blob([content], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'reservation-contract-template.txt'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}