import { sequelize } from '../database/database.js';
import { Era } from '../models/Era.js';
import { Period } from '../models/Period.js'
import { QueryTypes } from 'sequelize';

export const getPeriods = async (req, res) => {
    const periodsData = await Period.findAll({
        include: [{
            model: Era,
            attributes: ["eraId", "name", "description"],
            as: "era"
        }]
    })
    res.status(201).json(periodsData)
}

export const getPeriodById = async (req, res) => {
    let itExist = false;
    const periodData = await Period.findByPk(req.query.periodId, {
        include: [{
            model: Era,
            attributes: ["eraId", "name", "description"],
            as: "era"
        }]
    });
    if (periodData === null) {
        res.status(404).json({
            "title": "era not found!",
            "status": 404
        })
    }
    else {
        res.status(200).json(periodData)
    }
}

export const getPeriodByEra = async (req, res) => {
    const eraId = req.query.eraId;
    try {
        const periods = await sequelize.query(
            'SELECT * FROM period WHERE eraId = :eraId',
            {
                replacements: { eraId: eraId },
                type: QueryTypes.SELECT
            },
        );
        console.log(periods);
        res.status(200).json(periods)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            "status": 404,
            "msg": "without fields"
        })
    }
}

export const getPeriodByEraName = async (req, res) => {

    try {
        const eraData = await sequelize.query(
            'SELECT era.name AS era, period.name AS period FROM period INNER JOIN era ON period.eraId = era.eraId WHERE era.name LIKE :eraName',
            {
                replacements: { eraName: `%${req.query.eraName}%` },
                type: QueryTypes.SELECT
            },
        );
        res.status(200).json(eraData)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            "status": 404,
            "msg": "without fields"
        })
    }
}


export const createPeriod = async (req, res) => {
    const { name, description } = req.body
    const newPeriod = await Era.create({
        name,
        description
    })
    res.status(201).json(newPeriod);

}

export const editPeriod = async (req, res) => {
    try {
        const currentPeriod = await Era.findByPk(req.query.periodId);
        if (currentPeriod === null) {
            res.status(404).json({
                "title": "era not found!",
                "status": 404
            })
        }
        else {
            const { name, description } = req.body
            currentPeriod.name = name
            currentPeriod.description = description
            console.log(currentPeriod)
            await currentPeriod.save()
            res.status(201).json(currentPeriod)
        }
    }
    catch (error) {
        return res.status(500).json({
            "title": "error"
        })
    }
}
export const deletePeriod = async (req, res) => {

    try {
        await Period.destroy({
            where: {
                periodId: req.query.periodId
            }
        })
        res.sendStatus(204)

    }
    catch (error) {
        res.status(500)
    }
}

