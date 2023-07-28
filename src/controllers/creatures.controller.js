import { Creature } from "../models/Creature.js";

export const getCreatures = async (req, res) => {
    const creaturesData = await Creature.findAll();
    res.send(creaturesData)
}

export const getCreatureById = async (req, res) => {
    const id = req.query.creatureId;
    const creatureData = await Creature.findByPk(id);
    if (creatureData === null) {
        const msg = {
            "title": "Error",
            "msg": "There is not information about this specie",
            "status": 404
        }
        res.send(msg)
    }
    else {
        res.send(creatureData)
    }
}

export const createCreature = async (req, res) => {
    const { name, description } = req.body;
    const newCreature = await Creature.create({
        name,
        description
    })
    res.send(newCreature);
}

export const editCreature = async (req, res) => {
    try {
        const currenSpecie = await Creature.findByPk(req.query.eraId);
        if (currentCreature === null) {
            res.status(404).json({
                "title": "era not found!",
                "status": 404
            })
        }
        else {
            const { name, description } = req.body
            currentCreature.name = name
            currentCreature.description = description
            await currentEra.save()
            res.status(201).json(currentCreature)
        }
    }
    catch (error) {
        return res.status(500).json({
            "title": "error"
        })
    }
}

export const deleteCreature = async (req, res) => {
    try {
        Creature.destroy({
            where: {
                creaturesId: req.query.creatureId
            }
        })
        res.status(204)
    } catch (error) {
        res.status(500)
    }
}