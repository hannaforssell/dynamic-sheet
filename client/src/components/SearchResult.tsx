import { AbilityData } from "../models/characterSheet/AbilityData";
import { ICharacterSheet } from "../models/characterSheet/ICharacterSheet";
import { QualityData } from "../models/characterSheet/QualityData";
import { IModFunctions } from "../models/IModFunctions";
import { Section } from "../styles/styled-components/Section";
import { Ability } from "./Ability";
import { Quality } from "./Quality";

interface ISearchResultProps {
    search: string;
    characterSheet: ICharacterSheet;
    modFunctions: IModFunctions;
}

export const SearchResult = (props: ISearchResultProps) => {
    if (props.search.length < 3) {
        return <></>;
    }

    const regexp = new RegExp(`(${props.search})`, "gi");

    const searchResultAbilities = [...props.characterSheet.abilityData].filter(([, v]) => v.name.match(regexp) || v.calculatedText.match(regexp));

    const searchResultQualities = [...props.characterSheet.qualityData].filter(([, v]) => v.name.match(regexp) || v.originalText.match(regexp));

    if (searchResultAbilities.length === 0 && searchResultQualities.length === 0) {
        return <h3>No results...</h3>;
    }

    const resultsToDisplay = new Map<string, (AbilityData | QualityData)[]>();

    // searchResultAbilities.forEach(([, v]) => {
    //     const displayList = resultsToDisplay.get(v.group) ?? [];
    //     displayList.push(v);
    //     resultsToDisplay.set(v.group, displayList);
    // });

    return (
        <>
            {[...resultsToDisplay].map(([group, values]) => (
                <Section key={group}>
                    <h2 style={{ margin: "0", paddingBottom: "10px" }}>{group}</h2>
                    {values.map((v) =>
                        v instanceof AbilityData ? (
                            <Ability key={v.name} abilityData={v} modFunctions={props.modFunctions} />
                        ) : v instanceof AbilityData ? (
                            <Quality key={v.name} qualityData={v} modFunctions={props.modFunctions} />
                        ) : (
                            <>ERROR</>
                        )
                    )}
                </Section>
            ))}
        </>
    );
};
