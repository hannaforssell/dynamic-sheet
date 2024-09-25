import { useState } from "react";
import { replacer, reviver } from "../helpers/JSONHelper";
import { ISheetData } from "../models/ISheetData";
import { MenuModal } from "../styles/styled-components/MenuModal";
import { MenuButton } from "../styles/styled-components/MenuButton";

interface IHeaderMenuProps {
  sheetData: ISheetData;
  setSheetData: (sheetData: ISheetData) => void;
  calculate: () => void;
  setEditView: () => void;
  openAddNewModal: () => void;
}

export const HeaderMenu = (props: IHeaderMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];

    importData(file);
    setIsMenuOpen(false);
  };

  const importData = async (file: File) => {
    if (file) {
      console.log("Uploading file...");

      const formData = new FormData();
      formData.append("file", file);

      try {
        // You can write the URL of your server or any other endpoint used for file upload
        const result = await fetch("https://httpbin.org/post", {
          method: "POST",
          body: formData,
        });

        const data = await result.json();
        const parsedData = JSON.parse(data.files.file, reviver) as ISheetData;

        props.setSheetData({
          qualityData: parsedData.qualityData,
          abilityData: parsedData.abilityData,
          classSkills: parsedData.classSkills,
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const exportSheet = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(props.sheetData, replacer)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "characterSheet.json";

    link.click();
  };

  return (
    <>
      <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>∷</MenuButton>

      <MenuModal $toggle={isMenuOpen}>
        <label>
          Choose a file
          <input type="file" onChange={handleFileChange} />
        </label>

        <button onClick={exportSheet}>Save sheet</button>

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
    </>
  );
};
