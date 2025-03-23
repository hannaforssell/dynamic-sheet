import { Box, Button, Card, CardActionArea, CardActions, CardContent, Grid2, Typography } from "@mui/material";
import { SpecialAbility } from "../models/characterSheet/SpecialAbility";
import { useState } from "react";
import { SpecialAbilityModal } from "./modals/SpecialAbilityModal";
import { memCopy } from "../helpers/memCopy";
import { EffectModal } from "./modals/EffectModal";
import { Effect } from "../models/characterSheet/Effect";

interface ISpecialAbilityCard {
    specialAbility: SpecialAbility;
}

export const SpecialAbilityCard = (props: ISpecialAbilityCard) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalEffect, setModalEffect] = useState<Effect | null>(null);
    const [showFull, setShowFull] = useState(false);
    const [showEffects, setShowEffects] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();

        if (e.ctrlKey) {
            setModalOpen(!modalOpen);
        } else {
            setShowFull(!showFull);
        }
    };

    const handleEffectClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, effect: Effect) => {
        e.stopPropagation();

        if (e.ctrlKey) {
            setModalEffect(effect);
        } else {
            setShowFull(!showFull);
        }
    };

    return (
        <>
            <Box sx={{ width: "100%" }}>
                <Card variant="outlined">
                    <CardActionArea onClick={handleClick}>
                        <CardContent sx={{ whiteSpace: "pre-wrap" }}>
                            <Grid2 container sx={{ justify: "space-between" }}>
                                <Typography variant="h5" component="div" display="inline" align="left">
                                    {props.specialAbility.name}
                                </Typography>
                                <Typography gutterBottom sx={{ color: "text.secondary" }} display="inline" marginLeft="auto">
                                    {props.specialAbility.sourceText} - {props.specialAbility.levelAquired}
                                </Typography>
                                <Typography gutterBottom sx={{ color: "text.secondary" }} display="inline" align="right" marginLeft="auto">
                                    ({props.specialAbility.type})
                                </Typography>
                            </Grid2>
                            {showFull && <Typography variant="inherit">{props.specialAbility.originalText}</Typography>}
                        </CardContent>
                    </CardActionArea>
                    {showFull && (
                        <CardActions>
                            <Button size="small" onClick={() => setShowEffects(!showEffects)}>
                                Effects
                            </Button>
                        </CardActions>
                    )}
                </Card>

                {showFull &&
                    showEffects &&
                    props.specialAbility.effects.map((effect) => (
                        <>
                            <Card key={effect.name} variant="outlined" sx={{ margin: "0px 20px 0px 20px" }}>
                                <CardActionArea onClick={(event) => handleEffectClick(event, effect)}>
                                    <CardContent sx={{ whiteSpace: "pre-wrap" }}>
                                        <Typography variant="h5" component="div" display="inline" align="left">
                                            {effect.name}
                                        </Typography>
                                        <Typography variant="body2">{effect.exec}</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </>
                    ))}
            </Box>
            {modalEffect !== null && (
                <EffectModal
                    open={modalEffect !== null}
                    effect={modalEffect}
                    onClose={() => setModalEffect(null)}
                    onSave={(updated, original) => memCopy(original, updated)}
                />
            )}

            {modalOpen && (
                <SpecialAbilityModal
                    open={modalOpen}
                    ability={props.specialAbility}
                    onClose={() => setModalOpen(false)}
                    onSave={(updated) => memCopy(props.specialAbility, updated)}
                />
            )}
        </>
    );
};
