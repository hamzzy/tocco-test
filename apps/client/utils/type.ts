import Image from 'next/image';
interface CreateImpactData {
  totalCarbonFootprint: number;
  reductionTargetCarbon: number;
  totalWaterConsumption: number;
  waterRecycled: number;
  bioBasedContent: number;
  wasteReduction: number;
  mechanicalRecyclability: number;
  chemicalRecyclability: number;
  naturalRecyclability: number;
 
}


interface ImpactData {
  totalCarbonFootprint: number;
  reductionTargetCarbon: number;
  totalWaterConsumption: number;
  waterRecycled: number;
  bioBasedContent: number;
  wasteReduction: number;
  mechanicalRecyclability: number;
  chemicalRecyclability: number;
  naturalRecyclability: number;
  reductionAchievementCarbon: number | null;
  reductionAchievementWater : number | null;
  
}

interface Certificate {
  name: string;
}

interface Attachment {
  name: string;
  attachmentId : string;
}

export interface FormValues {
  title: string;
  image : string;
  description: string;
  impactData: CreateImpactData;
  certificates: Certificate[];
  attachments: Attachment[];
}

  
  export interface Product {
    id : number;
    title: string;
    image: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    impactData: ImpactData;
    certificates: Certificate[];
    attachments: Attachment[];
  }