import axios from "axios";
import { ICharacterSheet } from "../models/characterSheet/ICharacterSheet";
import { IIdResponse } from "../models/http/IIdResponse";

const BASE_URL = `http://localhost:3000/api`;

export async function getCharacterSheet(id: string): Promise<ICharacterSheet | null> {
    return axios({
        method: "get",
        url: BASE_URL + "/charactersheet/" + id,
        transformResponse: (res) => JSON.parse(res, reviver)
    })
        .then((data) => {
            return data.data;
        })
        .catch(() => {
            return null;
        });
}

export async function postCharacterSheet(characterSheet: ICharacterSheet): Promise<IIdResponse> {
    return axios({
        method: "post",
        url: BASE_URL + "/charactersheet",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        data: characterSheet,
        transformRequest: (req) => JSON.stringify(req, replacer),
        responseType: "json"
    })
        .then((data) => {
            return data.data;
        })
        .catch(() => {
            return null;
        });
}

function replacer(_: string, value: any) {
    if (value instanceof Map) {
        return {
            dataType: "Map",
            value: Array.from(value.entries())
        };
    } else if (value instanceof Set) {
        return {
            dataType: "Set",
            value: Array.from(value.entries())
        };
    } else {
        return value;
    }
}

function reviver(_: string, value: any) {
    if (typeof value === "object" && value !== null) {
        if (value.dataType === "Map") {
            return new Map(value.value);
        }
        if (value.dataType === "Set") {
            return new Set(value.value);
        }
    }
    return value;
}

// axios.interceptors.request.use(request => {
//     console.log('Starting Request', JSON.stringify(request, null, 2))
//     return request
// })

// axios.interceptors.response.use(response => {
//     console.log('Response:', JSON.stringify(response, null, 2))
//     return response
// })
