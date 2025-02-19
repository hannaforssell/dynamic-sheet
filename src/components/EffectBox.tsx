import { useState } from "react";
import { Effect } from "../models/Effect";
import { EffectType } from "../models/EffectType";


interface IEffectProps {
  effect: Effect,
}

const labelStyle: React.CSSProperties = {
  textAlign: "left",
  display: "grid",
  gridTemplateColumns: "150px 180px",
};

export const EffectBox = (props: IEffectProps) => {
  const [name, setName] = useState<string>(props.effect.name);
  const [enabled, setEnabled] = useState<boolean>(props.effect.enabled);
  const [order, setOrder] = useState<number>(props.effect.order);
  const [type, setType] = useState<EffectType>(props.effect.type);
  const [exec, setExec] = useState<string>(props.effect.exec);

  return <>
    <label
      style={labelStyle}
    >
      Name
      <input
        type="text"
        value={name}
        onChange={(e) => { props.effect.name = e.target.value; setName(e.target.value) }}
      />
    </label>
    <label
      style={labelStyle}
    >
      Enabled
      <input
        type="checkbox"
        checked={enabled}
        onChange={(e) => { props.effect.enabled = e.target.checked; setEnabled(e.target.checked) }}
      />
    </label>
    <label
      style={labelStyle}
    >
      Order
      <input
        type="number"
        value={order}
        onChange={(e) => { var x = parseInt(e.target.value); props.effect.order = x; setOrder(x) }}
      />
    </label>
    <label
      style={labelStyle}
    >
      Type
      <input
        type="text"
        value={type}
        onChange={(e) => { var x = EffectType[e.target.value as keyof typeof EffectType]; props.effect.type = x; setType(x) }}
      />
    </label>
    <label
      style={labelStyle}
    >
      Effect
      <textarea
        value={exec}
        onChange={(e) => { props.effect.exec = e.target.value; setExec(e.target.value) }}
      />
    </label>
  </>

};
