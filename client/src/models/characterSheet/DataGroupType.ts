export enum DataGroupType {
    Hidden = 0,
    AbilityScores = 1,
    Experience = 1 << 2,
    HitPoints = 1 << 3,
    AC = 1 << 4,
    Saves = 1 << 5,
    Offense = 1 << 6,
    Defense = 1 << 7,
    Skills = 1 << 8,
    TopInfo = 1 << 9,
    Items = 1 << 10,
    Misc = 1 << 11,
    CasterLevel = 1 << 12
}
