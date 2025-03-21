import { Box, SxProps, Theme } from "@mui/material";
import { QualityData } from "../models/characterSheet/QualityData";
import { Quality } from "./Quality";

interface IQualityCollection {
    qualities: QualityData[];
    editMode: boolean;
    removeQuality(quality: QualityData): void;
    sx?: SxProps<Theme>;
}

export const QualityCollection = (props: IQualityCollection) => {
    return (
        <Box sx={props.sx}>
            {props.qualities.map((quality) => (
                <Box key={quality.name} sx={{ width: "100%" }}>
                    <Quality key={quality.name} qualityData={quality} editMode={props.editMode} removeQuality={props.removeQuality}></Quality>
                </Box>
            ))}
        </Box>
    );
};
