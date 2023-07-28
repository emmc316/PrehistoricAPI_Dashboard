import { Router } from "express";
import { getPeriods, getPeriodById, getPeriodByEra, createPeriod, editPeriod, deletePeriod, getPeriodByEraName } from '../controllers/periods.controller.js'
const router = Router();

router.get('/prehistoricApi/getPeriods', getPeriods)
router.get('/prehistoricApi/getPeriodById', getPeriodById)
router.get('/prehistoricApi/getPeriodByEra', getPeriodByEra)
router.get('/prehistoricApi/getPeriodByEraName', getPeriodByEraName)
router.post('/prehistoricApi/createPeriod', createPeriod)
router.delete('/prehistoricApi/deletePeriod', deletePeriod)
router.put('/prehistoricApi/editPeriod', editPeriod)

export default router