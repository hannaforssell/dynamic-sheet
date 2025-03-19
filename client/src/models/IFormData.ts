import { DataGroupType } from "./characterSheet/DataGroupType";
import { PropertyType } from "./PropertyType";

export interface IFormData {
  name: string;
  group: DataGroupType | null;
  propertyType: PropertyType | null;
}
