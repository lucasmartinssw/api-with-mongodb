export const routes = async(app) => {
    app.get ('/', (req, res) => res.status(200).send({message: 'Hello World!'}))
}
// export async function routes(app) {}