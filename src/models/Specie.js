import { DataTypes } from "sequelize"
import { sequelize } from "../database/database.js"
import { Creature } from "./Creature.js"

export const Specie = sequelize.define('specie', {

    specieId: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},
{
    freezeTableName: true
})

Creature.belongsTo(Specie, {
    foreignKey: 'specieId',
    as: 'specie',
    targetKey: 'specieId'
})

Specie.hasMany(Creature, {
    foreignKey: 'specieId',
    as: 'creature',
    sourceKey: 'specieId'
})