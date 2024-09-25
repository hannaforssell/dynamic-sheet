import { useEffect, useState } from "react";
import { AbilityData } from "../models/AbilityData";

interface IAbilityProps {
  abilityData: AbilityData;
  onChangeAbility: (data: AbilityData) => void;
  calculate: () => void;
}

export const Ability = (props: IAbilityProps) => {
  const [calcDataInput, setCalcDataInput] = useState<string>("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setCalcDataInput(props.abilityData.calculationData);
  }, [props.abilityData]);

  const saveAbility = (e: any) => {    
    const calcString = e.target.value;    

    const newDataInput = new AbilityData(
      props.abilityData.name,
      props.abilityData.group,
      props.abilityData.sum,
      calcString,
      props.abilityData.sortOrder
    );
    
    setCalcDataInput(calcString);

    props.onChangeAbility(newDataInput);
  };

  return (
    <div
      className="abilityWrapper"
    >
      <span>{props.abilityData.name}</span>
      <input
        value={props.abilityData.sum ?? "—"}
        style={{ width: "50px" }}
        onChange={() => {}}
        readOnly
      />
      {showModal ? (
        <input
          autoFocus
          value={(calcDataInput)}
          style={{
            width: "500px",
            position: "relative",
            zIndex: "1",
          }}
          onChange={(e) => setCalcDataInput(e.target.value)}
          onFocus={() => setShowModal(true)}
          onBlur={(e) => {
            saveAbility(e);
            props.calculate();
            setShowModal(false);
          }}
        />
      ) : (
        <button onClick={() => setShowModal(true)}>{">"}
        </button>
      )}
    </div>
  );
};
