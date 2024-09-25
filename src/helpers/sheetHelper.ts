import { AbilityData } from "../models/AbilityData";
import { ISheetData } from "../models/ISheetData";
import { ItemData } from "../models/ItemData";
import { QualityData } from "../models/QualityData";

export const defaultSheet: ISheetData = {
  qualityData: new Map([
    ["Player", new QualityData("Player", "Basic Info", "")],

    ["DR", new QualityData("DR", "Defence", "")],
    ["Immune", new QualityData("Immune", "Defence", "")],
    ["Resist", new QualityData("Resist", "Defence", "")],
    ["Miss Chance", new QualityData("Miss Chance", "Defence", "")],
    ["Senses", new QualityData("Senses", "Defence", "")],
  ]),
  abilityData: new Map([
    ["Str", new AbilityData("Str", "Ability Scores", 0, "10[PB Base]", 1)],
    ["Dex", new AbilityData("Dex", "Ability Scores", 0, "10[PB Base]", 2)],
    ["Con", new AbilityData("Con", "Ability Scores", 0, "10[PB Base]", 3)],
    ["Int", new AbilityData("Int", "Ability Scores", 0, "10[PB Base]", 4)],
    ["Wis", new AbilityData("Wis", "Ability Scores", 0, "10[PB Base]", 5)],
    ["Cha", new AbilityData("Cha", "Ability Scores", 0, "10[PB Base]", 6)],

    ["HP", new AbilityData("HP", "Health", 0, "")],
    ["THP", new AbilityData("THP", "Health", 0, "")],
    ["Current HP", new AbilityData("Current HP", "Health", 0, "")],

    ["AC", new AbilityData("AC", "AC", 10, "10[Base] +0@Dex")],
    ["Touch", new AbilityData("Touch", "AC", 10, "10[Base]  +0@Dex")],
    ["Flat-Footed", new AbilityData("Flat-Footed", "AC", 10, "10[Base]")],
    ["Initiative", new AbilityData("Initiative", "AC", 0, "")],
    ["Speed (Land)", new AbilityData("Speed (Land)", "AC", 30, "30[Base]")],

    ["Fortitude", new AbilityData("Fortitude", "Saves", 0, "")],
    ["Reflex", new AbilityData("Reflex", "Saves", 0, "")],
    ["Will", new AbilityData("Will", "Saves", 0, "")],

    ["BaB", new AbilityData("BaB", "Offence", 0, "")],
    ["Melee To Hit", new AbilityData("Melee To Hit", "Offence", 0, "")],
    ["Ranged To Hit", new AbilityData("Ranged To Hit", "Offence", 0, "")],
    ["CMB", new AbilityData("CMB", "Offence", 0, "")],
    ["CMD", new AbilityData("CMD", "Offence", 0, "")],

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
    ["Use Magic Device", new AbilityData("Use Magic Device", "Skills", 0, "")],
  ]),
  classSkills: new Set(),
  itemData: new Map([
    ["Staff", new ItemData("Staff", new AbilityData("Staff", "Items", 10, "5+2"), "Bag", 5)],
    ["Shoes", new ItemData("Shoes", new AbilityData("Shoes", "Items", 0, ""), "Bag", 3, [{name: "Name", desc: "Desc"}])],
  ]),
};
