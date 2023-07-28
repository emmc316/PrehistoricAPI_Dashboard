import { Router } from "express";
import { createCreature, deleteCreature, editCreature, getCreatures, getCreatureById } from '../controllers/creatures.controller.js'

const router = Router();

router.get('/prehistoricApi/getCreatures', getCreatures)
router.get('/prehistoricApi/getCreaturesById', getCreatureById)
// router.get('/prehistoricApi/getCreaturesByName', "")
// router.get('/prehistoricApi/getCreaturesByPeriod', "")
// router.get('/prehistoricApi/getCreaturesByEra', "")
router.post('/prehistoricApi/createCreature', createCreature)
router.delete('/prehistoricApi/deleteCreature', deleteCreature)
router.put('/prehistoricApi/editCreature', editCreature)

export default router