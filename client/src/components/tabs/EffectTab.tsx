import { Grid2 } from "@mui/material";
import { IModFunctions } from "../../models/IModFunctions";
import { useState } from "react";

interface IEffectTab {
    modFunctions: IModFunctions;
}

export const EffectTab = (props: IEffectTab) => {
    const [bitFlip, setBitFlip] = useState(false);

    return (
        <Grid2 container justifyContent={"space-between"} height={"85vh"}>
            <Grid2 size={2} sx={{ display: "flex", justifyContent: "center" }} alignItems="center"></Grid2>
            <Grid2 size={4}></Grid2>
            <Grid2 size={3.5}></Grid2>
        </Grid2>
    );
};
