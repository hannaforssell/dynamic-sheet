import { useEffect, useState } from "react";
import { ItemData } from "../models/ItemData";
import { Section } from "../styles/styled-components/Section";
import { AbilityData } from "../models/AbilityData";

interface IItemProps {
  item: ItemData;
  editView: boolean;
  changeItem: (data: ItemData) => void;
}

export const Item = (props: IItemProps) => {
  const [item, setItem] = useState<ItemData>(props.item);

  useEffect(() => {
    if (!props.editView) {
      props.changeItem(item);
    }
  }, [props.editView]);

  return (
    <Section>
      <div className="itemWrapper">
        <input
          value={item.name}
          onChange={(e) => {
            setItem((prevState) => ({
              ...prevState,
              name: e.target.value,
            }));
          }}
          readOnly={!props.editView}
          className={`itemHeader ${props.editView ? "" : "items"}`}
        />

        <label className="itemLabels">
          <span>Value: </span>
          <input
            value={item.value.sum?.toString()}
            onChange={(e) => {
              setItem((prevState) => ({
                ...prevState,
                value: new AbilityData(
                  item.value.name,
                  item.value.group,
                  Number(e.target.value),
                  item.value.calculationData
                ),
              }));
            }}
            readOnly={!props.editView}
            className={`${props.editView ? "" : "items"}`}
          />
        </label>

        <label className="itemLabels">
          <span>Weight: </span>
          <input
            value={item.weight}
            onChange={(e) => {
              setItem((prevState) => ({
                ...prevState,
                weight: Number(e.target.value),
              }));
            }}
            readOnly={!props.editView}
            className={`${props.editView ? "" : "items"}`}
          />
        </label>

        <label className="itemLabels">
          <span>Location: </span>
          <input
            value={item.location}
            onChange={(e) => {
              setItem((prevState) => ({
                ...prevState,
                location: e.target.value,
              }));
            }}
            readOnly={!props.editView}
            className={`${props.editView ? "" : "items"}`}
          />
        </label>

        {item.listItems && (
          <div>
            <span>List items: </span>
            {item.listItems.map((listItem) => {
              return (
                <div key={listItem.name}>
                  <input
                    value={listItem.name}
                    onChange={(e) => {
                      setItem((prevState) => ({
                        ...prevState,
                        listItems: [{ name: e.target.value, desc: "" }],
                      }));
                    }}
                    placeholder="Name"
                  />
                  <input
                    value={listItem.desc}
                    onChange={() => {}}
                    placeholder="Desc"
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Section>
  );
};
