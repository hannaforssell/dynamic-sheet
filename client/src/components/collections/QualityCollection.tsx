import { Box, SxProps, Theme } from "@mui/material";
import { QualityData } from "../../models/characterSheet/QualityData";
import { Quality } from "./Quality";
import { IModFunctions } from "../../models/IModFunctions";

interface IQualityCollection {
    qualities: QualityData[];
    modFunctions: IModFunctions;
    sx?: SxProps<Theme>;
}

export const QualityCollection = (props: IQualityCollection) => {
    return (
        <Box sx={props.sx}>
            {props.qualities.map((quality) => (
                <Box key={quality.name} sx={{ width: "100%" }}>
                    <Quality key={quality.name} qualityData={quality} modFunctions={props.modFunctions}></Quality>
                </Box>
            ))}
        </Box>
    );
};
