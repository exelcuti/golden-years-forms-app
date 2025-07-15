import { ResidentForm, DeathReport } from '@/types'

export const exportResidentFormToPDF = (form: ResidentForm) => {
  // Mock implementation for PDF generation
  console.log('Exporting resident form to PDF:', form.residentName)
  
  const content = `
Resident Form

Name: ${form.residentName}
Age: ${form.age}
Sex: ${form.sex}
Date of Birth: ${form.birthDate}
Address: ${form.address || 'N/A'}

Responsible Person:
Name: ${form.responsiblePerson.name}
Relationship: ${form.responsiblePerson.relationship}
Phone: ${form.responsiblePerson.phoneNumber}
Address: ${form.responsiblePerson.address}

Target Admission Date: ${form.targetDateOfAdmission || 'N/A'}
  `
  
  const blob = new Blob([content], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `resident-form-${form.residentName}.txt`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export const exportDeathReportToPDF = (report: DeathReport) => {
  // Mock implementation for PDF generation
  console.log('Exporting death report to PDF:', report.residentName)
  
  const content = `
Death Report

Resident Name: ${report.residentName}
Date of Birth: ${report.residentDateOfBirth}
Sex: ${report.sex || 'N/A'}

Date and Time of Death: ${report.dateAndTimeOfDeath}
Place of Death: ${report.placeOfDeath}
Cause of Death: ${report.causeOfDeath}

Attending Doctor: ${report.attendingDoctorName || 'N/A'}
Report Submitted By: ${report.reportSubmittedBy}
  `
  
  const blob = new Blob([content], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `death-report-${report.residentName}.txt`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}