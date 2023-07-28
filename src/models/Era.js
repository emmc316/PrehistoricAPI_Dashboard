import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import { Period } from './Period.js'

export const Era = sequelize.define('era', {

    eraId: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true,
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

Era.hasMany(Period, {
    foreignKey: 'periodId',
    as: 'period'
})

Period.belongsTo(Era, {
    foreignKey: 'eraId',
    as: 'era'
});

