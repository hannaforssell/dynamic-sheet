import { useEffect, useState } from "react";
import { AbilityData } from "../models/AbilityData";
import { QualityData } from "../models/QualityData";
import { PlayerInfo } from "./BasicInfo";
import { ISheetData } from "../models/ISheetData";
import { HeaderMenu } from "./Menu";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { PropertyGroup } from "./PropertyGroup";
import { defaultSheet } from "../helpers/sheetHelper";
import { Wrapper } from "../styles/styled-components/Wrapper";
import { Section } from "../styles/styled-components/Section";
import { CalculatorService } from "../services/calculatorService";
import { SearchResult } from "./SearchResult";
import { Table } from "./Table";
import { AddNew } from "./AddNew";
import { PropertyType } from "../models/PropertyType";
import { Item } from "./Item";
import { ItemData } from "../models/ItemData";

const propertyGroupsBasic = [
  "Ability Scores",
  "Health",
  "Defence",
  "AC",
  "Saves",
  "Offence",
];

export const CharacterSheet = () => {
  const [sheetData, setSheetData] = useState<ISheetData>(defaultSheet);
  const [search, setSearch] = useState<string>("");
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [editView, setEditView] = useState<boolean>(false);
  const [isAddNewModalOpen, setIsAddNewModalOpen] = useState<boolean>(false);
  const calculatorService = new CalculatorService();

  useEffect(() => {
    calculate();
  }, []);

  // const changeQuality = (data: QualityData) => {
  //   sheetData.qualityData.set(
  //     data.name,
  //     new QualityData(data.name, data.group, data.input)
  //   );
  //   setSheetData(sheetData);
  // };

  // const changeAbility = (data: AbilityData) => {
  //   sheetData.abilityData.set(
  //     data.name,
  //     new AbilityData(
  //       data.name,
  //       data.group,
  //       data.sum,
  //       data.calculationData,
  //       data.sortOrder
  //     )
  //   );
  //   setSheetData(sheetData);
  // };

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
          {/* <PlayerInfo
            sheetData={sheetData}
            changeProperty={changeProperty}
          /> */}
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
            <Table
              headers={["Class", "Level", "Total level"]}
              data={[
                ["S-Class Wizard	// Incanter", "1 // 1", "1"],
                ["S-Class Wizard	// Incanter", "2 // 2", "2"],
                ["S-Class Wizard	// Incanter", "3 // 3", "3"],
              ]}
            ></Table>
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
            {[...sheetData.itemData].map(([key, value]) => (
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
    </>
  );
};
