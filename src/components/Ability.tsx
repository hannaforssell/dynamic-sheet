import { AbilityData } from "../models/AbilityData";
import { Button, Tooltip, tooltipClasses, TooltipProps, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import React from "react";
import { defaultStyle } from "../helpers/stylingHelper";

interface IAbilityProps {
  abilityData: AbilityData;
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
  const sumValue = props.abilityData.sum === null ? "—" : Math.floor(props.abilityData.sum);

  return (
    <>
      <span>{props.abilityData.name}: </span>
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit"> {props.abilityData.name}: {sumValue}</Typography>
            {props.abilityData.abilityMods.map((m, i) => <p key={i} style={m.enabled ? {} : { textDecoration: "line-through" }}>{m.toString()}</p>)}
          </React.Fragment>
        }
      >
        <Button sx={defaultStyle}>{sumValue}</Button>
      </HtmlTooltip>
    </>
  );
};
