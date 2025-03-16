import { useState } from "react";
import { ICharacterSheet } from "../models/characterSheet/ICharacterSheet";
import { MenuModal } from "../styles/styled-components/MenuModal";
import { MenuButton } from "../styles/styled-components/MenuButton";

import * as backendService from "../services/backendService"

interface IHeaderMenuProps {
  characterSheet: ICharacterSheet;
  setCharacterSheet: (characterSheet: ICharacterSheet) => void;
  calculate: () => void;
  setEditView: () => void;
  openAddNewModal: () => void;
}

export const HeaderMenu = (props: IHeaderMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const saveSheet = async () => {
    const res = await backendService.postCharacterSheet(props.characterSheet)
    props.characterSheet._id = res._id;
  };

  const loadSheet = async () => {
    const characterSheet = await backendService.getCharacterSheet("67d67b9503753db8340379c1");
    if(characterSheet) {
      props.setCharacterSheet(characterSheet)
    }
  };

  return (
    <>
      <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>∷</MenuButton>

      {isMenuOpen && (
        <MenuModal $toggle={isMenuOpen}>
        <button onClick={saveSheet}>Save sheet</button>
        <button onClick={loadSheet}>Load sheet</button>

        <button onClick={props.calculate}>Calculate</button>

        <hr />

        <button
          onClick={() => {
            props.openAddNewModal();
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
    </>
  );
};
