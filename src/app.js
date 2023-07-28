import express from 'express'
import erasRoutes from './routes/eras.routes.js'
import periodsRoutes from './routes/periods.routes.js'
import speciesRoutes from './routes/species.routes.js'
import creaturesRoutes from './routes/creatures.routes.js'

const app = express();
app.use(express.json());
app.use(erasRoutes).use(periodsRoutes).use(speciesRoutes).use(creaturesRoutes)

export default app;