import { useEffect, useState } from "react";
import { AbilityData } from "../models/AbilityData";
import { Button, Tooltip, tooltipClasses, TooltipProps, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import React from "react";

interface IAbilityProps {
  abilityData: AbilityData;
  onChangeAbility: (data: AbilityData) => void;
  calculate: () => void;
}

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

export const Ability = (props: IAbilityProps) => {
  const [calcDataInput, setCalcDataInput] = useState<string>("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setCalcDataInput(props.abilityData.calculationData);
  }, [props.abilityData]);

  const saveAbility = (e: React.FocusEvent<HTMLInputElement>) => {
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
    <div className="abilityWrapper">
      <span>{props.abilityData.name}: </span>
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">{props.abilityData.name}: {props.abilityData.sum}</Typography>
            {props.abilityData.calculationData.split(/\s+(?![^[]*\])/).map((c, i) => <p key={i}>{c}</p>)}
          </React.Fragment>
        }
      >
        <Button>{props.abilityData.sum ?? "—"}</Button>
      </HtmlTooltip>

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
        // <button onClick={() => setShowModal(true)}>{">"}
        // </button>
        <></>
      )}
    </div>
  );
};
