import { useEffect, useState } from "react";
import { AbilityData } from "../models/AbilityData";
import { QualityData } from "../models/QualityData";
import { ISheetData } from "../models/ISheetData";
import { HeaderMenu } from "./Menu";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { PropertyGroup } from "./PropertyGroup";
import { defaultSheetPF } from "../helpers/sheetHelper";
import { Wrapper } from "../styles/styled-components/Wrapper";
import { Section } from "../styles/styled-components/Section";
import { CalculatorService } from "../services/calculatorService";
import { SearchResult } from "./SearchResult";
import { AddNew } from "./AddNew";
import { PropertyType } from "../models/PropertyType";
import { Item } from "./Item";
import { ItemData } from "../models/ItemData";
import { EffectsFooter } from "./EffectsFooter";

const propertyGroupsBasic = [
  "Basic Info",
  "Ability Scores",
  "Health",
  "Defense",
  "AC",
  "Saves",
  "Offense",
];

export const CharacterSheet = () => {
  const [sheetData, setSheetData] = useState<ISheetData>(defaultSheetPF);
  const [search, setSearch] = useState<string>("");
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [editView, setEditView] = useState<boolean>(false);
  const [isAddNewModalOpen, setIsAddNewModalOpen] = useState<boolean>(false);
  const calculatorService = new CalculatorService();

  useEffect(() => {
    calculate();
  }, []);

  const changeProperty = (property: AbilityData | QualityData | ItemData) => {
    if (property instanceof AbilityData) {
      sheetData.abilityData.set(
        property.name,
        new AbilityData(
          property.name,
          property.group,
          property.sum,
          property.calculationData,
          property.sortOrder
        )
      );
    } else if (property instanceof QualityData) {
      sheetData.qualityData.set(
        property.name,
        new QualityData(property.name, property.group, property.input)
      );
    } else if (property instanceof ItemData) {
      sheetData.itemData.set(
        property.name,
        new ItemData(
          property.name,
          new AbilityData(property.name, "Items", 0, ""),
          property.location,
          property.weight
        )
      );
    }
  };

  const removeProperty = (property: AbilityData | QualityData) => {
    if (property instanceof AbilityData) {
      sheetData.abilityData.delete(property.name);
      setSheetData({
        ...sheetData,
        abilityData: sheetData.abilityData,
      });
    } else if (property instanceof QualityData) {
      sheetData.qualityData.delete(property.name);
      setSheetData({
        ...sheetData,
        qualityData: sheetData.qualityData,
      });
    }
  };

  const addProperty = (name: string, group: string, type: PropertyType) => {
    if (type === PropertyType.Ability) {
      sheetData.abilityData.set(name, new AbilityData(name, group, 0, ""));
      setSheetData({
        ...sheetData,
        abilityData: sheetData.abilityData,
      });
    } else if (type === PropertyType.Quality) {
      sheetData.qualityData.set(name, new QualityData(name, group, ""));
      setSheetData({
        ...sheetData,
        qualityData: sheetData.qualityData,
      });
    }
  };

  const calculate = () => {
    const calculatedAbilityData = calculatorService.Calculate(
      sheetData.abilityData
    );
    setSheetData({
      ...sheetData,
      abilityData: calculatedAbilityData,
    });
  };


  return (
    <>
      <HeaderMenu
        sheetData={sheetData}
        setSheetData={setSheetData}
        calculate={calculate}
        setEditView={() => setEditView(!editView)}
        openAddNewModal={() => setIsAddNewModalOpen(!isAddNewModalOpen)}
      />

      <AddNew
        sheetData={sheetData}
        setSheetData={setSheetData}
        isAddNewModalOpen={isAddNewModalOpen}
        setIsAddNewModalOpen={setIsAddNewModalOpen}
        addProperty={addProperty}
      />

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Basics</Tab>
          <Tab>Skills</Tab>
          <Tab>Items</Tab>
          {search && (
            <Tab
              autoFocus={false}
              onFocus={() => document.getElementById("searchBar")?.focus()}
            >
              Search result: {search}
            </Tab>
          )}
          <input
            id="searchBar"
            type="text"
            placeholder="Search..."
            onChange={(e) => {
              setSearch(e.target.value);
              setTabIndex(3);
            }}
            style={{
              position: "absolute",
              right: "100px",
              top: "15px",
            }}
          />
        </TabList>

        <TabPanel>
          <Wrapper>
            {propertyGroupsBasic.map((group) => (
              <PropertyGroup
                key={group}
                group={group}
                sheetData={sheetData}
                changeProperty={changeProperty}
                calculate={calculate}
                editView={editView}
                removeProperty={removeProperty}
                //addProperty={addProperty}
              />
            ))}
          </Wrapper>
        </TabPanel>
        <TabPanel>
          <Wrapper>
            <PropertyGroup
              group="Skills"
              sheetData={sheetData}
              changeProperty={changeProperty}
              calculate={calculate}
              editView={editView}
              removeProperty={removeProperty}
              //addProperty={addProperty}
            />

            <Section>
              <label
                style={{
                  textAlign: "left",
                  display: "grid",
                  gridTemplateColumns: "150px 180px",
                }}
              >
                <span>Skillpoints spent</span>
                <div>sum</div>
              </label>
            </Section>
          </Wrapper>
        </TabPanel>
        <TabPanel>
          <Wrapper>
            {sheetData.itemData && [...sheetData.itemData].map(([key, value]) => (
              <Item key={key} item={value} editView={editView} changeItem={changeProperty} />
            ))}
          </Wrapper>
        </TabPanel>
        {search && (
          <TabPanel>
            <Wrapper>
              <SearchResult
                search={search}
                sheetData={sheetData}
                changeProperty={changeProperty}
                calculate={calculate}
              />
            </Wrapper>
          </TabPanel>
        )}
      </Tabs>
      <EffectsFooter effects={sheetData.effects}/>
    </>
  );
};
