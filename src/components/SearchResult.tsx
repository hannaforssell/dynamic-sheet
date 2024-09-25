import { AbilityData } from "../models/AbilityData";
import { ISheetData } from "../models/ISheetData";
import { QualityData } from "../models/QualityData";
import { Section } from "../styles/styled-components/Section";
import { Ability } from "./Ability";
import { Quality } from "./Quality";

interface ISearchResultProps {
  search: string;
  sheetData: ISheetData;
  changeProperty: (property: AbilityData | QualityData) => void;
  calculate: () => void;
}

export const SearchResult = (props: ISearchResultProps) => {
  if (props.search.length < 3) {
    return <></>;
  }

  const regexp = new RegExp(`(${props.search})`, "gi");

  const searchResultAbilities = [...props.sheetData.abilityData].filter(
    ([_k, v]) => v.name.match(regexp) || v.calculationData.match(regexp)
  );

  const searchResultQualities = [...props.sheetData.qualityData].filter(
    ([_k, v]) => v.name.match(regexp) || v.input.match(regexp)
  );

  if (
    searchResultAbilities.length === 0 &&
    searchResultQualities.length === 0
  ) {
    return <h3>No results...</h3>;
  }

  const resultsToDisplay = new Map<string, (AbilityData | QualityData)[]>();

  searchResultAbilities.forEach(([_k, v]) => {
    const displayList = resultsToDisplay.get(v.group) ?? [];
    displayList.push(v);
    resultsToDisplay.set(v.group, displayList);
  });

  return (
    <>
      {[...resultsToDisplay].map(([group, values]) => (
        <Section key={group}>
          <h2 style={{ margin: "0", paddingBottom: "10px" }}>{group}</h2>
          {values.map((v) =>
            v instanceof AbilityData ? (
              <Ability
                key={v.name}
                abilityData={v}
                onChangeAbility={props.changeProperty}
                calculate={props.calculate}
              />
            ) : v instanceof AbilityData ? (
              <Quality
                key={v.name}
                qualityData={v}
                onChangeQuality={props.changeProperty}
              />
            ) : (
              <>ERROR</>
            )
          )}
        </Section>
      ))}

      {/* <Section>
        <h2 style={{ margin: "0", paddingBottom: "10px" }}>{"Results"}</h2>
        {searchResultAbilities && (
          <>
            {searchResultAbilities.map(([k, v]) => (
              <Ability
                key={v.name}
                abilityData={v}
                onChangeAbility={props.changeAbility}
                calculate={props.calculate}
              />
            ))}
          </>
        )}

        {searchResultQualities && (
          <>
            {searchResultQualities.map(([k, v]) => (
              <Quality
                key={v.name}
                qualityData={v}
                onChangeQuality={props.changeQuality}
              />
            ))}
          </>
        )}
      </Section> */}
    </>
  );
};
