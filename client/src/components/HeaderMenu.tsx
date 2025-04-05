import { JSX, useState } from "react";
import { ICharacterSheet } from "../models/characterSheet/ICharacterSheet";
import { MenuModal } from "../styles/styled-components/MenuModal";
import { MenuButton } from "../styles/styled-components/MenuButton";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import * as backendService from "../services/backendService";
import { AddDataModal } from "./modals/AddDataModal";
import { SnackbarCloseReason, Snackbar, Typography, Box } from "@mui/material";

interface IHeaderMenuProps {
    characterSheet: ICharacterSheet;
    setCharacterSheet: (characterSheet: ICharacterSheet) => void;
    calculate: () => void;
    setEditView: () => void;
}

export const HeaderMenu = (props: IHeaderMenuProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [snackbarText, setSnackbarText] = useState<JSX.Element | null>(null);

    const saveSheet = async () => {
        const res = await backendService.postCharacterSheet(props.characterSheet);
        props.characterSheet._id = res._id;

        setSnackbarText(
            <Box display="flex" flexDirection="row" gap={3}>
                <CloudUploadIcon fontSize="small" sx={{ verticalAlign: "middle" }} />
                <Typography align="right">Character sheet saved.</Typography>
            </Box>
        );
    };

    const loadSheet = async () => {
        if (!props.characterSheet._id) {
            console.error("No id on character sheet.");
            return;
        }

        const characterSheet = await backendService.getCharacterSheet(props.characterSheet._id);
        if (characterSheet) {
            props.setCharacterSheet(characterSheet);
        }

        setSnackbarText(
            <Box display="flex" flexDirection="row" gap={3}>
                <CloudDownloadIcon fontSize="small" sx={{ verticalAlign: "middle" }} />
                <Typography align="right">Character sheet loaded.</Typography>
            </Box>
        );
    };

    const handleSnackbarClose = (_event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
        if (reason === "clickaway") {
            return;
        }

        setSnackbarText(null);
    };

    return (
        <>
            <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>∷</MenuButton>

            {isMenuOpen && (
                <MenuModal $toggle={isMenuOpen}>
                    <button onClick={() => navigator.clipboard.writeText(JSON.stringify(props.characterSheet))}>Export JSON</button>
                    <button onClick={saveSheet}>Save sheet</button>
                    <button onClick={loadSheet}>Load sheet</button>

                    <button onClick={props.calculate}>Calculate</button>

                    <hr />

                    <button
                        onClick={() => {
                            setIsAddModalOpen(true);
                            setIsMenuOpen(false);
                        }}
                    >
                        Add new
                    </button>

                    <label>
                        <input type="checkbox" onChange={props.setEditView} />
                        Edit view
                    </label>
                </MenuModal>
            )}
            {isAddModalOpen && (
                <AddDataModal
                    characterSheet={props.characterSheet}
                    setCharacterSheet={props.setCharacterSheet}
                    open={isAddModalOpen}
                    setOpen={setIsAddModalOpen}
                />
            )}
            <Snackbar
                open={snackbarText !== null}
                autoHideDuration={2000}
                onClose={handleSnackbarClose}
                message={snackbarText}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            />
        </>
    );
};
