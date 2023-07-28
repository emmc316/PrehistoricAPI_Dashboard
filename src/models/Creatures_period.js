import { DataTypes } from "sequelize"
import { sequelize } from "../database/database.js"


export const CreaturePeriod = sequelize.define('creatures_period', {

    id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    periodId: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    creatureId: {
        type: DataTypes.SMALLINT,
        allowNull: false
    }
},
    {
        freezeTableName: true
    }
)
