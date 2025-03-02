import { AbilityData } from "../models/AbilityData";
import { Effect } from "../models/Effect";
import { EffectType } from "../models/EffectType";
import { ISheetData } from "../models/ISheetData";
import { ItemData } from "../models/ItemData";
import { QualityData } from "../models/QualityData";
import { TableData } from "../models/TableData";

export const defaultSheetPF: ISheetData = {
  qualityData: new Map([
    ["Name", new QualityData("Name", "Top Info", "Ario 'Lightbringer' Takashi", 0)],
    ["Race", new QualityData("Race", "Top Info", "", 1)],
    ["Type", new QualityData("Type", "Top Info", "", 2)],
    ["Player", new QualityData("Player", "Top Info", "EvilKurt")],
    ["Campaign", new QualityData("Campaign", "Top Info", "Delve into Mujinzawa")],

    ["DR", new QualityData("DR", "Defense", "")],
    ["Immune", new QualityData("Immune", "Defense", "")],
    ["Resist", new QualityData("Resist", "Defense", "")],
    ["Miss Chance", new QualityData("Miss Chance", "Defense", "")],
    ["Senses", new QualityData("Senses", "Defense", "")],
  ]),
  abilityData: new Map([
    ["Str", new AbilityData("Str", "Ability Scores", 0, "", 1)],
    ["Dex", new AbilityData("Dex", "Ability Scores", 0, "", 2)],
    ["Con", new AbilityData("Con", "Ability Scores", 0, "", 3)],
    ["Int", new AbilityData("Int", "Ability Scores", 0, "", 4)],
    ["Wis", new AbilityData("Wis", "Ability Scores", 0, "", 5)],
    ["Cha", new AbilityData("Cha", "Ability Scores", 0, "", 6)],

    ["Level", new AbilityData("Level", "Experience", 0, "", 0)],
    ["Experience", new AbilityData("Experience", "Experience", 0, "", 1)],

    ["HP", new AbilityData("HP", "Health", 0, "")],
    ["THP", new AbilityData("THP", "Health", 0, "")],
    ["Current HP", new AbilityData("Current HP", "Health", 0, "")],

    ["AC", new AbilityData("AC", "AC", 10, "10[Base] +0@Dex")],
    ["Touch", new AbilityData("Touch", "AC", 10, "10[Base]  +0@Dex")],
    ["Flat-Footed", new AbilityData("Flat-Footed", "AC", 10, "10[Base]")],
    ["Initiative", new AbilityData("Initiative", "AC", 0, "")],
    ["Speed (Land)", new AbilityData("Speed (Land)", "AC", 30, "30[Base]")],

    ["Fortitude", new AbilityData("Fortitude", "Saves", 0, "+0@Con")],
    ["Reflex", new AbilityData("Reflex", "Saves", 0, "+0@Dex")],
    ["Will", new AbilityData("Will", "Saves", 0, "+0@Wis")],

    ["BaB", new AbilityData("BaB", "Offense", 0, "")],
    ["Melee To Hit", new AbilityData("Melee To Hit", "Offense", 0, "")],
    ["Ranged To Hit", new AbilityData("Ranged To Hit", "Offense", 0, "")],
    ["CMB", new AbilityData("CMB", "Offense", 0, "")],
    ["CMD", new AbilityData("CMD", "Offense", 0, "")],

    ["Acrobatics", new AbilityData("Acrobatics", "Skills", 0, "+0@Dex")],
    ["Appraise", new AbilityData("Appraise", "Skills", 0, "")],
    ["Bluff", new AbilityData("Bluff", "Skills", 0, "")],
    ["Climb", new AbilityData("Climb", "Skills", 0, "+0@Dex")],
    ["Craft", new AbilityData("Craft", "Skills", 0, "")],
    ["Diplomacy", new AbilityData("Diplomacy", "Skills", 0, "")],
    ["Disable ", new AbilityData("Disable ", "Skills", 0, "")],
    ["Disguise", new AbilityData("Disguise", "Skills", 0, "")],
    ["Escape ", new AbilityData("Escape ", "Skills", 0, "")],
    ["Fly", new AbilityData("Fly", "Skills", 0, "")],
    ["Handle Animal", new AbilityData("Handle Animal", "Skills", 0, "")],
    ["Heal", new AbilityData("Heal", "Skills", 0, "")],
    ["Iaijutsu Focus", new AbilityData("Iaijutsu Focus", "Skills", 0, "")],
    ["Intimidate", new AbilityData("Intimidate", "Skills", 0, "")],
    [
      "Knowledge (Arcana)",
      new AbilityData("Knowledge (Arcana)", "Skills", 0, "+0@Int"),
    ],
    [
      "Knowledge (Dungeoneering)",
      new AbilityData("Knowledge (Dungeoneering)", "Skills", 0, "+0@Int"),
    ],
    [
      "Knowledge (Geography)",
      new AbilityData("Knowledge (Geography)", "Skills", 0, "+0@Int"),
    ],
    [
      "Knowledge (History)",
      new AbilityData("Knowledge (History)", "Skills", 0, "+0@Int"),
    ],
    [
      "Knowledge (Local)",
      new AbilityData("Knowledge (Local)", "Skills", 0, "+0@Int"),
    ],
    [
      "Knowledge (Nature)",
      new AbilityData("Knowledge (Nature)", "Skills", 0, "+0@Int"),
    ],
    [
      "Knowledge (Nobility)",
      new AbilityData("Knowledge (Nobility)", "Skills", 0, "+0@Int"),
    ],
    [
      "Knowledge (The Planes)",
      new AbilityData("Knowledge (The Planes)", "Skills", 0, "+0@Int"),
    ],
    [
      "Knowledge (Religion)",
      new AbilityData("Knowledge (Religion)", "Skills", 0, "+0@Int"),
    ],
    ["Linguistics", new AbilityData("Linguistics", "Skills", 0, "")],
    ["Lucid Dreaming", new AbilityData("Lucid Dreaming", "Skills", 0, "")],
    ["Perception", new AbilityData("Perception", "Skills", 0, "")],
    ["Perform", new AbilityData("Perform", "Skills", 0, "")],
    ["Profession", new AbilityData("Profession", "Skills", 0, "")],
    ["Ride", new AbilityData("Ride", "Skills", 0, "")],
    ["Sense Motive", new AbilityData("Sense Motive", "Skills", 0, "")],
    ["Slight of Hand", new AbilityData("Slight of Hand", "Skills", 0, "")],
    ["Spellcraft", new AbilityData("Spellcraft", "Skills", 0, "")],
    ["Stealth", new AbilityData("Stealth", "Skills", 0, "")],
    ["Survival", new AbilityData("Survival", "Skills", 0, "")],
    ["Swim", new AbilityData("Swim", "Skills", 0, "")],
    ["UMD", new AbilityData("UMD", "Skills", 0, "+0@Cha")],
  ]),
  classSkills: new Set(),
  itemData: new Map([
    ["Staff", new ItemData("Staff", new AbilityData("Staff", "Items", 10, "5+2"), "Bag", 5)],
    ["Shoes", new ItemData("Shoes", new AbilityData("Shoes", "Items", 0, ""), "Bag", 3, [{name: "Name", desc: "Desc"}])],
  ]),
  tableData: new Map([
    ["Levels", new TableData("Levels", "Experience", ["Class", "Level", "Total Level"], [["S-Class Wizard // Incanter", "1 // 1", "1"], ["S-Class Wizard // Incanter", "2 // 2", "2"], ["S-Class Wizard	// Incanter", "3 // 3", "3"], ["S-Class Wizard	// Incanter", "4 // 4", "4"], ["S-Class Wizard	// Incanter", "5 // 5", "5"], ["Stargazer // Incanter", "1 // 6", "6"], ["Stargazer // Incanter", "2 // 7", "7"], ["Stargazer // Incanter", "3 // 8", "8"], ["Stargazer // Incanter", "4 // 9", "9"], ["Stargazer // Incanter", "5 // 10", "10"], ["Loremaster // Incanter", "1 // 11", "11"]])]
  ]),
  effects: [
    new Effect("Rolls", true, -1, EffectType.Base, "SetAbility('Str', '7');\nSetAbility('Dex', '7');\nSetAbility('Con', '7');\nSetAbility('Int', '18');\nSetAbility('Wis', '18');\nSetAbility('Cha', '15');"),
    new Effect("Formulas", true, -1, EffectType.Base, "AddAbilityMod('AC', '10', 'Base');"),
    new Effect("Yueren Racial", true, -1, EffectType.Racial, "SetQuality('Race', 'Yueyinren');SetQuality('Type', 'Humanoid');\nAddAbilityMod('Dex', '2', 'Racial');\nAddAbilityMod('Con', '-2', 'Racial');\nAddAbilityMod('Int', '2', 'Racial');"),
    new Effect("Level", true, 0, EffectType.Base, "AddAbilityMod('Level', '11');\nAddAbilityMod('Int', '4');\n\nAddAbilityMod('Experience', '1000', 'Session 1');"),
    new Effect("Age", true, 0, EffectType.Base, "AddAbilityMod('Str', '-6');\nAddAbilityMod('Dex', '-6');\nAddAbilityMod('Con', '-6');\nAddAbilityMod('Int', '+3');\nAddAbilityMod('Wis', '+3');\nAddAbilityMod('Cha', '+3');\n"),
    new Effect("Magic Jar (Barbed Devil)", true, 2, EffectType.Spell, "SetQuality('Type', 'Outsider (Devil, Evil, Extraplanar, Lawful)');\nSetAbility('Str', '23');\nSetAbility('Dex', '23');\nSetAbility('Con', '22');\n"),
    new Effect("Ghost Syrup", true, 1, EffectType.Item, "SetAbility('Str', '—');"),
    new Effect("Soothsayer's Rainment(Mental Acuity)", true, 2, EffectType.Item, "AddAbilityMod('Int', '(0#UMD - 12)/3', 'Inherent');"),
    new Effect("Skill mods", true, -1, EffectType.Base, "AddAbilityMod('UMD', '+0@Cha', 'AbMod');\nAddAbilityMod('Acrobatics', '+0@Dex', 'AbMod');\nAddAbilityMod('Appraise', '+0@Int', 'AbMod');\nAddAbilityMod('Bluff', '+0@Cha', 'AbMod');\nAddAbilityMod('Climb', '+0@Str', 'AbMod');\nAddAbilityMod('Craft(Alchemy)', '+0@Int', 'AbMod');\nAddAbilityMod('Diplomacy', '+0@Cha', 'AbMod');\nAddAbilityMod('Disable Device', '+0@Dex', 'AbMod');\nAddAbilityMod('Disguise', '+0@Cha', 'AbMod');\nAddAbilityMod('Escape Artist', '+0@Dex', 'AbMod');\nAddAbilityMod('Fly', '+0@Dex', 'AbMod');\nAddAbilityMod('Handle Animal', '+0@Cha', 'AbMod');\nAddAbilityMod('Heal', '+0@Wis', 'AbMod');\nAddAbilityMod('Intimidate', '+0@Cha', 'AbMod');\nAddAbilityMod('Knowledge(Arcana)', '+0@Int', 'AbMod');\nAddAbilityMod('Knowledge(Dungeoneering)', '+0@Int', 'AbMod');\nAddAbilityMod('Knowledge(Geography)', '+0@Int', 'AbMod');\nAddAbilityMod('Knowledge(History)', '+0@Int', 'AbMod');\nAddAbilityMod('Knowledge(Nature)', '+0@Int', 'AbMod');\nAddAbilityMod('Knowledge(Nobility)', '+0@Int', 'AbMod');\nAddAbilityMod('Knowledge(The Planes)', '+0@Int', 'AbMod');\nAddAbilityMod('Knowledge(Religion)', '+0@Int', 'AbMod');\nAddAbilityMod('Linguistics', '+0@Int', 'AbMod');\nAddAbilityMod('Perception', '+0@Wis', 'AbMod');\nAddAbilityMod('Perform', '+0@Cha', 'AbMod');\nAddAbilityMod('Profession', '+0@Wis', 'AbMod');\nAddAbilityMod('Ride', '+0@Dex', 'AbMod');\nAddAbilityMod('Sense Motive', '+0@Wis', 'AbMod');\nAddAbilityMod('Slight of Hand', '+0@Dex', 'AbMod');\nAddAbilityMod('Spellcraft', '+0@Int', 'AbMod');\nAddAbilityMod('Stealth', '+0@Dex', 'AbMod');\nAddAbilityMod('Survival', '+0@Wis', 'AbMod');\nAddAbilityMod('Swim', '+0@Str', 'AbMod');\nAddAbilityMod('UMD', '+0@Cha', 'AbMod');\n"),
    new Effect("Skill ranks", true, -1, EffectType.Base, "AddAbilityMod('Acrobatics', '11', 'Ranks');\nAddAbilityMod('Appraise', '1', 'Ranks');\nAddAbilityMod('Bluff', '11', 'Ranks');\nAddAbilityMod('Craft(Alchemy)', '11', 'Ranks');\nAddAbilityMod('Diplomacy', '11', 'Ranks');\nAddAbilityMod('Fly', '11', 'Ranks');\nAddAbilityMod('Intimidate', '11', 'Ranks');\nAddAbilityMod('Knowledge(Arcana)', '11', 'Ranks');\nAddAbilityMod('Knowledge(Dungeoneering)', '11', 'Ranks');\nAddAbilityMod('Knowledge(Geography)', '11', 'Ranks');\nAddAbilityMod('Knowledge(History)', '6', 'Ranks');\nAddAbilityMod('Knowledge(Local)', '11', 'Ranks');\nAddAbilityMod('Knowledge(Nature)', '11', 'Ranks');\nAddAbilityMod('Knowledge(The Planes)', '11', 'Ranks');\nAddAbilityMod('Knowledge(Religion)', '11', 'Ranks');\nAddAbilityMod('Perception', '11', 'Ranks');\nAddAbilityMod('Ride', '1', 'Ranks');\nAddAbilityMod('Sense Motive', '11', 'Ranks');\nAddAbilityMod('Spellcraft', '11', 'Ranks');\nAddAbilityMod('Survival', '3', 'Ranks');\nAddAbilityMod('UMD', '11', 'Ranks');\n"),
  ],
  imageLink: "https://i.pinimg.com/550x/fd/51/0d/fd510d5cea4970b1d1d36201be01075d.jpg"
};
