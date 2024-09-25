import { AbilityData } from "../models/AbilityData";
import { ISheetData } from "../models/ISheetData";
import { QualityData } from "../models/QualityData";
import { Section } from "../styles/styled-components/Section";
import { Wrapper } from "../styles/styled-components/Wrapper";
import { Ability } from "./Ability";
import { Quality } from "./Quality";

interface IPlayerInfoProps  {
    sheetData: ISheetData;
    changeAbility: (data: AbilityData) => void;
    changeQuality: (data: QualityData) => void;
}

export const PlayerInfo = (props: IPlayerInfoProps) => {
    return (
        <Wrapper>
{/* 
            <Section>
                <Quality name="Assumption" qualityData={props.sheetData.qualityData.get("Assumption") ?? new QualityData("Assumption", "")} onChangeQuality={props.changeQuality} large />
                <Quality name="Name" qualityData={props.sheetData.qualityData.get("Name") ?? new QualityData("Name", "")} onChangeQuality={props.changeQuality} />
                <Quality name="Player" qualityData={props.sheetData.qualityData.get("Player") ?? new QualityData("Player", "")} onChangeQuality={props.changeQuality} />
                <Quality name="Campaign" qualityData={props.sheetData.qualityData.get("Campaign") ?? new QualityData("Campaign", "")} onChangeQuality={props.changeQuality} />
                <Quality name="Race" qualityData={props.sheetData.qualityData.get("Race") ?? new QualityData("Race", "")} onChangeQuality={props.changeQuality} />
                <Quality name="Type" qualityData={props.sheetData.qualityData.get("Type") ?? new QualityData("Type", "")} onChangeQuality={props.changeQuality} />
                <Ability name="Level" abilityData={props.sheetData.abilityData.get("Level") ?? new AbilityData("Level", 0, "")} onChangeAbility={props.changeAbility} />
                <Quality name="Class" qualityData={props.sheetData.qualityData.get("Class") ?? new QualityData("Class", "")} onChangeQuality={props.changeQuality} />
                <Quality name="Archetype" qualityData={props.sheetData.qualityData.get("Archetype") ?? new QualityData("Archetype", "")} onChangeQuality={props.changeQuality} />
            </Section>

            <Section>
                <Quality name="Size" qualityData={props.sheetData.qualityData.get("Size") ?? new QualityData("Size", "")} onChangeQuality={props.changeQuality} />
                <Quality name="Alignment" qualityData={props.sheetData.qualityData.get("Alignment") ?? new QualityData("Alignment", "")} onChangeQuality={props.changeQuality} />
                <Quality name="Deity" qualityData={props.sheetData.qualityData.get("Deity") ?? new QualityData("Deity", "")} onChangeQuality={props.changeQuality} />
            </Section>

            <Section>
                <Quality name="Age" qualityData={props.sheetData.qualityData.get("Age") ?? new QualityData("Age", "")} onChangeQuality={props.changeQuality} />
                <Quality name="Gender" qualityData={props.sheetData.qualityData.get("Gender") ?? new QualityData("Gender", "")} onChangeQuality={props.changeQuality} />
                <Quality name="Height" qualityData={props.sheetData.qualityData.get("Height") ?? new QualityData("Height", "")} onChangeQuality={props.changeQuality} />
                <Quality name="Weight" qualityData={props.sheetData.qualityData.get("Weight") ?? new QualityData("Weight", "")} onChangeQuality={props.changeQuality} />
                <Quality name="Eyes" qualityData={props.sheetData.qualityData.get("Eyes") ?? new QualityData("Eyes", "")} onChangeQuality={props.changeQuality} />
                <Quality name="Hair" qualityData={props.sheetData.qualityData.get("Hair") ?? new QualityData("Hair", "")} onChangeQuality={props.changeQuality} />
            </Section> */}

        </Wrapper>
    );
}