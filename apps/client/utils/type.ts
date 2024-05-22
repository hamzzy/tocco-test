interface ImpactData {
  totalCarbonFootprint: number;
  reductionTargetCarbon: number;
  waterConsumption: number;
  waterRecycled: number;
  bioBasedContent: number;
  wastedReduction: number;
  mechanicalRecyclability: number;
  chemicalRecyclability: number;
  naturalRecyclability: number;
}

interface Certificate {
  certificateId: string;
}

interface Attachment {
  name: string;
  attachmentId : string;
}

export interface FormValues {
  title: string;
  description: string;
  impactData: ImpactData[];
  certificates: Certificate[];
  attachments: Attachment[];
}

  
  export interface Product {
    id: number;
    name: string;
    description: string;
    launchDate: string;
    createdAt: string;
    updatedAt: string;
    impactData: ImpactData;
    certificates: Certificate[];
    attachments: Attachment[];
  }