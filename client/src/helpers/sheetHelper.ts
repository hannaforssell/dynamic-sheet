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
        ["Race", new QualityData("Race", DataGroupType.TopInfo, "", 1)],
        ["Type", new QualityData("Type", DataGroupType.TopInfo, "", 2)],
        ["Size", new QualityData("Size", DataGroupType.TopInfo, "", 3)],
        ["Alignment", new QualityData("Alignment", DataGroupType.TopInfo, "Chatoic Good", 4)],

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
        ["Player", new QualityData("Player", DataGroupType.Misc, "EvilKurt")],
        ["Campaign", new QualityData("Campaign", DataGroupType.Misc, "Delve into Mujinzawa")],
        ["Deity", new QualityData("Deity", DataGroupType.Misc, "Pulura")],
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
        ["WizardLevel", new AbilityData("WizardLevel", DataGroupType.Experience, 2, "Wizard lvl")],
        ["StargazerLevel", new AbilityData("StargazerLevel", DataGroupType.Experience, 3, "Stargazer lvl")],
        ["LoremasterLevel", new AbilityData("LoremasterLevel", DataGroupType.Experience, 4, "Loremaster lvl")],
        ["IncanterLevel", new AbilityData("IncanterLevel", DataGroupType.Experience, 5, "Incanter lvl")],

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
        ["ExtraBuffCL", new AbilityData("ExtraBuffCL", DataGroupType.CasterLevel, 2)],

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
        ["Knowledge(Arcana)", new AbilityData("Knowledge (Arcana)", DataGroupType.Skills)],
        ["Knowledge(Dungeoneering)", new AbilityData("Knowledge (Dungeoneering)", DataGroupType.Skills)],
        ["Knowledge(Geography)", new AbilityData("Knowledge (Geography)", DataGroupType.Skills)],
        ["Knowledge(History)", new AbilityData("Knowledge (History)", DataGroupType.Skills)],
        ["Knowledge(Local)", new AbilityData("Knowledge (Local - Region)", DataGroupType.Skills)],
        ["Knowledge(Nature)", new AbilityData("Knowledge (Nature)", DataGroupType.Skills)],
        ["Knowledge(Nobility)", new AbilityData("Knowledge (Nobility)", DataGroupType.Skills)],
        ["Knowledge(The Planes)", new AbilityData("Knowledge (The Planes)", DataGroupType.Skills)],
        ["Knowledge(Religion)", new AbilityData("Knowledge (Religion)", DataGroupType.Skills)],
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
        new SpecialAbility("Base Effects", SpecialAbilitySource.Other, "—", SpecialAbilityType.Natural, null, false, null, "Basic rolls and formulas", [
            new Effect(
                "Rolls",
                true,
                -1,
                EffectType.Base,
                "SetAbility('Str', '7');\nSetAbility('Dex', '7');\nSetAbility('Con', '7');\nSetAbility('Int', '18');\nSetAbility('Wis', '18');\nSetAbility('Cha', '15');\n\nAddAbilityMod('Str', '-6');\nAddAbilityMod('Dex', '-6');\nAddAbilityMod('Con', '-6');\nAddAbilityMod('Int', '+3');\nAddAbilityMod('Wis', '+3');\nAddAbilityMod('Cha', '+3');\n\nAddAbilityMod('HP', '6*0#Level', 'Rolls');"
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
                "AddAbilityMod('Level', '11');\nAddAbilityMod('WizardLevel', '5', 'Untyped');\nAddAbilityMod('StargazerLevel', '5', 'Untyped');\nAddAbilityMod('LoremasterLevel', '1', 'Untyped');\nAddAbilityMod('IncanterLevel', '11', 'Untyped');\nAddAbilityMod('Int', '4');\n\nAddAbilityMod('Experience', '1000', 'Session 1');"
            )
        ]),
        new SpecialAbility(
            "Race: Yueyinren",
            SpecialAbilitySource.Racial,
            "—",
            SpecialAbilityType.Natural,
            null,
            false,
            null,
            "+2 Dexterity, +2 Intelligence, +2 Charisma, -2 Strength, -2 Constitution*: Yueyinren are nimble, both in body and mind, but their form is frail. This racial trait replaces normal elf ability score modifiers.\nElf Blood: Yueyinren count as elves for any effect related to race.\nMedium: Yueyinren are Medium creatures and have no bonuses or penalties due to their size.\nNormal Speed: Yueyinren have a base speed of 30 feet.\nDarkvision*: Yueyinren can see in the dark up to 120 feet. This racial trait, in addition to light blindness (see below), replaces the low-light vision racial trait.\nElven Immunities: Yueyinren are immune to magic sleep effects and get a +2 racial saving throw bonus against enchantment spells and effects.\nKeen Senses: Yueyinren receive a +2 racial bonus on Perception skill checks.\nStability*: Yueyinren receive a +4 racial bonus to their Combat Maneuver Defense when resisting a bull rush or trip attempt while standing on the ground. This racial trait replaces the elven magic racial trait.\nLight Blindness*: Abrupt exposure to bright light blinds Yueyinren for 1 round; on subsequent rounds, they are dazzled as long as they remain in the affected area. This racial trait, in addition to darkvision (see above), replaces the low-light vision racial trait.\nWeapon Familiarity*: Yueyinren are proicient with longbows (including composite longbows), short bows (including composite short bows), and crescent moon blades, and treat any weapon with the word “elven” or “yueran” in its name as a martial weapon. This racial trait replaces normal elf weapon proficiencies.\nLanguages*: Yueyinren begin play speaking Common and Mu. Yueyinren with high Intelligence Scores can choose from the following: Bakemono, Lung, Nihon, Sangool, and Sylvan. This racial trait replaces normal elf languages.\nRacial Levels: A yueyinren can take levels in yueren paragon to further develop her racial qualities.",
            [
                new Effect(
                    "Yueyinren Racial",
                    true,
                    -1,
                    EffectType.Racial,
                    "SetQuality('Race', 'Yueyinren');\nSetQuality('Type', 'Humanoid');\nSetQuality('Size', 'Medium');\nSetQuality('Gender', 'Male');\nSetQuality('Height', '6 ft.');\nSetQuality('Weight', '103 lbs');\n\nAddAbilityMod('Dex', '2', 'Racial');\nAddAbilityMod('Con', '-2', 'Racial');\nAddAbilityMod('Int', '2', 'Racial');\nSetAbility('SpeedLand', '30');"
                )
            ]
        ),
        new SpecialAbility(
            "Arcane Reservoir",
            SpecialAbilitySource.Class,
            "S-Wizard (Exploiter Wizard) 1",
            SpecialAbilityType.Supernatural,
            1,
            true,
            ActionType.Free,
            "An arcanist has an innate pool of magical energy that she can draw upon to fuel her arcanist exploits and enhance her spells. The arcanist’s arcane reservoir can hold a maximum amount of magical energy equal to {{3 + 0#WizardLevel}}. Each day, when preparing spells, the arcanist’s arcane reservoir fills with raw magical energy, gaining a number of points equal to {{3 + 0#WizardLevel / 2}}. Any points she had from the previous day are lost. She can also regain these points through the consume spells class feature and some arcanist exploits. The arcane reservoir can never hold more points than the maximum amount noted above; points gained in excess of this total are lost.\n\nPoints from the arcanist reservoir are used to fuel many of the arcanist’s powers. In addition, the arcanist can expend 1 point from her arcane reservoir as a free action whenever she casts a wizard spell. If she does, she can choose to increase the caster level by 1 or increase the spell’s DC by 1. She can expend no more than 1 point from her reservoir on a given spell in this way.",
            [new Effect("Exploit", true, 1, EffectType.Class, "AddAbilityMod('BuffCL', '2', 'Untyped');")]
        ),
        new SpecialAbility(
            "Exploiter Exploit - Potent Magic",
            SpecialAbilitySource.Class,
            "S-Wizard (Exploiter Wizard) 1",
            SpecialAbilityType.Supernatural,
            1,
            false,
            null,
            "By bending and sometimes even breaking the rules of magic, the wizard learns to exploit gaps and exceptions in the laws of magic. Some of these exploits allow her to break down various forms of magic, adding their essence to her arcane reservoir. At 1st level and every 4 levels thereafter, the wizard learns a new arcane exploit selected from the following list. A wizard exploit cannot be selected more than once. Once a wizard exploit has been selected, it cannot be changed. Most arcanist exploits require the wizard to expend points from her arcane reservoir to function. Unless otherwise noted, the saving throw DC for an arcanist exploit is equal to {{10 +(0#WizardLevel / 2) +0@Cha}}.\n\nWhenever the arcanist expends 1 point from her arcane reservoir to increase the caster level of a spell, the caster level increases by 2 instead of 1. Whenever she expends 1 point from her arcane reservoir to increase the spell’s DC, it increases by 2 instead of 1.",
            []
        ),
        new SpecialAbility(
            "Exploiter Exploit - Dimensional Slide",
            SpecialAbilitySource.Class,
            "S-Wizard (Exploiter Wizard) 5",
            SpecialAbilityType.Supernatural,
            5,
            true,
            ActionType.Move,
            "By bending and sometimes even breaking the rules of magic, the wizard learns to exploit gaps and exceptions in the laws of magic. Some of these exploits allow her to break down various forms of magic, adding their essence to her arcane reservoir. At 1st level and every 4 levels thereafter, the wizard learns a new arcane exploit selected from the following list. A wizard exploit cannot be selected more than once. Once a wizard exploit has been selected, it cannot be changed. Most arcanist exploits require the wizard to expend points from her arcane reservoir to function. Unless otherwise noted, the saving throw DC for an arcanist exploit is equal to {{10 +(0#WizardLevel / 2) +0@Cha}}.\n\nThe arcanist can expend 1 point from her arcane reservoir to create a dimensional crack that she can step through to reach another location. This ability is used as part of a move action or withdraw action, allowing her to move up to {{10 * 0#WizardLevel}} feet to any location she can see. This counts as 5 feet of movement. She can only use this ability once per round. She does not provoke attacks of opportunity when moving in this way, but any other movement she attempts as part of her move action provokes as normal.",
            []
        ),
        new SpecialAbility(
            "Guiding Light",
            SpecialAbilitySource.Class,
            "Stargazer 1",
            SpecialAbilityType.Supernatural,
            6,
            false,
            null,
            "The stargazer gains a familiar, treating his stargazer level as his wizard level. {{0#WizardLevel}}",
            []
        ),
        new SpecialAbility(
            "Mystery Magic",
            SpecialAbilitySource.Class,
            "Stargazer 1",
            SpecialAbilityType.Extraordinary,
            6,
            false,
            null,
            "His stargazer levels count as (and stack with) witch levels when determining the effects of hexes. In addition, the stargazer adds all hexes available to a shaman with the heavens spirit to the witch list.",
            []
        ),
        new SpecialAbility(
            "Mystery Magic - Coven Hex",
            SpecialAbilitySource.Class,
            "Stargazer 1",
            SpecialAbilityType.Extraordinary,
            6,
            true,
            ActionType.Standard,
            "The witch counts as a hag for the purpose of joining a hag’s coven. The coven must contain at least one hag. In addition, whenever the witch with this hex is within 30 feet of another witch with this hex, she can use the aid another action to grant a +1 bonus to the other witch’s caster level for 1 round. This bonus applies to the witch’s spells and all of her hexes.",
            []
        ),
        new SpecialAbility(
            "Mystery Magic - Stars subdomain",
            SpecialAbilitySource.Class,
            "Stargazer 3",
            SpecialAbilityType.Extraordinary,
            8,
            false,
            null,
            "At 3rd level, the stargazer gains the Stars subdomain in addition to any domains he already has. His stargazer levels count as (and stack with) cleric levels when determining which domain abilities he gains and their effects. If he isn’t a cleric, the subdomain’s spells are added to his class spell list (if necessary) and to his spells known, spellbook, familiar, or similar source. Spells added this way may be cast only once per day, unless using the stars are right ability. He can use the stars are right ability regardless of his spellcasting class.\n\nDomain Spells: 1st—feather fall, 2nd—levitate, 3rd—fly, 4th—planar binding (lesser), 5th—overland flight, 6th—planar binding, 7th—reverse gravity, 8th—planar binding (greater), 9th—interplanetary teleport.",
            []
        ),
        new SpecialAbility(
            "Mystery Magic - Stars subdomain - Guarded Mind",
            SpecialAbilitySource.Class,
            "Stargazer 3",
            SpecialAbilityType.Extraordinary,
            8,
            false,
            null,
            "You gain a +2 insight bonus on saving throws against all mind-affecting effects.",
            [
                new Effect(
                    "Guarded Mind",
                    true,
                    1,
                    EffectType.Class,
                    "AddAbilityNote('Will', 'You gain a +2 insight bonus on saving throws against all mind-affecting effects')"
                )
            ]
        ),
        new SpecialAbility(
            "Mystery Magic - Stars subdomain - Coat of Many Stars",
            SpecialAbilitySource.Class,
            "Stargazer 5",
            SpecialAbilityType.Supernatural,
            10,
            true,
            ActionType.Standard,
            "A stargazer gains certain abilities from the heavens oracle mystery as he gains levels as well. At 5th level, the stargazer gains the coat of many stars oracle revelation.\n\nCoat of Many Stars (Su): You conjure a coat of starry radiance that grants you a +4 armor bonus. At 7th level, and every four levels thereafter, this bonus increases by +2. At 13th level, this armor grants you DR 5/slashing. You can use this coat for {{0#StargazerLevel}} hour per day. The duration does not need to be consecutive; it can instead be spent in 1-hour increments.",
            []
        ),
        new SpecialAbility(
            "Sidereal Arcana - The Stargazer",
            SpecialAbilitySource.Class,
            "Stargazer 2",
            SpecialAbilityType.Supernatural,
            7,
            false,
            null,
            "The constellation that shares his name warns the stargazer of danger. The stargazer gains a +2 insight bonus on initiative checks and is not considered flat-footed before he acts in combat, although this does not allow him to act if he could not otherwise do so.",
            [
                new Effect(
                    "Sidereal Arcana - The Stargazer",
                    true,
                    1,
                    EffectType.Class,
                    "AddAbilityMod('Initiative', '2', 'Insight');\nAddAbilityNote('FlatFootedAC', 'Not considered flat-footed before acting')"
                )
            ]
        ),
        new SpecialAbility(
            "Sidereal Arcana - The Lantern Bearer",
            SpecialAbilitySource.Class,
            "Stargazer 4",
            SpecialAbilityType.Supernatural,
            9,
            false,
            null,
            "The stargazer’s ability to conjure light increases. The radius of any light source he creates via magic increases by 10 feet, and its spell level is considered to be 2 higher.",
            []
        ),
        new SpecialAbility(
            "Secret - Applicable Knowledge",
            SpecialAbilitySource.Class,
            "Loremaster 1",
            SpecialAbilityType.Natural,
            11,
            false,
            null,
            "Any one feat. [Secret of the Magical Discipline]",
            []
        )
    ],
    effects: [
        new Effect(
            "Caster Level",
            true,
            1,
            EffectType.Class,
            "SetAbility('CL', '11');\nAddAbilityMod('BuffCL', '0#CL', 'Untyped');\nAddAbilityMod('ExtraBuffCL', '0#BuffCL', 'Untyped');"
        ),
        new Effect(
            "S-Class Wizard // Incanter Base",
            true,
            1,
            EffectType.Class,
            "AddAbilityMod('BaB', '2', 'Untyped');\nAddAbilityMod('Fort', '1', 'Untyped');\nAddAbilityMod('Ref', '1', 'Untyped');\nAddAbilityMod('Will', '4', 'Untyped');"
        ),
        new Effect("Incanter Effects", true, 1, EffectType.Class, "AddAbilityMod('SpeedLand', '15', 'Untyped', 'Sphere Specializations (Time - Fast(Su))');"),
        new Effect("Stargazer Effects", true, 1, EffectType.Class, ""),

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
        new Effect("Army Across Time", true, 3, EffectType.Spell, "MultAbilityMod('ExtraBuffCL', '1.5')"),
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
