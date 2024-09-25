import { CalculatorService } from "../services/calculatorService";
import { AbilityData } from "../models/AbilityData";

test("can calculate expression containing non numerical characters", () => {
    //arrange
    const abilityData = new Map([
        ["Str", new AbilityData("Str", "Group", 0, "18[PB Base] +3[Age] +24[Enhancement, Maximized Beauty's Caress] +4[Sacred, Inner Beauty]  +5[Morale, Encouraging Snowsong] +6[Horseshoes of Flame]")]]
    );
    const calculatorService = new CalculatorService();
  
    //act
    const value = calculatorService.Calculate(abilityData);
  
    //assert
    expect(value.get("Str")?.sum).toBe(60);
});

test("can calculate Map containing multiple values", () => {
    //arrange
    const abilityData = new Map([
        ["Str", new AbilityData("Str", "Group", 0, "18[PB Base] +3[Age] +24[Enhancement, Maximized Beauty's Caress] +4[Sacred, Inner Beauty]  +5[Morale, Encouraging Snowsong] +6[Horseshoes of Flame]")],
        ["AC", new AbilityData("AC", "Group", 0, "2 + 1")]
    ]);
    const calculatorService = new CalculatorService();
  
    //act
    const value = calculatorService.Calculate(abilityData);
  
    //assert
    expect(value.get("Str")?.sum).toBe(60);
    expect(value.get("AC")?.sum).toBe(3);
});

test("can calculate simple references", () => {
    //arrange
    const abilityData = new Map([
        ["Str", new AbilityData("Str", "Group", 0, "18[PB Base] +3[Age] +24[Enhancement, Maximized Beauty's Caress] +4[Sacred, Inner Beauty]  +5[Morale, Encouraging Snowsong] +6[Horseshoes of Flame]")],
        ["AC", new AbilityData("AC", "Group", 0, "2 + 1#Str")]
    ]);
    const calculatorService = new CalculatorService();
  
    //act
    const value = calculatorService.Calculate(abilityData);
  
    //assert
    expect(value.get("AC")?.calculationData).toBe("2 + 60#Str");
});

test("can calculate simple mod references", () => {
    //arrange
    const abilityData = new Map([
        ["Str", new AbilityData("Str", "Group", 0, "18")],
        ["AC", new AbilityData("AC", "Group", 0, "2 + 2@Str")]
    ]);
    const calculatorService = new CalculatorService();
  
    //act
    const value = calculatorService.Calculate(abilityData);
  
    //assert
    expect(value.get("AC")?.sum).toBe(6);
    expect(value.get("AC")?.calculationData).toBe("2 + 4@Str");
});

test("can calculate simple set reference", () => {
    //arrange
    const abilityData = new Map([
        ["Dex", new AbilityData("Dex", "Group", 0, "2 SET20[inset Jar] +2")]
    ]);
    const calculatorService = new CalculatorService();
  
    //act
    const value = calculatorService.Calculate(abilityData);
  
    //assert
    expect(value.get("Dex")?.sum).toBe(22);
    expect(value.get("Dex")?.calculationData).toBe("2 SET20[inset Jar] +2");
});

test("can calculate double set reference", () => {
    //arrange
    const abilityData = new Map([
        ["Dex", new AbilityData("Dex", "Group", 0, "2 SET20[inset Jar] +2 SET1")]
    ]);
    const calculatorService = new CalculatorService();
  
    //act
    const value = calculatorService.Calculate(abilityData);
  
    //assert
    expect(value.get("Dex")?.sum).toBe(1);
    expect(value.get("Dex")?.calculationData).toBe("2 SET20[inset Jar] +2 SET1");
});

test("can handle null values", () => {
    //arrange
    const abilityData = new Map([
        ["Con", new AbilityData("Con", "Group", 0, "—[Necropolitan]")]
    ]);
    const calculatorService = new CalculatorService();
  
    //act
    const value = calculatorService.Calculate(abilityData);
  
    //assert
    expect(value.get("Con")?.sum).toBe(null);
    expect(value.get("Con")?.calculationData).toBe("—[Necropolitan]");
});

test("can handle advanced null values", () => {
    //arrange
    const abilityData = new Map([
        ["Con", new AbilityData("Con", "Group", 0, "10[Base] -6[Age] SET—[Necropolitan]")]
    ]);
    const calculatorService = new CalculatorService();
  
    //act
    const value = calculatorService.Calculate(abilityData);
  
    //assert
    expect(value.get("Con")?.sum).toBe(null);
    expect(value.get("Con")?.calculationData).toBe("10[Base] -6[Age] SET—[Necropolitan]");
});

test("can handle advanced null values references", () => {
    //arrange
    const abilityData = new Map([
        ["Con", new AbilityData("Con", "Group", 0, "10[Base] -6[Age] SET—[Necropolitan]")],
        ["Fort", new AbilityData("Fort", "Group", 0, "8[Base] +3@Con")]
    ]);
    const calculatorService = new CalculatorService();
  
    //act
    const value = calculatorService.Calculate(abilityData);
  
    //assert
    expect(value.get("Fort")?.sum).toBe(8);
    expect(value.get("Fort")?.calculationData).toBe("8[Base] +0@Con");
});

test("can handle multiple references", () => {
    //arrange
    const abilityData = new Map([
        ["Str", new AbilityData("Str", "Group", 0, "18[PB Base]")],
        ["Con", new AbilityData("Con", "Group", 0, "10[Base] -6[Age] SET—[Necropolitan]")],
        ["Fort", new AbilityData("Fort", "Group", 0, "5-1#Str+3@Con")]
    ]);
    const calculatorService = new CalculatorService();
  
    //act
    const value = calculatorService.Calculate(abilityData);
  
    //assert
    expect(value.get("Fort")?.sum).toBe(-13);
    expect(value.get("Fort")?.calculationData).toBe("5-18#Str+0@Con");
});

test("can handle advanced null values references", () => {
    //arrange
    const abilityData = new Map([
        ["Str", new AbilityData("Str", "Group", 0, "18[PB Base]")],
        ["Con", new AbilityData("Con", "Group", 0, "10[Base] -6[Age] SET—[Necropolitan]")],
        ["Fort", new AbilityData("Fort", "Group", 0, "5-1#Str+3@Con")]
    ]);
    const calculatorService = new CalculatorService();
  
    //act
    const value = calculatorService.Calculate(abilityData);
  
    //assert
    expect(value.get("Fort")?.sum).toBe(-13);
    expect(value.get("Fort")?.calculationData).toBe("5-18#Str+0@Con");
});

test("can handle empty value", () => {
    //arrange
    const abilityData = new Map([
        ["Str", new AbilityData("Str", "Group", 0, "")],
    ]);
    const calculatorService = new CalculatorService();
  
    //act
    const value = calculatorService.Calculate(abilityData);
  
    //assert
    expect(value.get("Str")?.sum).toBe(0);
    expect(value.get("Str")?.calculationData).toBe("");
});

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

