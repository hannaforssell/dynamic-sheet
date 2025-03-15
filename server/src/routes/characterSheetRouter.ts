import express from "express";
import * as controller from "../controllers/characterSheetController"

const router = express.Router();

router.post('/', controller.create);
router.get('/:id', controller.get);

export default router