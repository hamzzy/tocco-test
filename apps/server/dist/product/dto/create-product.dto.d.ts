declare class CreateImpactDto {
    carbonFootprint: number;
    reductionTargets: number;
    reductionAchievements: number;
    waterConsumption: number;
    waterRecycled: number;
    bioBasedContent: number;
    initialWaste?: number;
    finalWaste?: number;
}
declare class CreateCertificateDto {
    filePath: string;
}
declare class CreateAttachmentDto {
    filePath: string;
}
declare class CreateImpactFactDto {
    description: string;
}
export declare class CreateProductDto {
    name: string;
    description: string;
    impactData: CreateImpactDto[];
    certificates: CreateCertificateDto[];
    attachments: CreateAttachmentDto[];
    impactFacts: CreateImpactFactDto[];
}
export {};
