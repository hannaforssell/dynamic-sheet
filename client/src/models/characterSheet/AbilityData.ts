import { AbilityDataMod } from "./AbilityDataMod";
import { DataGroupType } from "./DataGroupType";

export class AbilityData {
  sortOrder: number;
  displayName: string;
  abilityMods: AbilityDataMod[];
  calculatedText: string;
  calculatedSum: number | null;

  constructor(
    public name: string,
    public group: DataGroupType,
    sortOrder?: number,
    displayName?: string,
    abilityMods?: AbilityDataMod[]
  ) {
    this.displayName = displayName ?? name;
    this.calculatedText = "";
    this.calculatedSum = 0;
    this.sortOrder = sortOrder ?? 100;
    this.abilityMods = abilityMods ?? [];
  }
}
