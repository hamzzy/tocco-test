// types.ts
export interface ImpactData {
    id: number;
    productId: number;
    totalCarbonFootprint: number;
    reductionTargetCarbon: number;
    reductionAchievementCarbon: number;
    bioBasedContent: number;
    wasteReduction: number;
    totalWaterConsumption: number;
    waterRecycled: number;
    reductionAchievementWater: number;
    mechanicalRecyclability: number;
    chemicalRecyclability: number;
    naturalRecyclability: number;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Certificate {
    id: number;
    productId: number;
    certificateId: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Attachment {
    id: number;
    productId: number;
    name: string;
    attachmentId: string;
    createdAt: string;
    updatedAt: string;
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