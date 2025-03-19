import axios from "axios";
import { ICharacterSheet } from "../models/characterSheet/ICharacterSheet";
import { IIdResponse } from "../models/http/IIdResponse";
import { MapFromDTO, MapToDTO } from "../mappers/characterSheetMapper";

const BASE_URL = `http://localhost:3000/api`;

// axios.interceptors.request.use(request => {
//     console.log('Starting Request', JSON.stringify(request, null, 2))
//     return request
// })

// axios.interceptors.response.use(response => {
//     console.log('Response:', JSON.stringify(response, null, 2))
//     return response
// })

export async function getCharacterSheet(
  id: string
): Promise<ICharacterSheet | null> {
  return axios({
    method: "get",
    url: BASE_URL + "/charactersheet/" + id
  })
    .then((data) => {
      const res = MapFromDTO(data.data);
      return res;
    })
    .catch(() => {
      return null;
    });
}

export async function postCharacterSheet(
  characterSheet: ICharacterSheet
): Promise<IIdResponse> {
  const req = MapToDTO(characterSheet);

  return axios({
    method: "post",
    url: BASE_URL + "/charactersheet",
    data: req
  })
    .then((data) => {
      return data.data;
    })
    .catch(() => {
      return null;
    });
}
