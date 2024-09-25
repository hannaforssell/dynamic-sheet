import { useState } from "react";
import { AbilityData } from "../models/AbilityData";
import { QualityData } from "../models/QualityData";
import { Section } from "../styles/styled-components/Section";
import { Ability } from "./Ability";
import { Quality } from "./Quality";
import { IFormData } from "../models/IFormData";
import { ISheetData } from "../models/ISheetData";

interface IPropertyGroupProps {
  group: string;
  // abilityData: Map<string, AbilityData>;
  // qualityData: Map<string, QualityData>;
  sheetData: ISheetData
  changeProperty: (property: AbilityData | QualityData) => void;
  calculate: () => void;
  editView: boolean;
  removeProperty: (property: AbilityData | QualityData) => void;
  //addProperty: (group: string, formData: IFormData) => void;
}

export const PropertyGroup = (props: IPropertyGroupProps) => {
  // const [formData, setFormData] = useState<IFormData>({
  //   name: "",
  //   propertyType: new AbilityData("", props.group, 0, ""),
  // });

  const abilities: AbilityData[] = [];
  props.sheetData.abilityData.forEach((a) => {
    if (a.group === props.group) {
      abilities.push(a);
    }
  });

  const qualities: QualityData[] = [];
  props.sheetData.qualityData.forEach((q) => {
    if (q.group === props.group) {
      qualities.push(q);
    }
  });

  return (
    <Section>
      <h2 style={{ margin: "0", paddingBottom: "10px" }}>{props.group}</h2>
      {abilities.sort((a, b) => a.sortOrder === b.sortOrder ? a.name.localeCompare(b.name) : a.sortOrder - b.sortOrder).map((ability) => (
        <div
          key={ability.name}
          style={{
            display: "flex",
            paddingRight: `${props.editView ? "0" : "16px"}`,
          }}
        >
          <Ability
            abilityData={ability}
            onChangeAbility={props.changeProperty}
            calculate={props.calculate}
          />
          {props.editView && (
            <button
              onClick={() => props.removeProperty(ability)}
              style={{ padding: "0 3px 3px 3px", fontSize: "12px" }}
            >
              x
            </button>
          )}
        </div>
      ))}
      {qualities.map((quality) => (
        <div
          key={quality.name}
          style={{
            display: "flex",
            paddingRight: `${props.editView ? "0" : "16px"}`,
          }}
        >
          <Quality
            key={quality.name}
            qualityData={quality}
            onChangeQuality={props.changeProperty}
          />
          {props.editView && (
            <button
              onClick={() => props.removeProperty(quality)}
              style={{ padding: "0 3px 3px 3px", fontSize: "12px" }}
            >
              x
            </button>
          )}
        </div>
      ))}
      {/* {props.editView && (
        <div style={{ width: "150px" }}>
          <hr />
          <label>
            <input
              type="text"
              value={formData.name}
              placeholder="Add new property..."
              onChange={(e) =>
                setFormData({
                  name: e.target.value,
                  propertyType: formData.propertyType,
                })
              }
            />
          </label>
          <label>
            <input
              type="radio"
              name={`propertyType${props.group}`}
              onChange={() =>
                setFormData({
                  name: formData.name,
                  propertyType: new AbilityData(
                    formData.name,
                    props.group,
                    0,
                    ""
                  ),
                })
              }
              checked
            />{" "}
            Ability
          </label>
          <label>
            <input
              type="radio"
              name={`propertyType${props.group}`}
              onChange={() =>
                setFormData({
                  name: formData.name,
                  propertyType: new QualityData(formData.name, props.group, ""),
                })
              }
            />{" "}
            Quality
          </label>
          <button
            onClick={() => {
              props.addProperty(props.group, formData);
              setFormData({
                name: "",
                propertyType: new AbilityData("", props.group, 0, ""),
              });
            }}
          >
            Add
          </button>
        </div>
      )} */}
    </Section>
  );
};
