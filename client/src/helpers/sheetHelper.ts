import { AbilityData } from "../models/characterSheet/AbilityData";
import { ActionType } from "../models/characterSheet/ActionType";
import { DataGroupType } from "../models/characterSheet/DataGroupType";
import { Effect } from "../models/characterSheet/Effect";
import { EffectType } from "../models/characterSheet/EffectType";
import { ICharacterSheet } from "../models/characterSheet/ICharacterSheet";
import { ItemData } from "../models/characterSheet/ItemData";
import { QualityData } from "../models/characterSheet/QualityData";
import { Modification } from "../models/characterSheet/Modification";
import { ModificationSource } from "../models/characterSheet/ModificationSource";
import { ModificationType } from "../models/characterSheet/ModificationType";
import { TableData } from "../models/characterSheet/TableData";
import { KnownSpell } from "../models/characterSheet/KnownSpell";
import { SpellSchool } from "../models/characterSheet/SpellSchool";
import { PreparedSpell } from "../models/characterSheet/PreparedSpell";
import { PermanentSpell } from "../models/characterSheet/PermanentSpell";

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

        ["CL", new AbilityData("CL", DataGroupType.CasterLevel, 1)],
        ["BuffCL", new AbilityData("BuffCL", DataGroupType.CasterLevel, 2)],
        ["ExtraBuffCL", new AbilityData("ExtraBuffCL", DataGroupType.CasterLevel, 3)],
        ["vsSR", new AbilityData("vsSR", DataGroupType.CasterLevel, 4)],

        ["Lvl0Spells", new AbilityData("Lvl0Spells", DataGroupType.SpellSlots)],
        ["Lvl1Spells", new AbilityData("Lvl1Spells", DataGroupType.SpellSlots)],
        ["Lvl2Spells", new AbilityData("Lvl2Spells", DataGroupType.SpellSlots)],
        ["Lvl3Spells", new AbilityData("Lvl3Spells", DataGroupType.SpellSlots)],
        ["Lvl4Spells", new AbilityData("Lvl4Spells", DataGroupType.SpellSlots)],
        ["Lvl5Spells", new AbilityData("Lvl5Spells", DataGroupType.SpellSlots)],
        ["Lvl6Spells", new AbilityData("Lvl6Spells", DataGroupType.SpellSlots)],
        ["Lvl7Spells", new AbilityData("Lvl7Spells", DataGroupType.SpellSlots)],
        ["Lvl8Spells", new AbilityData("Lvl8Spells", DataGroupType.SpellSlots)],
        ["Lvl9Spells", new AbilityData("Lvl9Spells", DataGroupType.SpellSlots)],

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
        ["Knowledge(Arcana)", new AbilityData("Knowledge(Arcana)", DataGroupType.Skills, 100, "Knowledge (Arcana)")],
        ["Knowledge(Dungeoneering)", new AbilityData("Knowledge(Dungeoneering)", DataGroupType.Skills, 100, "Knowledge (Dungeoneering)")],
        ["Knowledge(Geography)", new AbilityData("Knowledge(Geography)", DataGroupType.Skills, 100, "Knowledge (Geography)")],
        ["Knowledge(History)", new AbilityData("Knowledge(History)", DataGroupType.Skills, 100, "Knowledge (History)")],
        ["Knowledge(Local-Region)", new AbilityData("Knowledge(Local-Region)", DataGroupType.Skills, 100, "Knowledge (Local - Region)")],
        ["Knowledge(Nature)", new AbilityData("Knowledge(Nature)", DataGroupType.Skills, 100, "Knowledge (Nature)")],
        ["Knowledge(Nobility)", new AbilityData("Knowledge(Nobility)", DataGroupType.Skills, 100, "Knowledge (Nobility)")],
        ["Knowledge(ThePlanes)", new AbilityData("Knowledge(ThePlanes)", DataGroupType.Skills, 100, "Knowledge (The Planes)")],
        ["Knowledge(Religion)", new AbilityData("Knowledge(Religion)", DataGroupType.Skills, 100, "Knowledge (Religion)")],
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
        new Modification("Base Effects", ModificationSource.Other, "—", ModificationType.Natural, null, false, null, "Basic rolls and formulas", [
            new Effect(
                "Rolls",
                true,
                -1,
                EffectType.Base,
                "SetAbility('Str', '7');\nSetAbility('Dex', '7');\nSetAbility('Con', '7');\nSetAbility('Int', '18');\nSetAbility('Wis', '18');\nSetAbility('Cha', '15');\n\nAddAbilityMod('Str', '-6');\nAddAbilityMod('Dex', '-6');\nAddAbilityMod('Con', '-6');\nAddAbilityMod('Int', '+3');\nAddAbilityMod('Wis', '+3');\nAddAbilityMod('Cha', '+3');\n\nAddAbilityMod('HP', '6*0#Level', 'Rolls');\n\nSetAbility('Lvl0Spells', '6');\nSetAbility('Lvl1Spells', '4');\nSetAbility('Lvl2Spells', '4');\nSetAbility('Lvl3Spells', '4');\nSetAbility('Lvl4Spells', '3');\nSetAbility('Lvl5Spells', '2');\nSetAbility('Lvl6Spells', '1');\nSetAbility('Lvl7Spells', '—');\nSetAbility('Lvl8Spells', '—');\nSetAbility('Lvl9Spells', '—');\n\nAddAbilityMod('Lvl1Spells', '0.75 + ((0@Int) / 4)');\nAddAbilityMod('Lvl2Spells', '0.5 + ((0@Int) / 4)');\nAddAbilityMod('Lvl3Spells', '0.25 + ((0@Int) / 4)');\nAddAbilityMod('Lvl4Spells', '0 + ((0@Int) / 4)');\nAddAbilityMod('Lvl5Spells', '-0.25 + ((0@Int) / 4)');\nAddAbilityMod('Lvl6Spells', '-0.5 + ((0@Int) / 4)');\nAddAbilityMod('Lvl7Spells', '-0.75 + ((0@Int) / 4)');\nAddAbilityMod('Lvl8Spells', '-1 + ((0@Int) / 4)');\nAddAbilityMod('Lvl9Spells', '-1.25 + ((0@Int) / 4)');"
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
        new Modification(
            "Race: Yueyinren",
            ModificationSource.Racial,
            "—",
            ModificationType.Natural,
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
        new Modification(
            "Arcane Reservoir",
            ModificationSource.Class,
            "S-Wizard (Exploiter Wizard) 1",
            ModificationType.Supernatural,
            1,
            true,
            ActionType.Free,
            "An arcanist has an innate pool of magical energy that she can draw upon to fuel her arcanist exploits and enhance her spells. The arcanist’s arcane reservoir can hold a maximum amount of magical energy equal to {{3 + 0#WizardLevel}}. Each day, when preparing spells, the arcanist’s arcane reservoir fills with raw magical energy, gaining a number of points equal to {{3 + 0#WizardLevel / 2}}. Any points she had from the previous day are lost. She can also regain these points through the consume spells class feature and some arcanist exploits. The arcane reservoir can never hold more points than the maximum amount noted above; points gained in excess of this total are lost.\n\nPoints from the arcanist reservoir are used to fuel many of the arcanist’s powers. In addition, the arcanist can expend 1 point from her arcane reservoir as a free action whenever she casts a wizard spell. If she does, she can choose to increase the caster level by 1 or increase the spell’s DC by 1. She can expend no more than 1 point from her reservoir on a given spell in this way.",
            [new Effect("Exploit", true, 1, EffectType.Class, "AddAbilityMod('BuffCL', '2', 'Untyped');")]
        ),
        new Modification(
            "Exploiter Exploit - Potent Magic",
            ModificationSource.Class,
            "S-Wizard (Exploiter Wizard) 1",
            ModificationType.Supernatural,
            1,
            false,
            null,
            "By bending and sometimes even breaking the rules of magic, the wizard learns to exploit gaps and exceptions in the laws of magic. Some of these exploits allow her to break down various forms of magic, adding their essence to her arcane reservoir. At 1st level and every 4 levels thereafter, the wizard learns a new arcane exploit selected from the following list. A wizard exploit cannot be selected more than once. Once a wizard exploit has been selected, it cannot be changed. Most arcanist exploits require the wizard to expend points from her arcane reservoir to function. Unless otherwise noted, the saving throw DC for an arcanist exploit is equal to {{10 +(0#WizardLevel / 2) +0@Cha}}.\n\nWhenever the arcanist expends 1 point from her arcane reservoir to increase the caster level of a spell, the caster level increases by 2 instead of 1. Whenever she expends 1 point from her arcane reservoir to increase the spell’s DC, it increases by 2 instead of 1.",
            []
        ),
        new Modification(
            "Exploiter Exploit - Dimensional Slide",
            ModificationSource.Class,
            "S-Wizard (Exploiter Wizard) 5",
            ModificationType.Supernatural,
            5,
            true,
            ActionType.Move,
            "By bending and sometimes even breaking the rules of magic, the wizard learns to exploit gaps and exceptions in the laws of magic. Some of these exploits allow her to break down various forms of magic, adding their essence to her arcane reservoir. At 1st level and every 4 levels thereafter, the wizard learns a new arcane exploit selected from the following list. A wizard exploit cannot be selected more than once. Once a wizard exploit has been selected, it cannot be changed. Most arcanist exploits require the wizard to expend points from her arcane reservoir to function. Unless otherwise noted, the saving throw DC for an arcanist exploit is equal to {{10 +(0#WizardLevel / 2) +0@Cha}}.\n\nThe arcanist can expend 1 point from her arcane reservoir to create a dimensional crack that she can step through to reach another location. This ability is used as part of a move action or withdraw action, allowing her to move up to {{10 * 0#WizardLevel}} feet to any location she can see. This counts as 5 feet of movement. She can only use this ability once per round. She does not provoke attacks of opportunity when moving in this way, but any other movement she attempts as part of her move action provokes as normal.",
            []
        ),
        new Modification(
            "Guiding Light",
            ModificationSource.Class,
            "Stargazer 1",
            ModificationType.Supernatural,
            6,
            false,
            null,
            "The stargazer gains a familiar, treating his stargazer level as his wizard level. {{0#WizardLevel}}",
            []
        ),
        new Modification(
            "Mystery Magic",
            ModificationSource.Class,
            "Stargazer 1",
            ModificationType.Extraordinary,
            6,
            false,
            null,
            "His stargazer levels count as (and stack with) witch levels when determining the effects of hexes. In addition, the stargazer adds all hexes available to a shaman with the heavens spirit to the witch list.",
            []
        ),
        new Modification(
            "Mystery Magic - Coven Hex",
            ModificationSource.Class,
            "Stargazer 1",
            ModificationType.Extraordinary,
            6,
            true,
            ActionType.Standard,
            "The witch counts as a hag for the purpose of joining a hag’s coven. The coven must contain at least one hag. In addition, whenever the witch with this hex is within 30 feet of another witch with this hex, she can use the aid another action to grant a +1 bonus to the other witch’s caster level for 1 round. This bonus applies to the witch’s spells and all of her hexes.",
            []
        ),
        new Modification(
            "Mystery Magic - Stars subdomain",
            ModificationSource.Class,
            "Stargazer 3",
            ModificationType.Extraordinary,
            8,
            false,
            null,
            "At 3rd level, the stargazer gains the Stars subdomain in addition to any domains he already has. His stargazer levels count as (and stack with) cleric levels when determining which domain abilities he gains and their effects. If he isn’t a cleric, the subdomain’s spells are added to his class spell list (if necessary) and to his spells known, spellbook, familiar, or similar source. Spells added this way may be cast only once per day, unless using the stars are right ability. He can use the stars are right ability regardless of his spellcasting class.\n\nDomain Spells: 1st—feather fall, 2nd—levitate, 3rd—fly, 4th—planar binding (lesser), 5th—overland flight, 6th—planar binding, 7th—reverse gravity, 8th—planar binding (greater), 9th—interplanetary teleport.",
            []
        ),
        new Modification(
            "Mystery Magic - Stars subdomain - Guarded Mind",
            ModificationSource.Class,
            "Stargazer 3",
            ModificationType.Extraordinary,
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
        new Modification(
            "Mystery Magic - Stars subdomain - Coat of Many Stars",
            ModificationSource.Class,
            "Stargazer 5",
            ModificationType.Supernatural,
            10,
            true,
            ActionType.Standard,
            "A stargazer gains certain abilities from the heavens oracle mystery as he gains levels as well. At 5th level, the stargazer gains the coat of many stars oracle revelation.\n\nCoat of Many Stars (Su): You conjure a coat of starry radiance that grants you a +4 armor bonus. At 7th level, and every four levels thereafter, this bonus increases by +2. At 13th level, this armor grants you DR 5/slashing. You can use this coat for {{0#StargazerLevel}} hour per day. The duration does not need to be consecutive; it can instead be spent in 1-hour increments.",
            []
        ),
        new Modification(
            "Sidereal Arcana - The Stargazer",
            ModificationSource.Class,
            "Stargazer 2",
            ModificationType.Supernatural,
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
        new Modification(
            "Sidereal Arcana - The Lantern Bearer",
            ModificationSource.Class,
            "Stargazer 4",
            ModificationType.Supernatural,
            9,
            false,
            null,
            "The stargazer’s ability to conjure light increases. The radius of any light source he creates via magic increases by 10 feet, and its spell level is considered to be 2 higher.",
            []
        ),
        new Modification(
            "Secret - Applicable Knowledge",
            ModificationSource.Class,
            "Loremaster 1",
            ModificationType.Natural,
            11,
            false,
            null,
            "Any one feat. [Secret of the Magical Discipline]",
            []
        )
    ],
    feats: [
        new Modification(
            "Skill Focus - Knowledge (The Planes)",
            ModificationSource.Other,
            "Occupation (Scholar)",
            ModificationType.Extraordinary,
            null,
            false,
            null,
            "Choose a skill. You are particularly adept at that skill.\n\nBenefit: You get a +3 bonus on all checks involving the chosen skill. If you have 10 or more ranks in that skill, this bonus increases to +6.\n\nSpecial: You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new skill.",
            [new Effect("Skill Focus - Knowledge (The Planes)", true, 1, EffectType.Feat, "AddAbilityMod('Knowledge(ThePlanes)', '3', 'Untyped');")]
        ),
        new Modification(
            "Spell Penetration",
            ModificationSource.Other,
            "Campaign Bonus",
            ModificationType.Extraordinary,
            null,
            false,
            null,
            "Your spells break through spell resistance more easily than most.\n\nBenefit: You get a +2 bonus on caster level checks (1d20 + caster level) made to overcome a creature’s spell resistance.",
            [new Effect("Spell Penetration", true, 1, EffectType.Feat, "AddAbilityMod('vsSR', '2', 'Untyped');")]
        ),
        new Modification(
            "Heighten Spell",
            ModificationSource.Other,
            "Campaign Bonus",
            ModificationType.Extraordinary,
            null,
            false,
            null,
            "You can cast spells as if they were a higher level.\n\nBenefit: A heightened spell has a higher spell level than normal (up to a maximum of 9th level). Unlike other metamagic feats, Heighten Spell actually increases the effective level of the spell that it modifies. All effects dependent on spell level (such as saving throw DCs and ability to penetrate a lesser globe of invulnerability) are calculated according to the heightened level.\n\nLevel Increase: The heightened spell is as difficult to prepare and cast as a spell of its effective level.",
            []
        ),
        new Modification(
            "Fleeting Spell",
            ModificationSource.Other,
            "Drawback Bonus",
            ModificationType.Extraordinary,
            null,
            false,
            null,
            "Your spells vanish with unusual speed.\n\nBenefit(s): A fleeting spell’s duration becomes dismissible, if it is not already. You can dismiss your own fleeting spell as a swift action. When you dismiss a fleeting spell, its lingering aura cannot be detected by magic unless the caster succeeds at a caster level check against a DC {{11 + 0#CL}}. The DC of dispel checks to counter a fleeting spell is reduced by 2, and once active, dispel magic removes a fleeting spell without a caster level check. A fleeting spell has half its normal duration (with an extended fleeting spell, these duration adjustments cancel out). Only spells with a duration of at least 2 rounds can be made fleeting, and instantaneous or permanent spells cannot be fleeting spells.\n\nNormal: It is a standard action to dismiss a dismissible spell, and only spells whose Duration entry is marked with a D are dismissible.\n\nLevel Increase: +0 (a fleeting spell does not use up a higher-level spell slot than the spell’s actual level.",
            []
        ),
        new Modification(
            "False Focus",
            ModificationSource.Other,
            "1st",
            ModificationType.Extraordinary,
            1,
            false,
            null,
            "You can use a divine focus to cast arcane spells.\n\nPrerequisite: Knowledge (religion) 1 rank, ability to cast arcane spells.\n\nBenefit: By using a divine focus as part of casting, you can cast any spell with a material component costing the value of that divine focus (maximum 100 gp) or less without needing that component. For example, if you use a silver holy symbol worth 25 gp, you do not have to provide material components for an arcane spell if its components are worth 25 gp or less. The casting of the spell still provokes attacks of opportunity as normal. If the spell requires a material component that costs more than the value of the divine focus, you must have the material component on hand to cast the spell, as normal.\n\nNormal: A divine focus has no effect when used as a component in arcane spells.",
            []
        ),
        new Modification(
            "Greater Spell Penetration",
            ModificationSource.Other,
            "2nd",
            ModificationType.Extraordinary,
            3,
            false,
            null,
            "Your spells break through spell resistance much more easily than most.\n\nPrerequisite: Spell Penetration.\n\nBenefit: You get a +2 bonus on caster level checks (1d20 + caster level) made to overcome a creature’s spell resistance. This bonus stacks with the one from Spell Penetration.",
            [new Effect("Greater Spell Penetration", true, 1, EffectType.Feat, "AddAbilityMod('vsSR', '2', 'Untyped');")]
        ),
        new Modification(
            "Experimental Spellcaster",
            ModificationSource.Other,
            "3rd",
            ModificationType.Extraordinary,
            5,
            false,
            null,
            "Despite casting spells, you dabble in the art of wordcasting.\n\nPrerequisites: Ability to cast spells.\n\nBenefit: Select one class that grants you the ability to cast spells. You can now use the slots from that class to cast a limited number of words of power spells. Add all of the target words to your spell list and your spellbook, familiar, or list of spells known. In addition, add the boost meta word and one effect word of any level you can cast in the chosen class.\n\nSpecial: You can take this feat multiple times. Each additional time you select this feat, add two effect or meta words to your spellbook, familiar, or list of spells known.",
            []
        ),
        new Modification(
            "Cherry Blossom Spell",
            ModificationSource.Other,
            "4th",
            ModificationType.Extraordinary,
            7,
            false,
            null,
            "You can infuse your spells with the ability to cripple your targets with old age or regress them to the folly of youth.\n\nBenefit(s): When a living creature takes damage from the affected spell, that creature also takes 2 points of damage to Strength, Dexterity, and Constitution or 2 points of damage to Intelligence, Wisdom, and Charisma (your choice). If the spell does not normally allow a save, the target can attempt a Fortitude save to negate the effect. Ageless or immortal creatures are immune to this effect. This is a magical aging effect, but it does not alter the creature’s true age—it merely simulates the effects of old age on the flesh or the reversion to a more infantile mental age. A cherry blossom spell uses up a slot 3 levels higher than the spell’s actual level. Spells that don’t deal damage don’t benefit from this feat.",
            []
        ),
        new Modification(
            "Fast Study",
            ModificationSource.Other,
            "5th",
            ModificationType.Extraordinary,
            9,
            false,
            null,
            "Prerequisite: You must be at least a 5th-level wizard to select this discovery.\n\nBenefit: Normally, a wizard spends 1 hour preparing all of his spells for the day, or proportionately less if he only prepares some spells, with a minimum of 15 minutes of preparation. Thanks to mental discipline and clever mnemonics, you can prepare all of your spells in only 15 minutes, and your minimum preparation time is only 1 minute. ",
            []
        ),
        new Modification(
            "Emergency Attunement",
            ModificationSource.Other,
            "6th",
            ModificationType.Extraordinary,
            11,
            false,
            null,
            "You can adapt your defenses to any situation.\n\nPrerequisites: Spellcraft 7 ranks.\n\nBenefit: As a standard action, you can alter one of your ongoing abjuration or transmutation spells. It must be currently affecting you and must grant a choice of options when cast. You change its benefit to a different one from the same list. In order to accomplish this, you must make a successful Spellcraft check (DC equal to 10 + the level of the spell to be altered). The duration of the spell is reduced to half of the spell’s remaining duration. For example, a 7th-level wizard could change her resist energy ( fire) spell with 50 minutes of its duration remaining into resist energy (cold), but the new duration would be 25 minutes. This ability does not change the benefit for any other creatures targeted by the original spell.",
            []
        ),
        new Modification(
            "Quickened Spell",
            ModificationSource.Other,
            "Incanter Bonus",
            ModificationType.Extraordinary,
            4,
            false,
            null,
            "You can cast spells in a fraction of the normal time.\n\nBenefit: Casting a quickened spell is a swift action. You can perform another action, even casting another spell, in the same round as you cast a quickened spell. A spell whose casting time is more than 1 full-round action cannot be quickened. [FAQ]\n\nLevel Increase: +4 (a quickened spell uses up a spell slot four levels higher than the spell’s actual level.)\n\nCasting a quickened spell doesn’t provoke an attack of opportunity.\n\nSpecial: You can apply the effects of this feat to a spell cast spontaneously, so long as it has a casting time that is not more than 1 full-round action, without increasing the spell’s casting time.",
            []
        ),
        new Modification(
            "Improved Familiar - Lyrakien",
            ModificationSource.Other,
            "Incanter Bonus",
            ModificationType.Extraordinary,
            8,
            false,
            null,
            "Prerequisites: Ability to acquire a new familiar, compatible alignment, sufficiently high level (see below).\n\nBenefit: When choosing a familiar, the creatures listed here are also available to you. You may choose a familiar with an alignment up to one step away on each alignment axis (lawful through chaotic, good through evil).\n\nImproved familiars otherwise use the rules for regular familiars, with two exceptions: if the creature’s type is something other than animal, its type does not change; and improved familiars do not gain the ability to speak with other creatures of their kind (although many of them already have the ability to communicate).",
            []
        ),
        new Modification(
            "Scribe Scroll",
            ModificationSource.Other,
            "Wizard Bonus",
            ModificationType.Extraordinary,
            1,
            false,
            null,
            "You can create magic scrolls.\n\nPrerequisite: Caster level 1st.\n\nBenefit: You can create a scroll of any spell that you know. Scribing a scroll takes 2 hours if its base price is 250 gp or less, otherwise scribing a scroll takes 1 day for each 1,000 gp in its base price. To scribe a scroll, you must use up raw materials costing half of this base price.\n\nSee magic item creation rules for more information.",
            []
        ),
        new Modification(
            "Dazing Spell",
            ModificationSource.Other,
            "Wizard Bonus",
            ModificationType.Extraordinary,
            5,
            false,
            null,
            "You can daze creatures with the power of your spells.\n\nBenefit: You can modify a spell to daze a creature damaged by the spell. When a creature takes damage from this spell, they become dazed for a number of rounds equal to the original level of the spell. If the spell allows a saving throw, a successful save negates the daze effect. If the spell does not allow a save, the target can make a Will save to negate the daze effect. If the spell effect also causes the creature to become dazed, the duration of this metamagic effect is added to the duration of the spell.\n\nLevel Increase: +3 (a dazing spell uses up a spell slot three levels higher than the spell’s actual level.\n\nSpells that do not inflict damage do not benefit from this feat.",
            []
        ),
        new Modification(
            "Secret of the Magical Discipline",
            ModificationSource.Other,
            "Loremaster Secret",
            ModificationType.Extraordinary,
            11,
            false,
            null,
            "Your study and devotion to magic allows you to access spells beyond your ken.\n\nPrerequisite(s): Secret class feature.\n\nBenefit(s): Once per day, you can cast any spell as if it were one of your prepared spells or spells known. This action expends either a spell slot or a prepared spell of the same spell level. Casting a spell this way always has a minimum casting time of 1 full round.\n\nSpecial: You can gain this feat multiple times. Each time you take the feat, you can use this ability one additional time per day.",
            []
        ),
        new Modification(
            "Alertness",
            ModificationSource.Other,
            "Familiar Bonus",
            ModificationType.Extraordinary,
            11,
            false,
            null,
            "You often notice things that others might miss.\n\nBenefit: You get a +2 bonus on Perception and Sense Motive skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.",
            [new Effect("Alertness", true, 1, EffectType.Feat, "AddAbilityMod('Perception', '2', 'Untyped');\nAddAbilityMod('SenseMotive', '2', 'Untyped');")]
        )
    ],
    spellsKnown: [
        new KnownSpell(
            "Magic Missile",
            "https://www.d20pfsrd.com/magic/all-spells/m/magic-missile/",
            SpellSchool.Evocation,
            1,
            "1 standard action",
            "V, S",
            "medium (100 ft. + 10 ft./level)",
            "up to five creatures, no two of which can be more than 15 ft. apart",
            "instantaneous",
            "none",
            "yes",
            "A missile of magical energy darts forth from your fingertip and strikes its target, dealing 1d4+1 points of force damage.\n\nThe missile strikes unerringly, even if the target is in melee combat, so long as it has less than total cover or total concealment.\n\nFor every two caster levels beyond 1st, you gain an additional missile, to a maximum of five missiles at 9th level or higher.\n\nYou must designate targets before you check for spell resistance or roll damage.",
            []
        ),
        new KnownSpell(
            "Ablative Barrier",
            "https://www.d20pfsrd.com/magic/all-spells/a/ablative-barrier/",
            SpellSchool.Conjuration,
            2,
            "1 standard action",
            "V, S, M (a piece of metal cut from a shield)",
            "touch",
            "",
            "1 hour/level or until discharged",
            "Will negates (harmless)",
            "no",
            "Invisible layers of solid force surround and protect the target, granting that target a +2 armor bonus to AC. Additionally, the first 5 points of lethal damage the target takes from each attack are converted into nonlethal damage. Against attacks that already deal nonlethal damage, the target gains DR 5/—. Once this spell has converted 5 points of damage to nonlethal damage per caster level (maximum 50 points), the spell is discharged.\n\nAdd half your tier to the spell’s armor bonus. Add half your tier to the amount of lethal damage from each attack that is converted to non-lethal damage and to the DR against non-lethal damage.\n\nAdd half your tier to your caster level when determining how much damage the spell converts before it’s discharged.\n\nPathfinder Roleplaying Game Ultimate Combat © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor",
            []
        ),
        new KnownSpell(
            "Paragon Surge",
            "https://www.d20pfsrd.com/magic/all-spells/p/paragon-surge/",
            SpellSchool.Transmutation,
            3,
            "1 standard action",
            "V, S",
            "personal (half-elf only)",
            "you",
            "1 minute/level",
            "",
            "",
            "You surge with ancestral power, temporarily embodying all the strengths of both elvenkind and humankind simultaneously, and transforming into a paragon of both races, something greater than elf or human alone.\n\nUnlike with most polymorph effects, your basic form does not change, so you keep all extraordinary and supernatural abilities of your half-elven form as well as all of your gear.\n\nFor the duration of the spell, you receive a +2 enhancement bonus to Dexterity and Intelligence and are treated as if you possessed any one feat for which you meet the prerequisites, chosen when you cast this spell.",
            []
        ),
        new KnownSpell(
            "Dimension Door",
            "https://www.d20pfsrd.com/magic/all-spells/d/dimension-door/",
            SpellSchool.Conjuration,
            3,
            "1 standard action",
            "V",
            "long (400 ft. + 40 ft./level)",
            "you and touched objects or other touched willing creatures",
            "instantaneous",
            "none and Will negates (object)",
            "no and yes (object)",
            "You instantly transfer yourself from your current location to any other spot within range.\n\nYou always arrive at exactly the spot desired – whether by simply visualizing the area or by stating direction.\n\nAfter using this spell, you can’t take any other actions until your next turn.\n\nYou can bring along objects as long as their weight doesn’t exceed your maximum load.\n\nYou may also bring one additional willing Medium or smaller creature (carrying gear or objects up to its maximum load) or its equivalent per three caster levels.\n\nA Large creature counts as two Medium creatures, a Huge creature counts as two Large creatures, and so forth.\n\nAll creatures to be transported must be in contact with one another, and at least one of those creatures must be in contact with you.\n\n\nIf you arrive in a place that is already occupied by a solid body, you and each creature traveling with you take 1d6 points of damage and are shunted to a random open space on a suitable surface within 100 feet of the intended location.\n\nIf there is no free space within 100 feet, you and each creature traveling with you take an additional 2d6 points of damage and are shunted to a free space within 1,000 feet.\n\nIf there is no free space within 1,000 feet, you and each creature traveling with you take an additional 4d6 points of damage and the spell simply fails.\n\nThe duration of this spell changes to 1 round per 2 caster levels, and it creates a temporary, invisible, one-way portal in your square to your destination.\n\nYou immediately pass through the portal and arrive at the destination, but you can’t take any other creatures with you.\n\nWhen casting the spell, you can designate a number of creatures equal to your caster level.\n\nThese creatures can see and use the portal, passing through it to arrive at the destination (this isn’t an action).\n\nA creature that passes through the portal can’t take any other actions until its next turn.",
            []
        ),
        new KnownSpell(
            "Greater False Life",
            "https://www.d20pfsrd.com/magic/all-spells/f/false-life/",
            SpellSchool.Necromancy,
            4,
            "1 standard action",
            "V, S, M (a drop of blood)",
            "personal",
            "you",
            "1 hour/level or until discharged; see text",
            "",
            "",
            "You harness the power of unlife to grant yourself a limited ability to avoid death. While this spell is in effect, you gain temporary hit points equal to 1d10 + 1 per caster level (maximum +10).\n\nThe temporary hit points gained increase to 2d10 + 1 point per caster level (maximum +20). As an immediate action, you can dismiss the remaining duration of the spell to prevent 1 point of Strength, Dexterity, or Constitution damage per 10 temporary hit points remaining from the spell. This takes effect after the attack hits you and the damage is rolled, but before you take the damage. For example, if you have 22 temporary hit points from mythic false life and a wyvern stings you for 3 points of Constitution damage, you can dismiss the spell to prevent 2 points of Constitution damage from that attack.",
            []
        ),
        new KnownSpell(
            "Lesser Spellcasting Contract",
            "https://www.d20pfsrd.com/magic/all-spells/s/spellcasting-contract/",
            SpellSchool.Evocation,
            5,
            "10 minutes",
            "V, S, F (a written contract)",
            "touch",
            "creature touched; see text",
            "permanent until discharged (D)",
            "Will negates (harmless)",
            "yes (harmless)",
            "This spell functions exactly like imbue with spell ability, except that you can imbue the target with any spell you have prepared (instead of just abjuration, divination, or conjuration [healing] spells) and the target may have more than one use of the imbued spells, depending upon the arrangements made when it is cast.\n\nCasting this spell requires a contract between you and the target, explaining what spells are to be imbued and the circumstances that cause the contract to expire. The contract may be as simple as allowing the target one casting of each of the imbued spells (as per imbue with spell ability), or may continue for multiple days or even indefinitely, with the target regaining use of the imbued spells when you next prepare your own spells. You may include any proviso you see fit, such as requiring the target to pray to Asmodeus each morning, or restricting the target to only casting the imbued spells on himself. If the target does not agree to all the conditions in the contract, this spell fails when cast. The contract (and this spell) automatically expires if you or the target dies. While the contract remains in effect, you gain a profane bonus to your Armor Class, saving throws, and checks equal to the highest-level spell you have imbued.\n\nOnce you cast this spell, you cannot prepare a new 5th-level spell to replace it until the contract expires. If the number of 5th-level spells you can cast decreases, and that number drops below your current number of active lesser spellcasting contract spells, the more recently cast imbued spells are dispelled.\n\nUnlike imbue with spell ability, how the target uses the spell has no reflection on your alignment or relationship with Asmodeus; the Prince of Darkness accepts that allowing another access to his magic for good may benefit his plans in the long run. Note that unlike imbue with spell ability, you cannot dismiss this spell; you must abide by the contract’s termination clause (though the contract may include a proviso for at-will nullification by either or both parties). This spell cannot be combined with imbue with spell ability or similar spells to give a target more spells than the limit.\n\nExample: You cast this spell on your 5 HD fighter cohort after negotiating an appropriate contract, imbuing him with the ability to cast cure moderate wounds, magic weapon, and shield of faith once per day for 1 month. If he casts any of these spells, he recovers them when you prepare your spells. Until the contract ends, your 5th-level spell slot used to cast this spell remains expended and cannot be filled with a new spell. Because you imbued your cohort with a 2nd-level spell, you gain a +2 profane bonus to attacks, saves, and checks while the contract remains in effect.",
            []
        )
    ],
    spellsPrepared: [
        new PreparedSpell(
            "Maximized Greater False Life",
            "https://www.d20pfsrd.com/magic/all-spells/f/false-life/",
            SpellSchool.Necromancy,
            4,
            "1 standard action",
            "V, S, M (a drop of blood)",
            "personal",
            "you",
            "1 hour/level or until discharged; see text",
            "",
            "",
            "You harness the power of unlife to grant yourself a limited ability to avoid death. While this spell is in effect, you gain temporary hit points equal to 1d10 + 1 per caster level (maximum +10).\n\nThe temporary hit points gained increase to 2d10 + 1 point per caster level (maximum +20). As an immediate action, you can dismiss the remaining duration of the spell to prevent 1 point of Strength, Dexterity, or Constitution damage per 10 temporary hit points remaining from the spell. This takes effect after the attack hits you and the damage is rolled, but before you take the damage. For example, if you have 22 temporary hit points from mythic false life and a wyvern stings you for 3 points of Constitution damage, you can dismiss the spell to prevent 2 points of Constitution damage from that attack.",
            [new Effect("Maximized Greater False Life", true, 2, EffectType.Spell, "SetAbility('THP', '40');")],
            true,
            true,
            true
        )
    ],
    permanentSpells: [
        new PermanentSpell(
            "Siphon Magic - Air Walk",
            "https://www.d20pfsrd.com/magic/all-spells/a/air-walk/",
            SpellSchool.Transmutation,
            5,
            "1 standard action",
            "V, S, DF",
            "touch",
            "creature (Gargantuan or smaller) touched",
            "constant",
            "none",
            "yes (harmless)",
            "The subject can tread on air as if walking on solid ground. Moving upward is similar to walking up a hill. The maximum upward or downward angle possible is 45 degrees, at a rate equal to half the air walker’s normal speed.\n\nA strong wind (21+ miles per hour) can push the subject along or hold it back. At the end of a creature’s turn each round, the wind blows the air walker 5 feet for each 5 miles per hour of wind speed. The creature may be subject to additional penalties in exceptionally strong or turbulent winds, such as loss of control over movement or physical damage from being buffeted about.\n\nShould the spell duration expire while the subject is still aloft, the magic fails slowly. The subject floats downward 60 feet per round for 1d6 rounds. If it reaches the ground in that amount of time, it lands safely. If not, it falls the rest of the distance, taking 1d6 points of damage per 10 feet of fall. Since dispelling a spell effectively ends it, the subject also descends in this way if the air walk spell is dispelled, but not if it is negated by an antimagic field.\n\nYou can cast air walk on a specially trained mount so it can be ridden through the air. You can train a mount to move with the aid of air walk (counts as a trick; see Handle Animal skill) with 1 week of work and a DC 25 Handle Animal check.",
            [new Effect("Siphon Magic - Air Walk", true, 2, EffectType.Spell, "SetAbility('SpeedFly', '30');")],
            12
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
    feats: [],
    spellsKnown: [],
    spellsPrepared: [],
    permanentSpells: [],
    effects: [],
    imageLink: ""
};

export const populateMissingProps = <T>(toPopulate: T, from: T) => {
    let key: keyof T;

    for (key in toPopulate) {
        if (toPopulate[key] instanceof Map) {
            copyMap(toPopulate[key] as Map<any, any>, from[key] as Map<any, any>, key);
        } else if (toPopulate[key] instanceof Array) {
            copyArray(toPopulate[key] as any[], from[key] as any[], key);
        } else if (toPopulate[key] instanceof Object) {
            console.log(key);
        }
    }
};

const copyMap = <K, V>(toPopulate: Map<K, V>, from: Map<K, V>, mapName: string) => {
    from.forEach((value, key) => {
        if (!toPopulate.has(key)) {
            console.log("Map Adding " + key + " to " + mapName);
            toPopulate.set(key, value);
        }
    });
};

const copyArray = <T extends { name: string }>(toPopulate: T[], from: T[], mapName: string) => {
    from.forEach((value) => {
        if (!toPopulate.some((v) => v.name === value.name)) {
            console.log("Array Adding " + value.name + " to " + mapName);
            toPopulate.push(value);
        }
    });
};
