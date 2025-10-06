import cors from '@fastify/cors'
import { app } from './app.js'

async function server() {
    app.register(cors, {
        origin: true,
        method: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
        allowHeaders: ['Content-Type', 'Authorization']
    })

    app.listen({
        host: '0.0.0.0',
        port: 3333,
    }).then(() =>{
        console.log('HTTP server running on http://localhost:3333')
    })

}

server()