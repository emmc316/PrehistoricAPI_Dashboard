import { Era } from "../models/Era.js";
import { sequelize } from "../database/database.js"
import { QueryTypes, Op } from 'sequelize';

export const getEras = async (req, res) => {
    const erasData = await Era.findAll()
    res.send(erasData)
}

export const getEraById = async (req, res) => {
    let itExist = false;
    const eraData = await Era.findByPk(req.query.eraId);
    if (eraData === null) {
        res.status(404).json({
            "title": "era not found!",
            "status": 404
        })
    }
    else {
        res.status(200).json(eraData)
    }
}

export const getEraByName = async (req, res) => {
    try {
        const eraData = await Era.findAll({
            where: {
                name: {
                    [Op.like]: `%${req.query.name}%`
                },
            },
        });
        res.status(200).json(eraData)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            "status": 404,
            "msg": "without fields"
        })
    }
}

export const createEra = async (req, res) => {
    const { name, description } = req.body
    const newEra = await Era.create({
        name,
        description
    })
    res.status(201).json(newEra);

}

export const editEra = async (req, res) => {
    try {
        const currentEra = await Era.findByPk(req.query.eraId);
        if (currentEra === null) {
            res.status(404).json({
                "title": "era not found!",
                "status": 404
            })
        }
        else {
            const { name, description } = req.body
            currentEra.name = name
            currentEra.description = description
            console.log(currentEra)
            await currentEra.save()
            res.status(201).json(currentEra)
        }
    }
    catch (error) {
        return res.status(500).json({
            "title": "error"
        })
    }
}
export const deleteEra = async (req, res) => {

    try {
        await Era.destroy({
            where: {
                eraId: req.query.eraId
            }
        })
        res.sendStatus(204)
    }
    catch (error) {
        res.sendStatus(500)
    }
}

