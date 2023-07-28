import { Router } from "express";
import { getEras, createEra, editEra, getEraById, deleteEra, getEraByName } from "../controllers/eras.controller.js"
const router = Router();

router.get('/prehistoricApi/getEras', getEras)
router.get('/prehistoricApi/getEraById', getEraById)
router.get('/prehistoricApi/getEraByName', getEraByName)
router.post('/prehistoricApi/createEra', createEra)
router.delete('/prehistoricApi/deleteEra', deleteEra)
router.put('/prehistoricApi/editEra', editEra)

export default router