import Sequelize from 'sequelize'
export const sequelize = new Sequelize('prehistoricapi', 'apiPrehistoric', 'pluX8@oAVktCCMou', {
    host: '127.0.0.1',
    dialect: 'mariadb',
    port: 3309,
    define: {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    }
})

