import { AbilityData } from "../models/AbilityData";
import { CalculatorService } from "../services/calculatorService";

test("can handle change of value", () => {
    //arrange
    const abilityData = new Map([
        ["Str", new AbilityData("Str", "Group", 0, "")],
    ]);
    const calculatorService = new CalculatorService();
  
    //act
    const value = calculatorService.Calculate(abilityData);
    value.set("Str", {name: "Str", group: "Group", sum: 0, calculationData: "Hej"})
  
    //assert
    expect(value.get("Str")?.sum).toBe(0);
    expect(value.get("Str")?.calculationData).toBe("Hej");
});
