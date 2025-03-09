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
      if(mod.operator == "SET") {
        quality.calculatedText = mod.value;
      } else if(mod.operator == "ADD") {
        quality.calculatedText += (quality.calculatedText === "" ? "" : "\n") + mod.value;
      }
    }))
  };
}


