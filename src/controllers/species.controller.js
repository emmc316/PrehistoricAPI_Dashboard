import { Specie } from "../models/Specie.js";

export const getSpecies = async (req, res) => {
    const speciesData = await Specie.findAll();
    res.send(speciesData)
}

export const getSpecieById = async (req, res) => {
    const id = req.query.specieId;
    const specieData = await Specie.findByPk(id);
    if (specieData === null) {
        const msg = {
            "title": "Error",
            "msg": "There is not information about this specie",
            "status": 404
        }
        res.send(msg)
    }
    else {
        res.send(specieData)
    }
}

export const createSpecie = async (req, res) => {
    const { name, description } = req.body;
    const newEra = await Specie.create({
        name,
        description
    })
    res.send(newEra);
}

export const editSpecie = async (req, res) => {
    try {
        const currenSpecie = await Specie.findByPk(req.query.eraId);
        if (currentSpecie === null) {
            res.status(404).json({
                "title": "era not found!",
                "status": 404
            })
        }
        else {
            const { name, description } = req.body
            currentSpecie.name = name
            currentSpecie.description = description
            await currentEra.save()
            res.status(201).json(currentSpecie)
        }
    }
    catch (error) {
        return res.status(500).json({
            "title": "error"
        })
    }
}

export const deleteSpecie = async (req, res) => {
    try {
        Specie.destroy({
            where: {
                speciesId: req.query.specieId
            }
        })
        res.status(204)
    } catch (error) {
        res.status(500)
    }
}