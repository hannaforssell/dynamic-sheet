import { AbilityData } from "../models/characterSheet/AbilityData";
import { Effect } from "../models/characterSheet/Effect";
import { EffectType } from "../models/characterSheet/EffectType";
import { ICharacterSheet } from "../models/characterSheet/ICharacterSheet";
import { ItemData } from "../models/characterSheet/ItemData";
import { QualityData } from "../models/characterSheet/QualityData";
import { TableData } from "../models/characterSheet/TableData";

export const defaultSheetPF: ICharacterSheet = {
  _id: null,
  qualityData: new Map([
    ["Name", new QualityData("Name", "Top Info", "Ario 'Lightbringer' Takashi", 0)],
    ["Race", new QualityData("Race", "Top Info", "", 1)],
    ["Type", new QualityData("Type", "Top Info", "", 2)],
    ["Player", new QualityData("Player", "Top Info", "EvilKurt")],
    ["Campaign", new QualityData("Campaign", "Top Info", "Delve into Mujinzawa")],

    ["CurrHP", new QualityData("CurrHP", "Hit Points", "132", 2, "Current HP")],

    ["DR", new QualityData("DR", "Defense", "")],
    ["Immunities", new QualityData("Immunities", "Defense", "")],
    ["Resistances", new QualityData("Resistances", "Defense", "")],
    ["Miss Chance", new QualityData("Miss Chance", "Defense", "")],
    ["Senses", new QualityData("Senses", "Defense", "")],
  ]),
  abilityData: new Map([
    ["Str", new AbilityData("Str", "Ability Scores", 1)],
    ["Dex", new AbilityData("Dex", "Ability Scores", 2)],
    ["Con", new AbilityData("Con", "Ability Scores", 3)],
    ["Int", new AbilityData("Int", "Ability Scores", 4)],
    ["Wis", new AbilityData("Wis", "Ability Scores", 5)],
    ["Cha", new AbilityData("Cha", "Ability Scores", 6)],

    ["Level", new AbilityData("Level", "Experience", 0)],
    ["Experience", new AbilityData("Experience", "Experience", 1)],

    ["HP", new AbilityData("HP", "Hit Points", 0)],
    ["THP", new AbilityData("THP", "Hit Points", 1)],

    ["AC", new AbilityData("AC", "AC", 0)],
    ["Touch", new AbilityData("Touch", "AC", 0)],
    ["Flat-Footed", new AbilityData("Flat-Footed", "AC", 0)],
    ["Initiative", new AbilityData("Initiative", "AC", 0)],
    ["Speed (Land)", new AbilityData("Speed (Land)", "AC", 0)],

    ["Fortitude", new AbilityData("Fortitude", "Saves")],
    ["Reflex", new AbilityData("Reflex", "Saves")],
    ["Will", new AbilityData("Will", "Saves")],

    ["BaB", new AbilityData("BaB", "Offense")],
    ["Melee To Hit", new AbilityData("Melee To Hit", "Offense")],
    ["Ranged To Hit", new AbilityData("Ranged To Hit", "Offense")],
    ["CMB", new AbilityData("CMB", "Offense")],
    ["CMD", new AbilityData("CMD", "Offense")],

    ["Acrobatics", new AbilityData("Acrobatics", "Skills")],
    ["Appraise", new AbilityData("Appraise", "Skills")],
    ["Bluff", new AbilityData("Bluff", "Skills")],
    ["Climb", new AbilityData("Climb", "Skills")],
    ["Craft", new AbilityData("Craft", "Skills")],
    ["Diplomacy", new AbilityData("Diplomacy", "Skills")],
    ["Disable ", new AbilityData("Disable ", "Skills")],
    ["Disguise", new AbilityData("Disguise", "Skills")],
    ["Escape ", new AbilityData("Escape ", "Skills")],
    ["Fly", new AbilityData("Fly", "Skills")],
    ["Handle Animal", new AbilityData("Handle Animal", "Skills")],
    ["Heal", new AbilityData("Heal", "Skills")],
    ["Iaijutsu Focus", new AbilityData("Iaijutsu Focus", "Skills")],
    ["Intimidate", new AbilityData("Intimidate", "Skills")],
    [
      "Knowledge (Arcana)",
      new AbilityData("Knowledge (Arcana)", "Skills"),
    ],
    [
      "Knowledge (Dungeoneering)",
      new AbilityData("Knowledge (Dungeoneering)", "Skills"),
    ],
    [
      "Knowledge (Geography)",
      new AbilityData("Knowledge (Geography)", "Skills"),
    ],
    [
      "Knowledge (History)",
      new AbilityData("Knowledge (History)", "Skills"),
    ],
    [
      "Knowledge (Local)",
      new AbilityData("Knowledge (Local)", "Skills"),
    ],
    [
      "Knowledge (Nature)",
      new AbilityData("Knowledge (Nature)", "Skills"),
    ],
    [
      "Knowledge (Nobility)",
      new AbilityData("Knowledge (Nobility)", "Skills"),
    ],
    [
      "Knowledge (The Planes)",
      new AbilityData("Knowledge (The Planes)", "Skills"),
    ],
    [
      "Knowledge (Religion)",
      new AbilityData("Knowledge (Religion)", "Skills"),
    ],
    ["Linguistics", new AbilityData("Linguistics", "Skills")],
    ["Lucid Dreaming", new AbilityData("Lucid Dreaming", "Skills")],
    ["Perception", new AbilityData("Perception", "Skills")],
    ["Perform", new AbilityData("Perform", "Skills")],
    ["Profession", new AbilityData("Profession", "Skills")],
    ["Ride", new AbilityData("Ride", "Skills")],
    ["Sense Motive", new AbilityData("Sense Motive", "Skills")],
    ["Slight of Hand", new AbilityData("Slight of Hand", "Skills")],
    ["Spellcraft", new AbilityData("Spellcraft", "Skills")],
    ["Stealth", new AbilityData("Stealth", "Skills")],
    ["Survival", new AbilityData("Survival", "Skills")],
    ["Swim", new AbilityData("Swim", "Skills")],
    ["UMD", new AbilityData("UMD", "Skills", 100, "Use Magic Device")],
  ]),
  classSkills: new Set(["Appraise"]),
  itemData: new Map([
    ["Staff", new ItemData("Staff", new AbilityData("Staff", "Items"), "Bag", 5)],
    ["Shoes", new ItemData("Shoes", new AbilityData("Shoes", "Items"), "Bag", 3, [{name: "Name", desc: "Desc"}])],
  ]),
  tableData: new Map([
    ["Levels", new TableData("Levels", "Experience", ["Class", "Level", "Total Level"], [["S-Class Wizard // Incanter", "1 // 1", "1"], ["S-Class Wizard // Incanter", "2 // 2", "2"], ["S-Class Wizard	// Incanter", "3 // 3", "3"], ["S-Class Wizard	// Incanter", "4 // 4", "4"], ["S-Class Wizard	// Incanter", "5 // 5", "5"], ["Stargazer // Incanter", "1 // 6", "6"], ["Stargazer // Incanter", "2 // 7", "7"], ["Stargazer // Incanter", "3 // 8", "8"], ["Stargazer // Incanter", "4 // 9", "9"], ["Stargazer // Incanter", "5 // 10", "10"], ["Loremaster // Incanter", "1 // 11", "11"]])]
  ]),
  effects: [
    new Effect("Rolls", true, -1, EffectType.Base, "SetAbility('Str', '7');\nSetAbility('Dex', '7');\nSetAbility('Con', '7');\nSetAbility('Int', '18');\nSetAbility('Wis', '18');\nSetAbility('Cha', '15');\n\nAddAbilityMod('HP', '6*0#Level', 'Rolls');"),
    new Effect("Formulas", true, -1, EffectType.Base, "AddAbilityMod('HP', '0@Con*0#Level', 'Base');\nAddAbilityMod('AC', '10', 'Base');"),
    new Effect("Yueren Racial", true, -1, EffectType.Racial, "SetQuality('Race', 'Yueyinren');SetQuality('Type', 'Humanoid');\nAddAbilityMod('Dex', '2', 'Racial');\nAddAbilityMod('Con', '-2', 'Racial');\nAddAbilityMod('Int', '2', 'Racial');"),
    new Effect("Level", true, 0, EffectType.Base, "AddAbilityMod('Level', '11');\nAddAbilityMod('Int', '4');\n\nAddAbilityMod('Experience', '1000', 'Session 1');"),
    new Effect("Age", true, 0, EffectType.Base, "AddAbilityMod('Str', '-6');\nAddAbilityMod('Dex', '-6');\nAddAbilityMod('Con', '-6');\nAddAbilityMod('Int', '+3');\nAddAbilityMod('Wis', '+3');\nAddAbilityMod('Cha', '+3');\n"),
    new Effect("Magic Jar (Barbed Devil)", true, 2, EffectType.Spell, "SetQuality('Type', 'Outsider (Devil, Evil, Extraplanar, Lawful)');\nAddQualityLine('DR', '10/Good');\nAddQualityLine('Immunities', 'Fire');\nAddQualityLine('Immunities', 'Poison');\nAddQualityLine('Resistances', 'Acid 10');\nAddQualityLine('Resistances', 'Cold 10');\n\n\nSetAbility('Str', '23');\nSetAbility('Dex', '23');\nSetAbility('Con', '22');\nAddQualityLine('Senses', 'Darkvision 60');\nAddQualityLine('Senses', 'See in Darkness');"),
    new Effect("Ablative Barrier", true, 2, EffectType.Spell, "AddQualityLine('DR', '5/-');"),
    new Effect("Protection from Arrows, Commual", true, 2, EffectType.Spell, "AddQualityLine('DR', '10/Magic (vs Ranged Weapons)');"),
    new Effect("Maximized Greater False Life", true, 2, EffectType.Spell, "SetAbility('THP', '40');"),
    new Effect("Ghost Syrup", true, 1, EffectType.Item, "SetAbility('Str', '—');"),
    new Effect("Soothsayer's Rainment(Mental Acuity)", true, 2, EffectType.Item, "AddAbilityMod('Int', '(0#UMD - 12)/3', 'Inherent');"),
    new Effect("Skill mods", true, -1, EffectType.Base, "AddAbilityMod('UMD', '+0@Cha', 'AbMod');\nAddAbilityMod('Acrobatics', '+0@Dex', 'AbMod');\nAddAbilityMod('Appraise', '+0@Int', 'AbMod');\nAddAbilityMod('Bluff', '+0@Cha', 'AbMod');\nAddAbilityMod('Climb', '+0@Str', 'AbMod');\nAddAbilityMod('Craft(Alchemy)', '+0@Int', 'AbMod');\nAddAbilityMod('Diplomacy', '+0@Cha', 'AbMod');\nAddAbilityMod('Disable Device', '+0@Dex', 'AbMod');\nAddAbilityMod('Disguise', '+0@Cha', 'AbMod');\nAddAbilityMod('Escape Artist', '+0@Dex', 'AbMod');\nAddAbilityMod('Fly', '+0@Dex', 'AbMod');\nAddAbilityMod('Handle Animal', '+0@Cha', 'AbMod');\nAddAbilityMod('Heal', '+0@Wis', 'AbMod');\nAddAbilityMod('Intimidate', '+0@Cha', 'AbMod');\nAddAbilityMod('Knowledge(Arcana)', '+0@Int', 'AbMod');\nAddAbilityMod('Knowledge(Dungeoneering)', '+0@Int', 'AbMod');\nAddAbilityMod('Knowledge(Geography)', '+0@Int', 'AbMod');\nAddAbilityMod('Knowledge(History)', '+0@Int', 'AbMod');\nAddAbilityMod('Knowledge(Nature)', '+0@Int', 'AbMod');\nAddAbilityMod('Knowledge(Nobility)', '+0@Int', 'AbMod');\nAddAbilityMod('Knowledge(The Planes)', '+0@Int', 'AbMod');\nAddAbilityMod('Knowledge(Religion)', '+0@Int', 'AbMod');\nAddAbilityMod('Linguistics', '+0@Int', 'AbMod');\nAddAbilityMod('Perception', '+0@Wis', 'AbMod');\nAddAbilityMod('Perform', '+0@Cha', 'AbMod');\nAddAbilityMod('Profession', '+0@Wis', 'AbMod');\nAddAbilityMod('Ride', '+0@Dex', 'AbMod');\nAddAbilityMod('Sense Motive', '+0@Wis', 'AbMod');\nAddAbilityMod('Slight of Hand', '+0@Dex', 'AbMod');\nAddAbilityMod('Spellcraft', '+0@Int', 'AbMod');\nAddAbilityMod('Stealth', '+0@Dex', 'AbMod');\nAddAbilityMod('Survival', '+0@Wis', 'AbMod');\nAddAbilityMod('Swim', '+0@Str', 'AbMod');\nAddAbilityMod('UMD', '+0@Cha', 'AbMod');\n"),
    new Effect("Skill ranks", true, -1, EffectType.Base, "AddAbilityMod('Acrobatics', '11', 'Ranks');\nAddAbilityMod('Appraise', '1', 'Ranks');\nAddAbilityMod('Bluff', '11', 'Ranks');\nAddAbilityMod('Craft(Alchemy)', '11', 'Ranks');\nAddAbilityMod('Diplomacy', '11', 'Ranks');\nAddAbilityMod('Fly', '11', 'Ranks');\nAddAbilityMod('Intimidate', '11', 'Ranks');\nAddAbilityMod('Knowledge(Arcana)', '11', 'Ranks');\nAddAbilityMod('Knowledge(Dungeoneering)', '11', 'Ranks');\nAddAbilityMod('Knowledge(Geography)', '11', 'Ranks');\nAddAbilityMod('Knowledge(History)', '6', 'Ranks');\nAddAbilityMod('Knowledge(Local)', '11', 'Ranks');\nAddAbilityMod('Knowledge(Nature)', '11', 'Ranks');\nAddAbilityMod('Knowledge(The Planes)', '11', 'Ranks');\nAddAbilityMod('Knowledge(Religion)', '11', 'Ranks');\nAddAbilityMod('Perception', '11', 'Ranks');\nAddAbilityMod('Ride', '1', 'Ranks');\nAddAbilityMod('Sense Motive', '11', 'Ranks');\nAddAbilityMod('Spellcraft', '11', 'Ranks');\nAddAbilityMod('Survival', '3', 'Ranks');\nAddAbilityMod('UMD', '11', 'Ranks');\n"),
  ],
  imageLink: "https://i.pinimg.com/550x/fd/51/0d/fd510d5cea4970b1d1d36201be01075d.jpg"
};
