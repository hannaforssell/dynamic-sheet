import { useState } from "react";
import { IFormData } from "../models/IFormData";
import { AddNewModal } from "../styles/styled-components/AddNewModal";
import { ISheetData } from "../models/ISheetData";
import { PropertyType } from "../models/PropertyType";

interface IAddNewProps {
  sheetData: ISheetData;
  setSheetData: (sheetData: ISheetData) => void;
  isAddNewModalOpen: boolean;
  setIsAddNewModalOpen: (isOpen: boolean) => void;
  addProperty: (name: string, group: string, type: PropertyType) => void;
}

const emptyForm = {
  name: "",
  group: "",
  propertyType: PropertyType.Ability,
};

export const AddNew = (props: IAddNewProps) => {
  const [formData, setFormData] = useState<IFormData>(emptyForm);

  const groups = new Set<string>();
  [...props.sheetData.abilityData.entries()].forEach(([_key, value]) =>
    groups.add(value.group)
  );
  [...props.sheetData.qualityData.entries()].forEach(([_key, value]) =>
    groups.add(value.group)
  );
  const groupOptions: JSX.Element[] = [...groups].map((g) => (
    <option key={g} value={g}>
      {g}
    </option>
  ));

  return (
    <AddNewModal $toggle={props.isAddNewModalOpen}>
      <label>
        <input
          type="text"
          value={formData.name}
          placeholder="Enter name here..."
          onChange={(e) =>
            setFormData({
              name: e.target.value,
              group: formData.group,
              propertyType: formData.propertyType,
            })
          }
        />
      </label>
      <label>
        <select
          name="group"
          defaultValue=""
          onChange={(e) =>
            setFormData({
              name: formData.name,
              group: e.target.value,
              propertyType: formData.propertyType,
            })
          }
        >
          <option value="" disabled>
            --Choose a group--
          </option>
          {groupOptions}
        </select>
      </label>
      <div>
        <label>
          <input
            type="radio"
            name={`propertyType${formData.group}`}
            onChange={() =>
              setFormData({
                name: formData.name,
                group: formData.group,
                propertyType: PropertyType.Ability,
              })
            }
            checked
          />{" "}
          Ability
        </label>
        <label>
          <input
            type="radio"
            name={`propertyType${formData.group}`}
            onChange={() =>
              setFormData({
                name: formData.name,
                group: formData.group,
                propertyType: PropertyType.Quality,
              })
            }
          />{" "}
          Quality
        </label>
      </div>
      <div>
        <button
          onClick={() => {
            props.addProperty(
              formData.name,
              formData.group,
              formData.propertyType
            );
            setFormData(emptyForm);
            props.setIsAddNewModalOpen(false);
          }}
        >
          Add
        </button>

        <button
          onClick={() => {
            props.setIsAddNewModalOpen(false);
            setFormData(emptyForm);
          }}
        >
          Cancel
        </button>
      </div>
    </AddNewModal>
  );
};
