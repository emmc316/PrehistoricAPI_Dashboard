import { DataTypes } from "sequelize"
import { sequelize } from "../database/database.js"
import { CreaturePeriod } from "./creatures_period.js"

export const Creature = sequelize.define('creature', {

    creatureId: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    specieId: {
        type: DataTypes.SMALLINT,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    picture: {
        type: DataTypes.TEXT,
        allowNull: true
    }
},
    {
        freezeTableName: true
    }
)

CreaturePeriod.belongsTo(CreaturePeriod, {
    foreignKey: 'creaturePeriod',
    as: 'creature',
    targetKey: 'creatureId'
})

Creature.hasMany(CreaturePeriod, {
    foreignKey: 'creatureId',
    as: 'creature',
    sourceKey: 'creatureId'
})

