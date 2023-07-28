import app from './app.js'
import { sequelize } from './database/database.js'
import './models/Era.js'
import './models/Period.js'
import './models/Specie.js'
import './models/Creature.js'
import './models/Creatures_period.js'

async function main() {
    try {
        await sequelize.sync();
        console.log('connection established');
        app.listen(4000);
        console.log("app started on 4000")
    }
    catch (error) {
        console.log(error)
    }
}

main()
