import { AbilityData } from "../models/characterSheet/AbilityData";
import { AbilityDataMod } from "../models/characterSheet/AbilityDataMod";
import { DataGroupType } from "../models/characterSheet/DataGroupType";
import { Effect } from "../models/characterSheet/Effect";
import { ICharacterSheet } from "../models/characterSheet/ICharacterSheet";
import { QualityDataMod } from "../models/characterSheet/QualityDataMod";

export class SpecialAbilityService {
    private bracketRegexp = /{{.+?}}/g;

    constructor() {}

    public getAllVariables = (characterSheet: ICharacterSheet) => {
        return characterSheet.specialAbilities.flatMap((specialAbility) => {
            const bracketTexts = specialAbility.originalText.match(this.bracketRegexp);
            if (!bracketTexts) {
                return [];
            }

            return bracketTexts.map((bracketText) => {
                const inner = bracketText.slice(2, bracketText.length - 2);
                return new AbilityData(inner, DataGroupType.Misc, 0, undefined, [new AbilityDataMod(inner, "Untyped", "+", inner)]);
            });
        });
    };

    public apply = (characterSheet: ICharacterSheet, specialAbilityData: Map<string, AbilityData>) => {
        characterSheet.specialAbilities.forEach((specialAbility) => {
            specialAbility.calculatedText = specialAbility.originalText;
        });

        characterSheet.specialAbilities.forEach((specialAbility) => {
            specialAbility.calculatedText = specialAbility.originalText;

            const bracketTexts = specialAbility.calculatedText.match(this.bracketRegexp);
            if (bracketTexts) {
                bracketTexts.forEach((bracketText) => {
                    const inner = bracketText.slice(2, bracketText.length - 2);
                    console.log(inner);
                    const replacement = specialAbilityData.get(inner)?.calculatedSum?.toString();
                    console.log(replacement);
                    if (replacement) {
                        specialAbility.calculatedText = specialAbility.calculatedText.replace(bracketText, replacement);
                    }
                });
            }
        });

        return characterSheet;
    };
}
