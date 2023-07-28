import { Router } from "express";
import { getSpecies, getSpecieById, createSpecie, deleteSpecie, editSpecie } from "../controllers/species.controller.js"
const router = Router();

router.get('/prehistoricApi/getSpecies', getSpecies)
router.get('/prehistoricApi/getSpecieById', getSpecieById)
router.post('/prehistoricApi/createSpecie', createSpecie)
router.delete('/prehistoricApi/deleteSpecie', deleteSpecie)
router.put('/prehistoricApi/editSpecie', editSpecie)

export default router