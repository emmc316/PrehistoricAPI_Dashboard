import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import { CreaturePeriod } from './creatures_period.js'

export const Period = sequelize.define('period', {

    periodId: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    eraId: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
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
    }
)

CreaturePeriod.belongsTo(Period, {
    foreignKey: 'periodId',
    as: 'period'
})

Period.hasMany(CreaturePeriod, {
    foreignKey: 'periodId',
    sourceKey: 'periodId'
})





