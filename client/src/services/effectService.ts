import { AbilityDataMod } from "../models/characterSheet/AbilityDataMod";
import { Effect } from "../models/characterSheet/Effect";
import { ICharacterSheet } from "../models/characterSheet/ICharacterSheet";
import { QualityDataMod } from "../models/characterSheet/QualityDataMod";

let currEffect: Effect | null = null;
let currSheet: ICharacterSheet | null = null;

export function AddAbilityMod(attributeName: string, value: string, type: string, sourceOverride?: string | null) {
    if (!currSheet || !currEffect) {
        console.log("Error adding ability mod.");
        return;
    }

    const attribute = currSheet.abilityData.get(attributeName);
    if (!attribute) {
        return;
    }

    let operator = null;
    if (value.startsWith("-")) {
        operator = "-";
        value = value.substring(1);
    } else if (value.startsWith("+")) {
        operator = "+";
        value = value.substring(1);
    } else {
        operator = "+";
    }

    const newMod = new AbilityDataMod(type ?? "Untyped", sourceOverride ?? currEffect.name, operator, value);
    if (newMod.operator == "+" && newMod.type !== "Untyped") {
        attribute.abilityMods.forEach((m) => {
            if (m.type == newMod.type && m.operator == "+") {
                const toDisable = (m.value ?? 0) > (newMod.value ?? 0) ? newMod : m;
                toDisable.enabled = false;
            }
        });
    }

    attribute.abilityMods.push(newMod);
}

export function MultAbilityMod(attributeName: string, value: string) {
    if (!currSheet || !currEffect) {
        console.log("Error multiplying ability mod.");
        return;
    }

    const attribute = currSheet.abilityData.get(attributeName);
    if (!attribute) {
        return;
    }

    attribute.abilityMods.push(new AbilityDataMod("Untyped", currEffect.name, "*", value));
}

export function SetAbility(attributeName: string, value: string) {
    if (!currSheet || !currEffect) {
        console.log("Error adding ability mod.");
        return;
    }

    const attribute = currSheet.abilityData.get(attributeName);
    if (!attribute) {
        return;
    }

    attribute.abilityMods.forEach((m) => (m.enabled = false));

    attribute.abilityMods.push(new AbilityDataMod("Untyped", currEffect.name, "SET", value));
}

export function SetQuality(qualityName: string, value: string) {
    if (!currSheet || !currEffect) {
        console.log("Error adding ability mod.");
        return;
    }

    const quality = currSheet.qualityData.get(qualityName);
    if (!quality) {
        return;
    }

    quality.qualityMods.forEach((m) => (m.enabled = false));

    quality.qualityMods.push(new QualityDataMod(currEffect.name, "SET", value));
}

export function AddQualityLine(qualityName: string, value: string) {
    if (!currSheet || !currEffect) {
        console.log("Error adding quality line.");
        return;
    }

    const quality = currSheet.qualityData.get(qualityName);
    if (!quality) {
        return;
    }

    quality.qualityMods.push(new QualityDataMod(currEffect.name, "ADD", value));
}

export function AddAbilityNote(attributeName: string, value: string) {
    if (!currSheet || !currEffect) {
        console.log("Error adding ability note.");
        return;
    }

    const attribute = currSheet.abilityData.get(attributeName);
    if (!attribute) {
        return;
    }

    attribute.notes.push(`${value} [${currEffect.name}]`);
}

export function AddQualityNote(qualityName: string, value: string) {
    if (!currSheet || !currEffect) {
        console.log("Error adding quality note.");
        return;
    }

    const quality = currSheet.qualityData.get(qualityName);
    if (!quality) {
        return;
    }

    quality.notes.push(`${value} [${currEffect.name}]`);
}

export class EffectService {
    constructor() {}

    public apply = (characterSheet: ICharacterSheet) => {
        characterSheet.abilityData.forEach((a) => {
            a.calculatedText = "";
            a.abilityMods = [];
            a.notes = [];
        });
        characterSheet.qualityData.forEach((q) => {
            q.calculatedText = "";
            q.qualityMods = [];
            q.notes = [];
        });

        const allEffects = characterSheet.effects.concat(characterSheet.specialAbilities.flatMap((sa) => sa.effects));

        const orderedEffects = allEffects.filter((e) => e.enabled).sort((a, b) => a.order - b.order);

        currSheet = characterSheet;

        orderedEffects.forEach((effect) => {
            currEffect = effect;
            try {
                eval(effect.exec);
            } catch (ex) {
                console.error("Error evaluating: ", effect.name, effect.exec);
                console.log(ex);
            }
        });

        return characterSheet;
    };
}
