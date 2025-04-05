import { NextFunction, Request, Response } from "express";
import * as mongoService from "../services/mongoService";

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const ret = await mongoService.upsertCharacterSheet(req.body);
    res.status(ret.status);
    res.json(ret.body);
  } catch (err) {
    console.error(`Error`, err.message);
    next(err);
  }
}

export async function get(req: Request, res: Response, next: NextFunction) {
  try {
    const ret = await mongoService.getCharacterSheet(req.params["id"]);

    if (!ret) {
      res.status(404);
      res.json();
      return;
    }

    res.status(200);
    res.json(ret);
  } catch (err) {
    console.error(`Error`, err.message);
    next(err);
  }
}

const replacer = (k, v) =>
  v instanceof Map
    ? { _WAS_MAP: [...v] }
    : v instanceof Set
    ? { _WAS_SET: [...v] }
    : v;

const reviver = (k, v) =>
  v && v._WAS_MAP
    ? new Map(v._WAS_MAP)
    : v && v._WAS_SET
    ? new Set(v._WAS_SET)
    : v;
