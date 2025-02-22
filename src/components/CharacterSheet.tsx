import { useEffect, useState } from "react";
import { AbilityData } from "../models/AbilityData";
import { QualityData } from "../models/QualityData";
import { ISheetData } from "../models/ISheetData";
import { HeaderMenu } from "./Menu";
import { PropertyGroup } from "./PropertyGroup";
import { defaultSheetPF } from "../helpers/sheetHelper";
import { CalculatorService } from "../services/calculatorService";
import { SearchResult } from "./SearchResult";
import { AddNew } from "./AddNew";
import { PropertyType } from "../models/PropertyType";
import { Item } from "./Item";
import { ItemData } from "../models/ItemData";
import { EffectsFooter } from "./EffectsFooter";
import { EffectService } from "../services/effectService";
import { TabContext, TabPanel } from "@mui/lab";
import { Tab, Tabs } from "@mui/material";

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
  const effectService = new EffectService();

  useEffect(() => {
    applyEffects();
  }, []);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value == "") {
      setSearch("");
      setTabIndex(0);
      return
    }
    setSearch(e.target.value);
    setTabIndex(3);
  };

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

  const applyEffects = () => {
    console.log("Applying effects.")
    const appliedSheetData = effectService.Apply(
      sheetData
    );

    const calculatedAbilityData = calculatorService.Calculate(
      appliedSheetData.abilityData
    );
    setSheetData({
      ...appliedSheetData,
      abilityData: calculatedAbilityData,
    });
  };


  return (
    <>
      <HeaderMenu
        sheetData={sheetData}
        setSheetData={setSheetData}
        calculate={applyEffects}
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
      <TabContext value={tabIndex}>
        <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab label={"Basic"} value={0} />
          <Tab label={"Skills"} value={1} />
          <Tab label={"Items"} value={2} />
          {search && (
           <Tab
              label={`Search result: ${search}`}
              value={3}
              autoFocus={false}
              onFocus={() => document.getElementById("searchBar")?.focus()}
            />
          )}
        </Tabs>
        <input
            id="searchBar"
            type="text"
            placeholder="Search..."
            onChange={handleSearch}
            style={{
              position: "absolute",
              right: "100px",
              top: "15px",
            }}
          />
        <TabPanel value={0}>
          {propertyGroupsBasic.map((group) => (
            <PropertyGroup
              key={group}
              group={group}
              sheetData={sheetData}
              changeProperty={changeProperty}
              calculate={applyEffects}
              editView={editView}
              removeProperty={removeProperty}
            />
          ))}
        </TabPanel>
        <TabPanel value={1}>
          <PropertyGroup
            group="Skills"
            sheetData={sheetData}
            changeProperty={changeProperty}
            calculate={applyEffects}
            editView={editView}
            removeProperty={removeProperty}
          />
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

        </TabPanel>
        <TabPanel value={2}>
          {sheetData.itemData && [...sheetData.itemData].map(([key, value]) => (
            <Item key={key} item={value} editView={editView} changeItem={changeProperty} />
          ))}
        </TabPanel>
        {search && (
          <TabPanel value={3}>
            <SearchResult
              search={search}
              sheetData={sheetData}
              changeProperty={changeProperty}
              calculate={applyEffects}
            />
          </TabPanel>
        )}
      </TabContext>
      <EffectsFooter effects={sheetData.effects} applyEffects={applyEffects} />
    </>
  );
};
