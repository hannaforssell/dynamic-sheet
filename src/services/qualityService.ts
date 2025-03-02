import { QualityData } from "../models/QualityData";

export class QualityService {
  constructor() {}

  public calculate = (qualities: Map<string, QualityData>) => {
    const calculated: Map<string, QualityData> = new Map();

    qualities.forEach((quality) => {
      this.recalculate(quality);

      calculated.set(quality.name, quality);
    })

    return calculated;
  };

  public recalculate = (quality: QualityData) => {
    quality.calculatedText = quality.originalText;

    quality.qualityMods.forEach((mod => {
      quality.calculatedText = mod.value;
    }))
  };
}


