import { AbilityData } from "../models/characterSheet/AbilityData";
import { ActionType } from "../models/characterSheet/ActionType";
import { DataGroupType } from "../models/characterSheet/DataGroupType";
import { Effect } from "../models/characterSheet/Effect";
import { EffectType } from "../models/characterSheet/EffectType";
import { ICharacterSheet } from "../models/characterSheet/ICharacterSheet";
import { ItemData } from "../models/characterSheet/ItemData";
import { QualityData } from "../models/characterSheet/QualityData";
import { SpecialAbility } from "../models/characterSheet/SpecialAbility";
import { SpecialAbilitySource } from "../models/characterSheet/SpecialAbilitySource";
import { SpecialAbilityType } from "../models/characterSheet/SpecialAbilityType";
import { TableData } from "../models/characterSheet/TableData";

export const defaultSheetPF: ICharacterSheet = {
    _id: null,
    qualityData: new Map([
        ["Name", new QualityData("Name", DataGroupType.TopInfo, "Ario 'Lightbringer' Takashi", 0)],
        ["Player", new QualityData("Player", DataGroupType.TopInfo, "EvilKurt", 1)],
        ["Campaign", new QualityData("Campaign", DataGroupType.TopInfo, "Delve into Mujinzawa", 2)],
        ["Race", new QualityData("Race", DataGroupType.TopInfo, "", 3)],
        ["Type", new QualityData("Type", DataGroupType.TopInfo, "", 4)],
        ["Size", new QualityData("Size", DataGroupType.TopInfo, "", 5)],
        ["Alignment", new QualityData("Alignment", DataGroupType.TopInfo, "Chatoic Good", 6)],
        ["Deity", new QualityData("Deity", DataGroupType.TopInfo, "Pulura", 7)],

        ["CurrHP", new QualityData("CurrHP", DataGroupType.HitPoints, "132", 2, "Current HP")],

        ["DR", new QualityData("DR", DataGroupType.Defense, "")],
        ["Immunities", new QualityData("Immunities", DataGroupType.Defense, "")],
        ["Resistances", new QualityData("Resistances", DataGroupType.Defense, "")],
        ["MissChance", new QualityData("MissChance", DataGroupType.Defense, "", 100, "Miss Chance")],
        ["Senses", new QualityData("Senses", DataGroupType.Defense, "")],

        [
            "Assumptions",
            new QualityData(
                "Assumptions",
                DataGroupType.Misc,
                "I can pick advanced talents from Spheres of Power\nRegional feats are forbidden but regional talents are not.\nTelepathy is an automatic ability relating to Magic Jar\nI'm allowed to do some downtime casting during character creation.\nSpells such as Arcane Concordance affects sphere powers"
            )
        ],
        ["Gender", new QualityData("Gender", DataGroupType.Misc, "")],
        ["Height", new QualityData("Height", DataGroupType.Misc, "")],
        ["Weight", new QualityData("Weight", DataGroupType.Misc, "")],
        ["FlyManeuverability", new QualityData("FlyManeuverability", DataGroupType.Mobility, "", 100, "Maneuverability")]
    ]),
    abilityData: new Map([
        ["Str", new AbilityData("Str", DataGroupType.AbilityScores, 1)],
        ["Dex", new AbilityData("Dex", DataGroupType.AbilityScores, 2)],
        ["Con", new AbilityData("Con", DataGroupType.AbilityScores, 3)],
        ["Int", new AbilityData("Int", DataGroupType.AbilityScores, 4)],
        ["Wis", new AbilityData("Wis", DataGroupType.AbilityScores, 5)],
        ["Cha", new AbilityData("Cha", DataGroupType.AbilityScores, 6)],

        ["Level", new AbilityData("Level", DataGroupType.Experience, 0)],
        ["Experience", new AbilityData("Experience", DataGroupType.Experience, 1)],

        ["HP", new AbilityData("HP", DataGroupType.HitPoints, 0)],
        ["THP", new AbilityData("THP", DataGroupType.HitPoints, 1)],

        ["AC", new AbilityData("AC", DataGroupType.AC, 0)],
        ["TouchAC", new AbilityData("TouchAC", DataGroupType.AC, 1, "Touch")],
        ["FlatFootedAC", new AbilityData("FlatFootedAC", DataGroupType.AC, 2, "Flat-Footed")],
        ["Initiative", new AbilityData("Initiative", DataGroupType.Mobility, 0)],
        ["SpeedLand", new AbilityData("SpeedLand", DataGroupType.Mobility, 1, "Speed (Land)")],
        ["SpeedSwim", new AbilityData("SpeedSwim", DataGroupType.Mobility, 2, "Speed (Swim)")],
        ["SpeedBurrow", new AbilityData("SpeedBurrow", DataGroupType.Mobility, 3, "Speed (Burrow)")],
        ["SpeedFly", new AbilityData("SpeedFly", DataGroupType.Mobility, 4, "Speed (Fly)")],

        ["Fort", new AbilityData("Fort", DataGroupType.Saves)],
        ["Ref", new AbilityData("Ref", DataGroupType.Saves)],
        ["Will", new AbilityData("Will", DataGroupType.Saves)],

        ["CL", new AbilityData("CL", DataGroupType.CasterLevel, 0)],
        ["BuffCL", new AbilityData("BuffCL", DataGroupType.CasterLevel, 1)],

        ["BaB", new AbilityData("BaB", DataGroupType.ToHit)],
        ["MeleeToHit", new AbilityData("MeleeToHit", DataGroupType.ToHit, 0, "MeleeToHit")],
        ["RangedToHit", new AbilityData("RangedToHit", DataGroupType.ToHit, 0, "RangedToHit")],
        ["CMB", new AbilityData("CMB", DataGroupType.ToHit)],
        ["CMD", new AbilityData("CMD", DataGroupType.ToHit)],

        ["Acrobatics", new AbilityData("Acrobatics", DataGroupType.Skills)],
        ["Appraise", new AbilityData("Appraise", DataGroupType.Skills)],
        ["Bluff", new AbilityData("Bluff", DataGroupType.Skills)],
        ["Climb", new AbilityData("Climb", DataGroupType.Skills)],
        ["Craft", new AbilityData("Craft", DataGroupType.Skills)],
        ["Diplomacy", new AbilityData("Diplomacy", DataGroupType.Skills)],
        ["Disable ", new AbilityData("Disable ", DataGroupType.Skills)],
        ["Disguise", new AbilityData("Disguise", DataGroupType.Skills)],
        ["Escape ", new AbilityData("Escape ", DataGroupType.Skills)],
        ["Fly", new AbilityData("Fly", DataGroupType.Skills)],
        ["Handle Animal", new AbilityData("Handle Animal", DataGroupType.Skills)],
        ["Heal", new AbilityData("Heal", DataGroupType.Skills)],
        ["Iaijutsu Focus", new AbilityData("Iaijutsu Focus", DataGroupType.Skills)],
        ["Intimidate", new AbilityData("Intimidate", DataGroupType.Skills)],
        ["Knowledge(Arcana)", new AbilityData("Knowledge(Arcana)", DataGroupType.Skills, 0)],
        ["Knowledge(Dungeoneering)", new AbilityData("Knowledge(Dungeoneering)", DataGroupType.Skills)],
        ["Knowledge(Geography)", new AbilityData("Knowledge(Geography)", DataGroupType.Skills)],
        ["Knowledge(History)", new AbilityData("Knowledge(History)", DataGroupType.Skills)],
        ["Knowledge(Local)", new AbilityData("Knowledge(Local)", DataGroupType.Skills)],
        ["Knowledge(Nature)", new AbilityData("Knowledge(Nature)", DataGroupType.Skills)],
        ["Knowledge(Nobility)", new AbilityData("Knowledge(Nobility)", DataGroupType.Skills)],
        ["Knowledge(The Planes)", new AbilityData("Knowledge(The Planes)", DataGroupType.Skills)],
        ["Knowledge(Religion)", new AbilityData("Knowledge(Religion)", DataGroupType.Skills)],
        ["Linguistics", new AbilityData("Linguistics", DataGroupType.Skills)],
        ["LucidDreaming", new AbilityData("LucidDreaming", DataGroupType.Skills, 100, "Lucid Dreaming")],
        ["Perception", new AbilityData("Perception", DataGroupType.Skills)],
        ["Perform", new AbilityData("Perform", DataGroupType.Skills)],
        ["Profession", new AbilityData("Profession", DataGroupType.Skills)],
        ["Ride", new AbilityData("Ride", DataGroupType.Skills)],
        ["SenseMotive", new AbilityData("SenseMotive", DataGroupType.Skills, 100, "Sense Motive")],
        ["SlightOfHand", new AbilityData("SlightOfHand", DataGroupType.Skills, 100, "Sleight of Hand")],
        ["Spellcraft", new AbilityData("Spellcraft", DataGroupType.Skills)],
        ["Stealth", new AbilityData("Stealth", DataGroupType.Skills)],
        ["Survival", new AbilityData("Survival", DataGroupType.Skills)],
        ["Swim", new AbilityData("Swim", DataGroupType.Skills)],
        ["UMD", new AbilityData("UMD", DataGroupType.Skills, 100, "Use Magic Device")]
    ]),
    classSkills: new Set(["Appraise"]),
    itemData: new Map([
        ["Staff", new ItemData("Staff", new AbilityData("Staff", DataGroupType.Items), "Bag", 5)],
        ["Shoes", new ItemData("Shoes", new AbilityData("Shoes", DataGroupType.Items), "Bag", 3, [{ name: "Name", desc: "Desc" }])]
    ]),
    tableData: new Map([
        [
            "Levels",
            new TableData(
                "Levels",
                DataGroupType.Experience,
                ["Class", "Level", "Total Level"],
                [
                    ["S-Class Wizard // Incanter", "1 // 1", "1"],
                    ["S-Class Wizard // Incanter", "2 // 2", "2"],
                    ["S-Class Wizard // Incanter", "3 // 3", "3"],
                    ["S-Class Wizard // Incanter", "4 // 4", "4"],
                    ["S-Class Wizard // Incanter", "5 // 5", "5"],
                    ["Stargazer // Incanter", "1 // 6", "6"],
                    ["Stargazer // Incanter", "2 // 7", "7"],
                    ["Stargazer // Incanter", "3 // 8", "8"],
                    ["Stargazer // Incanter", "4 // 9", "9"],
                    ["Stargazer // Incanter", "5 // 10", "10"],
                    ["Loremaster // Incanter", "1 // 11", "11"]
                ]
            )
        ]
    ]),
    specialAbilities: [
        new SpecialAbility(
            "Arcane Reservoir",
            SpecialAbilitySource.Class,
            "S-Wizard (Exploiter Wizard) 1",
            SpecialAbilityType.Supernatural,
            1,
            true,
            ActionType.Free,
            "An arcanist has an innate pool of magical energy that she can draw upon to fuel her arcanist exploits and enhance her spells. The arcanist’s arcane reservoir can hold a maximum amount of magical energy equal to 3 + the wizard’s level. Each day, when preparing spells, the arcanist’s arcane reservoir fills with raw magical energy, gaining a number of points equal to 3 + 1/2 her wizards level. Any points she had from the previous day are lost. She can also regain these points through the consume spells class feature and some arcanist exploits. The arcane reservoir can never hold more points than the maximum amount noted above; points gained in excess of this total are lost.\n\nPoints from the arcanist reservoir are used to fuel many of the arcanist’s powers. In addition, the arcanist can expend 1 point from her arcane reservoir as a free action whenever she casts a wizard spell. If she does, she can choose to increase the caster level by 1 or increase the spell’s DC by 1. She can expend no more than 1 point from her reservoir on a given spell in this way.",
            [new Effect("Exploit", true, 1, EffectType.Class, "AddAbilityMod('BuffCL', '2', 'Untyped');")]
        )
    ],
    effects: [
        new Effect(
            "Rolls",
            true,
            -1,
            EffectType.Base,
            "SetAbility('Str', '7');\nSetAbility('Dex', '7');\nSetAbility('Con', '7');\nSetAbility('Int', '18');\nSetAbility('Wis', '18');\nSetAbility('Cha', '15');\n\nAddAbilityMod('HP', '6*0#Level', 'Rolls');"
        ),
        new Effect(
            "Formulas",
            true,
            -1,
            EffectType.Base,
            "AddAbilityMod('HP', '0@Con*0#Level', 'Base');\n\nAddAbilityMod('AC', '10', 'Base');\nAddAbilityMod('TouchAC', '10', 'Base');\nAddAbilityMod('FlatFootedAC', '10', 'Base');\nAddAbilityMod('AC', '0@Dex', 'Untyped');\nAddAbilityMod('TouchAC', '0@Dex', 'Untyped');\n\nAddAbilityMod('Fort', '0@Con', 'Untyped');\nAddAbilityMod('Ref', '0@Dex', 'Untyped');\nAddAbilityMod('Will', '0@Wis', 'Untyped');\n\nAddAbilityMod('Initiative', '0@Dex', 'Untyped');"
        ),
        new Effect(
            "Level",
            true,
            0,
            EffectType.Base,
            "AddAbilityMod('Level', '11');\nAddAbilityMod('Int', '4');\n\nAddAbilityMod('Experience', '1000', 'Session 1');"
        ),
        new Effect(
            "Age",
            true,
            0,
            EffectType.Base,
            "AddAbilityMod('Str', '-6');\nAddAbilityMod('Dex', '-6');\nAddAbilityMod('Con', '-6');\nAddAbilityMod('Int', '+3');\nAddAbilityMod('Wis', '+3');\nAddAbilityMod('Cha', '+3');\n"
        ),
        new Effect(
            "Yueren Racial",
            true,
            -1,
            EffectType.Racial,
            "SetQuality('Race', 'Yueyinren');\nSetQuality('Type', 'Humanoid');\nSetQuality('Size', 'Medium');\nSetQuality('Gender', 'Male');\nSetQuality('Height', '6 ft.');\nSetQuality('Weight', '103 lbs');\n\nAddAbilityMod('Dex', '2', 'Racial');\nAddAbilityMod('Con', '-2', 'Racial');\nAddAbilityMod('Int', '2', 'Racial');\nSetAbility('SpeedLand', '30');"
        ),
        new Effect("Caster Level", true, 1, EffectType.Class, "SetAbility('CL', '11');\nAddAbilityMod('BuffCL', '0#CL', 'Untyped');"),
        new Effect(
            "S-Class Wizard // Incanter Base",
            true,
            1,
            EffectType.Class,
            "AddAbilityMod('BaB', '2', 'Untyped');\AddAbilityMod('Fort', '1', 'Untyped');\nAddAbilityMod('Ref', '1', 'Untyped');\nAddAbilityMod('Will', '4', 'Untyped');"
        ),
        new Effect("Incanter Effects", true, 1, EffectType.Class, "AddAbilityMod('SpeedLand', '15', 'Untyped', 'Sphere Specializations (Time - Fast(Su))');"),
        new Effect("Stargazer Effects", true, 1, EffectType.Class, ""),
        new Effect("Stargazer Base", true, 1, EffectType.Class, "AddAbilityMod('Initiative', '2', 'Insight', 'Sidereal Arcana - The Stargazer');"),
        new Effect(
            "Magic Jar (Barbed Devil)",
            true,
            2,
            EffectType.Spell,
            "SetQuality('Type', 'Outsider (Devil, Evil, Extraplanar, Lawful)');\nSetQuality('Size', 'Medium');\nSetQuality('Height', '6\\\'9 ft.');\nSetQuality('Weight', '293 lbs');\n\nAddQualityLine('DR', '10/Good');\nAddQualityLine('Immunities', 'Fire');\nAddQualityLine('Immunities', 'Poison');\nAddQualityLine('Resistances', 'Acid 10');\nAddQualityLine('Resistances', 'Cold 10');\n\nSetAbility('Str', '23');\nSetAbility('Dex', '23');\nSetAbility('Con', '22');\nAddQualityLine('Senses', 'Darkvision 60');\nAddQualityLine('Senses', 'See in Darkness');\nAddAbilityMod('AC', '10', 'Natural');\nSetAbility('SpeedLand', '30');"
        ),
        new Effect("Ablative Barrier", true, 2, EffectType.Spell, "AddQualityLine('DR', '5/-');"),
        new Effect(
            "Siphon Magic",
            true,
            2,
            EffectType.Spell,
            "AddQualityLine('Senses', 'See Invisibility');\nAddQualityLine('Senses', 'True Seeing');\nAddQualityLine('Senses', 'Arcane Sight');\nAddQualityLine('Senses', 'Detect Snares and Pits');\nAddQualityLine('Senses', 'Detect Chaos/Evil/Good/Law');"
        ),
        new Effect("Ablating Aegis", true, 2, EffectType.Spell, "AddQualityLine('MissChance', '45% (Drops by 5%)');"),
        new Effect(
            "Aegis - Deflection",
            true,
            2,
            EffectType.Spell,
            "AddAbilityMod('AC', '(0#BuffCL/5)', 'Deflection');\nAddAbilityMod('TouchAC', '(0#BuffCL/5)', 'Deflection');\nAddAbilityMod('FlatFootedAC', '(0#BuffCL/5)', 'Deflection');"
        ),
        new Effect(
            "Aegis - Armored Magic (Armor)",
            true,
            2,
            EffectType.Spell,
            "AddAbilityMod('AC', '3+(0#BuffCL/5)', 'Armor');\nAddAbilityMod('FlatFootedAC', '3+(0#BuffCL/5)', 'Armor');"
        ),
        new Effect(
            "Aegis - Armored Magic (Shield)",
            true,
            2,
            EffectType.Spell,
            "AddAbilityMod('AC', '(0#BuffCL/5)', 'Shield');\nAddAbilityMod('FlatFootedAC', '(0#BuffCL/5)', 'Shield');"
        ),
        new Effect("Blur", true, 2, EffectType.Spell, "AddQualityLine('MissChance', '20% (True Seeing)');"),
        new Effect("Army Across Time", true, 3, EffectType.Spell, "MultAbilityMod('BuffCL', '1.5')"),
        new Effect("Protection from Arrows, Commual", true, 2, EffectType.Spell, "AddQualityLine('DR', '10/Magic (vs Ranged Weapons)');"),
        new Effect("Maximized Greater False Life", true, 2, EffectType.Spell, "SetAbility('THP', '40');"),
        new Effect(
            "Lesser Spellcasting Contract",
            true,
            2,
            EffectType.Spell,
            "AddAbilityMod('AC', '2', 'Profane');\nAddAbilityMod('TouchAC', '2', 'Profane');\nAddAbilityMod('FlatFootedAC', '2', 'Profane');\nAddAbilityMod('Initiative', '2', 'Profane');"
        ),
        new Effect("Ghost Syrup", true, 1, EffectType.Item, "SetAbility('Str', '—');"),
        new Effect("Soothsayer's Rainment(Mental Acuity)", true, 2, EffectType.Item, "AddAbilityMod('Int', '(0#UMD - 12)/3', 'Inherent');"),
        new Effect("Orange Prism Ioun Stone", true, 2, EffectType.Item, "AddAbilityMod('CL', '1', 'Enchancement');"),
        new Effect("Shaman's Paint", true, 2, EffectType.Item, "AddAbilityMod('BuffCL', '2', 'Alchemical');"),
        new Effect("Bead of Karma", true, 2, EffectType.Item, "AddAbilityMod('BuffCL', '4');"),
        new Effect("Outsider - Exile Trait", true, 1, EffectType.Feat, "AddAbilityMod('Initiative', '2');"),
        new Effect(
            "Skill mods",
            true,
            -1,
            EffectType.Base,
            "AddAbilityMod('UMD', '+0@Cha', 'AbMod');\nAddAbilityMod('Acrobatics', '+0@Dex', 'AbMod');\nAddAbilityMod('Appraise', '+0@Int', 'AbMod');\nAddAbilityMod('Bluff', '+0@Cha', 'AbMod');\nAddAbilityMod('Climb', '+0@Str', 'AbMod');\nAddAbilityMod('Craft(Alchemy)', '+0@Int', 'AbMod');\nAddAbilityMod('Diplomacy', '+0@Cha', 'AbMod');\nAddAbilityMod('Disable Device', '+0@Dex', 'AbMod');\nAddAbilityMod('Disguise', '+0@Cha', 'AbMod');\nAddAbilityMod('Escape Artist', '+0@Dex', 'AbMod');\nAddAbilityMod('Fly', '+0@Dex', 'AbMod');\nAddAbilityMod('Handle Animal', '+0@Cha', 'AbMod');\nAddAbilityMod('Heal', '+0@Wis', 'AbMod');\nAddAbilityMod('Intimidate', '+0@Cha', 'AbMod');\nAddAbilityMod('Knowledge(Arcana)', '+0@Int', 'AbMod');\nAddAbilityMod('Knowledge(Dungeoneering)', '+0@Int', 'AbMod');\nAddAbilityMod('Knowledge(Geography)', '+0@Int', 'AbMod');\nAddAbilityMod('Knowledge(History)', '+0@Int', 'AbMod');\nAddAbilityMod('Knowledge(Nature)', '+0@Int', 'AbMod');\nAddAbilityMod('Knowledge(Nobility)', '+0@Int', 'AbMod');\nAddAbilityMod('Knowledge(The Planes)', '+0@Int', 'AbMod');\nAddAbilityMod('Knowledge(Religion)', '+0@Int', 'AbMod');\nAddAbilityMod('Linguistics', '+0@Int', 'AbMod');\nAddAbilityMod('Perception', '+0@Wis', 'AbMod');\nAddAbilityMod('Perform', '+0@Cha', 'AbMod');\nAddAbilityMod('Profession', '+0@Wis', 'AbMod');\nAddAbilityMod('Ride', '+0@Dex', 'AbMod');\nAddAbilityMod('Sense Motive', '+0@Wis', 'AbMod');\nAddAbilityMod('Slight of Hand', '+0@Dex', 'AbMod');\nAddAbilityMod('Spellcraft', '+0@Int', 'AbMod');\nAddAbilityMod('Stealth', '+0@Dex', 'AbMod');\nAddAbilityMod('Survival', '+0@Wis', 'AbMod');\nAddAbilityMod('Swim', '+0@Str', 'AbMod');\nAddAbilityMod('UMD', '+0@Cha', 'AbMod');\n"
        ),
        new Effect(
            "Skill ranks",
            true,
            -1,
            EffectType.Base,
            "AddAbilityMod('Acrobatics', '11', 'Ranks');\nAddAbilityMod('Appraise', '1', 'Ranks');\nAddAbilityMod('Bluff', '11', 'Ranks');\nAddAbilityMod('Craft(Alchemy)', '11', 'Ranks');\nAddAbilityMod('Diplomacy', '11', 'Ranks');\nAddAbilityMod('Fly', '11', 'Ranks');\nAddAbilityMod('Intimidate', '11', 'Ranks');\nAddAbilityMod('Knowledge(Arcana)', '11', 'Ranks');\nAddAbilityMod('Knowledge(Dungeoneering)', '11', 'Ranks');\nAddAbilityMod('Knowledge(Geography)', '11', 'Ranks');\nAddAbilityMod('Knowledge(History)', '6', 'Ranks');\nAddAbilityMod('Knowledge(Local)', '11', 'Ranks');\nAddAbilityMod('Knowledge(Nature)', '11', 'Ranks');\nAddAbilityMod('Knowledge(The Planes)', '11', 'Ranks');\nAddAbilityMod('Knowledge(Religion)', '11', 'Ranks');\nAddAbilityMod('Perception', '11', 'Ranks');\nAddAbilityMod('Ride', '1', 'Ranks');\nAddAbilityMod('Sense Motive', '11', 'Ranks');\nAddAbilityMod('Spellcraft', '11', 'Ranks');\nAddAbilityMod('Survival', '3', 'Ranks');\nAddAbilityMod('UMD', '11', 'Ranks');\n"
        )
    ],
    imageLink: "https://i.pinimg.com/550x/fd/51/0d/fd510d5cea4970b1d1d36201be01075d.jpg"
};

export const emptySheet: ICharacterSheet = {
    _id: null,
    qualityData: new Map(),
    abilityData: new Map(),
    classSkills: new Set(),
    itemData: new Map(),
    tableData: new Map(),
    specialAbilities: [],
    effects: [],
    imageLink: ""
};
