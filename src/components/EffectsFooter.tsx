import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { EffectType } from "../models/EffectType";
import { Effect } from "../models/Effect";
import { EffectBox } from "./EffectBox";

const effectTypes = Object.values(EffectType)

interface IEffectsFooterProps {
  effects: Effect[],
}

export const EffectsFooter = (props: IEffectsFooterProps) => {

  return (
    <div style={{ position: "fixed", left: 0, bottom: 0, width: "100%", textAlign: "center" }}>
      <Tabs>
        <TabList>
          {(effectTypes.map(t => <Tab>{t}</Tab>))}
        </TabList>
        {(effectTypes.map(type =>
          <TabPanel>
            <ul key={type}>
              {props.effects.filter(e => e.type == type).map(e => <li key={e.name}>{e.name}</li>)}
            </ul>
            <EffectBox effect={props.effects[0]}/>
          </TabPanel>))}
      </Tabs>
    </div>
  );
};
