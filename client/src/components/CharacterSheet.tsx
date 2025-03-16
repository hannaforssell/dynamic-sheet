import { useEffect, useState } from "react";
import { AbilityData } from "../models/characterSheet/AbilityData";
import { QualityData } from "../models/characterSheet/QualityData";
import { ICharacterSheet } from "../models/characterSheet/ICharacterSheet";
import { HeaderMenu } from "./Menu";
import { PropertyGroup } from "./PropertyGroup";
import { CalculatorService } from "../services/calculatorService";
import { SearchResult } from "./SearchResult";
import { AddNew } from "./AddNew";
import { PropertyType } from "../models/PropertyType";
import { Item } from "./Item";
import { ItemData } from "../models/characterSheet/ItemData";
import { EffectsFooter } from "./EffectsFooter";
import { EffectService } from "../services/effectService";
import { TabContext, TabPanel } from "@mui/lab";
import { Box, Grid2, SxProps, Tab, Tabs, Theme } from "@mui/material";
import { AbilityScores } from "./AbilityScores";
import { TopInfo } from "./TopInfo";
import { ExperienceInfo } from "./ExperienceInfo";
import { QualityService } from "../services/qualityService";
import { Portrait } from "./Portrait";
import { defaultStyle } from "../helpers/stylingHelper";
import { groupData } from "../helpers/dataGrouper";
import { Hitpoints } from "./Hitpoints";
import { Defenses } from "./Defenses";

import * as backendService from "../services/backendService"

const healthLayout: SxProps<Theme> = {
  display: "flex",
}


const propertyGroups = [
  // {name: "Basic Info", layout: basicInfoLayout},
  // {name: "Ability Scores", layout: abilityScoresLayout},
  {name: "Health", layout: healthLayout},
  {name: "Defense", layout: {}},
  {name: "AC", layout: {}},
  {name: "Saves", layout: {}},
  {name: "Offense", layout: {}},
];

const calculatorService = new CalculatorService();
const qualityService = new QualityService();
const effectService = new EffectService();


const applyEffects2 = (sheetData: ICharacterSheet): ICharacterSheet => {
  console.log("Applying effects.")
  const appliedSheetData = effectService.Apply(
    sheetData
  );

  const calculatedAbilityData = calculatorService.calculate(appliedSheetData.abilityData);
  const calculatedQualityData = qualityService.calculate(appliedSheetData.qualityData);

  return {
    ...appliedSheetData,
    abilityData: calculatedAbilityData,
    qualityData: calculatedQualityData
  };
}

export const CharacterSheet = () => {
  const [loading, setLoading] = useState(false);
  const [sheetData, setSheetData] = useState<ICharacterSheet>();
  const [search, setSearch] = useState<string>("");
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [editView, setEditView] = useState<boolean>(false);
  const [isAddNewModalOpen, setIsAddNewModalOpen] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    console.log("making call")
    backendService.getCharacterSheet("67d67b9503753db8340379c1")
      .then((x) => {
        if(x) {
          setSheetData(applyEffects2(x))
        }
      })
      .catch(e => alert(`Getting data failed: ${e.message}`))
      .finally(() => { setLoading(false) })
  }, []);

  if(!sheetData) {
    return <></>
  }

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
          property.sortOrder
        )
      );
    } else if (property instanceof QualityData) {
      sheetData.qualityData.set(
        property.name,
        new QualityData(property.name, property.group, property.originalText)
      );
    } else if (property instanceof ItemData) {
      sheetData.itemData.set(
        property.name,
        new ItemData(
          property.name,
          new AbilityData(property.name, "Items", 0),
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
      sheetData.abilityData.set(name, new AbilityData(name, group, 0));
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
    setSheetData(applyEffects2(sheetData));
  };

  
  return (
    <>
      <HeaderMenu
        characterSheet={sheetData}
        setCharacterSheet={setSheetData}
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
          <Tab label={"Basic"} value={0} sx={defaultStyle}/>
          <Tab label={"Offense"} value={1} sx={defaultStyle}/>
          <Tab label={"Defense"} value={2} sx={defaultStyle}/>
          <Tab label={"Skills"} value={3} sx={defaultStyle}/>
          <Tab label={"Items"} value={4} sx={defaultStyle}/>
          {search && (
           <Tab
              label={`Search result: ${search}`}
              value={5}
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
          <TopInfo data={groupData(sheetData, "Top Info")} />
          <Grid2 container sx={{placeItems: "center", alignSelf: "center"}}>
            <Grid2 size={3.5} sx={{ display: "flex", justifyContent: "center" }}>
              <AbilityScores data={groupData(sheetData, "Ability Scores")} />
            </Grid2>
            <Grid2 size={5} sx={{ display: "flex", justifyContent: "center" }}>
              <Portrait imageLink={sheetData.imageLink} />
            </Grid2>
            <Grid2 size={3.5} sx={{ display: "flex", justifyContent: "center" }}>
              <ExperienceInfo data={groupData(sheetData, "Experience")} />
            </Grid2>
          </Grid2>

          {propertyGroups.map((group) => (
            <PropertyGroup
              key={group.name}
              group={group.name}
              sheetData={sheetData}
              changeProperty={changeProperty}
              calculate={applyEffects}
              editView={editView}
              removeProperty={removeProperty}
              layout={group.layout}
            />
          ))}
        </TabPanel>
        <TabPanel value={1}>
        </TabPanel>
        <TabPanel value={2}>
          <Box sx={{display: "flex"}}>
            <Hitpoints data={groupData(sheetData, "Hit Points")}></Hitpoints>
            <Defenses data={groupData(sheetData, "Defense")}></Defenses>
          </Box>
        </TabPanel>
        <TabPanel value={3}>
          <PropertyGroup
            group="Skills"
            sheetData={sheetData}
            changeProperty={changeProperty}
            calculate={applyEffects}
            editView={editView}
            removeProperty={removeProperty}
            layout={{}}
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
        <TabPanel value={4}>
          {sheetData.itemData && [...sheetData.itemData].map(([key, value]) => (
            <Item key={key} item={value} editView={editView} changeItem={changeProperty} />
          ))}
        </TabPanel>
        {search && (
          <TabPanel value={5}>
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
