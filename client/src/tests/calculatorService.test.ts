import { emptySheet } from "../helpers/sheetHelper";
import { AbilityData } from "../models/characterSheet/AbilityData";
import { DataGroupType } from "../models/characterSheet/DataGroupType";
import { Effect } from "../models/characterSheet/Effect";
import { EffectType } from "../models/characterSheet/EffectType";
import { CalculatorService } from "../services/calculatorService";

test("can calculate a simple effect", () => {
    //arrange
    const calculatorService = new CalculatorService();

    const characterSheet = {
        ...emptySheet,
        abilityData: new Map([["Str", new AbilityData("Str", DataGroupType.Misc, 0)]]),
        effects: [new Effect("TestEffect1", true, 100, EffectType.Base, "SetAbility('Str', 10)")]
    };

    //act
    const newSheet = calculatorService.calculate(characterSheet);

    //assert
    expect(newSheet.abilityData.get("Str")?.calculatedSum).toBe(10);
});
