import fastify from "fastify"
import { routes } from "./src/routes/index.js"

const app = fastify()
app.register(routes)


export { app }